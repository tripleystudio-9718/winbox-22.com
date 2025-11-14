<template>
  <ThreeColumnContent>
    <div class="lucky-7th">
      <!-- Video Section -->
      <div class="video-section">
        <iframe
          src="https://www.youtube.com/embed/FubkBYSjTw7si=FWoWxS6GX3qS90ks"
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
          Winbox <strong>{{ $t('lucky7th.lucky7thLink') }}</strong> 
          {{ $t('lucky7th.introText2') }}
        </p>
        
        <div class="cta-buttons">
          <button class="cta-button" @click="openRegister">
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
            <a href="https://www.winbox22.com/" target="_blank" rel="noopener noreferrer" class="link">{{ $t('lucky7th.winboxMalaysiaText') }}</a> 
            {{ $t('lucky7th.rule1Referrer') }}
          </li>
          <li>{{ $t('lucky7th.rule2') }}</li>
          <li>{{ $t('lucky7th.rule3') }}</li>
          <li>{{ $t('lucky7th.rule4') }}</li>
          <li>
            {{ $t('lucky7th.rule5Text') }} 
            <a href="#" class="link">{{ $t('lucky7th.slotGamesText') }}</a> 
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
            <a href="#" class="link">{{ $t('lucky7th.promotionsAndBonusText') }}</a> 
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
          <li><strong>{{ $t('lucky7th.reason4Title') }}</strong> {{ $t('lucky7th.reason4Text') }}</li>
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
          <button class="cta-button" @click="openLogin">
            <strong>{{ $t('lucky7th.depositNowText') }}</strong>
          </button>
        </div>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useNavigation } from "@/components/utils/navigation.js";
import ThreeColumnContent from "@/components/ThreeColumnContent.vue";
import lucky7thBanner from "@/assets/lucky-7th-banner.png";
import bonusTable from "@/assets/lucky7th-bonus-table.avif";

const { tm } = useI18n();
const { routerLinks } = useNavigation();

// Button click handlers
const openRegister = () => {
  window.open('https://www.winbox22.com/winbox-register', '_blank', 'noopener,noreferrer');
};

const openLogin = () => {
  window.open('https://www.winbox22.com/winbox-login-web', '_blank', 'noopener,noreferrer');
};
</script>

<style scoped>
.lucky-7th {
  margin: 0;
  padding: 12px 20px;
  font-family: Arial, sans-serif;
  width: 100%;
}

/* Video Section */
.video-section {
  width: 100%;
  margin: 0;
  padding: 0;
}

.video-section iframe {
  width: 100%;
  height: 500px;
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

/* Main Content */
.content {
  max-width: 900px;
  margin: 0 auto;
  padding: 12px 20px;
  line-height: 1.6;
}

.content h1 {
  font-size: 28px;
  font-weight: 700;
  margin: 30px 0 20px;
}

.subtitle {
  font-size: 18px;
  font-weight: 600;
  margin: 15px 0;
}

.content h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 30px 0 15px;
}

.content p {
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 15px;
}

.content strong {
  font-weight: 700;
}

/* Links */
.link {
  color: #02D1FD;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

/* CTA Buttons */
.cta-buttons {
  margin: 20px 0;
}

.cta-button {
  min-width: 160px;
  height: 40px;
  padding: 8px 20px;
  background-color: #02D1FD;
  color: white;
  text-decoration: none;
  font-weight: normal;
  border: none;
  border-radius: 8px;
  margin-right: 8px;
  font-size: 15px;
  transition: background-color 0.2s ease;
}

.cta-button:hover {
  background-color: #0298c7;
}

.cta-button strong {
  font-weight: 700;
}

.cta-button .link-text {
  color: #02D1FD;
  text-decoration: none;
}

/* Bonus Table Image */
.bonus-table-image {
  margin: 25px 0;
}

.table-image {
  width: 100%;
  max-width: 700px;
  height: auto;
  display: block;
}

/* Register Button */
.register-button-section {
  margin: 35px 0;
  text-align: center;
}

.register-button {
  display: inline-block;
  min-width: 220px;
  padding: 14px 35px;
  background: linear-gradient(135deg, #02D1FD 0%, #0298c7 100%);
  color: white;
  text-decoration: none;
  font-weight: 700;
  border-radius: 12px;
  font-size: 17px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.register-button:hover {
  opacity: 0.9;
}

/* Lists */
.content ul,
.content ol {
  margin: 15px 0 25px;
  padding-left: 25px;
}

.content li {
  margin-bottom: 10px;
  line-height: 1.7;
  font-size: 15px;
}

/* FAQ */
.faq-item {
  margin-bottom: 20px;
}

.faq-item p {
  margin: 5px 0;
}

/* Mobile */
@media (max-width: 768px) {
  .video-section iframe {
    height: 300px;
  }

  .content {
    padding: 15px 10px;
  }

  .content h1 {
    font-size: 24px;
  }

  .content h2 {
    font-size: 18px;
  }

  .table-image {
    max-width: 100%;
  }
}
</style>