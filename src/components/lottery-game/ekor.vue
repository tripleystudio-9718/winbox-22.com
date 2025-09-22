<template>
<ThreeColumnContent>
  <div class="ekor-tab">
    <div class="content-section">
        <h1>{{ $t('ekor.intro.title') }}</h1>
      <p>{{ $t('ekor.intro.description1') }}<br>{{ $t('ekor.intro.description2') }}</p>
      <p>{{ $t('ekor.intro.description3') }}<br>{{ $t('ekor.intro.description4') }} <span class="homepage-link" @click="goToEkor">{{ $t('ekor.intro.linkText') }}</span> {{ $t('ekor.intro.description5') }}</p>
      <p v-html="`${$t('ekor.intro.description6')}<br>${$t('ekor.intro.description7')}`"></p>

      <div class="content-block">
        <h2>{{ $t('ekor.comparison.title') }}</h2>
        
        <div class="table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>{{ $t('ekor.comparison.table.headers.platform') }}</th>
                <th>{{ $t('ekor.comparison.table.headers.dataSource') }}</th>
                <th>{{ $t('ekor.comparison.table.headers.transparency') }}</th>
                <th>{{ $t('ekor.comparison.table.headers.userExperience') }}</th>
                <th>{{ $t('ekor.comparison.table.headers.riskLevel') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('ekor.comparison.table.rows.winbox22.platform') }}</strong></td>
                <td class="highlight">{{ $t('ekor.comparison.table.rows.winbox22.dataSource') }}</td>
                <td class="highlight">{{ $t('ekor.comparison.table.rows.winbox22.transparency') }}</td>
                <td class="highlight">{{ $t('ekor.comparison.table.rows.winbox22.userExperience') }}</td>
                <td class="highlight">{{ $t('ekor.comparison.table.rows.winbox22.riskLevel') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('ekor.comparison.table.rows.others.platform') }}</strong></td>
                <td>{{ $t('ekor.comparison.table.rows.others.dataSource') }}</td>
                <td>{{ $t('ekor.comparison.table.rows.others.transparency') }}</td>
                <td>{{ $t('ekor.comparison.table.rows.others.userExperience') }}</td>
                <td>{{ $t('ekor.comparison.table.rows.others.riskLevel') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="note">
          <p><em>{{ $t('ekor.comparison.note') }}</em></p>
        </div>
      </div>

      <div class="content-block">
        <h2>{{ $t('ekor.howItWorks.title') }}</h2>
        <p>{{ $t('ekor.howItWorks.description1') }}</p>
        <p>{{ $t('ekor.howItWorks.description2') }}<br>{{ $t('ekor.howItWorks.description3') }}</p>
        
        <h3>{{ $t('ekor.howItWorks.subtitle') }}</h3>
        <ol class="numbered-list">
          <li>{{ $t('ekor.howItWorks.steps.step1') }}</li>
          <li>{{ $t('ekor.howItWorks.steps.step2') }}</li>
          <li>{{ $t('ekor.howItWorks.steps.step3') }}
            <ul class="sub-list">
              <li>{{ $t('ekor.howItWorks.steps.step3Sub1') }}</li>
              <li>{{ $t('ekor.howItWorks.steps.step3Sub2') }}</li>
            </ul>
          </li>
          <li>{{ $t('ekor.howItWorks.steps.step4') }}</li>
        </ol>
        
        <div class="important-box">
          <p><strong>{{ $t('ekor.howItWorks.important.title') }}</strong></p>
          <p>{{ $t('ekor.howItWorks.important.description1') }}<br>{{ $t('ekor.howItWorks.important.description2') }}</p>
          <p>{{ $t('ekor.howItWorks.important.description3') }}</p>
          <ul class="dots">
            <li>{{ $t('ekor.howItWorks.important.option1') }}</li>
            <li>{{ $t('ekor.howItWorks.important.option2') }}</li>
          </ul>
          <p><strong>{{ $t('ekor.howItWorks.important.conclusion1') }}</strong></p>
          <p>{{ $t('ekor.howItWorks.important.conclusion2') }}</p>
        </div>
      </div>

      <div class="content-block">
        <h2>{{ $t('ekor.supEkor.title') }}</h2>
        <p>{{ $t('ekor.supEkor.description1') }}</p>
        
        <div class="example-box">
          <p><strong>{{ $t('ekor.supEkor.example.title') }}</strong></p>
          <p>{{ $t('ekor.supEkor.example.description1') }}<br>{{ $t('ekor.supEkor.example.description2') }}</p>
        </div>
        
        <p>{{ $t('ekor.supEkor.description2') }}<br>{{ $t('ekor.supEkor.description3') }}</p>
        
        <h3>{{ $t('ekor.supEkor.provides.title') }}</h3>
        <ul class="dots">
          <li>{{ $t('ekor.supEkor.provides.item1') }}</li>
          <li>{{ $t('ekor.supEkor.provides.item2') }}</li>
          <li>{{ $t('ekor.supEkor.provides.item3') }}</li>
        </ul>
        
        <p>{{ $t('ekor.supEkor.clarification1') }}<br>{{ $t('ekor.supEkor.clarification2') }}</p>
        <p><strong>{{ $t('ekor.supEkor.conclusion') }}</strong></p>
      </div>

      <div class="content-block">
        <h2>{{ $t('ekor.whyOthersLie.title') }}</h2>
        <p>{{ $t('ekor.whyOthersLie.description') }}</p>
        
        <ul class="icon-list">
          <li>🔹 {{ $t('ekor.whyOthersLie.reasons.reason1') }}</li>
          <li>🔹 {{ $t('ekor.whyOthersLie.reasons.reason2') }}</li>
          <li>🔹 {{ $t('ekor.whyOthersLie.reasons.reason3') }}</li>
          <li>🔹 {{ $t('ekor.whyOthersLie.reasons.reason4') }}</li>
        </ul>
        
        <div class="test-box">
          <p><strong>{{ $t('ekor.whyOthersLie.test.title') }}</strong></p>
          <p>{{ $t('ekor.whyOthersLie.test.description1') }}<br>{{ $t('ekor.whyOthersLie.test.description2') }}</p>
          <p>{{ $t('ekor.whyOthersLie.test.result1') }}<br>{{ $t('ekor.whyOthersLie.test.result2') }}</p>
        </div>
        
        <p><strong>{{ $t('ekor.whyOthersLie.promise1') }}</strong><br>{{ $t('ekor.whyOthersLie.promise2') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('ekor.howToFind.title') }}</h2>
        <p>{{ $t('ekor.howToFind.description1') }}<br>{{ $t('ekor.howToFind.description2') }}</p>
        
        <div class="steps-container">
          <div class="step-item">
            <p><strong>✅ {{ $t('ekor.howToFind.steps.step1.title') }}</strong></p>
            <ul class="dots">
              <li>{{ $t('ekor.howToFind.steps.step1.sites.magnum') }}</li>
              <li>{{ $t('ekor.howToFind.steps.step1.sites.toto') }}</li>
              <li>{{ $t('ekor.howToFind.steps.step1.sites.damacai') }}</li>
            </ul>
          </div>
          
          <div class="step-item">
            <p><strong>✅ {{ $t('ekor.howToFind.steps.step2.title') }}</strong></p>
            <p>{{ $t('ekor.howToFind.steps.step2.example') }}</p>
          </div>
          
          <div class="step-item">
            <p><strong>✅ {{ $t('ekor.howToFind.steps.step3.title') }}</strong></p>
            <p>{{ $t('ekor.howToFind.steps.step3.sub1') }}<br>{{ $t('ekor.howToFind.steps.step3.sub2') }}</p>
          </div>
          
          <div class="step-item">
            <p><strong>✅ {{ $t('ekor.howToFind.steps.step4.title') }}</strong></p>
          </div>
        </div>
        
        <p><strong>{{ $t('ekor.howToFind.conclusion1') }}</strong></p>
        <p>{{ $t('ekor.howToFind.conclusion2') }}</p>
        <p><strong>{{ $t('ekor.howToFind.conclusion3') }}</strong></p>
        <p>{{ $t('ekor.howToFind.conclusion4') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('ekor.conclusion.title') }}</h2>
        <p>{{ $t('ekor.conclusion.description1') }}<br>{{ $t('ekor.conclusion.description2') }}</p>
        <p>{{ $t('ekor.conclusion.description3') }}<br>{{ $t('ekor.conclusion.description4') }}</p>
        <p>{{ $t('ekor.conclusion.description5') }}<br>{{ $t('ekor.conclusion.description6') }}</p>
        
        <div class="quote-box">
          <p><em>{{ $t('ekor.conclusion.quote') }}</em></p>
        </div>
        
        <p>{{ $t('ekor.conclusion.values1') }}<br>{{ $t('ekor.conclusion.values2') }}<br>{{ $t('ekor.conclusion.values3') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('ekor.faqs.title') }}</h2>
        
        <h3>{{ $t('ekor.faqs.questions.howWorks.question') }}</h3>
        <p>{{ $t('ekor.faqs.questions.howWorks.answer') }}</p>

        <h3>{{ $t('ekor.faqs.questions.liveData.question') }}</h3>
        <p>{{ $t('ekor.faqs.questions.liveData.answer') }}</p>

        <h3>{{ $t('ekor.faqs.questions.supEkor.question') }}</h3>
        <p>{{ $t('ekor.faqs.questions.supEkor.answer') }}</p>

        <h3>{{ $t('ekor.faqs.questions.trustSites.question') }}</h3>
        <p>{{ $t('ekor.faqs.questions.trustSites.answer') }}</p>

        <h3>{{ $t('ekor.faqs.questions.registration.question') }}</h3>
        <p>{{ $t('ekor.faqs.questions.registration.answer') }}</p>

        <h3>{{ $t('ekor.faqs.questions.predictions.question') }}</h3>
        <p>{{ $t('ekor.faqs.questions.predictions.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('ekor.cta.title') }}</h2>
        <p>{{ $t('ekor.cta.description1') }}<br>👉 <span class="homepage-link" @click="goToRegister">{{ $t('ekor.cta.registerButton') }}</span> {{ $t('ekor.cta.description2') }}</p>
        <p><em>{{ $t('ekor.cta.tagline') }}</em></p>
      </div>
    </div>
  </div>
</ThreeColumnContent>
</template>

<script setup>
import { useNavigation } from '@/components/utils/navigation';
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'

const {
  goToRegister,
  goToHomepage,
  goToLogin,
  goToEkor,
} = useNavigation();
</script>

<style scoped>
.ekor-tab {
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

.sub-list {
  padding-left: 20px;
  margin-top: 8px;
}

.sub-list li {
  margin-bottom: 5px;
}

.icon-list {
  padding-left: 0;
  font-size: 14px;
  margin-bottom: 15px;
}

.icon-list li {
  margin-bottom: 8px;
  list-style: none;
}

.table-container {
  overflow-x: auto;
  margin: 15px 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.comparison-table th {
  background-color: #02D1FD;
  color: white;
  padding: 10px 8px;
  text-align: left;
  font-weight: bold;
}

.comparison-table td {
  padding: 10px 8px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
}

.comparison-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.comparison-table tr:hover {
  background-color: #e8f4f8;
}

.comparison-table .highlight {
  background-color: #e8f5e8;
  font-weight: 500;
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

.important-box {
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  padding: 15px;
  margin: 15px 0;
}

.important-box p {
  margin: 8px 0;
  color: #721c24;
}

.example-box {
  background-color: #d1ecf1;
  border: 1px solid #b8daff;
  border-radius: 4px;
  padding: 15px;
  margin: 15px 0;
}

.example-box p {
  margin: 5px 0;
  color: #0c5460;
}

.test-box {
  background-color: #e2e3e5;
  border: 1px solid #d6d8db;
  border-radius: 4px;
  padding: 15px;
  margin: 15px 0;
}

.test-box p {
  margin: 5px 0;
  color: #383d41;
}

.quote-box {
  background-color: #f0f8ff;
  border-left: 4px solid #02D1FD;
  padding: 15px;
  margin: 15px 0;
  border-radius: 4px;
}

.quote-box p {
  margin: 0;
  color: #333;
  font-style: italic;
  font-size: 16px;
}

.steps-container {
  margin: 20px 0;
}

.step-item {
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 4px;
  border-left: 4px solid #02D1FD;
}

.step-item p {
  margin: 8px 0;
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
  .table-container {
    overflow-x: scroll;
  }

  .comparison-table {
    min-width: 700px;
  }
  
  .comparison-table th,
  .comparison-table td {
    padding: 8px 6px;
    font-size: 11px;
  }
}
</style>