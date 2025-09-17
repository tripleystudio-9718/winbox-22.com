<template>
  <div class="read-more">
    <div class="read-more__content">
      <!-- Left Section -->
      <div class="read-more__left">
        <div class="read-more__title">{{ $t('footer.gamePermit') }}</div>
        <div class="read-more__license">
          <img :src="lesenPermainan1" alt="GC Gaming logo">
          <img :src="lesenPermainan2" alt="PAGCOR logo">
        </div>
        
        <div class="read-more__title read-more__responsible-title">{{ $t('footer.responsibleGaming') }}</div>
        <div class="read-more__responsible">
          <img :src="gamingResponsible" alt="Responsible Gaming">
        </div>

        <div class="read-more-payment">
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
      <div class="read-more__right">
        <div class="read-more__title">{{ $t('footer.followUs') }}</div>
        <div class="read-more__social">
          <a href="#" class="read-more__social-link">
            <img :src="facebookIcon" alt="Facebook" @click="navigateToFacebook">
          </a>
          <a href="#" class="read-more__social-link">
            <img :src="telegramIcon" alt="Telegram" @click="navigateToTelegram">
          </a>
          <a href="#" class="read-more__social-link">
            <img :src="instagramIcon" alt="Instagram" @click="navigateToInstagram">
          </a>
        </div>
        
        <div class="read-more__title">{{ $t('footer.certification') }}</div>
        <div class="read-more__certification">
          <img :src="certificationImage" alt="Certifications" class="read-more__cert-img">
        </div>
      </div>
    </div>
    
    <!-- Main content section -->
    <div class="read-more__expanded-content">
      <div class="read-more__expanded-section">
        <h1>{{ $t('content.mainTitle') }}</h1>
        <p>{{ $t('content.intro') }}</p>
        <p><span class="homepage-link" @click="goToHomepage">{{ $t('links.winboxMalaysia') }}</span> {{ $t('content.introContinued') }}</p>
        
        <h2>{{ $t('content.joinTitle') }}</h2>
        <p>{{ $t('content.joinDescription') }}</p>
        <p v-html="$t('content.joinContinued')"></p>
        <p>{{ $t('content.joinThinking') }}</p>
        <p>{{ $t('content.joinSteps') }}</p>
        <ol>
          <li>{{ $t('content.step1Before') }} <span class="homepage-link" @click="goToRegister">{{ $t('links.winboxRegister') }}</span> {{ $t('content.step1After') }}</li>
          <li>{{ $t('content.step2') }}</li>
          <li>{{ $t('content.step3') }}</li>
          <li>{{ $t('content.step4') }}</li>
        </ol>
        <p>{{ $t('content.joinConclusion') }}</p>

        <h2>{{ $t('content.realGamesTitle') }}</h2>
        <p>{{ $t('content.realGamesIntro') }}</p>
        <p>{{ $t('content.realGamesExpectation') }}</p>

        <h3>{{ $t('content.slotsTitle') }}</h3>
        <p>{{ $t('content.slotsDescription') }}</p>

        <h3>{{ $t('content.liveCasinoTitle') }}</h3>
        <p>{{ $t('content.liveCasinoDescription') }}</p>
        <p>{{ $t('content.liveCasinoContinued') }}</p>

        <h3>{{ $t('content.sportsBettingTitle') }}</h3>
        <p>{{ $t('content.sportsBettingDescription') }}</p>
        <p>{{ $t('content.sportsBettingContinued') }}</p>

        <h3>{{ $t('content.lotteryTitle') }}</h3>
        <p>{{ $t('content.lotteryDescription') }}</p>

        <h3>{{ $t('content.horseRacingTitle') }}</h3>
        <p>{{ $t('content.horseRacingDescription') }}</p>

        <h2>{{ $t('content.bonusesTitle') }}</h2>
        <p>{{ $t('content.bonusesIntro1') }}</p>
        <p v-html="$t('content.bonusesIntro2')"></p>
        <p>{{ $t('content.bonusesDescription') }}</p>
        <ul class="dots">
          <li>{{ $t('content.bonus1') }}</li>
          <li>{{ $t('content.bonus2') }}</li>
          <li>{{ $t('content.bonus3') }}</li>
          <li>{{ $t('content.bonus4') }}</li>
        </ul>
        <p>{{ $t('content.bonusesConclusion') }} <span class="homepage-link" @click="goToPromo">{{ $t('links.winboxPromotion') }}</span> {{ $t('content.bonusesConclusionAfter') }}</p>
        
        <h2>{{ $t('content.paymentTitle') }}</h2>
        <p>{{ $t('content.paymentDescription') }}</p>
        <p>{{ $t('content.paymentConcern') }}</p>
        
        <!-- Customer Support Section (added from Chinese document) -->
        <h2>{{ $t('content.customerSupportTitle') }}</h2>
        <p>{{ $t('content.customerSupportIntro') }}</p>
        <p>{{ $t('content.customerSupport') }}</p>
        
        <h2>{{ $t('content.localTitle') }}</h2>
        <p v-html="$t('content.localIntro')"></p>
        <ul class="dots">
          <li>{{ $t('content.localFeature1') }}</li>
          <li>{{ $t('content.localFeature2') }}</li>
          <li>{{ $t('content.localFeature3') }}</li>
        </ul>
        <p>{{ $t('content.localConclusion') }}</p>

        <h2>{{ $t('content.choiceTitle') }}</h2>
        <p>{{ $t('content.choiceIntro') }}</p>
        <ul class="dots">
          <li>{{ $t('content.choice1') }}</li>
          <li>{{ $t('content.choice2') }}</li>
          <li>{{ $t('content.choice3') }}</li>
          <li>{{ $t('content.choice4') }}</li>
          <li>{{ $t('content.choice5') }}</li>
        </ul>
        <p>{{ $t('content.choiceConclusion') }} <span class="homepage-link" @click="goToDownload">{{ $t('links.winboxDownload') }}</span> {{ $t('content.choiceConclusionAfter') }}</p>

        <h2>{{ $t('content.playWinTitle') }}</h2>
        <p>{{ $t('content.playWinDescription') }} <span class="homepage-link" @click="goToLogin">{{ $t('links.winboxLogin') }}</span> {{ $t('content.playWinDescriptionAfter') }}</p>

        <h2>{{ $t('content.faqTitle') }}</h2>
        <div class="faq-section">
          <p><strong>Q: {{ $t('content.faq1Question') }}</strong><br>
            <strong>A:</strong> {{ $t('content.faq1Answer') }}</p>

          <p><strong>Q: {{ $t('content.faq2Question') }}</strong><br>
            <strong>A:</strong> {{ $t('content.faq2Answer') }}</p>

          <p><strong>Q: {{ $t('content.faq3Question') }}</strong><br>
            <strong>A:</strong> {{ $t('content.faq3Answer') }}</p>

          <p><strong>Q: {{ $t('content.faq4Question') }}</strong><br>
            <strong>A:</strong> {{ $t('content.faq4Answer') }}</p>

          <p><strong>Q: {{ $t('content.faq5Question') }}</strong><br>
            <strong>A:</strong> {{ $t('content.faq5Answer') }}</p>

          <p><strong>Q: {{ $t('content.faq6Question') }}</strong><br>
            <strong>A:</strong> {{ $t('content.faq6Answer') }}</p>
        </div>

      </div>
    </div>
    
    <div class="read-more__copyright">
      {{ $t('footer.copyright') }}
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
const {
  goToHomepage,
  goToLogin,
  goToRegister,
  goToPromo,
  goToDownload,
  openExternalLink
} = useNavigation();

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
.read-more {
  padding: 20px 10px;
  font-family: Arial, sans-serif;
  color: #000;
  max-width: 720px;
  margin: 0 auto;
  box-sizing: border-box;
}

