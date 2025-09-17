<template>
  <div class="promo-4">
    <img :src="lucky7_p" alt="Winbox LUCKY 7TH BONUS Bonus promotion banner" />
  </div>

  <div v-if="isMobile" class="promo-4-1">
    <div class="telco-item" @click="navigateToRegister">
      <img :src="lucky7_1_1" alt="LUCKY 7TH x 1.5 RM4200 CLAIM NOW!" />
    </div>
  </div>

  <div v-if="isMobile" class="promo-4-1">
    <div class="telco-item" @click="navigateToRegister">
      <img :src="lucky7_1_2" alt="LUCKY 17TH x 1.5 RM4200 CLAIM NOW!" />
    </div>
    <div class="telco-item" @click="navigateToRegister">
      <img :src="lucky7_1_3" alt="LUCKY 27TH x 1.5 RM4200 CLAIM NOW!" />
    </div>
  </div>

  <div v-if="!isMobile" class="promo-4-1">
    <div class="telco-item" @click="navigateToRegister">
      <img :src="lucky7_1_1" alt="LUCKY 7TH x 1.5 RM4200 CLAIM NOW!" />
    </div>
    <div class="telco-item" @click="navigateToRegister">
      <img :src="lucky7_1_2" alt="LUCKY 17TH x 1.5 RM4200 CLAIM NOW!" />
    </div>
    <div class="telco-item" @click="navigateToRegister">
      <img :src="lucky7_1_3" alt="LUCKY 27TH x 1.5 RM4200 CLAIM NOW!" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useNavigation } from "@/components/utils/navigation";
import lucky7_p from "@/assets/lucky7-p.png";
import lucky7_1_1 from "@/assets/lucky7-1-1.png";
import lucky7_1_2 from "@/assets/lucky7-1-2.png";
import lucky7_1_3 from "@/assets/lucky7-1-3.png";

// Navigation
const { goToRegister } = useNavigation();
const navigateToRegister = goToRegister; // for template use

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
.promo-4 {
  margin-top: 10px;
}

.promo-4 img {
  display: inline;
  height: 60px;
}

.promo-4-1 {
  margin-top: 10px;
  display: flex;
  gap: 10px;
  align-items: end;
}

.telco-item {
  position: relative;
  height: 120px;
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
  .promo-4-1 {
    flex-wrap: wrap;
  }

  .telco-item {
    height: 100px;
  }

  .promo-4 img {
    height: 35px;
  }
}
</style>
