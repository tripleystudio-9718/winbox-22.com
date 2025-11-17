<template>
  <ThreeColumnContent>
    <div class="rescue-bonus">
      <!-- Video Section -->
      <div class="video-section">
        <iframe
          src="https://www.youtube.com/embed/xkNTnDdLP-g"
          title="Winbox88 Rescue Bonus"
          loading="lazy"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <!-- Main Content -->
      <div class="bonus-content">
        <h1>{{ $t('rescueBonus.heading') }}</h1>
        
        <p class="total-claimed"><strong>{{ $t('rescueBonus.totalClaimed') }}</strong></p>
        
        <p class="bonus-status">{{ $t('rescueBonus.bonusStatus') }}</p>
        
        <p class="register-button-section">
          <router-link :to="routerLinks.register()" class="register-button">
            {{ $t('rescueBonus.button.claimRescueBonus') }}
          </router-link>
        </p>

        <!-- Leaderboard Table Section -->
        <div class="table-section">
          <div class="table-container">
            <table id="rescueBonusTable">
              <thead>
                <tr>
                  <th>UID</th>
                  <th>{{ $t('rescueBonus.turnover') }}</th>
                  <th>{{ $t('rescueBonus.bonus') }}</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Banner Image -->
        <div class="banner-section">
          <img 
            :src="rescueBonusBanner" 
            alt="Rescue Bonus - Boost Up to 58,888" 
            class="banner-image"
          />
        </div>

        <h2>{{ $t('rescueBonus.mainTitle') }}</h2>
        <p>{{ $t('rescueBonus.intro') }}</p>

        <h2>{{ $t('rescueBonus.whatTitle') }}</h2>
        <p>{{ $t('rescueBonus.whatPara1') }}</p>
        <p>{{ $t('rescueBonus.whatPara2') }}</p>

        <h2>{{ $t('rescueBonus.howTitle') }}</h2>
        <ol>
          <li v-for="(step, index) in howSteps" :key="index">
            <strong>{{ step.title }}</strong> — {{ step.desc }}
          </li>
        </ol>

        <h2>{{ $t('rescueBonus.bonusRateTitle') }}</h2>
        <table class="bonus-rate-table">
          <thead>
            <tr>
              <th>{{ $t('rescueBonus.weekly') }}</th>
              <th>{{ $t('rescueBonus.cashback') }}</th>
              <th>{{ $t('rescueBonus.bonusLimit') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in bonusRateTable" :key="index">
              <td>{{ row.range }}</td>
              <td>{{ row.rate }}</td>
              <td>{{ row.limit }}</td>
            </tr>
          </tbody>
        </table>
        <p class="note"><em>{{ $t('rescueBonus.bonusRateNote') }}</em></p>

        <img 
            :src="rescueHighBonus" 
            alt="Rescue Bonus High Bonus" 
            class="banner-image"
          />

          <img 
            :src="rescueStandardBonus" 
            alt="Rescue Bonus Standard Bonus" 
            class="banner-image"
          />

        <h2>{{ $t('rescueBonus.eligibilityTitle') }}</h2>
        <ul>
          <li v-for="(item, index) in eligibilityList" :key="index">
            <span v-if="typeof item === 'string'">{{ item }}</span>
            <span v-else>
              {{ item.textBefore }}
              <a :href="item.link" target="_blank" class="homepage-link">{{ item.link }}</a>
              {{ item.textMiddle }}
              <strong>{{ item.referrerCode }}</strong>
            </span>
          </li>
        </ul>

        <h2>{{ $t('rescueBonus.notEligibleTitle') }}</h2>
        <ol>
          <li v-for="(item, index) in notEligibleList" :key="index">
            <strong>{{ item.title }}</strong> — {{ item.desc }}
            <a v-if="item.link" :href="item.link" target="_blank" class="homepage-link">{{ item.linkText }}</a>
            {{ item.descAfter }}
          </li>
        </ol>

        <h2>{{ $t('rescueBonus.rulesTitle') }}</h2>
        <ol>
          <li v-for="(rule, index) in rulesList" :key="index">
            <span v-if="typeof rule === 'string'">{{ rule }}</span>
            <span v-else>
              {{ rule.textBefore }}
              <a :href="`https://${rule.link}`" target="_blank" class="homepage-link">{{ rule.link }}</a>
              {{ rule.textAfter }}
            </span>
          </li>
        </ol>

        <h2>{{ $t('rescueBonus.termsTitle') }}</h2>
        <ul>
          <li v-for="(term, index) in termsList" :key="index">{{ term }}</li>
        </ul>

        <h2>{{ $t('rescueBonus.whyUseTitle') }}</h2>
        <ul>
          <li v-for="(reason, index) in whyUseList" :key="index">{{ reason }}</li>
        </ul>

        <h2>{{ $t('rescueBonus.promotionsTitle') }}</h2>
        <p>{{ $t('rescueBonus.promotionsIntro') }}</p>
        <ul>
          <li v-for="(promo, index) in promotionsList" :key="index">{{ promo }}</li>
        </ul>

        <h2>{{ $t('rescueBonus.faqTitle') }}</h2>
        <div v-for="(faq, index) in faqList" :key="index" class="faq-item">
          <p><strong>Q: {{ faq.q }}</strong></p>
          <p>A: {{ faq.a }}</p>
        </div>

        <p class="register-button-section">
          <router-link :to="routerLinks.register()" class="register-button">
            {{ $t('rescueBonus.button.claimBonus') }}
          </router-link>
        </p>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useNavigation } from "@/components/utils/navigation.js";
import ThreeColumnContent from "@/components/ThreeColumnContent.vue";
import rescueBonusBanner from "@/assets/rescue-bonus-banner.avif";
import rescueHighBonus from "@/assets/rescue-high-bonus.avif";
import rescueStandardBonus from "@/assets/rescue-standard-bonus.avif";

const { tm } = useI18n();
const { routerLinks } = useNavigation();

// Fetch structured arrays/objects
const howSteps = tm("rescueBonus.howSteps") || [];
const bonusRateTable = tm("rescueBonus.bonusRateTable") || [];
const eligibilityList = tm("rescueBonus.eligibilityList") || [];
const notEligibleList = tm("rescueBonus.notEligibleList") || [];
const rulesList = tm("rescueBonus.rulesList") || [];
const termsList = tm("rescueBonus.termsList") || [];
const whyUseList = tm("rescueBonus.whyUseList") || [];
const promotionsList = tm("rescueBonus.promotionsList") || [];
const faqList = tm("rescueBonus.faqList") || [];

// Table data and animation
onMounted(() => {
  const data = [
    { uid: "POW***RR", turnover: "10,285,698.42", bonus: "58888" },
    { uid: "JWE***66", turnover: "8,514,265.20", bonus: "58888" },
    { uid: "YIN***96", turnover: "5,885,622.27", bonus: "58888" },
    { uid: "LIM***86", turnover: "5,362,451.82", bonus: "58888" },
    { uid: "CJJ***88", turnover: "5,050,357.25", bonus: "25000" },
    { uid: "VVN***74", turnover: "5,124,852.13", bonus: "25000" },
    { uid: "LLC***25", turnover: "5,002,268.89", bonus: "25000" },
    { uid: "LUN***99", turnover: "3,811,780.50", bonus: "12000" },
    { uid: "RUC***85", turnover: "2,548,655.00", bonus: "12000" },
    { uid: "FIV***49", turnover: "1,353,370.10", bonus: "12000" },
    { uid: "SBF***23", turnover: "860,159.25", bonus: "5000" },
    { uid: "TBB***97", turnover: "752,256.36", bonus: "5000" },
    { uid: "SKI***13", turnover: "539,285.00", bonus: "5000" },
    { uid: "KAI***98", turnover: "1,450,000.00", bonus: "4800" },
    { uid: "NIC***84", turnover: "1,341,900.00", bonus: "4800" },
    { uid: "APP***T8", turnover: "1,589,394.00", bonus: "4800" },
    { uid: "JER***76", turnover: "541,400.00", bonus: "2350" },
    { uid: "OCT***23", turnover: "793,276.10", bonus: "2350" },
    { uid: "WEE***666", turnover: "625,568.35", bonus: "2350" },
    { uid: "YUU***88", turnover: "181,335.44", bonus: "1200" },
    { uid: "JAM***96", turnover: "210,882.50", bonus: "1200" },
    { uid: "TAI***09", turnover: "146,561.50", bonus: "1200" },
    { uid: "TAY***98", turnover: "109,269.40", bonus: "600" },
    { uid: "POK***89", turnover: "135,890.00", bonus: "600" },
    { uid: "NAN***12", turnover: "168,241.00", bonus: "600" },
    { uid: "SIA***88", turnover: "128,247.00", bonus: "600" },
    { uid: "WAN***02", turnover: "140,000.00", bonus: "600" },
    { uid: "DFC***52", turnover: "58,964.60", bonus: "550" },
    { uid: "MIK***54", turnover: "61,401.32", bonus: "550" },
    { uid: "BOB***13", turnover: "71,608.20", bonus: "550" },
    { uid: "CHY***39", turnover: "58,439.80", bonus: "550" },
    { uid: "AMI***91", turnover: "93,679.00", bonus: "300" },
    { uid: "WII***26", turnover: "95,477.00", bonus: "300" },
    { uid: "YIW***14", turnover: "10,500.00", bonus: "100" },
    { uid: "AZI***99", turnover: "11,982.85", bonus: "100" },
    { uid: "ALA***00", turnover: "24,684.05", bonus: "40" },
    { uid: "WEI***23", turnover: "11,004.00", bonus: "40" },
    { uid: "VAT***83", turnover: "20,429.05", bonus: "40" },
    { uid: "WAL***77", turnover: "4,939.89", bonus: "30" },
    { uid: "HIJ***93", turnover: "7,801.10", bonus: "30" },
    { uid: "HAD***09", turnover: "3,032.19", bonus: "30" },
    { uid: "KEN***88", turnover: "3,980.00", bonus: "20" },
    { uid: "ADR***72", turnover: "3,497.00", bonus: "20" },
    { uid: "MON***01", turnover: "7,148.00", bonus: "20" },
    { uid: "PIJ***90", turnover: "1,499.25", bonus: "15" },
    { uid: "JIA***03", turnover: "2,038.60", bonus: "15" },
    { uid: "KIM***99", turnover: "1,502.56", bonus: "15" },
    { uid: "AFI***87", turnover: "2,332.55", bonus: "8" },
    { uid: "IND***66", turnover: "2,120.60", bonus: "6" },
    { uid: "ZAH***07", turnover: "591.25", bonus: "3" }
  ];

  let startIndex = 0;
  
  function updateTable() {
    const tbody = document.querySelector('#rescueBonusTable tbody');
    if (tbody) {
      tbody.innerHTML = '';
      
      for (let i = 0; i < 5; i++) {
        const row = data[(startIndex + i) % data.length];
        tbody.innerHTML += `<tr><td>${row.uid}</td><td>${row.turnover}</td><td>${row.bonus}</td></tr>`;
      }
      startIndex = (startIndex + 1) % data.length;
    }
  }

  setInterval(updateTable, 2000);
  updateTable();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

.rescue-bonus {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', Arial, sans-serif;
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

/* Main Content */
.bonus-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

.total-claimed {
  font-size: 50px !important;
  font-weight: 700;
  text-align: center;
  color: #000;
}

.bonus-status {
  font-size: 25px !important;
  font-weight: 500;
  text-align: center;
  margin: 10px 0 35px;
  color: #333;
}

.bonus-content h1 {
  font-size: 28px;
  font-weight: 700;
  margin: 30px 0 20px;
  text-align: center;
}

.bonus-content h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 30px 0 15px;
}

.bonus-content p {
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 15px;
}

.bonus-content strong {
  font-weight: 700;
}

/* Homepage Link */
.homepage-link {
  color: #02D1FD;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
}

.homepage-link:hover {
  text-decoration: underline;
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

/* Leaderboard Table */
.table-section {
  width: 100%;
  margin: 50px 0;
  padding: 0;
}

.table-container {
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  justify-content: center;
  padding: 0 20px;
}

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
}

tbody {
    text-align: center;
}

th {
  padding: 16px 20px;
  text-align: center;
  font-size: 18px;
  border-right: 1px solid #2094C7;
  border-bottom: 1px solid #2094C7;
}

td {
    padding: 20px !important;
}

th:last-child,
td:last-child {
  border-right: none;
}

th {
  background: linear-gradient(135deg, #33B4E2 0%, #2094C7 100%);
  color: white;
  font-weight: 700;
  position: sticky;
  top: 0;
  z-index: 10;
  text-transform: uppercase;
  font-size: 16px;
  border-bottom: 2px solid #2094C7;
}

th:first-child {
  border-top-left-radius: 20px;
}

th:last-child {
  border-top-right-radius: 20px;
}

tbody tr:hover {
  background-color: #e3f5ff !important;
}

tbody tr:nth-child(even) {
  background-color: white;
}

tbody tr:nth-child(odd) {
  background-color: #eff8ff;
}

tbody tr:last-child td {
  border-bottom: none;
}

tbody tr:last-child td:first-child {
  border-bottom-left-radius: 20px;
}

tbody tr:last-child td:last-child {
  border-bottom-right-radius: 20px;
}

/* Banner */
.banner-section {
  width: 100%;
  margin: 50px 0;
  padding: 0;
}

.banner-image {
  width: 100%;
  height: auto;
  display: block;
}

/* Bonus Rate Table */
.bonus-rate-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.bonus-rate-table th,
.bonus-rate-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
  font-size: 15px;
}

.bonus-rate-table th {
  background-color: #f5f5f5;
  font-weight: 700;
}

.note {
  font-size: 14px;
  font-style: italic;
  color: #666;
  margin-top: 10px;
}

/* Lists */
.bonus-content ul,
.bonus-content ol {
  margin: 15px 0 25px;
  padding-left: 25px;
}

.bonus-content li {
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

  .bonus-content {
    padding: 15px 10px;
  }

  .total-claimed {
    font-size: 24px;
  }

  .bonus-status {
    font-size: 17px;
  }

  .bonus-content h1 {
    font-size: 24px;
  }

  .bonus-content h2 {
    font-size: 18px;
  }

  table {
    width: 100%;
  }

  th, td {
    font-size: 13px;
    padding: 10px 8px;
  }

  .bonus-rate-table th,
  .bonus-rate-table td {
    font-size: 13px;
    padding: 8px;
  }
}
</style>