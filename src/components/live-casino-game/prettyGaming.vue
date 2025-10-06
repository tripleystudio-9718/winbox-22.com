<template>
<ThreeColumnContent>
  <div class="pretty-gaming-tab">
    <div class="content-section">
      <h1>{{ $t('prettyGaming.title') }}</h1>
      
      <h2>{{ $t('prettyGaming.subtitle') }}</h2>
      
      <p><a 
          :href="seoLinks.prettyGaming()" 
          class="homepage-link"
          @click.prevent="goToPrettyGaming">{{ $t('prettyGaming.intro.linkText') }}</a> {{ $t('prettyGaming.intro.description1') }}</p>
      <p>{{ $t('prettyGaming.intro.description2') }}</p>
      <p>{{ $t('prettyGaming.intro.description3') }}</p>
      <p>{{ $t('prettyGaming.intro.description4') }}</p>

      <div class="content-block">
        <h2>{{ $t('prettyGaming.whyStandOut.title') }}</h2>
        <p>{{ $t('prettyGaming.whyStandOut.description1') }}</p>
        <p>{{ $t('prettyGaming.whyStandOut.description2') }}</p>
        <p>{{ $t('prettyGaming.whyStandOut.description2-1') }}</p>
        <p>{{ $t('prettyGaming.whyStandOut.description3') }}</p>
        <p>{{ $t('prettyGaming.whyStandOut.description4') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('prettyGaming.gamesAvailable.title') }}</h2>
        <p>{{ $t('prettyGaming.gamesAvailable.subtitle') }}</p>
        <p>{{ $t('prettyGaming.gamesAvailable.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('prettyGaming.gamesAvailable.games.baccarat') }}</li>
          <li>{{ $t('prettyGaming.gamesAvailable.games.dragonTiger') }}</li>
          <li>{{ $t('prettyGaming.gamesAvailable.games.roulette') }}</li>
          <li>{{ $t('prettyGaming.gamesAvailable.games.sicBo') }}</li>
          <li>{{ $t('prettyGaming.gamesAvailable.games.andarBahar') }}</li>
        </ul>
        
        <p>{{ $t('prettyGaming.gamesAvailable.cameraViews') }}</p>
        
        <div class="table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>{{ $t('prettyGaming.gamesAvailable.table.headers.game') }}</th>
                <th>{{ $t('prettyGaming.gamesAvailable.table.headers.bestFor') }}</th>
                <th>{{ $t('prettyGaming.gamesAvailable.table.headers.roundTime') }}</th>
                <th>{{ $t('prettyGaming.gamesAvailable.table.headers.limits') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('prettyGaming.gamesAvailable.table.rows.baccarat.game') }}</strong></td>
                <td>{{ $t('prettyGaming.gamesAvailable.table.rows.baccarat.bestFor') }}</td>
                <td>{{ $t('prettyGaming.gamesAvailable.table.rows.baccarat.roundTime') }}</td>
                <td class="highlight">{{ $t('prettyGaming.gamesAvailable.table.rows.baccarat.limits') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('prettyGaming.gamesAvailable.table.rows.dragonTiger.game') }}</strong></td>
                <td>{{ $t('prettyGaming.gamesAvailable.table.rows.dragonTiger.bestFor') }}</td>
                <td>{{ $t('prettyGaming.gamesAvailable.table.rows.dragonTiger.roundTime') }}</td>
                <td class="highlight">{{ $t('prettyGaming.gamesAvailable.table.rows.dragonTiger.limits') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('prettyGaming.gamesAvailable.table.rows.roulette.game') }}</strong></td>
                <td>{{ $t('prettyGaming.gamesAvailable.table.rows.roulette.bestFor') }}</td>
                <td>{{ $t('prettyGaming.gamesAvailable.table.rows.roulette.roundTime') }}</td>
                <td class="highlight">{{ $t('prettyGaming.gamesAvailable.table.rows.roulette.limits') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('prettyGaming.gamesAvailable.table.rows.sicBo.game') }}</strong></td>
                <td>{{ $t('prettyGaming.gamesAvailable.table.rows.sicBo.bestFor') }}</td>
                <td>{{ $t('prettyGaming.gamesAvailable.table.rows.sicBo.roundTime') }}</td>
                <td class="highlight">{{ $t('prettyGaming.gamesAvailable.table.rows.sicBo.limits') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('prettyGaming.gamesAvailable.table.rows.andarBahar.game') }}</strong></td>
                <td>{{ $t('prettyGaming.gamesAvailable.table.rows.andarBahar.bestFor') }}</td>
                <td>{{ $t('prettyGaming.gamesAvailable.table.rows.andarBahar.roundTime') }}</td>
                <td class="highlight">{{ $t('prettyGaming.gamesAvailable.table.rows.andarBahar.limits') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="content-block">
        <h2>{{ $t('prettyGaming.seamlessAccess.title') }}</h2>
        <p>{{ $t('prettyGaming.seamlessAccess.subtitle') }}</p>
        <p>{{ $t('prettyGaming.seamlessAccess.description1') }}</p>
        <p>{{ $t('prettyGaming.seamlessAccess.description2') }} Winbox22.com {{ $t('prettyGaming.seamlessAccess.description2Extra') }}</p>
        <p>{{ $t('prettyGaming.seamlessAccess.description3') }}</p>
        <p>{{ $t('prettyGaming.seamlessAccess.description3-1') }}</p>
        <p>{{ $t('prettyGaming.seamlessAccess.description4') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('prettyGaming.security.title') }}</h2>
        <p>{{ $t('prettyGaming.security.subtitle') }}</p>
        <p>{{ $t('prettyGaming.security.description1') }}</p>
        <p>{{ $t('prettyGaming.security.description2') }}</p>
        <p>{{ $t('prettyGaming.security.description3') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('prettyGaming.promotions.title') }}</h2>
        <p>{{ $t('prettyGaming.promotions.subtitle') }}</p>
        <p>{{ $t('prettyGaming.promotions.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('prettyGaming.promotions.offers.welcome') }}</li>
          <li>{{ $t('prettyGaming.promotions.offers.reload') }}</li>
          <li>{{ $t('prettyGaming.promotions.offers.cashback') }}</li>
          <li>{{ $t('prettyGaming.promotions.offers.seasonal') }}</li>
        </ul>
        
        <p>{{ $t('prettyGaming.promotions.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('prettyGaming.howToStart.title') }}</h2>
        <p>{{ $t('prettyGaming.howToStart.subtitle') }}</p>
        
        <ol class="numbered-list">
          <li><strong>{{ $t('prettyGaming.howToStart.steps.register.title') }}</strong> {{ $t('prettyGaming.howToStart.steps.register.description') }} <a 
              :href="seoLinks.home()" 
              class="homepage-link"
              @click.prevent="goToHomepage">Winbox22.com</a> {{ $t('prettyGaming.howToStart.steps.register.extra') }}</li>
          <li><strong>{{ $t('prettyGaming.howToStart.steps.verify.title') }}</strong> {{ $t('prettyGaming.howToStart.steps.verify.description') }}</li>
          <li><strong>{{ $t('prettyGaming.howToStart.steps.deposit.title') }}</strong> {{ $t('prettyGaming.howToStart.steps.deposit.description') }}</li>
          <li><strong>{{ $t('prettyGaming.howToStart.steps.launch.title') }}</strong> {{ $t('prettyGaming.howToStart.steps.launch.description') }}</li>
          <li><strong>{{ $t('prettyGaming.howToStart.steps.play.title') }}</strong> {{ $t('prettyGaming.howToStart.steps.play.description') }}</li>
        </ol>
        
        <p>{{ $t('prettyGaming.howToStart.appNote') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('prettyGaming.whyTrust.title') }}</h2>
        <p>{{ $t('prettyGaming.whyTrust.subtitle') }}</p>
        <p>{{ $t('prettyGaming.whyTrust.description1') }}</p>
        <p>{{ $t('prettyGaming.whyTrust.description2') }}</p>
        <p>{{ $t('prettyGaming.whyTrust.description3') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('prettyGaming.conclusion.title') }}</h2>
        <p>{{ $t('prettyGaming.conclusion.description1') }}</p>
        <p>{{ $t('prettyGaming.conclusion.description2') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('prettyGaming.readyToJoin.title') }}</h2>
        <p><a 
          :href="seoLinks.login()" 
          class="homepage-link"
          @click.prevent="goToLogin">{{ $t('prettyGaming.readyToJoin.loginButton') }}</a> {{ $t('prettyGaming.readyToJoin.cta') }}</p>
        <p><em>{{ $t('prettyGaming.readyToJoin.disclaimer') }}</em></p>
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
  goToPrettyGaming,
} = useNavigation();
</script>

<style scoped>
.pretty-gaming-tab {
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
  margin-bottom: 12px;
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