<template>
  <div class="blog-container">
    <!-- Header -->
    <header class="blog-header">
      <div class="header-content">
        <h1 class="blog-title">{{ $t('blog.title') }}</h1>
        <p class="blog-subtitle">{{ $t('blog.description') }}</p>
      </div>
    </header>

    <!-- Search Bar -->
    <div class="search-section">
      <div class="search-container">
        <input
          v-model="searchQuery"
          @input="handleSearch"
          type="text"
          :placeholder="$t('blog.search')"
          class="search-input"
        />
        <button @click="clearSearch" v-if="searchQuery" class="clear-btn">✕</button>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="loading-state">
      <div class="spinner"></div>
      <p>{{ $t('blog.loading') }}</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-state">
      <div class="error-icon">❌</div>
      <h3>{{ $t('blog.wentWrong') }}</h3>
      <p>{{ error }}</p>
      <button @click="loadBlogs" class="retry-btn">{{ $t('blog.tryAgain') }}</button>
    </div>

    <!-- Empty State -->
    <div v-else-if="paginatedBlogs.length === 0 && !loading" class="empty-state">
      <div class="empty-icon">📝</div>
      <h3>{{ searchQuery ? 'No posts found' : 'No blog posts yet' }}</h3>
      <p>{{ searchQuery ? 'Try different search terms' : 'Check back later for new content!' }}</p>
    </div>

    <!-- Blog Posts Grid -->
    <div v-else class="blog-grid">
      <article
        v-for="blog in paginatedBlogs"
        :key="blog.id"
        class="blog-card"
        @click="openBlog(blog)"
      >
        <div class="blog-image-container">
          <img
            v-if="blog.featured_image"
            :src="getImageUrl(blog.featured_image)"
            :alt="blog.title"
            class="blog-image"
            @error="handleImageError"
          />
          <div v-else class="blog-image-placeholder">
            📝
          </div>
        </div>
        
        <div class="blog-content">
          <h2 class="blog-post-title">{{ blog.title }}</h2>
          
          <div class="blog-meta">
            <span class="author">👤 {{ blog.author || 'Anonymous' }}</span>
            <span class="date">📅 {{ formatDate(blog.created_at) }}</span>
          </div>
          
          <p class="blog-excerpt">
            {{ blog.excerpt || getContentExcerpt(blog.content) }}
          </p>
          
          <div class="read-more">
            {{ $t('blog.ReadMore') }}
          </div>
        </div>
      </article>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="pagination">
      <button
        @click="changePage(currentPage - 1)"
        :disabled="currentPage <= 1"
        class="page-btn"
      >
        {{ $t('blog.previous') }}
      </button>
      
      <div class="page-numbers">
        <button
          v-for="page in getVisiblePages()"
          :key="page"
          @click="changePage(page)"
          :class="['page-btn', { active: page === currentPage }]"
          :disabled="page === '...'"
        >
          {{ page }}
        </button>
      </div>
      
      <button
        @click="changePage(currentPage + 1)"
        :disabled="currentPage >= totalPages"
        class="page-btn"
      >
        {{ $t('blog.Next') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPosts',
  data() {
    return {
      blogs: [],
      filteredBlogs: [],
      loading: true,
      error: null,
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 10,
      pagination: {
        current_page: 1,
        total_pages: 1,
        total_blogs: 0,
        per_page: 10
      },
      apiUrl: 'https://www.winbox22.com/blog-api/api.php'
    }
  },
  
  computed: {
    // Calculate total pages based on filtered results
    totalPages() {
      return Math.ceil(this.filteredBlogs.length / this.itemsPerPage)
    },
    
    // Get blogs for current page
    paginatedBlogs() {
      const start = (this.currentPage - 1) * this.itemsPerPage
      const end = start + this.itemsPerPage
      return this.filteredBlogs.slice(start, end)
    }
  },
  
  watch: {
    // Reset to first page when search changes
    searchQuery() {
      this.currentPage = 1
    }
  },

  mounted() {
    this.loadBlogs()
  },

  methods: {
    async loadBlogs(page = 1) {
      this.loading = true
      this.error = null
      
      try {
        const response = await fetch(`${this.apiUrl}?action=public_blogs&page=${page}&limit=50`)
        const data = await response.json()
        
        if (data.success) {
          this.blogs = data.blogs || []
          this.pagination = data.pagination || this.pagination
          this.filterBlogs()
        } else {
          throw new Error(data.error || 'Failed to load blog posts')
        }
      } catch (error) {
        console.error('Error loading blogs:', error)
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
    
    filterBlogs() {
      if (!this.searchQuery.trim()) {
        this.filteredBlogs = this.blogs
      } else {
        const query = this.searchQuery.toLowerCase()
        this.filteredBlogs = this.blogs.filter(blog =>
          blog.title.toLowerCase().includes(query) ||
          blog.author.toLowerCase().includes(query) ||
          (blog.excerpt && blog.excerpt.toLowerCase().includes(query)) ||
          (blog.content && blog.content.toLowerCase().includes(query))
        )
      }
    },
    
    handleSearch() {
      // Debounce search
      clearTimeout(this.searchTimeout)
      this.searchTimeout = setTimeout(() => {
        this.filterBlogs()
      }, 300)
    },
    
    clearSearch() {
      this.searchQuery = ''
      this.filterBlogs()
    },
    
    // Pagination methods
    changePage(page) {
      if (page >= 1 && page <= this.totalPages && page !== '...') {
        this.currentPage = page
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    
    getVisiblePages() {
      const current = this.currentPage
      const total = this.totalPages
      const visible = []
      
      if (total <= 7) {
        // Show all pages if 7 or fewer
        for (let i = 1; i <= total; i++) {
          visible.push(i)
        }
      } else {
        // Always show first page
        visible.push(1)
        
        if (current <= 4) {
          // Show first 5 pages + ellipsis + last page
          for (let i = 2; i <= 5; i++) {
            visible.push(i)
          }
          visible.push('...')
          visible.push(total)
        } else if (current >= total - 3) {
          // Show first page + ellipsis + last 5 pages
          visible.push('...')
          for (let i = total - 4; i <= total; i++) {
            visible.push(i)
          }
        } else {
          // Show first + ellipsis + current-1, current, current+1 + ellipsis + last
          visible.push('...')
          for (let i = current - 1; i <= current + 1; i++) {
            visible.push(i)
          }
          visible.push('...')
          visible.push(total)
        }
      }
      
      return visible
    },
    
    openBlog(blog) {
      // Navigate to the post page with the blog slug as parameter
      if (this.$router) {
        // Try to push to the named route first
        try {
          this.$router.push({
            name: 'BlogPost',
            params: { slug: blog.slug }
          })
        } catch (error) {
          // Fallback to path-based navigation
          this.$router.push(`/blog/${blog.slug}`)
        }
      } else {
        // Fallback using direct URL navigation
        window.location.href = `/blog/${blog.slug}`
      }
    },
    
    getImageUrl(imagePath) {
      if (!imagePath) return ''
      return imagePath.startsWith('http') ? imagePath : `https://www.winbox22.com/${imagePath}`
    },
    
    handleImageError(event) {
      event.target.style.display = 'none'
      event.target.nextElementSibling?.classList.add('show')
    },
    
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    
    getContentExcerpt(content) {
      if (!content) return 'No preview available...'
      const text = content.replace(/<[^>]*>/g, '')
      return text.length > 150 ? text.substring(0, 150) + '...' : text
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.blog-container {
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.blog-header {
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}

.header-content {
  max-width: 800px;
  margin: 0 auto;
}

.blog-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.blog-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  font-weight: 300;
}

.search-section {
  padding: 2rem;
  display: flex;
  justify-content: center;
}

.search-container {
  position: relative;
  max-width: 400px;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 25px;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.search-input:focus {
  border-color: #667eea;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.2);
}

.clear-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 16px;
  color: #999;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.clear-btn:hover {
  background: #f0f0f0;
  color: #666;
}

.loading-state, .error-state, .empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
}

.spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  margin: 0 auto 2rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-icon, .empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.retry-btn {
  background: #667eea;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 1rem;
  transition: all 0.3s;
}

.retry-btn:hover {
  background: #5a67d8;
  transform: translateY(-1px);
}

.blog-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.blog-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  height: fit-content;
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0,0,0,0.15);
}

.blog-image-container {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.blog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image {
  transform: scale(1.05);
}

.blog-image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f0f2f5, #e2e8f0);
  font-size: 3rem;
  color: #999;
}

.blog-content {
  padding: 1.5rem;
}

.blog-post-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.blog-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #718096;
  flex-wrap: wrap;
}

.blog-excerpt {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more {
  color: #667eea;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.blog-card:hover .read-more {
  color: #5a67d8;
}

/* Pagination Styles */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  flex-wrap: wrap;
}

.page-numbers {
  display: flex;
  gap: 0.5rem;
}

.page-btn {
  background: white;
  border: 2px solid #e2e8f0;
  color: #4a5568;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s;
  min-width: 40px;
}

.page-btn:hover:not(:disabled) {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.page-btn.active {
  background: #667eea;
  color: white;
  border-color: #667eea;
}

.page-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .blog-title {
    font-size: 2rem;
  }
  
  .blog-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem 2rem;
  }
  
  .blog-header {
    padding: 2rem 1rem;
  }
  
  .search-section {
    padding: 1rem;
  }
  
  .pagination {
    padding: 1rem;
  }
  
  .page-numbers {
    order: 1;
    width: 100%;
    justify-content: center;
  }
}
</style>