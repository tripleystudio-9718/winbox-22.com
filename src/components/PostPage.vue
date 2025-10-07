<template>
  <div class="blog-post-page">
    <div class="container">
      <!-- Back Button -->
      <button @click="goBack" class="back-button">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        {{ $t('postBlog.backBlog') }}
      </button>

      <!-- Loading State -->
      <div v-if="loading" class="loading-container">
        <div class="spinner"></div>
        <p class="loading-text">{{ $t('postBlog.loading') }}</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="error-container">
        <div class="error-card">
          <div class="error-icon">😔</div>
          <h3 class="error-title">{{ $t('postBlog.notFound') }}</h3>
          <p class="error-message">{{ error }}</p>
          <button @click="goBack" class="error-back-button">
            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="m15 18-6-6 6-6"/>
            </svg>
            {{ $t('postBlog.backBlog') }}
          </button>
        </div>
      </div>

      <!-- Post Content -->
      <article v-else-if="post" class="post-article">
        <!-- Post Header -->
        <header class="post-header">
          <h1 class="post-title">{{ post.title }}</h1>
          
          <!-- Post Meta -->
          <div class="post-meta">
            <div class="meta-item">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              <span>{{ post.author || 'Anonymous' }}</span>
            </div>
            <div class="meta-item">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                <line x1="16" x2="16" y1="2" y2="6"/>
                <line x1="8" x2="8" y1="2" y2="6"/>
                <line x1="3" x2="21" y1="10" y2="10"/>
              </svg>
              <span>{{ formatDate(post.created_at) }}</span>
            </div>
            <div v-if="post.updated_at !== post.created_at" class="meta-item">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
              </svg>
              <span>{{ $t('postBlog.updated') }} {{ formatDate(post.updated_at) }}</span>
            </div>
            <!-- SEO URL Display -->
            <div v-if="post.slug" class="meta-item slug-display">
              <svg class="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
              </svg>
              <span class="slug-text">blog/{{ post.slug }}</span>
            </div>
          </div>

          <!-- Post Excerpt with fallback to meta description -->
          <div v-if="displayExcerpt" class="post-excerpt">
            {{ displayExcerpt }}
          </div>
        </header>

        <!-- Featured Image -->
        <div v-if="post.featured_image" class="featured-image-container">
          <img 
            :src="getImageUrl(post.featured_image)" 
            :alt="post.title"
            class="featured-image"
            loading="lazy"
            @error="handleImageError"
          />
        </div>

        <!-- Post Content -->
        <div class="post-content-card">
          <div 
            class="post-content" 
            v-html="sanitizedContent"
            ref="contentRef"
          ></div>
        </div>

        <!-- Enhanced Share Section -->
        <div class="share-section">
          <div class="share-container">
            <div class="share-header">
              <div class="share-text-content">
                <h3 class="share-title">{{ $t('postBlog.share') }}</h3>
                <p class="share-subtitle">{{ $t('postBlog.help') }}</p>
              </div>
            </div>

            <div class="share-buttons">
              <!-- Twitter Share -->
              <a 
                :href="shareUrls.twitter" 
                target="_blank" 
                rel="noopener noreferrer"
                class="share-btn twitter-btn"
                aria-label="Share on Twitter"
              >
                <div class="btn-icon-wrapper">
                  <svg class="share-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <div class="btn-content">
                  <span class="btn-label">{{ $t('postBlog.twitter') }}</span>
                  <span class="btn-description">{{ $t('postBlog.shareX') }}</span>
                </div>
              </a>

              <!-- Facebook Share -->
              <a 
                :href="shareUrls.facebook" 
                target="_blank" 
                rel="noopener noreferrer"
                class="share-btn facebook-btn"
                aria-label="Share on Facebook"
              >
                <div class="btn-icon-wrapper">
                  <svg class="share-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div class="btn-content">
                  <span class="btn-label">{{ $t('postBlog.facebook') }}</span>
                  <span class="btn-description">{{ $t('postBlog.facebookS') }}</span>
                </div>
              </a>

              <!-- LinkedIn Share -->
              <a 
                :href="shareUrls.linkedin" 
                target="_blank" 
                rel="noopener noreferrer"
                class="share-btn linkedin-btn"
                aria-label="Share on LinkedIn"
              >
                <div class="btn-icon-wrapper">
                  <svg class="share-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div class="btn-content">
                  <span class="btn-label">{{ $t('postBlog.linkedIn') }}</span>
                  <span class="btn-description">{{ $t('postBlog.shareP') }}</span>
                </div>
              </a>

              <!-- Copy Link Button -->
              <button 
                @click="copyLink" 
                class="share-btn copy-btn"
                :class="{ 'copied': linkCopied }"
                aria-label="Copy link to clipboard"
              >
                <div class="btn-icon-wrapper">
                  <svg v-if="!linkCopied" class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                  </svg>
                  <svg v-else class="share-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
                <div class="btn-content">
                  <span class="btn-label">
                    {{ linkCopied ? $t('postBlog.copied') : $t('postBlog.copyLink') }}
                  </span>
                  <span class="btn-description">
                    {{ linkCopied ? $t('postBlog.linkCopied') : $t('postBlog.copyLink') }}
                  </span>
                </div>
              </button>
            </div>

            <!-- Share Stats -->
            <div class="share-stats">
              <p class="stats-text">{{ $t('postBlog.shareC') }}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch, nextTick, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'BlogPost',
  props: {
    slug: String
  },
  setup(props) {
    const route = useRoute()
    const router = useRouter()
    
    // Reactive data
    const post = ref(null)
    const loading = ref(true)
    const error = ref('')
    const linkCopied = ref(false)
    const contentRef = ref(null)
    const sanitizedContent = ref('')
    
    // Configuration
    const API_URL = 'https://www.winbox22.com/blog-api/api.php'
    
    // Get slug from props or route params
    const getSlug = () => {
      return props.slug || route.params.slug || route.query.slug
    }
    
    // Computed properties
    const displayExcerpt = computed(() => {
      if (!post.value) return ''
      // Priority: excerpt > meta_description
      return post.value.excerpt || post.value.meta_description || ''
    })

    const pageTitle = computed(() => {
      if (!post.value) return 'Blog Post'
      // Priority: meta_title > title
      return post.value.meta_title || post.value.title
    })

    const pageDescription = computed(() => {
      if (!post.value) return ''
      // Priority: meta_description > excerpt > content preview
      return post.value.meta_description || 
             post.value.excerpt || 
             (post.value.content ? post.value.content.replace(/<[^>]*>/g, '').substring(0, 160) : '')
    })
    
    const shareUrls = computed(() => {
      if (!post.value) return {}
      
      const currentUrl = window.location.href
      const title = pageTitle.value
      const description = pageDescription.value
      
      return {
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}${description ? `&url=${encodeURIComponent(currentUrl)}&via=` : `&url=${encodeURIComponent(currentUrl)}`}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}${description ? `&summary=${encodeURIComponent(description)}` : ''}`
      }
    })
    
    // Table wrapping function - THIS IS THE KEY ADDITION
    const wrapTables = () => {
      if (!contentRef.value) return
      
      const tables = contentRef.value.querySelectorAll('table:not(.wrapped)')
      
      tables.forEach(table => {
        // Create wrapper div
        const wrapper = document.createElement('div')
        wrapper.className = 'table-responsive-wrapper'
        wrapper.style.cssText = `
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          margin: 2rem 0;
          border-radius: 0.75rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
          background: white;
          position: relative;
        `
        
        // Insert wrapper before table
        table.parentNode.insertBefore(wrapper, table)
        
        // Move table into wrapper
        wrapper.appendChild(table)
        
        // Mark table as wrapped
        table.classList.add('wrapped')
        
        // Reset table styles
        table.style.cssText = `
          width: 100%;
          margin: 0;
          border: none;
          box-shadow: none;
          border-radius: 0;
          min-width: 600px;
          display: table;
          border-collapse: collapse;
          background: white;
          font-size: 0.875rem;
        `
        
        // Add mobile scroll indicator
        const scrollHint = document.createElement('div')
        scrollHint.className = 'scroll-hint'
        scrollHint.innerHTML = '← Scroll horizontally to view more →'
        scrollHint.style.cssText = `
          display: none;
          text-align: center;
          padding: 0.5rem;
          background: #f1f5f9;
          color: #64748b;
          font-size: 0.75rem;
          border-top: 1px solid #e2e8f0;
          font-style: italic;
          position: sticky;
          bottom: 0;
        `
        
        wrapper.appendChild(scrollHint)
        
        // Show scroll hint on mobile
        const showScrollHint = () => {
          if (window.innerWidth <= 768) {
            scrollHint.style.display = 'block'
            table.style.minWidth = '500px'
            wrapper.style.margin = '2rem -1.5rem'
            wrapper.style.borderRadius = '0'
            wrapper.style.borderLeft = 'none'
            wrapper.style.borderRight = 'none'
          } else {
            scrollHint.style.display = 'none'
            table.style.minWidth = 'auto'
            wrapper.style.margin = '2rem 0'
            wrapper.style.borderRadius = '0.75rem'
            wrapper.style.borderLeft = '1px solid #e2e8f0'
            wrapper.style.borderRight = '1px solid #e2e8f0'
          }
        }
        
        showScrollHint()
        window.addEventListener('resize', showScrollHint)
      })
    }
    
    // SEO Meta Tags Update
    const updateMetaTags = () => {
      if (!post.value) return
      
      // Update page title
      document.title = `${pageTitle.value}`
      
      // Update or create meta description
      let metaDescription = document.querySelector('meta[name="description"]')
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.setAttribute('name', 'description')
        document.head.appendChild(metaDescription)
      }
      metaDescription.setAttribute('content', pageDescription.value)
      
      // Update or create Open Graph tags
      const ogTags = [
        { property: 'og:title', content: pageTitle.value },
        { property: 'og:description', content: pageDescription.value },
        { property: 'og:url', content: window.location.href },
        { property: 'og:type', content: 'article' },
        { property: 'article:author', content: post.value.author || 'Anonymous' },
        { property: 'article:published_time', content: post.value.created_at }
      ]
      
      if (post.value.featured_image) {
        ogTags.push({ 
          property: 'og:image', 
          content: getImageUrl(post.value.featured_image) 
        })
      }
      
      ogTags.forEach(tag => {
        let metaTag = document.querySelector(`meta[property="${tag.property}"]`)
        if (!metaTag) {
          metaTag = document.createElement('meta')
          metaTag.setAttribute('property', tag.property)
          document.head.appendChild(metaTag)
        }
        metaTag.setAttribute('content', tag.content)
      })
      
      // Update or create Twitter Card tags
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: pageTitle.value },
        { name: 'twitter:description', content: pageDescription.value }
      ]
      
      if (post.value.featured_image) {
        twitterTags.push({ 
          name: 'twitter:image', 
          content: getImageUrl(post.value.featured_image) 
        })
      }
      
      twitterTags.forEach(tag => {
        let metaTag = document.querySelector(`meta[name="${tag.name}"]`)
        if (!metaTag) {
          metaTag = document.createElement('meta')
          metaTag.setAttribute('name', tag.name)
          document.head.appendChild(metaTag)
        }
        metaTag.setAttribute('content', tag.content)
      })
    }
    
    // Methods
    const formatDate = (dateString) => {
      try {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      } catch (e) {
        return 'Invalid Date'
      }
    }
    
    const getImageUrl = (imagePath) => {
      if (!imagePath) return ''
      return imagePath.startsWith('http') ? imagePath : `https://www.winbox22.com/${imagePath}`
    }
    
    const handleImageError = (event) => {
      event.target.style.display = 'none'
    }
    
    const processContent = (content) => {
      if (!content) return ''
      
      return content
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/on\w+\s*=\s*"[^"]*"/gi, '')
        .replace(/on\w+\s*=\s*'[^']*'/gi, '')
        .replace(/javascript:/gi, '')
    }
    
    const loadBlogPost = async () => {
      const slug = getSlug()
      
      if (!slug) {
        error.value = 'No blog post specified'
        loading.value = false
        return
      }
      
      try {
        loading.value = true
        error.value = ''
        
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 15000)
        
        const response = await fetch(`${API_URL}?action=public_blog&slug=${encodeURIComponent(slug)}`, {
          signal: controller.signal
        })
        
        clearTimeout(timeoutId)
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        
        if (data.success && data.data) {
          post.value = data.data
          sanitizedContent.value = processContent(data.data.content)
          
          // Wait for next tick to ensure DOM is updated
          await nextTick()
          
          // CRITICAL: Wrap tables after content is rendered
          setTimeout(() => {
            wrapTables()
          }, 100)
          
          updateMetaTags()
        } else {
          throw new Error(data.error || 'Blog post not found')
        }
        
      } catch (err) {
        console.error('Error loading blog post:', err)
        if (err.name === 'AbortError') {
          error.value = 'Request timeout - please try again'
        } else {
          error.value = err.message
        }
      } finally {
        loading.value = false
      }
    }
    
    const copyLink = async () => {
      try {
        await navigator.clipboard.writeText(window.location.href)
        linkCopied.value = true
        setTimeout(() => {
          linkCopied.value = false
        }, 3000)
      } catch (err) {
        console.error('Failed to copy:', err)
        // Fallback for older browsers
        const textArea = document.createElement('textarea')
        textArea.value = window.location.href
        textArea.style.position = 'fixed'
        textArea.style.opacity = '0'
        document.body.appendChild(textArea)
        textArea.select()
        document.execCommand('copy')
        document.body.removeChild(textArea)
        linkCopied.value = true
        setTimeout(() => {
          linkCopied.value = false
        }, 3000)
      }
    }
    
    const goBack = () => {
      router.push('/blog')
    }
    
    // Cleanup meta tags on unmount
    const cleanupMetaTags = () => {
      const metaTagsToClean = [
        'meta[name="description"]',
        'meta[property^="og:"]',
        'meta[property^="article:"]',
        'meta[name^="twitter:"]'
      ]
      
      metaTagsToClean.forEach(selector => {
        const tags = document.querySelectorAll(selector)
        tags.forEach(tag => {
          if (tag.getAttribute('data-vue-meta') !== 'true') { // Don't remove if managed by vue-meta
            tag.remove()
          }
        })
      })
    }
    
    // Lifecycle hooks
    onMounted(() => {
      loadBlogPost()
    })
    
    onUnmounted(() => {
      cleanupMetaTags()
    })
    
    // Watch for route changes
    watch([() => route.params.slug, () => route.query.slug, () => props.slug], () => {
      if (getSlug()) {
        loadBlogPost()
      }
    })
    
    return {
      post,
      loading,
      error,
      linkCopied,
      shareUrls,
      sanitizedContent,
      contentRef,
      displayExcerpt,
      pageTitle,
      pageDescription,
      formatDate,
      getImageUrl,
      handleImageError,
      copyLink,
      goBack,
      wrapTables
    }
  }
}
</script>

