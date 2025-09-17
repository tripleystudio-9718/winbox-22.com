<template>
  <div v-if="isVisible" class="popup-overlay" @click="closePopup">
    <div class="popup-container" @click.stop>
      <button class="close-x" @click="closePopup">×</button>
      <div class="popup-content">
        <!-- Vertical banners for all screen sizes -->
        <div class="banners-container-mobile">
          <img
            :src="images[0]"
            alt="Pop-out banner for the Lucky365 'Monthly Championship'. The banner encourages players to 'Dare to Play!' for a top prize of RM88,888, out of a total prize pool of RM288,888."
            class="popup-image-mobile"
            @click="navigateToRegister"
            style="cursor: pointer;"
          />
          <img
            :src="images[1]"
            alt="A pop-out banner advertising the 'WINBOX APK DOWNLOAD HERE'. The image features two smartphones displaying an online gaming app interface, with a cartoon turtle, playing cards, and dice in the background."
            class="popup-image-mobile"
            @click="navigateToRegister"
            style="cursor: pointer;"
          />
        </div>
        <button class="close-btn" @click="closePopup">OK</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Static imports for banner images
import banner1 from '@/assets/popupBanner1.webp';
import banner2 from '@/assets/popupBanner2.webp';

const props = defineProps({
  defaultOpen: {
    type: Boolean,
    default: true
  },
  images: {
    type: Array,
    default: () => [banner1, banner2]
  }
});

const isVisible = ref(false);
const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const openPopup = () => {
  isVisible.value = true;
  document.body.style.overflow = 'hidden';
};

const closePopup = () => {
  isVisible.value = false;
  document.body.style.overflow = 'auto';
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);

  if (props.defaultOpen) {
    setTimeout(() => {
      openPopup();
    }, 300);
  }

  if (window.location.pathname === "/" && !sessionStorage.getItem("popupShown")) {
    openPopup();
    sessionStorage.setItem("popupShown", "true");
  }
});

defineExpose({
  openPopup,
  closePopup,
  isVisible
});

const navigateToRegister = () => {
  closePopup();
  router.push('/register');
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 9999;
  overflow-y: scroll; /* Keep scroll enabled */
  padding-top: 60px;
  
  /* Hide scrollbar - for most browsers */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
}

.popup-overlay::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.popup-container {
  position: relative;
  width: 500px;
  max-width: 90%;
}

.popup-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Banners shown vertically */
.banners-container-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: visible;
  padding: 0;
  font-size: 0;
}

.popup-image-mobile {
  width: 100%;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
}

/* Fixed X button */
.close-x {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10000;
  width: 1.2em;
  height: 1.2em;
  padding: 0;
  border: none;
  background: none;
  color: #ccc;
  font-family: serif;
  font-size: 3em;
  cursor: pointer;
}

/* OK button styling */
.close-btn {
  margin-top: 15px;
  margin-bottom: 15px;
  background-image: url('/src/assets/cuba-button.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-btn:hover {
  opacity: 0.8;
}

/* Mobile adjustments */
@media screen and (max-width: 768px) {
  .popup-container {
    width: 100%;
  }

  .popup-content {
    width: 100%;
  }

  .close-btn {
    width: 80%;
  }
}
</style>
