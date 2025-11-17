<template>
  <ThreeColumnContent>
    <div class="lucky-7th">
      <!-- Video Section -->
      <div class="video-section">
        <iframe
          src="https://www.youtube.com/embed/FubkBYSj_Iw?si=FWoWxS6GX3gS90ks"
          title="Winbox88 Lucky 7th Bonus"
          loading="lazy"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Banner Section -->
      <div class="banner-section">
        <img 
          :src="lucky7thBanner" 
          alt="Lucky 7th Boost Bonus Banner" 
          class="banner-image"
        />
      </div>

      <!-- Main Content -->
      <div class="content">
        <h1>{{ $t('lucky7th.heading') }}</h1>
        
        <h2>{{ $t('lucky7th.subtitle') }}</h2>
        <p>
          {{ $t('lucky7th.introText') }} <strong>{{ $t('lucky7th.lucky7thLink') }}</strong> 
          {{ $t('lucky7th.introText2') }}
        </p>
        
        <div class="cta-buttons">
          <button class="cta-button" @click="goToRegister">
            <strong>{{ $t('lucky7th.joinNowText') }}</strong>
          </button>
        </div>

        <h2>{{ $t('lucky7th.howItWorksTitle') }}</h2>
        <ol>
          <li>
            <strong>{{ $t('lucky7th.step1Title') }}</strong> {{ $t('lucky7th.step1Text') }}
          </li>
          <li>
            <strong>{{ $t('lucky7th.step2Title') }}</strong> {{ $t('lucky7th.step2Text') }}
          </li>
          <li>
            <strong>{{ $t('lucky7th.step3Title') }}</strong> {{ $t('lucky7th.step3Text') }}
          </li>
          <li>
            <strong>{{ $t('lucky7th.step4Title') }}</strong> {{ $t('lucky7th.step4Text') }}
          </li>
        </ol>

        <h2>{{ $t('lucky7th.bonusExampleTitle') }}</h2>
        <div class="bonus-table-image">
          <img 
            :src="bonusTable" 
            alt="Lucky 7th Bonus Example Breakdown" 
            class="table-image"
          />
        </div>

        <h2>{{ $t('lucky7th.rulesTitle') }}</h2>
        <ol>
          <li>
            {{ $t('lucky7th.rule1Text') }} 
            <a 
              :href="seoLinks.home()" 
              class="homepage-link"
              @click.prevent="goToHomepage">{{ $t('lucky7th.winboxMalaysiaText') }}</a> 
            {{ $t('lucky7th.rule1Referrer') }}
          </li>
          <li>{{ $t('lucky7th.rule2') }}</li>
          <li>{{ $t('lucky7th.rule3') }}</li>
          <li>{{ $t('lucky7th.rule4') }}</li>
          <li>
            {{ $t('lucky7th.rule5Text') }} 
            <a 
              :href="seoLinks.slot()" 
              class="homepage-link"
              @click.prevent="goToSlots">{{ $t('lucky7th.slotGamesText') }}</a> 
            {{ $t('lucky7th.rule5After') }}
          </li>
          <li>{{ $t('lucky7th.rule6') }}</li>
          <li>{{ $t('lucky7th.rule7') }}</li>
        </ol>

        <h2>{{ $t('lucky7th.whoCanJoinTitle') }}</h2>
        <ul>
          <li>{{ $t('lucky7th.eligibility1') }}</li>
          <li>{{ $t('lucky7th.eligibility2') }}</li>
          <li>
            <a 
              :href="seoLinks.promo()" 
              class="homepage-link"
              @click.prevent="goToPromo">{{ $t('lucky7th.promotionsAndBonusText') }}</a> 
            {{ $t('lucky7th.eligibility3After') }}
          </li>
        </ul>

        <h2>{{ $t('lucky7th.termsTitle') }}</h2>
        <ul>
          <li>{{ $t('lucky7th.term1') }}</li>
          <li>{{ $t('lucky7th.term2') }}</li>
          <li>{{ $t('lucky7th.term3') }}</li>
          <li>{{ $t('lucky7th.term4') }}</li>
          <li>{{ $t('lucky7th.term5') }}</li>
        </ul>

        <h2>{{ $t('lucky7th.whyUseTitle') }}</h2>
        <ul>
          <li><strong>{{ $t('lucky7th.reason1Title') }}</strong> {{ $t('lucky7th.reason1Text') }}</li>
          <li><strong>{{ $t('lucky7th.reason2Title') }}</strong> {{ $t('lucky7th.reason2Text') }}</li>
          <li><strong>{{ $t('lucky7th.reason3Title') }}</strong> {{ $t('lucky7th.reason3Text') }}</li>
          <li><strong>{{ $t('lucky7th.reason4Title') }}</strong></li>
        </ul>

        <h2>{{ $t('lucky7th.faqTitle') }}</h2>
        
        <div class="faq-item">
          <p><strong>Q: {{ $t('lucky7th.faq1Q') }}</strong></p>
          <p>A: {{ $t('lucky7th.faq1A') }}</p>
        </div>

        <div class="faq-item">
          <p><strong>Q: {{ $t('lucky7th.faq2Q') }}</strong></p>
          <p>A: {{ $t('lucky7th.faq2A') }}</p>
        </div>

        <div class="faq-item">
          <p><strong>Q: {{ $t('lucky7th.faq3Q') }}</strong></p>
          <p>A: {{ $t('lucky7th.faq3A') }}</p>
        </div>

        <div class="faq-item">
          <p><strong>Q: {{ $t('lucky7th.faq4Q') }}</strong></p>
          <p>A: {{ $t('lucky7th.faq4A') }}</p>
        </div>

        <h2>{{ $t('lucky7th.consistencyTitle') }}</h2>
        <p>{{ $t('lucky7th.consistencyText') }}</p>
        
        <div class="cta-buttons">
          <button class="cta-button" @click="goToLogin">
            <strong>{{ $t('lucky7th.depositNowText') }}</strong>
          </button>
        </div>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import { useNavigation } from "@/components/utils/navigation.js";