<style scoped>
/* Reset and Base Styles */
* {
  box-sizing: border-box;
}

.blog-post-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #1e293b;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
  padding-bottom: 2rem;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
}

/* Back Button */
.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.back-button:hover {
  background: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 1rem;
  height: 1rem;
  stroke-width: 2;
}

/* Loading State */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
}

.spinner {
  border: 3px solid #e2e8f0;
  border-top: 3px solid #3b82f6;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  color: #64748b;
  font-size: 1.125rem;
  margin: 0;
}

/* Error State */
.error-container {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}

.error-card {
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
  max-width: 28rem;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.error-title {
  color: #dc2626;
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}

.error-message {
  color: #b91c1c;
  margin: 0 0 1.5rem 0;
}

.error-back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #dc2626;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s ease;
}

.error-back-button:hover {
  background: #b91c1c;
}

/* Post Article */
.post-article {
  width: 100%;
}

/* Post Header */
.post-header {
  background: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  text-align: center;
  width: 100%;
}

.post-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1e293b;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
  word-wrap: break-word;
}

.post-meta {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: #64748b;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.meta-icon {
  width: 1rem;
  height: 1rem;
  stroke-width: 2;
  flex-shrink: 0;
}

/* Slug Display Styling */
.slug-display {
  background: #f1f5f9;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  align-self: center;
}

