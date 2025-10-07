<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <!-- 404 Title -->
      <h1 class="error-code">404</h1>
      
      <!-- Error Message -->
      <h2 class="error-title" v-if="isChineseRoute">页面未找到</h2>
      <h2 class="error-title" v-else>Page Not Found</h2>
      
      <!-- Back to Home Button -->
      <router-link :to="isChineseRoute ? '/zh' : '/'" class="btn-home">
        {{ isChineseRoute ? '返回首页' : 'Back to Home' }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  computed: {
    isChineseRoute() {
      return this.$route.path.startsWith('/zh')
    }
  },
  mounted() {
    console.warn('404 Error - Page not found:', this.$route.fullPath)
  }
}
</script>

<style scoped>
.not-found-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.not-found-content {
  text-align: center;
}

.error-code {
  font-size: 120px;
  font-weight: 800;
  margin: 0;
  color: #2d3748;
  line-height: 1;
}

.error-title {
  font-size: 32px;
  font-weight: 700;
  color: #2d3748;
  margin: 20px 0 40px;
}

.btn-home {
  display: inline-block;
  padding: 14px 32px;
  background-color: #02D0FD;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-home:hover {
  background-color: #01b8e4;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(2, 208, 253, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .error-code {
    font-size: 80px;
  }

  .error-title {
    font-size: 24px;
  }

  .btn-home {
    padding: 12px 28px;
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .error-code {
    font-size: 60px;
  }

  .error-title {
    font-size: 20px;
  }
}
</style>