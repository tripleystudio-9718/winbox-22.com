<template> 
    <div class="promo-2">
        <img :src="mmq_p" alt="Winbox MARC MARQUEZ GIVE AWAY Bonus promotion banner">
    </div>
    <div class="promo-2-1">
        <img :src="mmq_1_1" alt="Promotional banner inviting users to join a Telegram channel for free prizes, featuring a motorsports racer and a 'Claim Now!' button." @click="navigateToRegister">
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useNavigation } from '@/components/utils/navigation';
import mmq_p from "@/assets/mmq-p.png";
import mmq_1_1 from "@/assets/mmq-1-1.png";

// Navigation
const { goToRegister } = useNavigation();
const navigateToRegister = goToRegister; // alias for clarity in template

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
.promo-2 {
    margin-top: 10px;
}

.promo-2 img {
    display: inline;
    height: 60px;
}

.promo-2-1 {
    margin-top: 10px;
    display: flex;
    gap: 10px;
}

.promo-2-1 img {
    height: 160px;
    display: block;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.promo-2-1 img:hover {
    transform: scale(1.03);
}

/* Mobile styles */
@media (max-width: 768px) {
    .promo-2-1 {
        flex-wrap: wrap;
    }
    
    .promo-2-1 img {
        height: 100px;
    }
    
    .promo-2 img {
        height: 35px;
    }
}
</style>