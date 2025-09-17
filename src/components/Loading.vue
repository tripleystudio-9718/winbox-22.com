<template>
  <div v-if="isLoading" class="loading-overlay">
    <div class="loading-container">
      <div class="spinner-container">
        <img :src="spinnerCircle" alt="Spinner" class="spinner-circle" />
        <div class="center-content">
          <div class="loading-circle">
            <img :src="loadingGif" :alt="loadingAlt" class="loading-gif" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spinnerCircle from '@/assets/loading.png';

export default {
  name: 'LoadingComponent',
  data() {
    return {
      isLoading: false,
      spinnerCircle: spinnerCircle,
      loadingGif: new URL('@/assets/loading.gif', import.meta.url).href
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.showLoading();
      next();
    });
    this.$router.afterEach(() => {
      setTimeout(() => {
        this.hideLoading();
      }, 500);
    });
  },
  methods: {
    showLoading() {
      this.isLoading = true;
    },
    hideLoading() {
      this.isLoading = false;
    }
  }
};

const startImageLoop = () => {
  setInterval(() => {
    currentImage.value = currentImage.value === 0 ? 1 : 0;
    updateSlide();
  }, 3000); // Change image every 3 seconds
};

const updateSlide = () => {
  containerStyle.value = {
    transform: currentImage.value === 0 ? 'translateX(0)' : 'translateX(-50%)'
  };
};
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(8, 8, 8, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
}

.spinner-circle {
  position: absolute;
  width: 110px;
  height: 110px;
  animation: spin 3s linear infinite;
  transform-origin: center center;
  z-index: 1;
}

.center-content {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  z-index: 2;
}

.loading-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 50%;
  padding: 45px;
  z-index: 3;
}

.loading-gif {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 80px;
  width: 80px;
  margin: -40px;
  background-size: cover;
  background-position: center;
  background-color: #000;
  border-radius: 100%;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>