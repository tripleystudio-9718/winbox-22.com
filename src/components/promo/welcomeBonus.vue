<template>
  <ThreeColumnContent>
    <div class="welcome-bonus">
      <!-- Banner Section -->
      <div class="banner-section">
        <img 
          :src="welcomeBonusBanner" 
          alt="Winbox Welcome Bonus Banner" 
          class="banner-image"
        />
      </div>

      <!-- Main Content -->
      <div class="bonus-content">
        <h1>{{ $t('welcomeBonus.heading') }}</h1>
        
        <p><strong>{{ $t('welcomeBonus.subHeading') }}</strong></p>
        
        <p>
          {{ $t('welcomeBonus.introBefore') }}
          <a 
            :href="seoLinks.welcomeBonus()" 
            class="homepage-link"
            @click.prevent="goToWelcomeBonus">{{ $t('welcomeBonus.welcomeBonusLink') }}</a>
          {{ $t('welcomeBonus.introAfter') }}
        </p>
        
        <p class="register-button-section">
          <router-link :to="routerLinks.register()" class="register-button">
            {{ $t('button.registerNow') }}
          </router-link>
        </p>

        <h2>{{ $t('welcomeBonus.howToClaimTitle') }}</h2>
        
        <div 
            v-for="(step, index) in claimSteps" 
            :key="index" 
            class="step-item"
          >
            <p>
              <strong>{{ index + 1 }}. </strong>
              <span v-html="step.title"></span>
              —
              <span v-if="index === 0">
                <span v-html="step.descBefore"></span>
                <a 
                  href="https://www.winbox22.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="homepage-link"
                >
                  https://www.winbox22.com/
                </a>
                <span v-html="step.descAfter"></span>
              </span>
              <span v-else v-html="step.desc"></span>
            </p>
          </div>

        <h2>{{ $t('welcomeBonus.bonusExampleTitle') }}</h2>
        
        <table class="bonus-table">
          <thead>
            <tr>
              <th>{{ $t('welcomeBonus.bonusExampleTable.depositAmount') }}</th>
              <th>{{ $t('welcomeBonus.bonusExampleTable.bonusAwarded') }}</th>
              <th>{{ $t('welcomeBonus.bonusExampleTable.totalPlayCredit') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(example, index) in bonusExamples" :key="index">
              <td>{{ example.deposit }}</td>
              <td>{{ example.bonus }}</td>
              <td>{{ example.total }}</td>
            </tr>
          </tbody>
        </table>

        <h2>{{ $t('welcomeBonus.whoEligibleTitle') }}</h2>
        
        <ul>
          <li v-for="(item, index) in eligibilityList" :key="index" v-html="item"></li>
        </ul>

        <h2>{{ $t('welcomeBonus.termsTitle') }}</h2>
        
        <ul>
          <li v-for="(item, index) in termsList" :key="index">
            <span v-if="index === 4">
              {{ item.textBefore }}
              <a 
                :href="seoLinks.promo()" 
                class="homepage-link"
                @click.prevent="goToPromo">{{ item.link }}</a>
            </span>
            <span v-else>{{ item }}</span>
          </li>
        </ul>

        <h2>{{ $t('welcomeBonus.whyChooseTitle') }}</h2>
        
        <ul>
          <li v-for="(item, index) in reasons" :key="index">{{ item }}</li>
        </ul>

        <h2>{{ $t('welcomeBonus.faqTitle') }}</h2>
        
        <div v-for="(faq, index) in faqList" :key="index" class="faq-item">
          <p><strong>Q: {{ faq.q }}</strong></p>
          <p>A: {{ faq.a }}</p>
        </div>

        <h2>{{ $t('welcomeBonus.readyTitle') }}</h2>
        
        <p>{{ $t('welcomeBonus.readyText') }}</p>
        
        <p class="register-button-section">
          <router-link :to="routerLinks.register()" class="register-button">
            {{ $t('button.registerClaimBonus') }}
          </router-link>
        </p>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useNavigation } from "@/components/utils/navigation.js";
import ThreeColumnContent from "@/components/ThreeColumnContent.vue";
import welcomeBonusBanner from "@/assets/welcome-bonus-banner.png";

const { tm } = useI18n();
const { routerLinks, seoLinks, goToWelcomeBonus, goToPromo } = useNavigation();

// Fetch structured arrays/objects
const claimSteps = tm("welcomeBonus.claimSteps") || [];
const bonusExamples = tm("welcomeBonus.bonusExamples") || [];
const eligibilityList = tm("welcomeBonus.eligibilityList") || [];
const termsList = tm("welcomeBonus.termsList") || [];
const reasons = tm("welcomeBonus.reasons") || [];
const faqList = tm("welcomeBonus.faqList") || [];
</script>

<style scoped>
.welcome-bonus {
  margin: 0 auto;
  padding: 20px 10px;
  font-family: Arial, sans-serif;
}

/* Banner Section */
.banner-section {
  width: 100%;
  margin-bottom: 30px;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Main Content */
.bonus-content {
  padding: 0 20px;
  line-height: 1.6;
}

.bonus-content h1 {
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0 15px;
}

.bonus-content h2 {
  font-size: 18px;
  font-weight: bold;
  margin: 25px 0 12px;
}

.bonus-content p {
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 12px;
}

.bonus-content strong {
  font-weight: bold;
}

/* Homepage Link */
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

/* Register Button */
.register-button-section {
  margin: 20px 0;
}

.register-button {
  min-width: 160px;
  height: 40px;
  padding: 8px 20px;
  background-color: #02D1FD;
  color: white;
  text-decoration: none;
  font-weight: normal;
  border-radius: 8px;
  margin-right: 8px;
  font-size: 15px;
  transition: background-color 0.2s ease;
}

.register-button:hover {
  background-color: #0298c7;
}

/* Steps */
.step-item {
  margin-bottom: 10px;
}

.step-item p {
  margin: 0;
  font-size: 15px;
}

/* Table */
.bonus-table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0 25px;
  font-size: 15px;
}

.bonus-table th,
.bonus-table td {
  border: 1px solid #000;
  padding: 8px 12px;
  text-align: left;
}

.bonus-table th {
  font-weight: bold;
  background-color: #f5f5f5;
}

/* Lists */
.bonus-content ul {
  margin: 12px 0 20px;
  padding-left: 20px;
}

.bonus-content li {
  margin-bottom: 8px;
  line-height: 1.6;
  font-size: 15px;
}

/* FAQ */
.faq-item {
  margin-bottom: 15px;
}

.faq-item p {
  margin: 5px 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .welcome-bonus {
    padding: 15px 5px;
  }

  .bonus-content {
    padding: 0 10px;
  }

  .bonus-content h1 {
    font-size: 20px;
  }

  .bonus-content h2 {
    font-size: 16px;
  }

  .bonus-content p {
    font-size: 14px;
  }

  .bonus-table {
    font-size: 13px;
  }

  .bonus-table th,
  .bonus-table td {
    padding: 6px 8px;
  }
}

@media (max-width: 480px) {
  .bonus-content h1 {
    font-size: 18px;
  }

  .bonus-content h2 {
    font-size: 15px;
  }

  .bonus-content p {
    font-size: 13px;
  }

  .bonus-table {
    font-size: 12px;
  }

  .bonus-table th,
  .bonus-table td {
    padding: 5px 6px;
  }
}
</style>