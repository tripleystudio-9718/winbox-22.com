<template>
<ThreeColumnContent>
  <div class="rcb988-tab">
    <div class="content-section">
      <h1>{{ $t('rcb988.title') }}</h1>
      
      <p>{{ $t('rcb988.intro.description1') }} <a 
          :href="seoLinks.rcb988()" 
          class="homepage-link"
          @click.prevent="goToRcb988"
          >{{ $t('rcb988.intro.linkText') }}</a> {{ $t('rcb988.intro.description2') }}</p>
      <p>{{ $t('rcb988.intro.description3') }}</p>

      <div class="content-block">
        <h2>{{ $t('rcb988.whatIs.title') }}</h2>
        <p>{{ $t('rcb988.whatIs.description1') }}</p>
        <p>{{ $t('rcb988.whatIs.description2') }}</p>
        <p>{{ $t('rcb988.whatIs.description3') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('rcb988.racingMarkets.title') }}</h2>
        
        <h3>{{ $t('rcb988.racingMarkets.subtitle') }}</h3>
        <ul class="dots">
          <li>{{ $t('rcb988.racingMarkets.tracks.kl') }}</li>
          <li>{{ $t('rcb988.racingMarkets.tracks.singapore') }}</li>
          <li>{{ $t('rcb988.racingMarkets.tracks.hongkong') }}</li>
          <li>{{ $t('rcb988.racingMarkets.tracks.australia') }}</li>
          <li>{{ $t('rcb988.racingMarkets.tracks.uk') }}</li>
        </ul>
        
        <h3>{{ $t('rcb988.racingMarkets.betTypes.title') }}</h3>
        <ul class="dots">
          <li>{{ $t('rcb988.racingMarkets.betTypes.win') }}</li>
          <li>{{ $t('rcb988.racingMarkets.betTypes.place') }}</li>
          <li>{{ $t('rcb988.racingMarkets.betTypes.show') }}</li>
        </ul>
        
        <p>{{ $t('rcb988.racingMarkets.liveBetting') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('rcb988.payments.title') }}</h2>
        <p>{{ $t('rcb988.payments.description') }}</p>
        
        <h3>{{ $t('rcb988.payments.deposit.title') }}</h3>
        <ul class="dots">
          <li>{{ $t('rcb988.payments.deposit.methods.fpx') }}</li>
          <li>{{ $t('rcb988.payments.deposit.methods.duitnow') }}</li>
          <li>{{ $t('rcb988.payments.deposit.methods.tng') }}</li>
          <li>{{ $t('rcb988.payments.deposit.methods.bank') }}</li>
        </ul>
        <p>{{ $t('rcb988.payments.deposit.minimum') }}</p>
        
        <h3>{{ $t('rcb988.payments.withdrawal.title') }}</h3>
        <ul class="dots">
          <li>{{ $t('rcb988.payments.withdrawal.speed') }}</li>
          <li>{{ $t('rcb988.payments.withdrawal.limits') }}</li>
          <li>{{ $t('rcb988.payments.withdrawal.destination') }}</li>
        </ul>
        
        <p>{{ $t('rcb988.payments.advantage') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('rcb988.bonuses.title') }}</h2>
        <p>{{ $t('rcb988.bonuses.description') }}</p>
        
        <h3>{{ $t('rcb988.bonuses.welcome.title') }}</h3>
        <ul class="dots">
          <li>{{ $t('rcb988.bonuses.welcome.match') }}</li>
          <li>{{ $t('rcb988.bonuses.welcome.usage') }}</li>
          <li>{{ $t('rcb988.bonuses.welcome.requirements') }}</li>
        </ul>
        
        <h3>{{ $t('rcb988.bonuses.daily.title') }}</h3>
        <ul class="dots">
          <li>{{ $t('rcb988.bonuses.daily.amount') }}</li>
          <li>{{ $t('rcb988.bonuses.daily.requirement') }}</li>
          <li>{{ $t('rcb988.bonuses.daily.purpose') }}</li>
        </ul>
        
        <p>{{ $t('rcb988.bonuses.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('rcb988.support.title') }}</h2>
        <p>{{ $t('rcb988.support.description1') }}</p>
        <p>{{ $t('rcb988.support.description2') }}</p>
        <ul class="dots">
          <li>{{ $t('rcb988.support.method') }}</li>
        </ul>
        <p>{{ $t('rcb988.support.promise') }}</p>
        <p>{{ $t('rcb988.support.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('rcb988.mobile.title') }}</h2>
        <p><strong>{{ $t('rcb988.mobile.description1') }}</strong></p>
        <p>{{ $t('rcb988.mobile.description2') }}</p>
        <p>{{ $t('rcb988.mobile.description3') }}</p>
        <p>{{ $t('rcb988.mobile.description4') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('rcb988.whyChoose.title') }}</h2>
        <p>{{ $t('rcb988.whyChoose.description1') }}</p>
        <p>{{ $t('rcb988.whyChoose.description2') }}</p>
        <p>{{ $t('rcb988.whyChoose.description3') }}</p>
        
        <ul class="dots">
          <li>{{ $t('rcb988.whyChoose.benefits.menu') }}</li>
          <li>{{ $t('rcb988.whyChoose.benefits.banners') }}</li>
          <li>{{ $t('rcb988.whyChoose.benefits.odds') }}</li>
          <li>{{ $t('rcb988.whyChoose.benefits.racecards') }}</li>
        </ul>
        
        <p>{{ $t('rcb988.whyChoose.conclusion1') }}</p>
        <p>{{ $t('rcb988.whyChoose.conclusion2') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('rcb988.faqs.title') }}</h2>
        
        <h3>{{ $t('rcb988.faqs.questions.whatIs.question') }}</h3>
        <p>{{ $t('rcb988.faqs.questions.whatIs.answer') }}</p>

        <h3>{{ $t('rcb988.faqs.questions.mobile.question') }}</h3>
        <p>{{ $t('rcb988.faqs.questions.mobile.answer') }}</p>

        <h3>{{ $t('rcb988.faqs.questions.legal.question') }}</h3>
        <p>{{ $t('rcb988.faqs.questions.legal.answer') }}</p>

        <h3>{{ $t('rcb988.faqs.questions.bonus.question') }}</h3>
        <p>{{ $t('rcb988.faqs.questions.bonus.answer') }}</p>

        <h3>{{ $t('rcb988.faqs.questions.races.question') }}</h3>
        <p>{{ $t('rcb988.faqs.questions.races.answer') }}</p>

        <h3>{{ $t('rcb988.faqs.questions.verification.question') }}</h3>
        <p>{{ $t('rcb988.faqs.questions.verification.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('rcb988.cta.title') }}</h2>
        <p>{{ $t('rcb988.cta.description') }}</p>
        <p><a 
          :href="seoLinks.register()" 
          class="homepage-link"
          @click.prevent="goToRegister">{{ $t('rcb988.cta.registerButton') }}</a></p>
      </div>
    </div>
  </div>
</ThreeColumnContent>
</template>

<script setup>
import { useNavigation } from '@/components/utils/navigation';
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'

const { seoLinks, routerLinks, getLocalizedPath } = useNavigation()

const {
  goToRegister,
  goToHomepage,
  goToLogin,
  goToRcb988,
} = useNavigation();
</script>

<style scoped>
.rcb988-tab {
  color: white;
}

img {
    width: 100%;
}

.content-section {
  margin: 0 auto;
  padding: 20px 10px;
  color: black;
  font-family: Arial, sans-serif;
}

.content-section h1 {
  font-size: 22px;
  margin-bottom: 30px;
  font-weight: 600;
  text-align: left;
}

.content-section p {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.content-section h2 {
  font-size: 18px;
  margin: 15px 0;
  font-weight: bold;
}

.content-section h3 {
  font-size: 16px;
  margin: 15px 0;
  font-weight: bold;
}

.content-block {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dots {
  padding-left: 30px;
  font-size: 14px;
  margin-bottom: 15px;
}

.dots li {
  margin-bottom: 8px;
}

.homepage-link {
  color: #02D1FD;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.homepage-link:hover {
  color: #0099cc;
}

@media screen and (max-width: 768px) {
  .content-section {
    padding: 15px 8px;
  }
  
  .content-section h1 {
    font-size: 20px;
  }
  
  .content-section h2 {
    font-size: 17px;
  }
  
  .content-section h3 {
    font-size: 15px;
  }
}
</style>