import ThreeColumnContent from "@/components/ThreeColumnContent.vue";
import lucky7thBanner from "@/assets/lucky-7th-banner.png";
import bonusTable from "@/assets/lucky7th-bonus-table.avif";

const { 
  goToRegister, 
  goToLogin, 
  goToHomepage, 
  goToSlots, 
  goToPromo,
  seoLinks 
} = useNavigation();
</script>

<style scoped>
.lucky-7th {
  color: white;
  padding: 20px 10px;
}

/* Video Section */
.video-section {
  width: 100%;
  margin: 0 0 20px 0;
  padding: 0;
  background-color: #000;
}

.video-section iframe {
  width: 100%;
  min-height: 400px;
  border: none;
  display: block;
}

/* Banner Section */
.banner-section {
  width: 100%;
  margin: 0;
  padding: 0;
}

.banner-section .banner-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Content Section */
.content {
  margin: 0 auto;
  padding: 12px 20px;
  color: black;
  font-family: Arial, sans-serif;
}

.content h1 {
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 600;
  text-align: left;
}

.content h2 {
  font-size: 18px;
  margin: 15px 0;
  font-weight: bold;
}

.content p {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.content ol,
.content ul {
  padding-left: 30px;
  font-size: 14px;
  margin-bottom: 15px;
}

.content li {
  margin-bottom: 8px;
  line-height: 1.6;
}

/* CTA Buttons */
.cta-buttons {
  margin: 20px 0;
}

.cta-button {
  background-color: #02D1FD;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 25px;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #0099cc;
  transform: scale(1.05);
}

/* Bonus Table Image */
.bonus-table-image {
  margin: 20px 0;
}

.table-image {
  max-width: 100%;
  height: auto;
}

/* FAQ Items */
.faq-item {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 8px;
  border-left: 4px solid #02D1FD;
}

.faq-item p {
  margin-bottom: 5px;
}

/* Links */
.homepage-link {
  color: #02D1FD;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

.homepage-link:hover {
  color: #0099cc;
  text-decoration: underline;
}

/* Responsive */
@media screen and (max-width: 768px) {
  .content {
    padding: 12px 15px;
  }

  .video-section iframe {
    min-height: 250px;
  }

  .cta-button {
    padding: 10px 25px;
    font-size: 14px;
  }
}
</style>