.slug-text {
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.75rem;
  color: #475569;
  font-weight: 500;
}

.post-excerpt {
  background: #eff6ff;
  border-left: 4px solid #3b82f6;
  padding: 1rem;
  border-radius: 0 0.5rem 0.5rem 0;
  font-style: italic;
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
  text-align: left;
  margin: 0;
}

/* Featured Image */
.featured-image-container {
  margin-bottom: 1.5rem;
  width: 100%;
}

.featured-image {
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Post Content */
.post-content-card {
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  overflow: hidden;
  width: 100%;
}

.post-content {
  padding: 1.5rem;
  font-size: 1rem;
  line-height: 1.7;
  color: #374151;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Content Deep Styles */
.post-content :deep(h1),
.post-content :deep(h2),
.post-content :deep(h3) {
  margin: 2rem 0 1rem;
  color: #1e293b;
  font-weight: 600;
  word-wrap: break-word;
}

.post-content :deep(h1) {
  font-size: 1.5rem;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 0.5rem;
}

.post-content :deep(h2) {
  font-size: 1.25rem;
  border-bottom: 1px solid #3b82f6;
  padding-bottom: 0.5rem;
}

.post-content :deep(h3) {
  font-size: 1.125rem;
}

.post-content :deep(p) {
  margin-bottom: 1.5rem;
  word-wrap: break-word;
}

.post-content :deep(a) {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;
  word-wrap: break-word;
}

.post-content :deep(a:hover) {
  text-decoration: underline;
}

.post-content :deep(blockquote) {
  border-left: 4px solid #3b82f6;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  background: #f8fafc;
  border-radius: 0 0.5rem 0.5rem 0;
  font-style: italic;
}

.post-content :deep(code) {
  background: #f1f5f9;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.875rem;
  color: #dc2626;
  word-wrap: break-word;
}

.post-content :deep(pre) {
  background: #1e293b;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin: 1.5rem 0;
  font-size: 0.875rem;
}

.post-content :deep(pre code) {
  background: transparent;
  color: inherit;
  padding: 0;
}

.post-content :deep(ul),
.post-content :deep(ol) {
  padding-left: 2rem;
  margin: 1rem 0;
}

.post-content :deep(li) {
  margin-bottom: 0.5rem;
}

/* FIXED TABLE STYLES WITH WRAPPER SUPPORT */

/* Table wrapper for auto-wrapped tables */
.post-content :deep(.table-responsive-wrapper) {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 2rem 0;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  background: white;
  position: relative;
}

/* Enhanced Table Styles with #02d0fd Header */
.post-content :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: white;
  font-size: 0.875rem;
  border: 1px solid #e2e8f0;
}

/* Override for wrapped tables */
.post-content :deep(table.wrapped) {
  margin: 0;
  border: none;
  box-shadow: none;
  border-radius: 0;
}

.post-content :deep(thead) {
  background: linear-gradient(135deg, #02d0fd 0%, #0ea5e9 100%);
  color: white;
  position: sticky;
  top: 0;
  z-index: 10;
}

.post-content :deep(thead tr) {
  background: transparent;
}

.post-content :deep(th) {
  padding: 1rem 1.25rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 0.025em;
  text-transform: uppercase;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  background: transparent;
  color: white;
  line-height: 1.4;
  word-wrap: break-word;
  overflow-wrap: break-word;
  min-width: 120px;
  white-space: nowrap;
}

.post-content :deep(th:last-child) {
  border-right: none;
}

.post-content :deep(tbody) {
  background: white;
}

.post-content :deep(tbody tr) {
  transition: all 0.2s ease;
  border-bottom: 1px solid #e2e8f0;
}

.post-content :deep(tbody tr:nth-child(even)) {
  background: #f8fafc;
}

.post-content :deep(tbody tr:hover) {
  background: #f0f9ff;
  transform: scale(1.005);
  box-shadow: 0 2px 8px rgba(2, 208, 253, 0.1);
}

.post-content :deep(tbody tr:last-child) {
  border-bottom: none;
}

.post-content :deep(td) {
  padding: 0.875rem 1.25rem;
  border-right: 1px solid #e2e8f0;
  vertical-align: top;
  line-height: 1.6;
  color: #374151;
  font-size: 0.875rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 250px;
  min-width: 100px;
  white-space: normal;
}

.post-content :deep(td:last-child) {
  border-right: none;
}

/* Table cell content styling */
.post-content :deep(td p) {
  margin: 0;
  word-wrap: break-word;
}

.post-content :deep(td strong) {
  color: #1e293b;
  font-weight: 600;
}

.post-content :deep(td a) {
  color: #02d0fd;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
  word-break: break-all;
}

.post-content :deep(td a:hover) {
  color: #0ea5e9;
  text-decoration: underline;
}

/* Scroll hint styling */
.post-content :deep(.scroll-hint) {
  text-align: center;
  padding: 0.5rem;
  background: #f1f5f9;
  color: #64748b;
  font-size: 0.75rem;
  border-top: 1px solid #e2e8f0;
  font-style: italic;
  position: sticky;
  bottom: 0;
}

/* Mobile table behavior */
@media (max-width: 768px) {
  .post-content :deep(.table-responsive-wrapper) {
    margin: 2rem -1.5rem;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }

  .post-content :deep(table) {
    font-size: 0.8rem;
    min-width: 500px;
  }
  
  .post-content :deep(th),
  .post-content :deep(td) {
    padding: 0.75rem 1rem;
    min-width: 80px;
  }
  
  .post-content :deep(th) {
    font-size: 0.75rem;
  }

  .post-content-card {
    overflow-x: hidden;
  }
}

@media (max-width: 480px) {
  .post-content :deep(.table-responsive-wrapper) {
    margin: 2rem -1rem;
  }

  .post-content :deep(table) {
    font-size: 0.75rem;
    min-width: 450px;
  }
  
  .post-content :deep(th),
  .post-content :deep(td) {
    padding: 0.5rem 0.75rem;
    min-width: 70px;
  }

  .post-content :deep(th) {
    font-size: 0.7rem;
  }
}

/* Enhanced Share Section */
.share-section {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.share-container {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.share-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  pointer-events: none;
}

.share-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.share-text-content {
  color: white;
}

.share-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.25rem 0;
  color: white;
}

.share-subtitle {
  font-size: 0.875rem;
  margin: 0;
  opacity: 0.9;
  color: white;
}

.share-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.share-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.75rem;
  padding: 1rem;
  text-decoration: none;
  color: #1e293b;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.875rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.share-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  background: white;
}

.btn-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  flex-shrink: 0;
}

