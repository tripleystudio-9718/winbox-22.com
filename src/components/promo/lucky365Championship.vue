<template>
  <ThreeColumnContent>
    <div class="lucky365-championship">
      <!-- Banner Section -->
      <div class="banner-section">
        <img 
          :src="lucky365Banner" 
          alt="Lucky365 Championship Banner" 
          class="banner-image"
        />
      </div>

      <!-- Steps / Prizes Section -->
      <div class="steps-prizes">
        <img 
          :src="lucky365Prizes" 
          alt="Lucky365 Steps Prizes" 
        />
      </div>

      <!-- Action Buttons -->
      <div class="action-buttons">
        <button class="join-btn" @click="goToJoin">
          {{ $t('button.joinNow') }}
        </button>
        <button class="register-btn" @click="goToRegister">
          {{ $t('button.register') }}
        </button>
      </div>

      <!-- Iframe Section -->
      <div class="iframe-section">
        <iframe
          src="https://winbox.cloud/lucky365-championship.php"
          title="Lucky365 Leaderboard"
          loading="lazy"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Text Section -->
      <div class="championship-content">
        <h1>{{ $t('lucky365Championship.heading') }}</h1>
        
        <p><strong>{{ $t('lucky365Championship.subHeading') }}</strong></p>
        
        <p>{{ $t('lucky365Championship.intro') }}</p>

        <h2>{{ $t('lucky365Championship.whatTitle') }}</h2>
        <p>
          {{ $t('lucky365Championship.whatContentBefore') }}
          <a 
            :href="seoLinks.lucky365Championship()" 
            class="homepage-link"
            @click.prevent="goToLucky365Championship">
            {{ $t('lucky365Championship.lucky365Link') }}
          </a>
          <span v-html="$t('lucky365Championship.whatContentAfter')"></span>
        </p>

        <h2>{{ $t('lucky365Championship.whyTitle') }}</h2>

        <div class="reason-block" v-for="(reason, index) in reasons" :key="index">
          <h3>{{ reason.title }}</h3>
          <p v-if="index === 3">
            {{ $t('lucky365Championship.reasons.fitsLocalDescBefore') }}
            <a 
              :href="seoLinks.download()" 
              class="homepage-link"
              @click.prevent="goToDownload">
              {{ $t('lucky365Championship.reasons.winboxApkLink') }}
            </a>
            {{ $t('lucky365Championship.reasons.fitsLocalDescAfter') }}
          </p>
          <p v-else>{{ reason.desc }}</p>
        </div>

        <h2>{{ $t('lucky365Championship.howTitle') }}</h2>
        
        <div class="step" v-for="(step, index) in steps" :key="index">
          <p><strong>{{ step.title }}</strong></p>
          <p v-if="index === 0">
            {{ step.descBefore }}
            <a 
              :href="seoLinks.home()" 
              class="homepage-link"
              @click.prevent="goToHomepage">
              {{ step.winboxMalaysiaLink }}
            </a>
            {{ step.descAfter }}
          </p>
          <p v-else>{{ step.desc }}</p>
        </div>

        <h2>{{ $t('lucky365Championship.prizeTitle') }}</h2>
        
        <table class="prize-table">
          <thead>
            <tr>
              <th>{{ $t('lucky365Championship.prizeTable.rank') }}</th>
              <th>{{ $t('lucky365Championship.prizeTable.prize') }}</th>
              <th>{{ $t('lucky365Championship.prizeTable.notes') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in prizeList" :key="index">
              <td>{{ item.rank }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.note }}</td>
            </tr>
          </tbody>
        </table>

        <p class="prize-note" v-html="$t('lucky365Championship.prizeNote')"></p>

        <h2>{{ $t('lucky365Championship.termsTitle') }}</h2>
        
        <ul>
          <li v-for="(item, index) in termsList" :key="index">
            <span v-if="index === 6">
              {{ item.textBefore }}
              <a href="https://www.winbox22.com/" target="_blank" class="homepage-link">https://www.winbox22.com/</a>
              {{ item.textAfter }}
            </span>
            <span v-else v-html="item"></span>
          </li>
        </ul>

        <h2>{{ $t('lucky365Championship.whoTitle') }}</h2>
        <p>{{ $t('lucky365Championship.whoIntro') }}</p>
        <ul>
          <li v-for="(item, index) in whoList" :key="index" v-html="item"></li>
        </ul>

        <h2>{{ $t('lucky365Championship.advantagesTitle') }}</h2>

        <h3>Advantages</h3>
        <ul>
          <li v-for="(item, index) in advantages" :key="'adv-' + index" v-html="item"></li>
        </ul>

        <h3>Limitations</h3>
        <ul>
          <li v-for="(item, index) in limitations" :key="'lim-' + index" v-html="item"></li>
        </ul>

        <h2>{{ $t('lucky365Championship.maximiseTitle') }}</h2>
        <ol>
          <li v-for="(item, index) in maximiseSteps" :key="index" v-html="item"></li>
        </ol>

        <h2>{{ $t('lucky365Championship.faqTitle') }}</h2>
        
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
import lucky365Banner from "@/assets/lucky365-championship-banner.png";
import lucky365Prizes from "@/assets/lucky365-prizes.avif";

const { tm } = useI18n();
const { routerLinks, seoLinks, goToRegister, goToLucky365Championship, goToDownload, goToHomepage } = useNavigation();

// Fetch structured arrays/objects
const steps = tm("lucky365Championship.steps") || [];
const prizeList = tm("lucky365Championship.prizeList") || [];
const reasonsData = tm("lucky365Championship.reasons") || {};
const termsList = tm("lucky365Championship.termsList") || [];
const whoList = tm("lucky365Championship.whoList") || [];
const advantages = tm("lucky365Championship.advantages") || [];
const limitations = tm("lucky365Championship.limitations") || [];
const maximiseSteps = tm("lucky365Championship.maximiseSteps") || [];
const faqList = tm("lucky365Championship.faqList") || [];

// Manually group titles and descriptions together
const reasons = [
  { title: reasonsData.highValueTitle, desc: reasonsData.highValueDesc },
  { title: reasonsData.monthlyCycleTitle, desc: reasonsData.monthlyCycleDesc },
  { title: reasonsData.transparentTitle, desc: reasonsData.transparentDesc },
  { title: reasonsData.fitsLocalTitle, desc: reasonsData.fitsLocalDesc }
];

const goToJoin = () => {
  window.location.href = routerLinks.lucky365Championship() + "#join";
};
</script>

<style scoped>
.lucky365-championship {
  margin: 0 auto;
  padding: 20px 10px;
  font-family: Arial, sans-serif;
}

/* Banner Section */
.banner-section {
  width: 100%;
  margin-bottom: 40px;
}

.banner-image {
  width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Steps / Prizes Section */
.steps-prizes {
  margin: 0 auto 40px;
  display: flex;
  justify-content: center;
}

.steps-prizes img {
  width: 50%;
  height: auto;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 40px;
}

.action-buttons button {
  padding: 10px 32px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.join-btn,
.register-btn {
  background: #02d1fd;
  color: #fff;
}

.join-btn:hover,
.register-btn:hover {
  opacity: 0.85;
}

/* Iframe */
.iframe-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
}

.iframe-section iframe {
  width: 90%;
  height: 600px;
  border: none;
  border-radius: 12px;
}

/* Text Content */
.championship-content {
  max-width: 900px;
  margin: 0 auto 60px;
  padding: 0 20px;
}

.championship-content h1 {
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0 15px;
}

.championship-content h2 {
  font-size: 18px;
  margin: 25px 0 12px;
  font-weight: bold;
}

.championship-content h3 {
  font-size: 16px;
  margin: 20px 0 10px;
  font-weight: bold;
}

.championship-content p {
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 12px;
}

.championship-content strong {
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

.reason-block {
  margin-bottom: 20px;
}

/* Steps */
.step {
  margin-bottom: 15px;
}

.step p {
  margin: 5px 0;
}

/* Prize Table */
.prize-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 15px;
}

.prize-table th,
.prize-table td {
  border: 1px solid #ddd;
  padding: 8px 10px;
  text-align: left;
}

.prize-table th {
  background-color: #f7f7f7;
  font-weight: bold;
}

.prize-note {
  margin-top: 10px;
  font-size: 14px;
  color: #555;
  line-height: 1.5;
}

/* Lists */
.championship-content ul,
.championship-content ol {
  margin: 12px 0 20px;
  padding-left: 20px;
}

.championship-content li {
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
  .lucky365-championship {
    padding: 15px 8px;
  }

  .banner-section {
    margin-bottom: 30px;
  }

  .banner-image {
    max-height: 250px;
    border-radius: 8px;
  }

  .steps-prizes img {
    width: 90%;
    max-width: 320px;
  }

  .action-buttons {
    flex-direction: column;
    gap: 15px;
  }

  .action-buttons button {
    width: 80%;
    font-size: 14px;
    padding: 10px 0;
  }

  .iframe-section iframe {
    width: 100%;
    height: 550px;
    border-radius: 8px;
  }

  .championship-content {
    padding: 0 10px;
  }

  .championship-content h1 {
    font-size: 20px;
  }

  .championship-content h2 {
    font-size: 16px;
  }

  .championship-content h3 {
    font-size: 15px;
  }

  .championship-content p {
    font-size: 14px;
  }

  .prize-table {
    font-size: 13px;
  }

  .prize-table th,
  .prize-table td {
    padding: 6px;
  }

  .prize-note {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .championship-content h1 {
    font-size: 18px;
  }

  .championship-content h2 {
    font-size: 15px;
  }

  .championship-content h3 {
    font-size: 14px;
  }

  .championship-content p {
    font-size: 13px;
  }

  .prize-table {
    font-size: 12px;
  }

  .prize-table th,
  .prize-table td {
    padding: 5px 6px;
  }
}
</style>