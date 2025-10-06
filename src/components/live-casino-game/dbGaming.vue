<template>
<ThreeColumnContent>
  <div class="db-gaming-tab">
    <div class="content-section">
      <h1>{{ $t('dbGaming.title') }}</h1>
      
      <p>{{ $t('dbGaming.intro.description1') }} <a 
          :href="seoLinks.dbGaming()" 
          class="homepage-link"
          @click.prevent="goToDbGaming">{{ $t('dbGaming.intro.linkText') }}</a>{{ $t('dbGaming.intro.description2') }}</p>
      <p>{{ $t('dbGaming.intro.description3') }}</p>
      <p>{{ $t('dbGaming.intro.description4') }}</p>

      <div class="content-block">
        <h2>{{ $t('dbGaming.whyChoose.title') }}</h2>
        <p>{{ $t('dbGaming.whyChoose.description1') }}</p>
        <p>{{ $t('dbGaming.whyChoose.description2') }}</p>
        
        <ul class="dots">
          <li>{{ $t('dbGaming.whyChoose.features.latency') }}</li>
          <li>{{ $t('dbGaming.whyChoose.features.myr') }}</li>
          <li>{{ $t('dbGaming.whyChoose.features.support') }}</li>
          <li>{{ $t('dbGaming.whyChoose.features.mobile') }}</li>
        </ul>
        
        <p>{{ $t('dbGaming.whyChoose.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('dbGaming.whatIs.title') }}</h2>
        <p>{{ $t('dbGaming.whatIs.description1') }}</p>
        <p>{{ $t('dbGaming.whatIs.description2') }}</p>
        
        <ul class="dots">
          <li>{{ $t('dbGaming.whatIs.games.baccarat') }}</li>
          <li>{{ $t('dbGaming.whatIs.games.roulette') }}</li>
          <li>{{ $t('dbGaming.whatIs.games.blackjack') }}</li>
          <li>{{ $t('dbGaming.whatIs.games.others') }}</li>
          <li>{{ $t('dbGaming.whatIs.games.vip') }}</li>
        </ul>
        
        <p>{{ $t('dbGaming.whatIs.features') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('dbGaming.seamlessAccess.title') }}</h2>
        <p>{{ $t('dbGaming.seamlessAccess.description') }}</p>
        
        <ol class="numbered-list">
          <li>{{ $t('dbGaming.seamlessAccess.steps.step1') }} <a 
              :href="seoLinks.home()" 
              class="homepage-link"
              @click.prevent="goToHomepage">Winbox22.com</a></li>
          <li>{{ $t('dbGaming.seamlessAccess.steps.step2') }}</li>
          <li>{{ $t('dbGaming.seamlessAccess.steps.step3') }}</li>
          <li>{{ $t('dbGaming.seamlessAccess.steps.step4') }}</li>
        </ol>
        
        <p>{{ $t('dbGaming.seamlessAccess.advantage') }}</p>
        
        <div class="testimonial">
          <p><em>{{ $t('dbGaming.seamlessAccess.quote') }}</em></p>
        </div>
      </div>

      <div class="content-block">
        <h2>{{ $t('dbGaming.gameHighlights.title') }}</h2>
        
        <h3>{{ $t('dbGaming.gameHighlights.features.studio.title') }}</h3>
        <p>{{ $t('dbGaming.gameHighlights.features.studio.description') }}</p>

        <h3>{{ $t('dbGaming.gameHighlights.features.betting.title') }}</h3>
        <p>{{ $t('dbGaming.gameHighlights.features.betting.description') }}</p>

        <h3>{{ $t('dbGaming.gameHighlights.features.interface.title') }}</h3>
        <p>{{ $t('dbGaming.gameHighlights.features.interface.description') }}</p>

        <h3>{{ $t('dbGaming.gameHighlights.features.cashout.title') }}</h3>
        <p>{{ $t('dbGaming.gameHighlights.features.cashout.description') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('dbGaming.howToStart.title') }}</h2>
        <p>{{ $t('dbGaming.howToStart.description') }}</p>
        
        <h3>{{ $t('dbGaming.howToStart.steps.register.title') }}</h3>
        <p>{{ $t('dbGaming.howToStart.steps.register.description') }} <a 
            :href="seoLinks.home()" 
            class="homepage-link"
            @click.prevent="goToHomepage">Winbox22.com</a> {{ $t('dbGaming.howToStart.steps.register.extra') }}</p>

        <h3>{{ $t('dbGaming.howToStart.steps.deposit.title') }}</h3>
        <p>{{ $t('dbGaming.howToStart.steps.deposit.description') }}</p>
        <ul class="dots">
          <li>{{ $t('dbGaming.howToStart.steps.deposit.methods.fpx') }}</li>
          <li>{{ $t('dbGaming.howToStart.steps.deposit.methods.tng') }}</li>
          <li>{{ $t('dbGaming.howToStart.steps.deposit.methods.usdt') }}</li>
        </ul>
        <p>{{ $t('dbGaming.howToStart.steps.deposit.minimum') }}</p>

        <h3>{{ $t('dbGaming.howToStart.steps.play.title') }}</h3>
        <p>{{ $t('dbGaming.howToStart.steps.play.description') }}</p>

        <h3>{{ $t('dbGaming.howToStart.steps.withdraw.title') }}</h3>
        <p>{{ $t('dbGaming.howToStart.steps.withdraw.description') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('dbGaming.security.title') }}</h2>
        <p>{{ $t('dbGaming.security.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('dbGaming.security.features.ssl') }}</li>
          <li>{{ $t('dbGaming.security.features.twoFactor') }}</li>
          <li>{{ $t('dbGaming.security.features.provably') }}</li>
          <li>{{ $t('dbGaming.security.features.audits') }}</li>
        </ul>
        
        <p>{{ $t('dbGaming.security.platform') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('dbGaming.promotions.title') }}</h2>
        <p>{{ $t('dbGaming.promotions.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('dbGaming.promotions.offers.reload') }}</li>
          <li>{{ $t('dbGaming.promotions.offers.cashback') }}</li>
          <li>{{ $t('dbGaming.promotions.offers.referral') }}</li>
          <li>{{ $t('dbGaming.promotions.offers.festival') }}</li>
        </ul>
        
        <p>{{ $t('dbGaming.promotions.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('dbGaming.performance.title') }}</h2>
        <p>{{ $t('dbGaming.performance.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('dbGaming.performance.tested.networks') }}</li>
          <li>{{ $t('dbGaming.performance.tested.devices') }}</li>
          <li>{{ $t('dbGaming.performance.tested.wifi') }}</li>
        </ul>
        
        <p><strong>{{ $t('dbGaming.performance.results.title') }}</strong></p>
        <ul class="dots">
          <li>{{ $t('dbGaming.performance.results.stability') }}</li>
          <li>{{ $t('dbGaming.performance.results.confirmation') }}</li>
          <li>{{ $t('dbGaming.performance.results.downtime') }}</li>
        </ul>
        
        <p>{{ $t('dbGaming.performance.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('dbGaming.readyToPlay.title') }}</h2>
        <p>{{ $t('dbGaming.readyToPlay.description') }}</p>
        <p>{{ $t('dbGaming.readyToPlay.cta1') }} <a 
            :href="seoLinks.register()" 
            class="homepage-link"
            @click.prevent="goToRegister">{{ $t('dbGaming.readyToPlay.registerButton') }}</a></p>
        <p>{{ $t('dbGaming.readyToPlay.cta2') }} <a 
            :href="seoLinks.login()" 
            class="homepage-link"
            @click.prevent="goToLogin">{{ $t('dbGaming.readyToPlay.loginButton') }}</a> {{ $t('dbGaming.readyToPlay.loginText') }}</p>
        <p>{{ $t('dbGaming.readyToPlay.closing') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('dbGaming.comparison.title') }}</h2>
        
        <div class="table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>{{ $t('dbGaming.comparison.table.headers.feature') }}</th>
                <th>{{ $t('dbGaming.comparison.table.headers.winbox22') }}</th>
                <th>{{ $t('dbGaming.comparison.table.headers.competitorA') }}</th>
                <th>{{ $t('dbGaming.comparison.table.headers.competitorB') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('dbGaming.comparison.table.rows.myr.feature') }}</strong></td>
                <td class="highlight">{{ $t('dbGaming.comparison.table.rows.myr.winbox22') }}</td>
                <td>{{ $t('dbGaming.comparison.table.rows.myr.competitorA') }}</td>
                <td>{{ $t('dbGaming.comparison.table.rows.myr.competitorB') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('dbGaming.comparison.table.rows.payment.feature') }}</strong></td>
                <td class="highlight">{{ $t('dbGaming.comparison.table.rows.payment.winbox22') }}</td>
                <td>{{ $t('dbGaming.comparison.table.rows.payment.competitorA') }}</td>
                <td>{{ $t('dbGaming.comparison.table.rows.payment.competitorB') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('dbGaming.comparison.table.rows.language.feature') }}</strong></td>
                <td class="highlight">{{ $t('dbGaming.comparison.table.rows.language.winbox22') }}</td>
                <td>{{ $t('dbGaming.comparison.table.rows.language.competitorA') }}</td>
                <td>{{ $t('dbGaming.comparison.table.rows.language.competitorB') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('dbGaming.comparison.table.rows.withdrawal.feature') }}</strong></td>
                <td class="highlight">{{ $t('dbGaming.comparison.table.rows.withdrawal.winbox22') }}</td>
                <td>{{ $t('dbGaming.comparison.table.rows.withdrawal.competitorA') }}</td>
                <td>{{ $t('dbGaming.comparison.table.rows.withdrawal.competitorB') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('dbGaming.comparison.table.rows.support.feature') }}</strong></td>
                <td class="highlight">{{ $t('dbGaming.comparison.table.rows.support.winbox22') }}</td>
                <td>{{ $t('dbGaming.comparison.table.rows.support.competitorA') }}</td>
                <td>{{ $t('dbGaming.comparison.table.rows.support.competitorB') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('dbGaming.comparison.table.rows.app.feature') }}</strong></td>
                <td class="highlight">{{ $t('dbGaming.comparison.table.rows.app.winbox22') }}</td>
                <td>{{ $t('dbGaming.comparison.table.rows.app.competitorA') }}</td>
                <td>{{ $t('dbGaming.comparison.table.rows.app.competitorB') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p><em>{{ $t('dbGaming.comparison.note') }}</em></p>
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
  goToDbGaming,
} = useNavigation();
</script>

<style scoped>
.db-gaming-tab {
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
  font-weight: 500;
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