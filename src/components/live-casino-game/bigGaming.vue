<template>
<ThreeColumnContent>
  <div class="big-gaming-tab">
    <div class="content-section">
      <h1>{{ $t('bigGaming.title') }}</h1>
      
      <p><a 
          :href="seoLinks.bigGaming()" 
          class="homepage-link"
          @click.prevent="goToBigGaming">{{ $t('bigGaming.intro.linkText') }}</a> {{ $t('bigGaming.intro.description1') }}</p>
      <p>{{ $t('bigGaming.intro.description2') }}</p>
      <p>{{ $t('bigGaming.intro.description3') }}</p>

      <div class="content-block">
        <h2>{{ $t('bigGaming.whyStandOut.title') }}</h2>
        <p>{{ $t('bigGaming.whyStandOut.description1') }}</p>
        
        <ul class="dots">
          <li>{{ $t('bigGaming.whyStandOut.features.streaming') }}</li>
          <li>{{ $t('bigGaming.whyStandOut.features.html5') }}</li>
          <li>{{ $t('bigGaming.whyStandOut.features.latency') }}</li>
          <li>{{ $t('bigGaming.whyStandOut.features.rules') }}</li>
          <li>{{ $t('bigGaming.whyStandOut.features.access') }}</li>
        </ul>
        
        <p>{{ $t('bigGaming.whyStandOut.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('bigGaming.topGames.title') }}</h2>
        <p>{{ $t('bigGaming.topGames.description') }}</p>
        
        <h3>{{ $t('bigGaming.topGames.games.baccarat.title') }}</h3>
        <p>{{ $t('bigGaming.topGames.games.baccarat.description') }}</p>

        <h3>{{ $t('bigGaming.topGames.games.roulette.title') }}</h3>
        <p>{{ $t('bigGaming.topGames.games.roulette.description') }}</p>

        <h3>{{ $t('bigGaming.topGames.games.sicBo.title') }}</h3>
        <p>{{ $t('bigGaming.topGames.games.sicBo.description') }}</p>

        <h3>{{ $t('bigGaming.topGames.games.dragonTiger.title') }}</h3>
        <p>{{ $t('bigGaming.topGames.games.dragonTiger.description') }}</p>

        <h3>{{ $t('bigGaming.topGames.games.bullBull.title') }}</h3>
        <p>{{ $t('bigGaming.topGames.games.bullBull.description') }}</p>

        <h3>{{ $t('bigGaming.topGames.games.fishing.title') }}</h3>
        <p>{{ $t('bigGaming.topGames.games.fishing.description') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('bigGaming.howToPlay.title') }}</h2>
        <p>{{ $t('bigGaming.howToPlay.description') }}</p>
        
        <ol class="numbered-list">
          <li>{{ $t('bigGaming.howToPlay.steps.step1') }} <a 
              :href="seoLinks.home()" 
              class="homepage-link"
              @click.prevent="goToHomepage">Winbox22.com</a> {{ $t('bigGaming.howToPlay.steps.step1Extra') }}</li>
          <li>{{ $t('bigGaming.howToPlay.steps.step2') }}</li>
          <li>{{ $t('bigGaming.howToPlay.steps.step3') }}</li>
          <li>{{ $t('bigGaming.howToPlay.steps.step4') }}</li>
        </ol>
        
        <p>{{ $t('bigGaming.howToPlay.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('bigGaming.security.title') }}</h2>
        <p>{{ $t('bigGaming.security.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('bigGaming.security.features.rng') }}</li>
          <li>{{ $t('bigGaming.security.features.monitoring') }}</li>
          <li>{{ $t('bigGaming.security.features.encryption') }}</li>
          <li>{{ $t('bigGaming.security.features.manipulation') }}</li>
        </ul>
        
        <p>{{ $t('bigGaming.security.platform') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('bigGaming.exclusivePerks.title') }}</h2>
        <p>{{ $t('bigGaming.exclusivePerks.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('bigGaming.exclusivePerks.perks.welcome') }}</li>
          <li>{{ $t('bigGaming.exclusivePerks.perks.cashback') }}</li>
          <li>{{ $t('bigGaming.exclusivePerks.perks.vip') }}</li>
          <li>{{ $t('bigGaming.exclusivePerks.perks.myr') }}</li>
        </ul>
        
        <p>{{ $t('bigGaming.exclusivePerks.demo') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('bigGaming.comparison.title') }}</h2>
        
        <div class="table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>{{ $t('bigGaming.comparison.table.headers.feature') }}</th>
                <th>{{ $t('bigGaming.comparison.table.headers.bigGaming') }}</th>
                <th>{{ $t('bigGaming.comparison.table.headers.generic') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('bigGaming.comparison.table.rows.quality.feature') }}</strong></td>
                <td class="highlight">{{ $t('bigGaming.comparison.table.rows.quality.bigGaming') }}</td>
                <td>{{ $t('bigGaming.comparison.table.rows.quality.generic') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('bigGaming.comparison.table.rows.variety.feature') }}</strong></td>
                <td class="highlight">{{ $t('bigGaming.comparison.table.rows.variety.bigGaming') }}</td>
                <td>{{ $t('bigGaming.comparison.table.rows.variety.generic') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('bigGaming.comparison.table.rows.mobile.feature') }}</strong></td>
                <td class="highlight">{{ $t('bigGaming.comparison.table.rows.mobile.bigGaming') }}</td>
                <td>{{ $t('bigGaming.comparison.table.rows.mobile.generic') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('bigGaming.comparison.table.rows.limits.feature') }}</strong></td>
                <td class="highlight">{{ $t('bigGaming.comparison.table.rows.limits.bigGaming') }}</td>
                <td>{{ $t('bigGaming.comparison.table.rows.limits.generic') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('bigGaming.comparison.table.rows.payout.feature') }}</strong></td>
                <td class="highlight">{{ $t('bigGaming.comparison.table.rows.payout.bigGaming') }}</td>
                <td>{{ $t('bigGaming.comparison.table.rows.payout.generic') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>{{ $t('bigGaming.comparison.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('bigGaming.playToday.title') }}</h2>
        <p>{{ $t('bigGaming.playToday.description') }}</p>
        <p>{{ $t('bigGaming.playToday.cta') }}<br>
        <a 
          :href="seoLinks.register()" 
          class="homepage-link"
          @click.prevent="goToRegister">{{ $t('bigGaming.playToday.registerButton') }}</a></p>
      </div>

      <div class="content-block">
        <h2>{{ $t('bigGaming.faqs.title') }}</h2>
        
        <h3>{{ $t('bigGaming.faqs.questions.whatIs.question') }}</h3>
        <p>{{ $t('bigGaming.faqs.questions.whatIs.answer') }}</p>

        <h3>{{ $t('bigGaming.faqs.questions.available.question') }}</h3>
        <p>{{ $t('bigGaming.faqs.questions.available.answer') }}</p>

        <h3>{{ $t('bigGaming.faqs.questions.download.question') }}</h3>
        <p>{{ $t('bigGaming.faqs.questions.download.answer') }}</p>

        <h3>{{ $t('bigGaming.faqs.questions.fair.question') }}</h3>
        <p>{{ $t('bigGaming.faqs.questions.fair.answer') }}</p>

        <h3>{{ $t('bigGaming.faqs.questions.minBet.question') }}</h3>
        <p>{{ $t('bigGaming.faqs.questions.minBet.answer') }}</p>

        <h3>{{ $t('bigGaming.faqs.questions.free.question') }}</h3>
        <p>{{ $t('bigGaming.faqs.questions.free.answer') }}</p>
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
  goToBigGaming,
} = useNavigation();
</script>

<style scoped>
.big-gaming-tab {
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