.share-icon {
  width: 1.25rem;
  height: 1.25rem;
}

.btn-content {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  flex: 1;
}

.btn-label {
  font-weight: 600;
  font-size: 0.875rem;
  color: #1e293b;
}

.btn-description {
  font-size: 0.75rem;
  color: #64748b;
}

/* Platform-specific button styles */
.twitter-btn .btn-icon-wrapper {
  background: #1da1f2;
  color: white;
}

.facebook-btn .btn-icon-wrapper {
  background: #4267b2;
  color: white;
}

.linkedin-btn .btn-icon-wrapper {
  background: #0077b5;
  color: white;
}

.copy-btn .btn-icon-wrapper {
  background: #6b7280;
  color: white;
}

.copy-btn.copied .btn-icon-wrapper {
  background: #10b981;
  color: white;
}

.copy-btn.copied .btn-label {
  color: #10b981;
}

.share-stats {
  margin-top: 1.5rem;
  text-align: center;
  position: relative;
  z-index: 1;
}

.stats-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;
  margin: 0;
}

/* Tablet Styles */
@media (min-width: 640px) {
  .container {
    padding: 1.5rem;
  }
  
  .post-title {
    font-size: 2rem;
  }
  
  .post-header {
    padding: 2rem;
  }
  
  .post-content {
    padding: 2rem;
    font-size: 1.125rem;
  }
  
  .post-meta {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
  
  .featured-image {
    height: 16rem;
  }
  
  .share-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .share-container {
    padding: 2.5rem;
  }
  
  .share-header {
    margin-bottom: 2.5rem;
  }
}

/* Desktop Styles */
@media (min-width: 1024px) {
  .container {
    padding: 2rem;
  }
  
  .post-title {
    font-size: 2.5rem;
  }
  
  .post-header {
    padding: 3rem;
  }
  
  .post-content {
    padding: 3rem;
    font-size: 1.125rem;
    line-height: 1.8;
  }
  
  .featured-image {
    height: 20rem;
  }
  
  .post-content :deep(h1) {
    font-size: 2rem;
  }
  
  .post-content :deep(h2) {
    font-size: 1.5rem;
  }
  
  .post-content :deep(h3) {
    font-size: 1.25rem;
  }
  
  .share-buttons {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .share-container {
    padding: 3rem;
  }
}

/* Large Desktop Styles */
@media (min-width: 1280px) {
  .post-title {
    font-size: 3rem;
  }
  
  .featured-image {
    height: 24rem;
  }
  
  .share-buttons {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Mobile-specific adjustments */
@media (max-width: 767px) {
  .share-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .share-container {
    padding: 1.5rem;
  }
  
  .share-title {
    font-size: 1.25rem;
  }

  .post-meta {
    align-items: center;
  }
  
  .slug-display {
    align-self: center;
    max-width: 100%;
    word-break: break-all;
  }
}

/* Very small screens */
@media (max-width: 480px) {
  .container {
    padding: 0.75rem;
  }
  
  .post-header {
    padding: 1rem;
  }
  
  .post-content {
    padding: 1rem;
  }
  
  .post-title {
    font-size: 1.25rem;
  }
  
  .share-container {
    padding: 1rem;
  }
  
  .btn-content {
    gap: 0.25rem;
  }
  
  .slug-text {
    font-size: 0.6875rem;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus States */
.back-button:focus,
.share-btn:focus,
.error-back-button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}
</style>