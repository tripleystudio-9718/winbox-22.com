<template> 
    <div class="promo-3">
        <img :src="lucky365_p" alt="Winbox LUCKY 365 CHAMPIONSHIP Bonus promotion banner">
    </div>

    <div v-if="isMobile" class="promo-3-1">
        <div class="telco-item-big" @click="navigateToRegister">
            <img :src="lucky365_1_1" alt="1ST RM 88,888 CLAIM NOW!">
        </div>
    </div>

    <div v-if="isMobile" class="promo-3-1">
        <div class="telco-item" @click="navigateToRegister">
            <img :src="lucky365_1_2" alt="2ST RM 58,888 CLAIM NOW!">
        </div>
        <div class="telco-item" @click="navigateToRegister">
            <img :src="lucky365_1_3" alt="3ST RM 38,888 CLAIM NOW!">
        </div>
    </div>

    <div v-if="!isMobile" class="promo-3-1">
        <div class="telco-item-big" @click="navigateToRegister">
            <img :src="lucky365_1_1" alt="1ST RM 88,888 CLAIM NOW!">
        </div>
        <div class="telco-item" @click="navigateToRegister">
            <img :src="lucky365_1_2" alt="2ST RM 58,888 CLAIM NOW!">
        </div>
        <div class="telco-item" @click="navigateToRegister">
            <img :src="lucky365_1_3" alt="3ST RM 38,888 CLAIM NOW!">
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useNavigation } from '@/components/utils/navigation';
import lucky365_p from "@/assets/lucky365-p.png";
import lucky365_1_1 from "@/assets/lucky365-1-1.png";
import lucky365_1_2 from "@/assets/lucky365-1-2.png";
import lucky365_1_3 from "@/assets/lucky365-1-3.png";

// Use reusable navigation logic
const { goToRegister } = useNavigation();
const navigateToRegister = goToRegister; // alias for consistency

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
.promo-3 {
    margin-top: 10px;
}

.promo-3 img {
    display: inline;
    height: 60px;
}

.promo-3-1 {
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

.telco-item-big {
    position: relative;
    height: 160px;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.telco-item:hover,
.telco-item-big:hover {
    transform: scale(1.03);
}

.telco-item img,
.telco-item-big img {
    height: 100%;
    display: block;
}

/* Mobile styles */
@media (max-width: 768px) {
    .promo-3-1 {
        flex-wrap: wrap;
    }
    
    .telco-item {
        height: 100px;
    }
    
    .telco-item-big {
        height: 140px;
    }
    
    .promo-3 img {
        height: 35px;
    }
}
</style>