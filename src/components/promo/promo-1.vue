<template>
    <div class="promo-1">
        <img :src="rescue_bonus_p" alt="Winbox Rescue Bonus promotion banner">
    </div>
    <div v-if="isMobile" class="promo_1">
        <img :src="rescue_bonus_1_1" alt="Winbox Rescue Bonus tier: Get RM8 bonus with a turnover of RM500." @click="navigateToRegister">
    </div>

    <div v-if="!isMobile" class="promo_1">
        <img :src="rescue_bonus_1_1" alt="Winbox Rescue Bonus tier: Get RM8 bonus with a turnover of RM500." @click="navigateToRegister">
    </div>

    <div v-if="isMobile" class="promo-1-1">
        <img :src="rescue_bonus_1_2" alt="Winbox Rescue Bonus tier: Get RM15 bonus with a turnover of RM1000." @click="navigateToRegister">
        <img :src="rescue_bonus_1_3" alt="Winbox Rescue Bonus tier: Get RM30 bonus with a turnover of RM3000." @click="navigateToRegister">
        <img :src="rescue_bonus_1_4" alt="Winbox Rescue Bonus tier: Get RM100 bonus with a turnover of RM10,000." @click="navigateToRegister">
    </div>

    <div v-if="isMobile" class="promo-1-1">
        <img :src="rescue_bonus_1_5" alt="Winbox Rescue Bonus tier: Get RM550 bonus with a turnover of RM50,000." @click="navigateToRegister">
        <img :src="rescue_bonus_1_6" alt="Winbox Rescue Bonus tier: Get RM550 bonus with a turnover of RM100,000." @click="navigateToRegister">
        <img :src="rescue_bonus_1_7" alt="Winbox Rescue Bonus tier: Get RM5000 bonus with a turnover of RM500,000." @click="navigateToRegister">
    </div>

    <div v-if="isMobile" class="promo-1-1">
        <img :src="rescue_bonus_1_8" alt="Winbox Rescue Bonus tier: Get RM12,000 bonus with a turnover of RM1,000,000." @click="navigateToRegister">
        <img :src="rescue_bonus_1_9" alt="Winbox Rescue Bonus tier: Get RM58,888 bonus with a turnover of RM5,000,000." @click="navigateToRegister">
    </div>

    <div v-if="!isMobile" class="promo-1-1">
        <img :src="rescue_bonus_1_2" alt="Winbox Rescue Bonus tier: Get RM15 bonus with a turnover of RM1000." @click="navigateToRegister">
        <img :src="rescue_bonus_1_3" alt="Winbox Rescue Bonus tier: Get RM30 bonus with a turnover of RM3000." @click="navigateToRegister">
        <img :src="rescue_bonus_1_4" alt="Winbox Rescue Bonus tier: Get RM100 bonus with a turnover of RM10,000." @click="navigateToRegister">
        <img :src="rescue_bonus_1_5" alt="Winbox Rescue Bonus tier: Get RM550 bonus with a turnover of RM50,000." @click="navigateToRegister">
    </div>

    <div v-if="!isMobile" class="promo-1-1">
        <img :src="rescue_bonus_1_6" alt="Winbox Rescue Bonus tier: Get RM550 bonus with a turnover of RM100,000." @click="navigateToRegister">
        <img :src="rescue_bonus_1_7" alt="Winbox Rescue Bonus tier: Get RM5000 bonus with a turnover of RM500,000." @click="navigateToRegister">
        <img :src="rescue_bonus_1_8" alt="Winbox Rescue Bonus tier: Get RM12,000 bonus with a turnover of RM1,000,000." @click="navigateToRegister">
        <img :src="rescue_bonus_1_9" alt="Winbox Rescue Bonus tier: Get RM58,888 bonus with a turnover of RM5,000,000." @click="navigateToRegister">
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useNavigation } from '@/components/utils/navigation';

// Images
import rescue_bonus_p from "@/assets/rescue-bonus-p.png";
import rescue_bonus_1_1 from "@/assets/rescue-bonus-1-1.png";
import rescue_bonus_1_2 from "@/assets/rescue-bonus-1-2.png";
import rescue_bonus_1_3 from "@/assets/rescue-bonus-1-3.png";
import rescue_bonus_1_4 from "@/assets/rescue-bonus-1-4.png";
import rescue_bonus_1_5 from "@/assets/rescue-bonus-1-5.png";
import rescue_bonus_1_6 from "@/assets/rescue-bonus-1-6.png";
import rescue_bonus_1_7 from "@/assets/rescue-bonus-1-7.png";
import rescue_bonus_1_8 from "@/assets/rescue-bonus-1-8.png";
import rescue_bonus_1_9 from "@/assets/rescue-bonus-1-9.png";

// Use navigation utilities
const { goToRegister } = useNavigation();

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

// Register navigation alias for template
const navigateToRegister = goToRegister;
</script>

<style scoped>
.promo-1 {
    margin-top: 10px;
}

.promo-1 img {
    display: inline;
    height: 60px;
}

.promo-1-1 {
    margin-top: 10px;
    display: flex;
    gap: 10px;
}

.promo_1 {
    margin-top: 10px;
}

.promo_1 img {
    height: 160px;
    cursor: pointer;
    transition: transform 0.2s;
}

.promo_1 img:hover {
    transform: scale(1.05);
}

.promo-1-1 img {
    display: inline;
    height: 120px;
    cursor: pointer;
    transition: transform 0.2s;
}

.promo-1-1 img:hover {
    transform: scale(1.05);
}

/* Mobile styles */
@media (max-width: 768px) {
    .promo-1-1 {
        flex-wrap: wrap;
    }

    .promo-1 img{ 
        height: 35px;
    }
    
    .promo_1 img {
        height: 130px;
    }
    
    .promo-1-1 img {
        height: 100px;
    }
}
</style>