<template> 
    <div v-if="isMobile" class="promo-10-1">
        <img :src="join_telegram" alt="MM93 JOIN TELEGRAM FOR FREE PRIZES! Unlimited Surprises Just for You! JOIN NOW" @click="navigateToRegister">
    </div>
    <div v-if="isMobile" class="promo-10-1">
        <img :src="welcome_bonus" alt="A WELCOME BONUS Deposit minimum Rm20 and get Rm10 free credit" @click="navigateToRegister">
    </div>
    <div v-if="isMobile" class="promo-10-1">
        <img :src="rescue_bonus_pp" alt="MORE THAN RESCUE BONUS EXTRA BONUS SIGN UP NOW" @click="navigateToRegister">
    </div>
    <div v-if="!isMobile" class="promo-10-1">
        <img :src="join_telegram" alt="MM93 JOIN TELEGRAM FOR FREE PRIZES! Unlimited Surprises Just for You! JOIN NOW" @click="navigateToRegister">
        <img :src="welcome_bonus" alt="A WELCOME BONUS Deposit minimum Rm20 and get Rm10 free credit" @click="navigateToRegister">
    </div>
    <div v-if="!isMobile" class="promo-10-1">
        <img :src="rescue_bonus_pp" alt="MORE THAN RESCUE BONUS EXTRA BONUS SIGN UP NOW" @click="navigateToRegister">
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useNavigation } from '@/components/utils/navigation';
import join_telegram from "@/assets/join-telegram.gif";
import welcome_bonus from "@/assets/welcome-bonus.gif";
import rescue_bonus_pp from "@/assets/rescue-bonus-pp.gif";

// Navigation
const { goToRegister } = useNavigation();
const navigateToRegister = goToRegister; // alias for template

// Mobile detection
const windowWidth = ref(window.innerWidth);
const isMobile = ref(windowWidth.value <= 768);

const handleResize = () => {
  windowWidth.value = window.innerWidth;
  isMobile.value = windowWidth.value <= 768;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.promo-10 {
    margin-top: 10px;
}

.promo-10 img {
    display: inline;
    height: 45px;
}

.promo-10-1 {
    margin-top: 10px;
    display: flex;
    gap: 10px;
}

.promo-10-1 img {
    display: inline;
    height: 120px;
    border-radius: 12px;
    cursor: pointer;
}
</style>
