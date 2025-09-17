<template>
  <div class="promo-container">
    <promo_1 />
    <br>
    <promo_2 />
    <br>
    <promo_3 />
    <br>
    <promo_4 />
    <br>
    <promo_5 />
    <br>
    <promo_6 />

    <div class="promo-text">
      <h1>{{ $t('promo.title') }}</h1>
      <p v-html="$t('promo.intro')"></p>
      <p>
        {{ $t('promo.descriptionBefore') }}
        <span class="homepage-link" @click="goToHomepage">{{ $t('promo.winboxMalaysia') }}</span>
        <span v-html="$t('promo.descriptionAfter')"></span>
      </p>
    </div>

    <div class="promo-text">
      <h2>{{ $t('promo.topFreeCredit.title') }}</h2>
      <p>{{ $t('promo.topFreeCredit.description') }}</p>
      <p v-html="$t('promo.topFreeCredit.noTricks')"></p>
      <p>{{ $t('promo.topFreeCredit.newUsers') }}</p>
    </div>

    <div class="promo-text">
      <h2>{{ $t('promo.bestPromotion.title') }}</h2>
      <p>
        {{ $t('promo.bestPromotion.introBefore') }}
        <span class="homepage-link" @click="goToPromo">{{ $t('promo.bestPromotion.winboxPromotion') }}</span>
        {{ $t('promo.bestPromotion.introAfter') }}
      </p>
      <p>{{ $t('promo.bestPromotion.whatYouFind') }}</p>

      <h3>{{ $t('promo.bestPromotion.newPlayerBonus.title') }}</h3>
      <p v-html="$t('promo.bestPromotion.newPlayerBonus.description')"></p>

      <h3>{{ $t('promo.bestPromotion.dailyScratch.title') }}</h3>
      <p>{{ $t('promo.bestPromotion.dailyScratch.description') }}</p>

      <h3>{{ $t('promo.bestPromotion.monthlyLucky7.title') }}</h3>
      <p v-html="$t('promo.bestPromotion.monthlyLucky7.description')"></p>

      <h3>{{ $t('promo.bestPromotion.rescueBonus.title') }}</h3>
      <p v-html="$t('promo.bestPromotion.rescueBonus.description')"></p>
    </div>

    <div class="promo-text">
      <h2>{{ $t('promo.whyNumber1.title') }}</h2>
      <p>{{ $t('promo.whyNumber1.smartPlayers') }}</p>
      <p>
        {{ $t('promo.whyNumber1.designedClearBefore') }}
        <span class="homepage-link" @click="goToDownload">{{ $t('promo.whyNumber1.downloadLink') }}</span>
        {{ $t('promo.whyNumber1.designedClearAfter') }}
      </p>
    </div>

    <div class="promo-text">
      <h2>{{ $t('promo.howToClaim.title') }}</h2>
      <p>{{ $t('promo.howToClaim.timeRequired') }}</p>
      <ol>
        <li>
          {{ $t('promo.howToClaim.step1Before') }}
          <span class="homepage-link" @click="goToRegister">{{ $t('promo.howToClaim.registerLink') }}</span>
          {{ $t('promo.howToClaim.step1After') }}
        </li>
        <li>{{ $t('promo.howToClaim.step2') }}</li>
        <li>{{ $t('promo.howToClaim.step3') }}</li>
        <li v-html="$t('promo.howToClaim.step4')"></li>
        <li>{{ $t('promo.howToClaim.step5') }}</li>
      </ol>
      <p>{{ $t('promo.howToClaim.thatsIt') }}</p>
    </div>

    <div class="promo-text">
      <h2>{{ $t('promo.readyToClaim.title') }}</h2>
      <p v-html="$t('promo.readyToClaim.noWait')"></p>
      <p>
        {{ $t('promo.readyToClaim.goAheadBefore') }}
        <span class="homepage-link" @click="goToLogin">{{ $t('promo.readyToClaim.loginLink') }}</span>
        {{ $t('promo.readyToClaim.goAheadAfter') }}
      </p>
    </div>
  </div>
</template>

<script setup>
  import promo_1 from '@/components/promo/promo-1.vue';
  import promo_2 from '@/components/promo/promo-2.vue';
  import promo_3 from '@/components/promo/promo-3.vue';
  import promo_4 from '@/components/promo/promo-4.vue';
  import promo_5 from '@/components/promo/promo-5.vue';
  import promo_6 from '@/components/promo/promo-6.vue';
  import { useNavigation } from '@/components/utils/navigation';

  const {
    goToHomepage,
    goToPromo,
    goToLogin,
    goToDownload,
    goToRegister
  } = useNavigation();
</script>

<style scoped>
  .promo-container {
    width: 900px;
    margin: 0 auto;
    min-height: 100vh;
    margin-bottom: 30px;
    padding: 5px;
  }

  .promo-text {
    padding-top: 40px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .homepage-link {
    color: #02D1FD;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .promo-text p {
      font-size: 14px;
    }

  .homepage-link:hover {
    color: #0298c7;
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    .promo-container {
      width: 100%;
      padding: 10px;
    }

    .promo-text h1,
    .promo-text h2 {
      font-size: 22px;
    }

    .promo-text p {
      font-size: 14px;
    }
  }
</style>