.read-more__content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.read-more__left, .read-more__right {
  flex: 1;
  min-width: 300px;
}

.read-more__title {
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 16px;
}

.read-more__responsible-title {
  margin-top: 25px;
}

.read-more__license {
  display: inline-block;
  margin-bottom: 15px;
}

.read-more__license img {
  max-width: 150px;
  height: auto;
}

.read-more__responsible {
  margin-bottom: 25px;
}

.read-more__responsible img {
  max-width: 170px;
  height: auto;
}

.read-more__info {
  margin-bottom: 20px;
}

.info_title {
  font-size: 14px !important;
  font-weight: bold;
  margin-bottom: 10px;
}

.read-more__info p {
  font-size: 12px;
  margin: 0;
}

.read-more__expanded-content {
  margin-top: 20px;
  padding-top: 20px;
}

.read-more__expanded-section h1 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
}

.read-more__expanded-section h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

.read-more__expanded-section h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}

.read-more__expanded-section p {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.feature-list {
  list-style-type: disc;
  padding-left: 20px;
  margin: 0 0 20px 0;
  font-size: 14px;
}

.feature-list li {
  display: list-item;
  margin-bottom: 12px;
  padding-left: 10px;
}

.read-more__social {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
}

.read-more__social-link img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  animation: pulse 1.5s infinite ease-in-out;
}

ol {
  padding-left: 20px;
  font-size: 14px;
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

.read-more__certification {
  margin-bottom: 15px;
}

.read-more__cert-img {
  max-width: 100%;
  height: auto;
}

.read-more__copyright {
  text-align: center;
  font-size: 12px;
  margin-top: 20px;
  padding-top: 15px;
}

.homepage-link {
    color: #02D1FD;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
}

.homepage-link:hover {
    color: #0298c7;
    text-decoration: underline;
}

.read-more-payment {
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

.dots {
    padding-left: 30px;
    font-size: 14px;
}

.dots li {
    margin-bottom: 5px;
}

@media (max-width: 720px) {
  .read-more__content {
    flex-direction: column;
  }

  .payment-icon-grid {
    grid-template-columns: repeat(4, 0.2fr);
    gap: 5px;
    justify-items: left;
  }

  .read-more__right{
    padding-top: 20px;
  }
}

@media (max-width: 480px) {
  .read-more__left, .read-more__right {
    min-width: 100%;
  }
}
</style>