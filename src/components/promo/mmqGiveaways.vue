<template>
  <ThreeColumnContent>
    <div class="marc-marquez">
      <!-- Banner Section -->
      <div class="banner-section">
        <img 
          :src="marcMarquezBanner" 
          alt="Marc Marquez Giveaway Banner" 
          class="banner-image"
        />
      </div>

      <!-- Main Content -->
      <div class="content">
        <h1>{{ $t('marcMarquezG.heading') }}</h1>
        
        <p class="subtitle">{{ $t('marcMarquezG.subtitle') }}</p>
        
        <p>{{ $t('marcMarquezG.intro') }}</p>

        <!-- Action Buttons -->
        <div class="action-buttons">
          <div class="action-btn">
            <img :src="buttonFrame" alt="" class="btn-frame" />
            <span class="btn-text">{{ $t('marcMarquezG.buttons.getPrizesNow') }}</span>
          </div>
          <div class="action-btn">
            <img :src="buttonFrame" alt="" class="btn-frame" />
            <span class="btn-text">{{ $t('marcMarquezG.buttons.joinTelegram') }}</span>
          </div>
        </div>

        <h2>{{ $t('marcMarquezG.whatIsTitle') }}</h2>
        <p>
          The <strong>{{ $t('marcMarquezG.whatIsLinkText') }}</strong> {{ $t('marcMarquez.whatIsPara1') }}
        </p>
        <p>{{ $t('marcMarquezG.whatIsPara2') }}</p>

        <h2>{{ $t('marcMarquezG.whatCanWinTitle') }}</h2>
        <table class="prizes-table">
          <thead>
            <tr>
              <th>{{ $t('marcMarquezG.prizeType') }}</th>
              <th>{{ $t('marcMarquezG.description') }}</th>
              <th>{{ $t('marcMarquezG.quantity') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(prize, index) in prizesTable" :key="index">
              <td>{{ prize.prizeType }}</td>
              <td>{{ prize.description }}</td>
              <td>{{ prize.quantity }}</td>
            </tr>
          </tbody>
        </table>
        <p>{{ $t('marcMarquezG.prizesNote') }}</p>
        <p>
          {{ $t('marcMarquezG.learnMoreText') }} 
          <router-link :to="routerLinks.promo()" class="link">{{ $t('marcMarquezG.promotionsLinkText') }}</router-link>?
        </p>

        <h2>{{ $t('marcMarquezG.howToJoinTitle') }}</h2>
        
        <p>
          <strong>{{ $t('marcMarquezG.step1Title') }}</strong><br>
          {{ $t('marcMarquezG.step1Text') }} 
          <a href="https://www.winbox22.com/" target="_blank" rel="noopener noreferrer" class="link">{{ $t('marcMarquezG.winboxLoginText') }}</a>.
        </p>
        
        <p>
          <strong>{{ $t('marcMarquezG.step2Title') }}</strong><br>
          {{ $t('marcMarquezG.step2Text') }}
        </p>
        
        <p>
          <strong>{{ $t('marcMarquezG.step3Title') }}</strong><br>
          {{ $t('marcMarquezG.step3Text') }}
        </p>
        
        <p>
          <strong>{{ $t('marcMarquezG.step4Title') }}</strong><br>
          {{ $t('marcMarquezG.step4Text') }}
        </p>
        
        <p>
          <strong>{{ $t('marcMarquezG.step5Title') }}</strong><br>
          {{ $t('marcMarquezG.step5Text') }}
        </p>

        <h2>{{ $t('marcMarquezG.joinTelegramTitle') }}</h2>
        <p>{{ $t('marcMarquezG.joinTelegramPara1') }}</p>
        <p>{{ $t('marcMarquezG.joinTelegramPara2') }}</p>

        <h2>{{ $t('marcMarquezG.whyJoinTitle') }}</h2>
        <ul>
          <li v-for="(item, index) in whyJoinList" :key="index">{{ item }}</li>
        </ul>

        <h2>{{ $t('marcMarquezG.additionalRulesTitle') }}</h2>
        <ol>
          <li>
            {{ $t('marcMarquezG.rule1Text') }} 
            <a href="https://forms.gle/Y22JqJ8x11KCyKsg7" target="_blank" rel="noopener noreferrer" class="link">https://forms.gle/Y22JqJ8x11KCyKsg7</a>
          </li>
          <li>{{ $t('marcMarquezG.rule2Text') }}</li>
          <li>{{ $t('marcMarquezG.rule3Text') }}</li>
          <li>{{ $t('marcMarquezG.rule4Text') }}</li>
        </ol>

        <!-- Second set of buttons -->
        <div class="action-buttons">
          <div class="action-btn">
            <img :src="buttonFrame" alt="" class="btn-frame" />
            <span class="btn-text">{{ $t('marcMarquezG.buttons.fillOutForm') }}</span>
          </div>
          <div class="action-btn">
            <img :src="buttonFrame" alt="" class="btn-frame" />
            <span class="btn-text">{{ $t('marcMarquezG.buttons.joinTelegram') }}</span>
          </div>
        </div>

        <p><em>{{ $t('marcMarquezG.justOneScan') }}</em></p>

        <h2>{{ $t('marcMarquezG.termsTitle') }}</h2>
        <ul>
          <li>{{ $t('marcMarquezG.term1') }}</li>
          <li>
            {{ $t('marcMarquezG.term2Text') }} 
            <a href="https://www.winbox22.com/" target="_blank" rel="noopener noreferrer" class="link">https://www.winbox22.com/</a> 
            {{ $t('marcMarquezG.term2Referrer') }}
          </li>
          <li>{{ $t('marcMarquezG.term3') }}</li>
          <li>{{ $t('marcMarquezG.term4') }}</li>
          <li>{{ $t('marcMarquezG.term5') }}</li>
          <li>{{ $t('marcMarquezG.term6') }}</li>
          <li>{{ $t('marcMarquezG.term7') }}</li>
          <li>{{ $t('marcMarquezG.term8') }}</li>
        </ul>

        <h2>{{ $t('marcMarquezG.faqTitle') }}</h2>
        <div v-for="(faq, index) in faqList" :key="index" class="faq-item">
          <p><strong>Q: {{ faq.q }}</strong></p>
          <p>A: {{ faq.a }}</p>
        </div>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useNavigation } from "@/components/utils/navigation.js";
import ThreeColumnContent from "@/components/ThreeColumnContent.vue";
import marcMarquezBanner from "@/assets/marc-marquez-banner.png";
import buttonFrame from "@/assets/mmq-button-frame.avif";

const { tm } = useI18n();
const { routerLinks } = useNavigation();

// Fetch structured arrays/objects from translations
const prizesTable = tm("marcMarquezG.prizesTable") || [];
const whyJoinList = tm("marcMarquezG.whyJoinList") || [];
const faqList = tm("marcMarquezG.faqList") || [];
</script>

<style scoped>
.marc-marquez {
  margin: 0;
  padding: 20px 10px; 
  font-family: Arial, sans-serif;
  width: 100%;
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
  margin: 0 auto;
  padding: 20px;
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

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 15px;
  margin: 20px 0;
  justify-content: center;
  align-items: center;
}

.action-btn {
  position: relative;
  max-width: 300px;
  width: 100%;
  cursor: pointer;
  transition: transform 0.2s;
}

.action-btn:hover {
  transform: scale(1.05);
}

.btn-frame {
  width: 100%;
  height: auto;
  display: block;
}

.btn-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #1a1a1a;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  width: 90%;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  pointer-events: none;
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

/* Prizes Table */
.prizes-table {
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;
  margin: 20px 0;
}

.prizes-table th,
.prizes-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  font-size: 15px;
}

.prizes-table th {
  background-color: #f5f5f5;
  font-weight: 700;
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
  .content {
    padding: 15px 10px;
  }

  .content h1 {
    font-size: 24px;
  }

  .content h2 {
    font-size: 18px;
  }

  .action-buttons {
    flex-direction: column;
    gap: 10px;
  }

  .action-btn {
    max-width: 100%;
  }
}
</style>