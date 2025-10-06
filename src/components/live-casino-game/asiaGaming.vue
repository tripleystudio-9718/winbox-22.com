<template>
<ThreeColumnContent>
  <div class="asia-gaming-tab">
    <div class="content-section">
      <h1>{{ $t('asiaGaming.title') }}</h1>
      
      <p><a 
          :href="seoLinks.asiaGaming()" 
          class="homepage-link"
          @click.prevent="goToAsiaGaming">{{ $t('asiaGaming.intro.linkText') }}</a> {{ $t('asiaGaming.intro.description1') }}</p>

      <div class="content-block">
        <h2>{{ $t('asiaGaming.whyChoose.title') }}</h2>
        <p>{{ $t('asiaGaming.whyChoose.description1') }}</p>
        <p>{{ $t('asiaGaming.whyChoose.description2') }}</p>
        
        <ul class="dots">
          <li>{{ $t('asiaGaming.whyChoose.features.access') }}</li>
          <li>{{ $t('asiaGaming.whyChoose.features.myr') }}</li>
          <li>{{ $t('asiaGaming.whyChoose.features.deposits') }}</li>
          <li>{{ $t('asiaGaming.whyChoose.features.realtime') }}</li>
          <li>{{ $t('asiaGaming.whyChoose.features.testId') }}</li>
        </ul>
        
        <p>{{ $t('asiaGaming.whyChoose.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('asiaGaming.whatIs.title') }}</h2>
        <p>{{ $t('asiaGaming.whatIs.description1') }}</p>
        <p>{{ $t('asiaGaming.whatIs.description2') }}</p>
        
        <div class="testimonial">
          <p><em>{{ $t('asiaGaming.whatIs.quote') }}</em></p>
        </div>
      </div>

      <div class="content-block">
        <h2>{{ $t('asiaGaming.exclusiveGames.title') }}</h2>
        
        <h3>{{ $t('asiaGaming.exclusiveGames.games.baccarat.title') }}</h3>
        <p>{{ $t('asiaGaming.exclusiveGames.games.baccarat.description') }}</p>

        <h3>{{ $t('asiaGaming.exclusiveGames.games.dragonTiger.title') }}</h3>
        <p>{{ $t('asiaGaming.exclusiveGames.games.dragonTiger.description') }}</p>

        <h3>{{ $t('asiaGaming.exclusiveGames.games.bullBull.title') }}</h3>
        <p>{{ $t('asiaGaming.exclusiveGames.games.bullBull.description') }}</p>

        <h3>{{ $t('asiaGaming.exclusiveGames.games.threeFace.title') }}</h3>
        <p>{{ $t('asiaGaming.exclusiveGames.games.threeFace.description') }}</p>

        <h3>{{ $t('asiaGaming.exclusiveGames.games.agStream.title') }}</h3>
        <p>{{ $t('asiaGaming.exclusiveGames.games.agStream.description') }}</p>

        <h3>{{ $t('asiaGaming.exclusiveGames.games.blockchain.title') }}</h3>
        <p>{{ $t('asiaGaming.exclusiveGames.games.blockchain.description') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('asiaGaming.agSlot.title') }}</h2>
        <p>{{ $t('asiaGaming.agSlot.description1') }}</p>
        <p>{{ $t('asiaGaming.agSlot.description2') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('asiaGaming.noApp.title') }}</h2>
        <p>{{ $t('asiaGaming.noApp.description1') }}</p>
        <p>{{ $t('asiaGaming.noApp.description2') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('asiaGaming.testId.title') }}</h2>
        <p>{{ $t('asiaGaming.testId.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('asiaGaming.testId.credentials.userId') }}</li>
          <li>{{ $t('asiaGaming.testId.credentials.password') }}</li>
        </ul>
        
        <div class="note">
          <p>{{ $t('asiaGaming.testId.tip') }}</p>
        </div>
        
        <p>{{ $t('asiaGaming.testId.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('asiaGaming.howToStart.title') }}</h2>
        
        <ol class="numbered-list">
          <li>{{ $t('asiaGaming.howToStart.steps.step1') }} <a 
              :href="seoLinks.home()" 
              class="homepage-link"
              @click.prevent="goToHomepage">Winbox22.com</a></li>
          <li>{{ $t('asiaGaming.howToStart.steps.step2') }}</li>
          <li>{{ $t('asiaGaming.howToStart.steps.step3') }}</li>
          <li>{{ $t('asiaGaming.howToStart.steps.step4') }}</li>
          <li>{{ $t('asiaGaming.howToStart.steps.step5') }}</li>
        </ol>
        
        <p>{{ $t('asiaGaming.howToStart.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('asiaGaming.safeLicensed.title') }}</h2>
        <p>{{ $t('asiaGaming.safeLicensed.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('asiaGaming.safeLicensed.licenses.cagayan') }}</li>
          <li>{{ $t('asiaGaming.safeLicensed.licenses.gli') }}</li>
          <li>{{ $t('asiaGaming.safeLicensed.licenses.pagcor') }}</li>
        </ul>
        
        <p>{{ $t('asiaGaming.safeLicensed.platform') }}</p>
        
        <div class="note">
          <p>{{ $t('asiaGaming.safeLicensed.warning') }}</p>
        </div>
      </div>

      <div class="content-block">
        <h2>{{ $t('asiaGaming.banking.title') }}</h2>
        <p>{{ $t('asiaGaming.banking.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('asiaGaming.banking.banks.maybank') }}</li>
          <li>{{ $t('asiaGaming.banking.banks.cimb') }}</li>
          <li>{{ $t('asiaGaming.banking.banks.publicBank') }}</li>
          <li>{{ $t('asiaGaming.banking.banks.rhb') }}</li>
          <li>{{ $t('asiaGaming.banking.banks.affin') }}</li>
          <li>{{ $t('asiaGaming.banking.banks.hongLeong') }}</li>
        </ul>
        
        <p>{{ $t('asiaGaming.banking.processing') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('asiaGaming.support.title') }}</h2>
        <p>{{ $t('asiaGaming.support.description1') }}</p>
        <p>• {{ $t('asiaGaming.support.description2') }}</p>
        <p>{{ $t('asiaGaming.support.languages') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('asiaGaming.promotions.title') }}</h2>
        <p>{{ $t('asiaGaming.promotions.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('asiaGaming.promotions.offers.welcome') }}</li>
          <li>{{ $t('asiaGaming.promotions.offers.deposit') }}</li>
          <li>{{ $t('asiaGaming.promotions.offers.reload') }}</li>
          <li>{{ $t('asiaGaming.promotions.offers.referral') }}</li>
        </ul>
        
        <p>{{ $t('asiaGaming.promotions.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('asiaGaming.faqs.title') }}</h2>
        
        <h3>{{ $t('asiaGaming.faqs.questions.legal.question') }}</h3>
        <p>{{ $t('asiaGaming.faqs.questions.legal.answer') }}</p>

        <h3>{{ $t('asiaGaming.faqs.questions.vpn.question') }}</h3>
        <p>{{ $t('asiaGaming.faqs.questions.vpn.answer') }}</p>

        <h3>{{ $t('asiaGaming.faqs.questions.liveGames.question') }}</h3>
        <p>{{ $t('asiaGaming.faqs.questions.liveGames.answer') }}</p>

        <h3>{{ $t('asiaGaming.faqs.questions.mobile.question') }}</h3>
        <p>{{ $t('asiaGaming.faqs.questions.mobile.answer') }}</p>

        <h3>{{ $t('asiaGaming.faqs.questions.verify.question') }}</h3>
        <p>{{ $t('asiaGaming.faqs.questions.verify.answer') }}</p>

        <h3>{{ $t('asiaGaming.faqs.questions.testId.question') }}</h3>
        <p>{{ $t('asiaGaming.faqs.questions.testId.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('asiaGaming.conclusion.title') }}</h2>
        <p>{{ $t('asiaGaming.conclusion.description') }}</p>
        <p>{{ $t('asiaGaming.conclusion.cta1') }}<br><br>
        {{ $t('asiaGaming.conclusion.cta2') }}<br>
        <a 
          :href="seoLinks.login()" 
          class="homepage-link"
          @click.prevent="goToLogin">{{ $t('asiaGaming.conclusion.loginButton') }}</a> {{ $t('asiaGaming.conclusion.loginText') }}</p>
        <p><em>{{ $t('asiaGaming.conclusion.disclaimer') }}</em></p>
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
  goToAsiaGaming,
} = useNavigation();
</script>

<style scoped>
.asia-gaming-tab {
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

.numbered-list {
  padding-left: 30px;
  font-size: 14px;
  margin-bottom: 15px;
}

.numbered-list li {
  margin-bottom: 8px;
}

.note {
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 4px;
  padding: 15px;
  margin: 15px 0;
}

.note p {
  margin: 0;
  color: #856404;
  font-size: 13px;
}

.testimonial {
  background-color: #f0f8ff;
  border-left: 4px solid #02D1FD;
  padding: 15px;
  margin: 15px 0;
  border-radius: 4px;
}

.testimonial p {
  margin: 5px 0;
  color: #333;
  font-style: italic;
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