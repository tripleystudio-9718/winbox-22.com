<template>
<ThreeColumnContent>
  <div class="hotroad-tab">
    <div class="content-section">
      <h1>{{ $t('hotroad.title') }}</h1>
      
      <p>{{ $t('hotroad.intro.description1') }} <a 
          :href="seoLinks.hotRoad()" 
          class="homepage-link"
          @click.prevent="goToHotRoad"
          >{{ $t('hotroad.intro.linkText') }}</a> {{ $t('hotroad.intro.description2') }}</p>
      <p>{{ $t('hotroad.intro.description3') }}</p>

      <div class="content-block">
        <h2>{{ $t('hotroad.whyHotroad.title') }}</h2>
        <p>{{ $t('hotroad.whyHotroad.description1') }}</p>
        <p>{{ $t('hotroad.whyHotroad.description2') }}</p>
        <p>{{ $t('hotroad.whyHotroad.description3') }}</p>
        <p>{{ $t('hotroad.whyHotroad.description4') }}</p>
        
        <h3>{{ $t('hotroad.whyHotroad.variants.title') }}</h3>
        <ul class="dots">
          <li><strong>{{ $t('hotroad.whyHotroad.variants.dragon.title') }}</strong> {{ $t('hotroad.whyHotroad.variants.dragon.description') }}</li>
          <li><strong>{{ $t('hotroad.whyHotroad.variants.pingPong.title') }}</strong> {{ $t('hotroad.whyHotroad.variants.pingPong.description') }}</li>
          <li><strong>{{ $t('hotroad.whyHotroad.variants.oneTwo.title') }}</strong> {{ $t('hotroad.whyHotroad.variants.oneTwo.description') }}</li>
          <li><strong>{{ $t('hotroad.whyHotroad.variants.sandwich.title') }}</strong> {{ $t('hotroad.whyHotroad.variants.sandwich.description') }}</li>
        </ul>
        
        <p>{{ $t('hotroad.whyHotroad.tracker') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('hotroad.designedFor.title') }}</h2>
        
        <div class="table-container">
          <table class="features-table">
            <thead>
              <tr>
                <th>{{ $t('hotroad.designedFor.table.headers.feature') }}</th>
                <th>{{ $t('hotroad.designedFor.table.headers.winbox22') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('hotroad.designedFor.table.rows.deposit.feature') }}</strong></td>
                <td>{{ $t('hotroad.designedFor.table.rows.deposit.details') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('hotroad.designedFor.table.rows.currency.feature') }}</strong></td>
                <td>{{ $t('hotroad.designedFor.table.rows.currency.details') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('hotroad.designedFor.table.rows.withdrawals.feature') }}</strong></td>
                <td>{{ $t('hotroad.designedFor.table.rows.withdrawals.details') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('hotroad.designedFor.table.rows.support.feature') }}</strong></td>
                <td>{{ $t('hotroad.designedFor.table.rows.support.details') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('hotroad.designedFor.table.rows.bonuses.feature') }}</strong></td>
                <td>{{ $t('hotroad.designedFor.table.rows.bonuses.details') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('hotroad.designedFor.table.rows.device.feature') }}</strong></td>
                <td>{{ $t('hotroad.designedFor.table.rows.device.details') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>{{ $t('hotroad.designedFor.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('hotroad.howToStart.title') }}</h2>
        
        <ol class="numbered-list">
          <li>{{ $t('hotroad.howToStart.steps.step1') }} <a 
          :href="seoLinks.home()" 
          class="homepage-link"
          @click.prevent="goToHomepage">{{ $t('hotroad.howToStart.steps.step1Link') }}</a></li>
          <li>{{ $t('hotroad.howToStart.steps.step2') }}</li>
          <li>{{ $t('hotroad.howToStart.steps.step3') }}</li>
          <li>{{ $t('hotroad.howToStart.steps.step4') }}</li>
          <li>{{ $t('hotroad.howToStart.steps.step5') }}</li>
          <li>{{ $t('hotroad.howToStart.steps.step6') }}</li>
        </ol>
        
        <p>{{ $t('hotroad.howToStart.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('hotroad.security.title') }}</h2>
        <p>{{ $t('hotroad.security.description1') }}</p>
        <p>{{ $t('hotroad.security.description2') }}</p>
        <p>{{ $t('hotroad.security.description3') }}</p>
        <p>{{ $t('hotroad.security.description4') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('hotroad.dailyRewards.title') }}</h2>
        <p>{{ $t('hotroad.dailyRewards.newPlayer') }}</p>
        
        <p>{{ $t('hotroad.dailyRewards.realValue') }}</p>
        <ul class="dots">
          <li><strong>{{ $t('hotroad.dailyRewards.rewards.dailySpin.title') }}</strong> {{ $t('hotroad.dailyRewards.rewards.dailySpin.description') }}</li>
          <li><strong>{{ $t('hotroad.dailyRewards.rewards.turnover.title') }}</strong> {{ $t('hotroad.dailyRewards.rewards.turnover.description') }}</li>
          <li><strong>{{ $t('hotroad.dailyRewards.rewards.vip.title') }}</strong> {{ $t('hotroad.dailyRewards.rewards.vip.description') }}</li>
        </ul>
        
        <p>{{ $t('hotroad.dailyRewards.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('hotroad.faqs.title') }}</h2>
        
        <h3>{{ $t('hotroad.faqs.questions.whatIs.question') }}</h3>
        <p>{{ $t('hotroad.faqs.questions.whatIs.answer') }}</p>

        <h3>{{ $t('hotroad.faqs.questions.legal.question') }}</h3>
        <p>{{ $t('hotroad.faqs.questions.legal.answer') }}</p>

        <h3>{{ $t('hotroad.faqs.questions.mobile.question') }}</h3>
        <p>{{ $t('hotroad.faqs.questions.mobile.answer') }}</p>

        <h3>{{ $t('hotroad.faqs.questions.deposit.question') }}</h3>
        <p>{{ $t('hotroad.faqs.questions.deposit.answer') }}</p>

        <h3>{{ $t('hotroad.faqs.questions.withdrawals.question') }}</h3>
        <p>{{ $t('hotroad.faqs.questions.withdrawals.answer') }}</p>

        <h3>{{ $t('hotroad.faqs.questions.whyChoose.question') }}</h3>
        <p>{{ $t('hotroad.faqs.questions.whyChoose.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('hotroad.conclusion.title') }}</h2>
        <p>{{ $t('hotroad.conclusion.description1') }}</p>
        <p>{{ $t('hotroad.conclusion.description2') }}</p>
        <p><a 
          :href="seoLinks.login()" 
          class="homepage-link"
          @click.prevent="goToLogin">{{ $t('hotroad.conclusion.loginButton') }}</a> {{ $t('hotroad.conclusion.playersCount') }}</p>
        <p><em>{{ $t('hotroad.conclusion.tagline') }}</em></p>
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
  goToHotRoad,
} = useNavigation();
</script>

<style scoped>
.hotroad-tab {
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

.features-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.features-table th {
  background-color: #02D1FD;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
}

.features-table td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
}

.features-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.features-table tr:hover {
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

  .features-table {
    min-width: 500px;
  }
}
</style>