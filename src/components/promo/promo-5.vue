<template>
  <div class="promo-5">
    <img :src="welcome_p" alt="Winbox WELCOME BONUS 100% Bonus promotion banner" />
  </div>

  <div class="promo-5-1">
    <div class="telco-item" @click="navigateToRegister">
      <img :src="welcome_1_1" alt="WELCOME BONUS 100% CLAIM NOW!" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useNavigation } from "@/components/utils/navigation";
import welcome_p from "@/assets/welcome-p.png";
import welcome_1_1 from "@/assets/welcome-1-1.png";

// Navigation
const { goToRegister } = useNavigation();
const navigateToRegister = goToRegister; // for use in template

// Mobile detection
const windowWidth = ref(window.innerWidth);
const isMobile = ref(windowWidth.value <= 768);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
  isMobile.value = windowWidth.value <= 768;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
.promo-5 {
  margin-top: 10px;
}

.promo-5 img {
  display: inline;
  height: 60px;
}

.promo-5-1 {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: end;
}

.telco-item {
  position: relative;
  height: 160px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.telco-item:hover {
  transform: scale(1.03);
}

.telco-item img {
  height: 100%;
  display: block;
}

/* Mobile styles */
@media (max-width: 768px) {
  .promo-5-1 {
    flex-wrap: wrap;
  }

  .telco-item {
    height: 100px;
  }

  .promo-5 img {
    height: 35px;
  }
}
</style>
