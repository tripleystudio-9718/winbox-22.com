<template>
<ThreeColumnContent>
  <div class="sv388-tab">
    <div class="content-section">
      <h1>{{ $t('sv388.title') }}</h1>
      
      <p>{{ $t('sv388.intro.description1') }}</p>
      <p>{{ $t('sv388.intro.description2') }} <span class="homepage-link" @click="goToSV388">{{ $t('sv388.intro.linkText') }}</span> {{ $t('sv388.intro.description3') }}</p>

      <div class="content-block">
        <h2>{{ $t('sv388.comparison.title') }}</h2>
        
        <div class="table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>{{ $t('sv388.comparison.table.headers.feature') }}</th>
                <th>{{ $t('sv388.comparison.table.headers.winbox22') }}</th>
                <th>{{ $t('sv388.comparison.table.headers.competitor') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('sv388.comparison.table.rows.platform.feature') }}</strong></td>
                <td class="highlight">{{ $t('sv388.comparison.table.rows.platform.winbox22') }}</td>
                <td>{{ $t('sv388.comparison.table.rows.platform.competitor') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('sv388.comparison.table.rows.mobile.feature') }}</strong></td>
                <td class="highlight">{{ $t('sv388.comparison.table.rows.mobile.winbox22') }}</td>
                <td>{{ $t('sv388.comparison.table.rows.mobile.competitor') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('sv388.comparison.table.rows.payment.feature') }}</strong></td>
                <td class="highlight">{{ $t('sv388.comparison.table.rows.payment.winbox22') }}</td>
                <td>{{ $t('sv388.comparison.table.rows.payment.competitor') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('sv388.comparison.table.rows.minBet.feature') }}</strong></td>
                <td class="highlight">{{ $t('sv388.comparison.table.rows.minBet.winbox22') }}</td>
                <td>{{ $t('sv388.comparison.table.rows.minBet.competitor') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('sv388.comparison.table.rows.description.feature') }}</strong></td>
                <td class="highlight">{{ $t('sv388.comparison.table.rows.description.winbox22') }}</td>
                <td>{{ $t('sv388.comparison.table.rows.description.competitor') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('sv388.comparison.table.rows.support.feature') }}</strong></td>
                <td class="highlight">{{ $t('sv388.comparison.table.rows.support.winbox22') }}</td>
                <td>{{ $t('sv388.comparison.table.rows.support.competitor') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('sv388.comparison.table.rows.withdrawal.feature') }}</strong></td>
                <td class="highlight">{{ $t('sv388.comparison.table.rows.withdrawal.winbox22') }}</td>
                <td>{{ $t('sv388.comparison.table.rows.withdrawal.competitor') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('sv388.comparison.table.rows.gold.feature') }}</strong></td>
                <td class="highlight">{{ $t('sv388.comparison.table.rows.gold.winbox22') }}</td>
                <td>{{ $t('sv388.comparison.table.rows.gold.competitor') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('sv388.comparison.table.rows.customer.feature') }}</strong></td>
                <td class="highlight">{{ $t('sv388.comparison.table.rows.customer.winbox22') }}</td>
                <td>{{ $t('sv388.comparison.table.rows.customer.competitor') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('sv388.comparison.table.rows.trust.feature') }}</strong></td>
                <td class="highlight">{{ $t('sv388.comparison.table.rows.trust.winbox22') }}</td>
                <td>{{ $t('sv388.comparison.table.rows.trust.competitor') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="note">
          <p><em>{{ $t('sv388.comparison.note') }}</em></p>
        </div>
      </div>

      <div class="content-block">
        <h2>{{ $t('sv388.sabong.title') }}</h2>
        <p>{{ $t('sv388.sabong.description1') }}</p>
        <p>{{ $t('sv388.sabong.description2') }}</p>
        <p>{{ $t('sv388.sabong.description3') }}</p>
        <p>{{ $t('sv388.sabong.description4') }}</p>
        <p>{{ $t('sv388.sabong.minBet') }}<br>{{ $t('sv388.sabong.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('sv388.gold.title') }}</h2>
        <p>{{ $t('sv388.gold.description1') }}</p>
        <p>{{ $t('sv388.gold.description2') }}</p>
        <p>{{ $t('sv388.gold.description3') }}</p>
        <p>{{ $t('sv388.gold.description4') }}</p>
        
        <div class="testimonial">
          <p><strong>{{ $t('sv388.gold.testimonial.label') }}</strong></p>
          <p><em>{{ $t('sv388.gold.testimonial.quote') }}</em></p>
        </div>
      </div>

      <div class="content-block">
        <h2>{{ $t('sv388.howToLogin.title') }}</h2>
        
        <ol class="numbered-list">
          <li>Open <span class="homepage-link" @click="goToHomepage">Winbox22.com</span> on your phone or browser.</li>
          <li>{{ $t('sv388.howToLogin.steps.step2') }}</li>
          <li>{{ $t('sv388.howToLogin.steps.step3') }}</li>
          <li>{{ $t('sv388.howToLogin.steps.step4') }}</li>
          <li>{{ $t('sv388.howToLogin.steps.step5') }}</li>
        </ol>
        
        <p><strong>{{ $t('sv388.howToLogin.conclusion') }}</strong></p>
        <p>{{ $t('sv388.howToLogin.note1') }}</p>
        <p>{{ $t('sv388.howToLogin.note2') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('sv388.whyWinbox.title') }}</h2>
        <p>{{ $t('sv388.whyWinbox.description1') }}</p>
        <p>{{ $t('sv388.whyWinbox.description2') }}</p>
        <p>{{ $t('sv388.whyWinbox.description3') }}</p>
        <p>{{ $t('sv388.whyWinbox.description4') }}</p>
        
        <ul class="dots">
          <li>{{ $t('sv388.whyWinbox.benefits.loading') }}</li>
          <li>{{ $t('sv388.whyWinbox.benefits.odds') }}</li>
          <li>{{ $t('sv388.whyWinbox.benefits.support') }}</li>
          <li>{{ $t('sv388.whyWinbox.benefits.uptime') }}</li>
        </ul>
        
        <p>{{ $t('sv388.whyWinbox.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('sv388.faqs.title') }}</h2>
        
        <h3>{{ $t('sv388.faqs.questions.whatIs.question') }}</h3>
        <p>{{ $t('sv388.faqs.questions.whatIs.answer') }}</p>

        <h3>{{ $t('sv388.faqs.questions.legal.question') }}</h3>
        <p>{{ $t('sv388.faqs.questions.legal.answer') }}</p>

        <h3>{{ $t('sv388.faqs.questions.deposit.question') }}</h3>
        <p>{{ $t('sv388.faqs.questions.deposit.answer') }}</p>

        <h3>{{ $t('sv388.faqs.questions.mobile.question') }}</h3>
        <p>{{ $t('sv388.faqs.questions.mobile.answer') }}</p>

        <h3>{{ $t('sv388.faqs.questions.gold.question') }}</h3>
        <p>{{ $t('sv388.faqs.questions.gold.answer') }}</p>

        <h3>{{ $t('sv388.faqs.questions.googlePlay.question') }}</h3>
        <p>{{ $t('sv388.faqs.questions.googlePlay.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('sv388.conclusion.title') }}</h2>
        <p><span class="homepage-link" @click="goToLogin">{{ $t('sv388.conclusion.loginButton') }}</span> {{ $t('sv388.conclusion.description') }}</p>
        <p><em>{{ $t('sv388.conclusion.disclaimer') }}</em></p>
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
  goToSV388,
} = useNavigation();
</script>

<style scoped>
.sv388-tab {
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

.table-container {
  overflow-x: auto;
  margin: 15px 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.comparison-table th {
  background-color: #02D1FD;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
}

.comparison-table td {
  padding: 10px;
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

.testimonial {
  background-color: #f0f8ff;
  border-left: 4px solid #02D1FD;
  padding: 15px;
  margin: 15px 0;
  border-radius: 4px;
}

.testimonial p {
  margin: 5px 0;
}

.testimonial p:last-child {
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
  .table-container {
    overflow-x: scroll;
  }

  .comparison-table {
    min-width: 600px;
  }
  
  .comparison-table th,
  .comparison-table td {
    padding: 8px;
    font-size: 12px;
  }
}
</style>