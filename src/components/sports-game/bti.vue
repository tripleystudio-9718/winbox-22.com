<template>
<ThreeColumnContent>
  <div class="bti-tab">
    <div class="content-section">
      <h1>{{ $t('bti.title') }}</h1>
      
      <p><a 
          :href="seoLinks.bti()" 
          class="homepage-link"
          @click.prevent="goToBti">{{ $t('bti.intro.linkText') }}</a> {{ $t('bti.intro.description1') }}</p>
      <p>{{ $t('bti.intro.description2') }}</p>
      <p>{{ $t('bti.intro.description3') }}</p>

      <div class="content-block">
        <h2>{{ $t('bti.whyBTI.title') }}</h2>
        
        <div class="table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>{{ $t('bti.whyBTI.table.headers.feature') }}</th>
                <th>{{ $t('bti.whyBTI.table.headers.bti') }}</th>
                <th>{{ $t('bti.whyBTI.table.headers.others') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('bti.whyBTI.table.rows.licence.feature') }}</strong></td>
                <td>{{ $t('bti.whyBTI.table.rows.licence.bti') }}</td>
                <td>{{ $t('bti.whyBTI.table.rows.licence.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('bti.whyBTI.table.rows.sports.feature') }}</strong></td>
                <td>{{ $t('bti.whyBTI.table.rows.sports.bti') }}</td>
                <td>{{ $t('bti.whyBTI.table.rows.sports.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('bti.whyBTI.table.rows.esports.feature') }}</strong></td>
                <td>{{ $t('bti.whyBTI.table.rows.esports.bti') }}</td>
                <td>{{ $t('bti.whyBTI.table.rows.esports.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('bti.whyBTI.table.rows.deposit.feature') }}</strong></td>
                <td>{{ $t('bti.whyBTI.table.rows.deposit.bti') }}</td>
                <td>{{ $t('bti.whyBTI.table.rows.deposit.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('bti.whyBTI.table.rows.support.feature') }}</strong></td>
                <td>{{ $t('bti.whyBTI.table.rows.support.bti') }}</td>
                <td>{{ $t('bti.whyBTI.table.rows.support.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('bti.whyBTI.table.rows.bonuses.feature') }}</strong></td>
                <td>{{ $t('bti.whyBTI.table.rows.bonuses.bti') }}</td>
                <td>{{ $t('bti.whyBTI.table.rows.bonuses.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('bti.whyBTI.table.rows.app.feature') }}</strong></td>
                <td>{{ $t('bti.whyBTI.table.rows.app.bti') }}</td>
                <td>{{ $t('bti.whyBTI.table.rows.app.others') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p><em>{{ $t('bti.whyBTI.note') }}</em></p>
      </div>

      <div class="content-block">
        <h2>{{ $t('bti.betOnWhat.title') }}</h2>
        <p>{{ $t('bti.betOnWhat.description') }}</p>
        
        <h3>{{ $t('bti.betOnWhat.football.title') }}</h3>
        <p>{{ $t('bti.betOnWhat.football.description') }}</p>

        <h3>{{ $t('bti.betOnWhat.basketball.title') }}</h3>
        <p>{{ $t('bti.betOnWhat.basketball.description') }}</p>

        <h3>{{ $t('bti.betOnWhat.tennis.title') }}</h3>
        <p>{{ $t('bti.betOnWhat.tennis.description') }}</p>

        <h3>{{ $t('bti.betOnWhat.esports.title') }}</h3>
        <p>{{ $t('bti.betOnWhat.esports.description') }}</p>
        
        <p>{{ $t('bti.betOnWhat.algorithms') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('bti.howToStart.title') }}</h2>
        
        <ol class="numbered-list">
          <li>{{ $t('bti.howToStart.steps.step1') }}</li>
          <li>{{ $t('bti.howToStart.steps.step2') }}</li>
          <li>{{ $t('bti.howToStart.steps.step3') }}</li>
          <li>{{ $t('bti.howToStart.steps.step4') }}</li>
          <li>{{ $t('bti.howToStart.steps.step5') }}</li>
          <li>{{ $t('bti.howToStart.steps.step6') }}</li>
        </ol>
        
        <p>{{ $t('bti.howToStart.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('bti.security.title') }}</h2>
        <p>{{ $t('bti.security.description') }}</p>
        
        <p>{{ $t('bti.security.backend.title') }}</p>
        <ul class="dots">
          <li>{{ $t('bti.security.backend.risk') }}</li>
          <li>{{ $t('bti.security.backend.monitoring') }}</li>
          <li>{{ $t('bti.security.backend.compliance') }}</li>
        </ul>
        
        <p>{{ $t('bti.security.reliability') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('bti.support.title') }}</h2>
        <p>{{ $t('bti.support.description') }}</p>
        
        <ul class="dots">
          <li><strong>WhatsApp:</strong> {{ $t('bti.support.channels.whatsapp') }}</li>
          <li><strong>Telegram:</strong> {{ $t('bti.support.channels.telegram') }}</li>
          <li><strong>Live Chat:</strong> {{ $t('bti.support.channels.liveChat') }}</li>
        </ul>
        
        <p>{{ $t('bti.support.real') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('bti.vip.title') }}</h2>
        <p>{{ $t('bti.vip.description') }}</p>
        
        <p>{{ $t('bti.vip.gifts.title') }}</p>
        <ul class="dots">
          <li>{{ $t('bti.vip.gifts.iphone') }}</li>
          <li>{{ $t('bti.vip.gifts.rolex') }}</li>
          <li>{{ $t('bti.vip.gifts.motorcycle') }}</li>
          <li>{{ $t('bti.vip.gifts.cash') }}</li>
        </ul>
        
        <p>{{ $t('bti.vip.points') }}</p>
        <p>{{ $t('bti.vip.recognition') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('bti.app.title') }}</h2>
        <p>{{ $t('bti.app.description') }}</p>
        
        <p>{{ $t('bti.app.benefits.title') }}</p>
        <ul class="dots">
          <li>{{ $t('bti.app.benefits.faster') }}</li>
          <li>{{ $t('bti.app.benefits.notifications') }}</li>
          <li>{{ $t('bti.app.benefits.oneTap') }}</li>
          <li>{{ $t('bti.app.benefits.biometric') }}</li>
        </ul>

        <h3>{{ $t('bti.app.android.title') }}</h3>
        <p>{{ $t('bti.app.android.steps') }} 
          <a 
          :href="seoLinks.home()" 
          class="homepage-link"
          @click.prevent="goToHomepage">Winbox22.com</a> {{ $t('bti.app.android.continued') }}</p>

        <h3>{{ $t('bti.app.ios.title') }}</h3>
        <p>{{ $t('bti.app.ios.steps') }} <a 
          :href="seoLinks.home()" 
          class="homepage-link"
          @click.prevent="goToHomepage">Winbox22.com</a> {{ $t('bti.app.ios.continued') }}</p>
        
        <p><em>{{ $t('bti.app.warning') }}</em></p>
      </div>

      <div class="content-block">
        <h2>{{ $t('bti.faqs.title') }}</h2>
        
        <h3>{{ $t('bti.faqs.questions.legal.question') }}</h3>
        <p>{{ $t('bti.faqs.questions.legal.answer') }}</p>

        <h3>{{ $t('bti.faqs.questions.esports.question') }}</h3>
        <p>{{ $t('bti.faqs.questions.esports.answer') }}</p>

        <h3>{{ $t('bti.faqs.questions.deposit.question') }}</h3>
        <p>{{ $t('bti.faqs.questions.deposit.answer') }}</p>

        <h3>{{ $t('bti.faqs.questions.withdrawal.question') }}</h3>
        <p>{{ $t('bti.faqs.questions.withdrawal.answer') }}</p>

        <h3>{{ $t('bti.faqs.questions.app.question') }}</h3>
        <p>{{ $t('bti.faqs.questions.app.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('bti.conclusion.title') }}</h2>
        <p>{{ $t('bti.conclusion.description1') }}</p>
        <p>{{ $t('bti.conclusion.description2') }}</p>
        <p>{{ $t('bti.conclusion.loginButton1') }}<a 
          :href="seoLinks.login()" 
          class="homepage-link"
          @click.prevent="goToLogin">{{ $t('bti.conclusion.loginButton') }}</a></p>
        <p><em>{{ $t('bti.conclusion.note') }}</em></p>
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
  goToBti,
} = useNavigation();

const { seoLinks, routerLinks, getLocalizedPath } = useNavigation()

</script>

<style scoped>
.bti-tab {
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
  font-size: 14px;
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
  padding: 12px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
}

.comparison-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.comparison-table tr:hover {
  background-color: #e8f4f8;
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
}
</style>