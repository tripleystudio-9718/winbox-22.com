<template>
  <div ref="iframeWrapper" class="iframe-wrapper">
    <iframe
      ref="iframe"
      src="https://www.winbox.cloud/winbox-sign-up/"
      frameborder="0"
    ></iframe>
  </div>
  
  <div class="register-text">
    <h1>{{ $t('register.title') }}</h1>
    <p>{{ $t('register.intro') }}</p>
    <p>
      {{ $t('register.descriptionBefore') }}
      <span class="homepage-link" @click="goToHomepage">{{ $t('register.winboxMalaysia') }}</span>
      <span v-html="$t('register.descriptionAfter')"></span>
    </p>
    <p>{{ $t('register.guide') }}</p>
  </div>

  <div class="register-text">
    <h2>{{ $t('register.howTo.title') }}</h2>
    <p>{{ $t('register.howTo.intro') }}</p>
    <p>{{ $t('register.howTo.process') }}</p>
    <ol>
      <li>{{ $t('register.howTo.step1') }}</li>
      <li>
        {{ $t('register.howTo.step2Before') }}
        <span class="homepage-link" @click="goToRegister">{{ $t('register.howTo.registerLink') }}</span>
        {{ $t('register.howTo.step2After') }}
      </li>
      <li>{{ $t('register.howTo.step3') }}</li>
      <li>{{ $t('register.howTo.step4') }}</li>
      <li>{{ $t('register.howTo.step5') }}</li>
    </ol>
    <p>{{ $t('register.howTo.noWait') }}</p>
  </div>

  <div class="register-text">
    <h2>{{ $t('register.whyNumber1.title') }}</h2>
    <p>{{ $t('register.whyNumber1.intro') }}</p>
    <ul>
      <li>{{ $t('register.whyNumber1.features.slots') }}</li>
      <li>{{ $t('register.whyNumber1.features.liveCasino') }}</li>
      <li>{{ $t('register.whyNumber1.features.sports') }}</li>
      <li>{{ $t('register.whyNumber1.features.withdrawals') }}</li>
      <li>
        {{ $t('register.whyNumber1.features.promotionsBefore') }}
        <span class="homepage-link" @click="goToPromo">{{ $t('register.whyNumber1.promoLink') }}</span>
        {{ $t('register.whyNumber1.features.promotionsAfter') }}
      </li>
    </ul>
    <p>{{ $t('register.whyNumber1.conclusion') }}</p>
  </div>

  <div class="register-text">
    <h2>{{ $t('register.mobileFriendly.title') }}</h2>
    <p v-html="$t('register.mobileFriendly.intro')"></p>
    <p>
      {{ $t('register.mobileFriendly.mobilePreferenceBefore') }}
      <span class="homepage-link" @click="goToDownload">{{ $t('register.mobileFriendly.downloadLink') }}</span>
      {{ $t('register.mobileFriendly.mobilePreferenceAfter') }}
    </p>
    <p>{{ $t('register.mobileFriendly.anywhere') }}</p>
  </div>

  <div class="register-text">
    <h2>{{ $t('register.dailyDeals.title') }}</h2>
    <p>
      {{ $t('register.dailyDeals.introBefore') }}
      <span class="homepage-link" @click="goToRegister">{{ $t('register.dailyDeals.registerLink') }}</span>
      {{ $t('register.dailyDeals.introAfter') }}
    </p>
    <p>{{ $t('register.dailyDeals.includes') }}</p>
    <ul>
      <li>{{ $t('register.dailyDeals.deals.matchBonus') }}</li>
      <li>{{ $t('register.dailyDeals.deals.dailyScratch') }}</li>
      <li>{{ $t('register.dailyDeals.deals.turnover') }}</li>
      <li>{{ $t('register.dailyDeals.deals.rescueBonus') }}</li>
    </ul>
    <p>{{ $t('register.dailyDeals.howToAccess') }}</p>
  </div>

  <div class="register-text">
    <h2>{{ $t('register.support.title') }}</h2>
    <p>{{ $t('register.support.intro') }}</p>
    <p>{{ $t('register.support.availability') }}</p>
  </div>

  <div class="register-text">
    <h2>{{ $t('register.bestCasino.title') }}</h2>
    <p>
      {{ $t('register.bestCasino.descriptionBefore') }}
      <span class="homepage-link" @click="goToLogin">{{ $t('register.bestCasino.loginLink') }}</span>
      {{ $t('register.bestCasino.descriptionAfter') }}
    </p>
  </div>

  <div class="register-text">
    <h2>{{ $t('register.faq.title') }}</h2>

    <h3>{{ $t('register.faq.q1.question') }}</h3>
    <p>{{ $t('register.faq.q1.answer') }}</p>

    <h3>{{ $t('register.faq.q2.question') }}</h3>
    <p>{{ $t('register.faq.q2.answer') }}</p>

    <h3>{{ $t('register.faq.q3.question') }}</h3>
    <p>{{ $t('register.faq.q3.answer') }}</p>

    <h3>{{ $t('register.faq.q4.question') }}</h3>
    <p>{{ $t('register.faq.q4.answer') }}</p>

    <h3>{{ $t('register.faq.q5.question') }}</h3>
    <p>{{ $t('register.faq.q5.answer') }}</p>

    <h3>{{ $t('register.faq.q6.question') }}</h3>
    <p>{{ $t('register.faq.q6.answer') }}</p>
  </div>
  <br>
</template>
  
<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { useNavigation } from '@/components/utils/navigation';

const iframeWrapper = ref(null);

// Navigation functions from reusable composable
const {
  goToHomepage,
  goToRegister,
  goToPromo,
  goToDownload,
  goToLogin
} = useNavigation();

// Dynamically resize iframe based on available viewport height
const resizeIframe = () => {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  const headerHeight = header?.offsetHeight || 0;
  const footerHeight = footer?.offsetHeight || 0;
  const windowHeight = window.visualViewport?.height || window.innerHeight;

  const availableHeight = windowHeight - headerHeight - footerHeight;

  if (iframeWrapper.value) {
    iframeWrapper.value.style.height = availableHeight + "px";
  }
};

onMounted(() => {
  resizeIframe();
  window.addEventListener("resize", resizeIframe);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeIframe);
});
</script>
  
  <style scoped>
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
  
  .iframe-wrapper {
    width: 100%;
    overflow: hidden;
  }
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    display: block;
  }

  .register-text {
    padding-top: 40px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 70%;
}

.register-text p, .register-text ul li, .register-text ol li{
  font-size: 14px;
}

ul , ol{
  padding-left: 20px;
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

@media (max-width: 768px) {
  .register-text {
    width: 90%;
}

.register-text h1 {
    font-size: 22px;
  }

  .register-text h2 {
    font-size: 18px;
  }

  .register-text p,
  .register-text ul li {
    font-size: 14px;
  }
}

  @media (max-width: 480px) {
    iframe {
    transform: scale(0.87);
    transform-origin: top left;
    width: 115%;
    height: 108%;
  }
}
  /* No scaling anymore — full width on all screen sizes */
  </style>
  