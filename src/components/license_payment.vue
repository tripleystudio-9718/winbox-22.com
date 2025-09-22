<template>
  <div class="header-section">
    <!-- Left Section -->
    <div class="header-section__left">
      <div class="header-section__title">{{ $t('footer.gamePermit') }}</div>
      <div class="header-section__license">
        <img :src="lesenPermainan1" alt="GC Gaming logo">
        <img :src="lesenPermainan2" alt="PAGCOR logo">
      </div>
      
      <div class="header-section__title header-section__responsible-title">{{ $t('footer.responsibleGaming') }}</div>
      <div class="header-section__responsible">
        <img :src="gamingResponsible" alt="Responsible Gaming">
      </div>

      <div class="header-section-payment">
        {{ $t('footer.securedPaymentMethods') }}
        <div class="payment-icon-grid">
          <img
            v-for="(payment, index) in paymentMethods"
            :key="index"
            :src="payment.icon"
            :alt="payment.alt"
            class="payment-icon-img"
          />
        </div>
      </div>
    </div>
    
    <!-- Right Section -->
    <div class="header-section__right">
      <div class="header-section__title">{{ $t('footer.followUs') }}</div>
      <div class="header-section__social">
        <a href="#" class="header-section__social-link">
          <img :src="facebookIcon" alt="Facebook" @click="navigateToFacebook">
        </a>
        <a href="#" class="header-section__social-link">
          <img :src="telegramIcon" alt="Telegram" @click="navigateToTelegram">
        </a>
        <a href="#" class="header-section__social-link">
          <img :src="instagramIcon" alt="Instagram" @click="navigateToInstagram">
        </a>
      </div>
      
      <div class="header-section__title">{{ $t('footer.certification') }}</div>
      <div class="header-section__certification">
        <img :src="certificationImage" alt="Certifications" class="header-section__cert-img">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNavigation } from '@/components/utils/navigation';

// Image assets
import lesenPermainan1 from "@/assets/lesenPermainan1.png";
import lesenPermainan2 from "@/assets/lesenPermainan2.png";
import gamingResponsible from "@/assets/gaming-responsible.png";
import facebookIcon from "@/assets/facebook-icon.png";
import telegramIcon from "@/assets/telegram-icon.png";
import instagramIcon from "@/assets/instagram-icon.png";
import certificationImage from "@/assets/certification.png";

// Navigation
const { openExternalLink } = useNavigation();

// Social links
const navigateToFacebook = () => openExternalLink('https://www.facebook.com/profile.php?id=61573394108771');
const navigateToTelegram = () => openExternalLink('https://t.me/wbvvipangpau');
const navigateToInstagram = () => openExternalLink('https://www.instagram.com/wb.entertainmentstudio/');

// Payment Methods with descriptive alt text
const paymentMethods = ref([
  {
    icon: new URL('@/assets/payment-icons/icon1.png', import.meta.url).href,
    alt: 'Cimb Bank Icon'
  },
  {
    icon: new URL('@/assets/payment-icons/icon2.png', import.meta.url).href,
    alt: 'Maybank Bank Icon'
  },
  {
    icon: new URL('@/assets/payment-icons/icon3.png', import.meta.url).href,
    alt: 'Public Bank Icon'
  },
  {
    icon: new URL('@/assets/payment-icons/icon4.png', import.meta.url).href,
    alt: 'RHB Bank Icon'
  },
  {
    icon: new URL('@/assets/payment-icons/icon5.png', import.meta.url).href,
    alt: 'Affin Bank Icon'
  },
  {
    icon: new URL('@/assets/payment-icons/icon6.png', import.meta.url).href,
    alt: 'Hoong Leong Bank Icon'
  },
  {
    icon: new URL('@/assets/payment-icons/icon7.png', import.meta.url).href,
    alt: 'Ambank Bank Icon'
  },
  {
    icon: new URL('@/assets/payment-icons/icon8.png', import.meta.url).href,
    alt: 'Bank Rakyat Bank Icon'
  },
  {
    icon: new URL('@/assets/payment-icons/icon9.png', import.meta.url).href,
    alt: 'Ez Pay Banking Icon'
  },
  {
    icon: new URL('@/assets/payment-icons/icon10.png', import.meta.url).href,
    alt: 'Alliance Bank Icon'
  },
  {
    icon: new URL('@/assets/payment-icons/icon11.png', import.meta.url).href,
    alt: 'FPX Online Banking Icon'
  },
  {
    icon: new URL('@/assets/payment-icons/icon12.png', import.meta.url).href,
    alt: 'UOB Bank Icon'
  },
  {
    icon: new URL('@/assets/payment-icons/icon13.png', import.meta.url).href,
    alt: 'OCBC Bank Icon'
  },
  {
    icon: new URL('@/assets/payment-icons/icon14.png', import.meta.url).href,
    alt: 'Bank Islam Bank Icon'
  },
  {
    icon: new URL('@/assets/payment-icons/icon15.png', import.meta.url).href,
    alt: 'Touch n Go Online Banking Icon'
  },
  {
    icon: new URL('@/assets/payment-icons/icon16.png', import.meta.url).href,
    alt: 'USDT Online Banking Icon'
  }
]);
</script>

<style scoped>
.header-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
}

.header-section__left, .header-section__right {
  flex: 1;
  min-width: 300px;
}

.header-section__title {
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 16px;
}

.header-section__responsible-title {
  margin-top: 25px;
}

.header-section__license {
  display: inline-block;
  margin-bottom: 15px;
}

.header-section__license img {
  max-width: 150px;
  height: auto;
}

.header-section__responsible {
  margin-bottom: 25px;
}

.header-section__responsible img {
  max-width: 170px;
  height: auto;
}

.header-section-payment {
  font-weight: bold;
  margin-top: 0px;
  font-size: 16px;
}

.payment-icon-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 12px;
  margin-top: 15px;
  align-items: center;
  justify-items: center;
}

.payment-icon-img {
  width: 36px;
  height: auto;
}

.header-section__social {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
}

.header-section__social-link img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.header-section__certification {
  margin-bottom: 15px;
}

.header-section__cert-img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 720px) {
  .header-section {
    flex-direction: column;
  }

  .payment-icon-grid {
    grid-template-columns: repeat(4, 0.2fr);
    gap: 5px;
    justify-items: left;
  }

  .header-section__right{
    padding-top: 20px;
  }
}

@media (max-width: 480px) {
  .header-section__left, .header-section__right {
    min-width: 100%;
  }
}
</style>