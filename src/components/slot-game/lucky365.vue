<template>
<ThreeColumnContent>
  <div class="lucky365-tab">
    <div class="content-section">
    <img :src="lucky365Banner" alt="winbox lucky 365 banner" class="banner-img">
      <h1>{{ $t('lucky365.title') }}</h1>
      
      <p>{{ $t('lucky365.intro.description') }}</p>

      <div class="content-block">
        <h2>{{ $t('lucky365.topGames.title') }}</h2>
        
        <div class="table-container">
          <table class="games-table">
            <thead>
              <tr>
                <th>{{ $t('lucky365.topGames.table.headers.game') }}</th>
                <th>{{ $t('lucky365.topGames.table.headers.theme') }}</th>
                <th>{{ $t('lucky365.topGames.table.headers.rtp') }}</th>
                <th>{{ $t('lucky365.topGames.table.headers.bestFor') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('lucky365.topGames.table.rows.monkeyKing.game') }}</strong></td>
                <td>{{ $t('lucky365.topGames.table.rows.monkeyKing.theme') }}</td>
                <td>{{ $t('lucky365.topGames.table.rows.monkeyKing.rtp') }}</td>
                <td>{{ $t('lucky365.topGames.table.rows.monkeyKing.bestFor') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('lucky365.topGames.table.rows.fortuneTiger.game') }}</strong></td>
                <td>{{ $t('lucky365.topGames.table.rows.fortuneTiger.theme') }}</td>
                <td>{{ $t('lucky365.topGames.table.rows.fortuneTiger.rtp') }}</td>
                <td>{{ $t('lucky365.topGames.table.rows.fortuneTiger.bestFor') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('lucky365.topGames.table.rows.godOfWealth.game') }}</strong></td>
                <td>{{ $t('lucky365.topGames.table.rows.godOfWealth.theme') }}</td>
                <td>{{ $t('lucky365.topGames.table.rows.godOfWealth.rtp') }}</td>
                <td>{{ $t('lucky365.topGames.table.rows.godOfWealth.bestFor') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('lucky365.topGames.table.rows.dolphinReef.game') }}</strong></td>
                <td>{{ $t('lucky365.topGames.table.rows.dolphinReef.theme') }}</td>
                <td>{{ $t('lucky365.topGames.table.rows.dolphinReef.rtp') }}</td>
                <td>{{ $t('lucky365.topGames.table.rows.dolphinReef.bestFor') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('lucky365.topGames.table.rows.qinShiHuang.game') }}</strong></td>
                <td>{{ $t('lucky365.topGames.table.rows.qinShiHuang.theme') }}</td>
                <td>{{ $t('lucky365.topGames.table.rows.qinShiHuang.rtp') }}</td>
                <td>{{ $t('lucky365.topGames.table.rows.qinShiHuang.bestFor') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>{{ $t('lucky365.topGames.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('lucky365.howToLogin.title') }}</h2>
        
        <ol class="numbered-list">
          <li>{{ $t('lucky365.howToLogin.steps.step1') }} <span class="homepage-link" @click="goToLucky365">{{ $t('lucky365.howToLogin.steps.step1Link') }}</span> {{ $t('lucky365.howToLogin.steps.step1Continued') }}</li>
          <li>{{ $t('lucky365.howToLogin.steps.step2') }}</li>
          <li>{{ $t('lucky365.howToLogin.steps.step3') }}</li>
          <li>{{ $t('lucky365.howToLogin.steps.step4') }}</li>
        </ol>
        
        <p>{{ $t('lucky365.howToLogin.forgotPassword') }}</p>
        <p>{{ $t('lucky365.howToLogin.securityNote') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('lucky365.freeDemo.title') }}</h2>
        <p>{{ $t('lucky365.freeDemo.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('lucky365.freeDemo.features.noRegistration') }}</li>
          <li>{{ $t('lucky365.freeDemo.features.noCardDetails') }}</li>
          <li>{{ $t('lucky365.freeDemo.features.fullAccess') }}</li>
        </ul>
        
        <p>{{ $t('lucky365.freeDemo.statistic') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('lucky365.downloadApk.title') }}</h2>
        <p>{{ $t('lucky365.downloadApk.subtitle') }}</p>
        
        <h3>{{ $t('lucky365.downloadApk.whyDownload.title') }}</h3>
        <ul class="dots">
          <li>{{ $t('lucky365.downloadApk.whyDownload.features.faster') }}</li>
          <li>{{ $t('lucky365.downloadApk.whyDownload.features.notifications') }}</li>
          <li>{{ $t('lucky365.downloadApk.whyDownload.features.oldPhones') }}</li>
        </ul>

        <h3>{{ $t('lucky365.downloadApk.howToInstall.title') }}</h3>
        <ol class="numbered-list">
          <li>{{ $t('lucky365.downloadApk.howToInstall.steps.step1') }} <span class="homepage-link" @click="goToDownload">{{ $t('lucky365.downloadApk.howToInstall.steps.step1Link') }}</span> {{ $t('lucky365.downloadApk.howToInstall.steps.step1Continued') }}</li>
          <li>{{ $t('lucky365.downloadApk.howToInstall.steps.step2') }}</li>
          <li>{{ $t('lucky365.downloadApk.howToInstall.steps.step3') }}</li>
          <li>{{ $t('lucky365.downloadApk.howToInstall.steps.step4') }}</li>
        </ol>
        
        <p><strong>{{ $t('lucky365.downloadApk.warning') }}</strong></p>
      </div>

      <div class="content-block">
        <h2>{{ $t('lucky365.whyChoose.title') }}</h2>
        
        <div class="table-container">
          <table class="features-table">
            <thead>
              <tr>
                <th>{{ $t('lucky365.whyChoose.table.headers.feature') }}</th>
                <th>{{ $t('lucky365.whyChoose.table.headers.whyItMatters') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('lucky365.whyChoose.table.rows.payment.feature') }}</strong></td>
                <td>{{ $t('lucky365.whyChoose.table.rows.payment.description') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('lucky365.whyChoose.table.rows.bonus.feature') }}</strong></td>
                <td>{{ $t('lucky365.whyChoose.table.rows.bonus.description') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('lucky365.whyChoose.table.rows.support.feature') }}</strong></td>
                <td>{{ $t('lucky365.whyChoose.table.rows.support.description') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('lucky365.whyChoose.table.rows.rng.feature') }}</strong></td>
                <td>{{ $t('lucky365.whyChoose.table.rows.rng.description') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('lucky365.whyChoose.table.rows.mobile.feature') }}</strong></td>
                <td>{{ $t('lucky365.whyChoose.table.rows.mobile.description') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="content-block">
        <h2>{{ $t('lucky365.promotions.title') }}</h2>
        
        <ul class="dots">
          <li><strong>{{ $t('lucky365.promotions.dailyReload.title') }}</strong> {{ $t('lucky365.promotions.dailyReload.description') }}</li>
          <li><strong>{{ $t('lucky365.promotions.freeSpins.title') }}</strong> {{ $t('lucky365.promotions.freeSpins.description') }}</li>
          <li><strong>{{ $t('lucky365.promotions.vip.title') }}</strong> {{ $t('lucky365.promotions.vip.description') }}</li>
          <li><strong>{{ $t('lucky365.promotions.referral.title') }}</strong> {{ $t('lucky365.promotions.referral.description') }}</li>
        </ul>
        
        <p>{{ $t('lucky365.promotions.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('lucky365.faqs.title') }}</h2>
        
        <h3>{{ $t('lucky365.faqs.questions.testId.question') }}</h3>
        <p>{{ $t('lucky365.faqs.questions.testId.answer') }}</p>

        <h3>{{ $t('lucky365.faqs.questions.iphone.question') }}</h3>
        <p>{{ $t('lucky365.faqs.questions.iphone.answer') }} <span class="homepage-link" @click="goToLucky365">{{ $t('lucky365.faqs.questions.iphone.link') }}</span>{{ $t('lucky365.faqs.questions.iphone.continued') }}</p>

        <h3>{{ $t('lucky365.faqs.questions.legal.question') }}</h3>
        <p>{{ $t('lucky365.faqs.questions.legal.answer') }}</p>

        <h3>{{ $t('lucky365.faqs.questions.withdrawals.question') }}</h3>
        <p>{{ $t('lucky365.faqs.questions.withdrawals.answer') }}</p>

        <h3>{{ $t('lucky365.faqs.questions.download.question') }}</h3>
        <p>{{ $t('lucky365.faqs.questions.download.answer') }}</p>

        <h3>{{ $t('lucky365.faqs.questions.rigged.question') }}</h3>
        <p>{{ $t('lucky365.faqs.questions.rigged.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('lucky365.conclusion.title') }}</h2>
        <p><span class="homepage-link" @click="goToLogin">{{ $t('lucky365.conclusion.linkText') }}</span> {{ $t('lucky365.conclusion.description') }}</p>
      </div>
    </div>
  </div>
</ThreeColumnContent>
</template>

<script setup>
import { useNavigation } from '@/components/utils/navigation';
import lucky365Banner from "@/assets/lucky365-banner.png";
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'

const {
  goToRegister,
  goToHomepage,
  goToLogin,
  goToLucky365,
  goToDownload,
} = useNavigation();
</script>

<style scoped>
.lucky365-tab {
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

.games-table, .features-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.games-table th, .features-table th {
  background-color: #02D1FD;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
}

.games-table td, .features-table td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
}

.games-table tr:nth-child(even), .features-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.games-table tr:hover, .features-table tr:hover {
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

  .games-table, .features-table {
    min-width: 500px;
  }
}
</style>