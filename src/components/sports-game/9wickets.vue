<template>
<ThreeColumnContent>
  <div class="ninewickets-tab">
    <div class="content-section">
      <h1>{{ $t('nineWickets.title') }}</h1>
      
      <p>{{ $t('nineWickets.subtitle') }}</p>

      <div class="content-block">
        <h2>{{ $t('nineWickets.keyTakeaways.title') }}</h2>
        
        <ul class="dots">
          <li>{{ $t('nineWickets.keyTakeaways.points.trusted') }}</li>
          <li>{{ $t('nineWickets.keyTakeaways.points.official') }}</li>
          <li>{{ $t('nineWickets.keyTakeaways.points.pro') }}</li>
          <li>{{ $t('nineWickets.keyTakeaways.points.links') }}</li>
          <li>{{ $t('nineWickets.keyTakeaways.points.android') }}</li>
          <li>{{ $t('nineWickets.keyTakeaways.points.platform') }}</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>{{ $t('nineWickets.apkDownload.title') }}</h2>
        <p>{{ $t('nineWickets.apkDownload.description1') }}</p>
        <p>{{ $t('nineWickets.apkDownload.description2') }}</p>
        
        <p>{{ $t('nineWickets.apkDownload.security.title') }}</p>
        <ul class="dots">
          <li>{{ $t('nineWickets.apkDownload.security.hosted') }}</li>
          <li>{{ $t('nineWickets.apkDownload.security.scanned') }}</li>
          <li>{{ $t('nineWickets.apkDownload.security.updated') }}</li>
          <li>{{ $t('nineWickets.apkDownload.security.free') }}</li>
        </ul>

        <p>{{ $t('nineWickets.apkDownload.installation.title') }}</p>
        <ol class="numbered-list">
          <li>{{ $t('nineWickets.apkDownload.installation.step1') }}</li>
          <li>{{ $t('nineWickets.apkDownload.installation.step2') }}</li>
          <li>{{ $t('nineWickets.apkDownload.installation.step3') }}</li>
          <li>{{ $t('nineWickets.apkDownload.installation.step4') }}</li>
        </ol>

        <p>
          {{ $t('nineWickets.apkDownload.downloadText') }}
          <a 
          :href="seoLinks.download()" 
          class="homepage-link"
          @click.prevent="goToDownload">{{ $t('nineWickets.apkDownload.downloadButton') }}</a></p>
        <p><em>{{ $t('nineWickets.apkDownload.testimonial') }}</em></p>
      </div>

      <div class="content-block">
        <h2>{{ $t('nineWickets.currentLink.title') }}</h2>
        <p>{{ $t('nineWickets.currentLink.description1') }}</p>
        <p>{{ $t('nineWickets.currentLink.description2') }}</p>
        <p>{{ $t('nineWickets.currentLink.description3') }}</p>
        <p>{{ $t('nineWickets.currentLink.bookmark') }} <a 
          :href="seoLinks.wickets()" 
          class="homepage-link"
          @click.prevent="goToNineWickets">{{ $t('nineWickets.currentLink.bookmarkLink') }}</a></p>
        <p>{{ $t('nineWickets.currentLink.warning') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('nineWickets.pro.title') }}</h2>
        <p>{{ $t('nineWickets.pro.description') }}</p>
        
        <div class="table-container">
          <table class="pro-comparison-table">
            <thead>
              <tr>
                <th>{{ $t('nineWickets.pro.table.headers.feature') }}</th>
                <th>{{ $t('nineWickets.pro.table.headers.standard') }}</th>
                <th>{{ $t('nineWickets.pro.table.headers.pro') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('nineWickets.pro.table.rows.maxBet.feature') }}</strong></td>
                <td>{{ $t('nineWickets.pro.table.rows.maxBet.standard') }}</td>
                <td>{{ $t('nineWickets.pro.table.rows.maxBet.pro') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('nineWickets.pro.table.rows.payout.feature') }}</strong></td>
                <td>{{ $t('nineWickets.pro.table.rows.payout.standard') }}</td>
                <td>{{ $t('nineWickets.pro.table.rows.payout.pro') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('nineWickets.pro.table.rows.tables.feature') }}</strong></td>
                <td>{{ $t('nineWickets.pro.table.rows.tables.standard') }}</td>
                <td>{{ $t('nineWickets.pro.table.rows.tables.pro') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('nineWickets.pro.table.rows.support.feature') }}</strong></td>
                <td>{{ $t('nineWickets.pro.table.rows.support.standard') }}</td>
                <td>{{ $t('nineWickets.pro.table.rows.support.pro') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('nineWickets.pro.table.rows.stability.feature') }}</strong></td>
                <td>{{ $t('nineWickets.pro.table.rows.stability.standard') }}</td>
                <td>{{ $t('nineWickets.pro.table.rows.stability.pro') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>{{ $t('nineWickets.pro.upgrade') }}</p>
        <p><em>{{ $t('nineWickets.pro.statistic') }}</em></p>
      </div>

      <div class="content-block">
        <h2>{{ $t('nineWickets.mistakes.title') }}</h2>
        
        <ul class="dots">
          <li>{{ $t('nineWickets.mistakes.points.blogs') }}</li>
          <li>{{ $t('nineWickets.mistakes.points.expired') }}</li>
          <li>{{ $t('nineWickets.mistakes.points.ios') }}</li>
          <li>{{ $t('nineWickets.mistakes.points.whatsapp') }}</li>
        </ul>
        
        <p>{{ $t('nineWickets.mistakes.official') }}</p>
        <p><em>{{ $t('nineWickets.mistakes.browser') }}</em></p>
      </div>

      <div class="content-block">
        <h2>{{ $t('nineWickets.faqs.title') }}</h2>
        
        <h3>{{ $t('nineWickets.faqs.questions.whatIs.question') }}</h3>
        <p>{{ $t('nineWickets.faqs.questions.whatIs.answer') }}</p>

        <h3>{{ $t('nineWickets.faqs.questions.free.question') }}</h3>
        <p>{{ $t('nineWickets.faqs.questions.free.answer') }}</p>

        <h3>{{ $t('nineWickets.faqs.questions.register.question') }}</h3>
        <p>{{ $t('nineWickets.faqs.questions.register.answer') }}</p>

        <h3>{{ $t('nineWickets.faqs.questions.iphone.question') }}</h3>
        <p>{{ $t('nineWickets.faqs.questions.iphone.answer') }}</p>

        <h3>{{ $t('nineWickets.faqs.questions.linkWork.question') }}</h3>
        <p>{{ $t('nineWickets.faqs.questions.linkWork.answer') }}</p>

        <h3>{{ $t('nineWickets.faqs.questions.safe.question') }}</h3>
        <p>{{ $t('nineWickets.faqs.questions.safe.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('nineWickets.readyToPlay.title') }}</h2>
        <p>{{ $t('nineWickets.readyToPlay.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('nineWickets.readyToPlay.features.latestApk') }}</li>
          <li>{{ $t('nineWickets.readyToPlay.features.workingLink') }}</li>
          <li>{{ $t('nineWickets.readyToPlay.features.proAccess') }}</li>
          <li>{{ $t('nineWickets.readyToPlay.features.support') }}</li>
          <li>{{ $t('nineWickets.readyToPlay.features.malaysian') }}</li>
        </ul>
        
        <p><a 
          :href="seoLinks.login()" 
          class="homepage-link"
          @click.prevent="goToLogin">{{ $t('nineWickets.readyToPlay.loginButton') }}</a>{{ $t('nineWickets.readyToPlay.login-text') }}</p>
        <p><em>{{ $t('nineWickets.readyToPlay.tagline') }}</em></p>
      </div>
    </div>
  </div>
</ThreeColumnContent>
</template>

<script setup>
import { useNavigation } from '@/components/utils/navigation';
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'

const { seoLinks, routerLinks, getLocalizedPath } = useNavigation()

const {
  goToRegister,
  goToHomepage,
  goToLogin,
  goToDownload,
  goToNineWickets,
} = useNavigation();
</script>

<style scoped>
.ninewickets-tab {
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

.pro-comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.pro-comparison-table th {
  background-color: #02D1FD;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
}

.pro-comparison-table td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
}

.pro-comparison-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.pro-comparison-table tr:hover {
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

  .pro-comparison-table {
    min-width: 500px;
  }
}
</style>