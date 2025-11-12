<template>
  <ThreeColumnContent>
    <div class="scratch-win">
      <!-- Main Content -->
      <div class="content">
        <p class="hero-note">
          Hero Section Banner from : 
          <a href="https://www.winbox88.me/scratch-and-win" target="_blank" class="link">
            https://www.winbox88.me/scratch-and-win
          </a>
        </p>

        <h1>{{ $t('scratchWin.heading') }}</h1>
        
        <p class="subtitle">{{ $t('scratchWin.subtitle') }}</p>
        
        <p>
          {{ $t('scratchWin.introBefore') }}
          <a href="https://www.winbox88.me/scratch-and-win" target="_blank" class="link">
            {{ $t('scratchWin.introLink') }}
          </a>
          {{ $t('scratchWin.introAfter') }}
        </p>

        <h2>{{ $t('scratchWin.getCodeTitle') }}</h2>
        
        <div class="button-group">
          <button class="whatsapp-btn">
            <span class="icon">💬</span> WHATSAPP
          </button>
          <button class="start-btn">GET START</button>
        </div>

        <h2>{{ $t('scratchWin.howToTitle') }}</h2>
        <ol>
          <li v-for="(step, index) in howToSteps" :key="index">
            <strong>{{ step.title }}</strong> {{ step.desc }}
            <a v-if="step.link" :href="step.link" target="_blank" class="link">{{ step.linkText }}</a>{{ step.descAfter }}
          </li>
        </ol>

        <h2>{{ $t('scratchWin.whatCanWinTitle') }}</h2>
        <div class="prizes-image">
          <img 
            :src="prizesTable" 
            alt="What Can You Win - Prizes and Probabilities" 
            class="table-image"
          />
        </div>

        <h2>{{ $t('scratchWin.whoCanJoinTitle') }}</h2>
        <ul>
          <li v-for="(item, index) in whoCanJoin" :key="index">
            <span v-if="typeof item === 'string'">{{ item }}</span>
            <span v-else>
              {{ item.textBefore }}
              <a :href="item.link" target="_blank" class="link">{{ item.linkText }}</a>
              {{ item.textAfter }}
            </span>
          </li>
        </ul>

        <h2>{{ $t('scratchWin.pastWinnerTitle') }}</h2>
        <p class="note">
          (UI copy from 
          <a href="https://www.winbox88.me/scratch-and-win" target="_blank" class="link">
            https://www.winbox88.me/scratch-and-win
          </a> )
        </p>

        <div class="past-winners-banner">
          <img 
            :src="pastWinnersBanner" 
            alt="Past Winner Sharing" 
            class="banner-image"
          />
        </div>

        <h2>{{ $t('scratchWin.termsTitle') }}</h2>
        <ul>
          <li v-for="(term, index) in termsList" :key="index">
            <span v-if="typeof term === 'string'">{{ term }}</span>
            <span v-else>
              {{ term.textBefore }}
              <a :href="term.link" target="_blank" class="link">{{ term.linkText }}</a>
              {{ term.textAfter }}
            </span>
          </li>
        </ul>

        <h2>{{ $t('scratchWin.whyJoinTitle') }}</h2>
        <ul>
          <li v-for="(reason, index) in whyJoinList" :key="index">{{ reason }}</li>
        </ul>

        <h2>{{ $t('scratchWin.faqTitle') }}</h2>
        <div v-for="(faq, index) in faqList" :key="index" class="faq-item">
          <p><strong>Q: {{ faq.q }}</strong></p>
          <p>A: {{ faq.a }}</p>
        </div>

        <p class="register-button-section">
          <router-link :to="routerLinks.register()" class="register-button">
            {{ $t('button.register') }}
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
// import pastWinnersBanner from "@/assets/scratch-past-winners.png";
// import prizesTable from "@/assets/scratch-prizes-table.png";

const { tm } = useI18n();
const { routerLinks } = useNavigation();

// Fetch structured arrays/objects
const howToSteps = tm("scratchWin.howToSteps") || [];
const whoCanJoin = tm("scratchWin.whoCanJoin") || [];
const termsList = tm("scratchWin.termsList") || [];
const whyJoinList = tm("scratchWin.whyJoinList") || [];
const faqList = tm("scratchWin.faqList") || [];
</script>

<style scoped>
.scratch-win {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  width: 100%;
}

/* Main Content */
.content {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

.hero-note {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
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

/* Button Group */
.button-group {
  display: flex;
  gap: 15px;
  margin: 25px 0;
}

.whatsapp-btn,
.start-btn {
  padding: 12px 30px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.whatsapp-btn {
  background: #33B4E2;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
}

.start-btn {
  background: #33B4E2;
  color: white;
}

.whatsapp-btn:hover,
.start-btn:hover {
  opacity: 0.9;
}

.icon {
  font-size: 20px;
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

/* Prizes Image */
.prizes-image {
  margin: 25px 0;
}

.table-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  display: block;
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

/* Past Winners Banner */
.past-winners-banner {
  width: 100%;
  margin: 30px 0;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
}

.note {
  font-size: 14px;
  color: #666;
  margin: 10px 0;
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

  .button-group {
    flex-direction: column;
  }

  .whatsapp-btn,
  .start-btn {
    width: 100%;
  }

  .table-image {
    max-width: 100%;
  }
}
</style>