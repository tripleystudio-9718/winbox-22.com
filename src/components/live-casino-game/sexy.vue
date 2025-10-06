<template>
<ThreeColumnContent>
  <div class="ae-sexy-tab">
    <div class="content-section">
      <h1>{{ $t('aeSexy.title') }}</h1>
      
      <p>{{ $t('aeSexy.intro.description1') }} <a 
          :href="seoLinks.sexy()" 
          class="homepage-link"
          @click.prevent="goToSexy">{{ $t('aeSexy.intro.linkText') }}</a> {{ $t('aeSexy.intro.description2') }}</p>
      <p>{{ $t('aeSexy.intro.description3') }}</p>
      <p>{{ $t('aeSexy.intro.description4') }}</p>

      <div class="content-block">
        <h2>{{ $t('aeSexy.whyStandOut.title') }}</h2>
        <p>{{ $t('aeSexy.whyStandOut.description1') }}</p>
        <p>{{ $t('aeSexy.whyStandOut.description2') }}</p>
        
        <ul class="dots">
          <li>{{ $t('aeSexy.whyStandOut.features.studios') }}</li>
          <li>{{ $t('aeSexy.whyStandOut.features.rounds') }}</li>
          <li>{{ $t('aeSexy.whyStandOut.features.betting') }}</li>
          <li>{{ $t('aeSexy.whyStandOut.features.analytics') }}</li>
          <li>{{ $t('aeSexy.whyStandOut.features.mobile') }}</li>
        </ul>
        
        <p>{{ $t('aeSexy.whyStandOut.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('aeSexy.featuredGames.title') }}</h2>
        <p>{{ $t('aeSexy.featuredGames.description') }}</p>
        
        <div class="table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>{{ $t('aeSexy.featuredGames.table.headers.game') }}</th>
                <th>{{ $t('aeSexy.featuredGames.table.headers.features') }}</th>
                <th>{{ $t('aeSexy.featuredGames.table.headers.betRange') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('aeSexy.featuredGames.table.rows.baccarat.name') }}</strong></td>
                <td>{{ $t('aeSexy.featuredGames.table.rows.baccarat.features') }}</td>
                <td class="highlight">{{ $t('aeSexy.featuredGames.table.rows.baccarat.betRange') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('aeSexy.featuredGames.table.rows.dragonTiger.name') }}</strong></td>
                <td>{{ $t('aeSexy.featuredGames.table.rows.dragonTiger.features') }}</td>
                <td class="highlight">{{ $t('aeSexy.featuredGames.table.rows.dragonTiger.betRange') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('aeSexy.featuredGames.table.rows.sicBo.name') }}</strong></td>
                <td>{{ $t('aeSexy.featuredGames.table.rows.sicBo.features') }}</td>
                <td class="highlight">{{ $t('aeSexy.featuredGames.table.rows.sicBo.betRange') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('aeSexy.featuredGames.table.rows.roulette.name') }}</strong></td>
                <td>{{ $t('aeSexy.featuredGames.table.rows.roulette.features') }}</td>
                <td class="highlight">{{ $t('aeSexy.featuredGames.table.rows.roulette.betRange') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('aeSexy.featuredGames.table.rows.fishPrawnCrab.name') }}</strong></td>
                <td>{{ $t('aeSexy.featuredGames.table.rows.fishPrawnCrab.features') }}</td>
                <td class="highlight">{{ $t('aeSexy.featuredGames.table.rows.fishPrawnCrab.betRange') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>{{ $t('aeSexy.featuredGames.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('aeSexy.seamlessAccess.title') }}</h2>
        <p>{{ $t('aeSexy.seamlessAccess.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('aeSexy.seamlessAccess.features.registration') }}</li>
          <li>{{ $t('aeSexy.seamlessAccess.features.login') }}</li>
          <li>{{ $t('aeSexy.seamlessAccess.features.betting') }}</li>
          <li>{{ $t('aeSexy.seamlessAccess.features.languages') }}</li>
          <li>{{ $t('aeSexy.seamlessAccess.features.demo') }}</li>
        </ul>
        
        <p>{{ $t('aeSexy.seamlessAccess.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('aeSexy.highStakes.title') }}</h2>
        <p>{{ $t('aeSexy.highStakes.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('aeSexy.highStakes.features.ceiling') }}</li>
          <li>{{ $t('aeSexy.highStakes.features.threshold') }}</li>
          <li>{{ $t('aeSexy.highStakes.features.results') }}</li>
          <li>{{ $t('aeSexy.highStakes.features.interaction') }}</li>
        </ul>
        
        <p>{{ $t('aeSexy.highStakes.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('aeSexy.howToStart.title') }}</h2>
        <p>{{ $t('aeSexy.howToStart.description') }}</p>
        
        <ol class="numbered-list">
          <li>
            <strong>{{ $t('aeSexy.howToStart.steps.step1.title') }}</strong><br>
            {{ $t('aeSexy.howToStart.steps.step1.description') }} <a 
              :href="seoLinks.home()" 
              class="homepage-link"
              @click.prevent="goToHomepage">Winbox22.com</a> {{ $t('aeSexy.howToStart.steps.step1.extra') }}
          </li>
          <li>
            <strong>{{ $t('aeSexy.howToStart.steps.step2.title') }}</strong><br>
            {{ $t('aeSexy.howToStart.steps.step2.description') }}
          </li>
          <li>
            <strong>{{ $t('aeSexy.howToStart.steps.step3.title') }}</strong><br>
            {{ $t('aeSexy.howToStart.steps.step3.description') }}
          </li>
        </ol>
        
        <p>{{ $t('aeSexy.howToStart.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('aeSexy.trustedTechnology.title') }}</h2>
        <p>{{ $t('aeSexy.trustedTechnology.description1') }}</p>
        <p>{{ $t('aeSexy.trustedTechnology.description2') }}</p>
        
        <ul class="dots">
          <li>{{ $t('aeSexy.trustedTechnology.features.stability') }}</li>
          <li>{{ $t('aeSexy.trustedTechnology.features.gameplay') }}</li>
          <li>{{ $t('aeSexy.trustedTechnology.features.transactions') }}</li>
        </ul>
        
        <p>{{ $t('aeSexy.trustedTechnology.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('aeSexy.playResponsibly.title') }}</h2>
        <p>{{ $t('aeSexy.playResponsibly.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('aeSexy.playResponsibly.features.encrypted') }}</li>
          <li>{{ $t('aeSexy.playResponsibly.features.monitored') }}</li>
          <li>{{ $t('aeSexy.playResponsibly.features.support') }}</li>
        </ul>
        
        <p>{{ $t('aeSexy.playResponsibly.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('aeSexy.readyToPlay.title') }}</h2>
        <p>{{ $t('aeSexy.readyToPlay.description') }}</p>
        <p><a 
          :href="seoLinks.login()" 
          class="homepage-link"
          @click.prevent="goToLogin">{{ $t('aeSexy.readyToPlay.loginButton') }}</a> {{ $t('aeSexy.readyToPlay.cta') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('aeSexy.faqs.title') }}</h2>
        
        <h3>{{ $t('aeSexy.faqs.questions.whatIs.question') }}</h3>
        <p>{{ $t('aeSexy.faqs.questions.whatIs.answer') }}</p>

        <h3>{{ $t('aeSexy.faqs.questions.mobile.question') }}</h3>
        <p>{{ $t('aeSexy.faqs.questions.mobile.answer') }}</p>

        <h3>{{ $t('aeSexy.faqs.questions.download.question') }}</h3>
        <p>{{ $t('aeSexy.faqs.questions.download.answer') }}</p>

        <h3>{{ $t('aeSexy.faqs.questions.minBet.question') }}</h3>
        <p>{{ $t('aeSexy.faqs.questions.minBet.answer') }}</p>

        <h3>{{ $t('aeSexy.faqs.questions.free.question') }}</h3>
        <p>{{ $t('aeSexy.faqs.questions.free.answer') }}</p>

        <h3>{{ $t('aeSexy.faqs.questions.licensed.question') }}</h3>
        <p>{{ $t('aeSexy.faqs.questions.licensed.answer') }}</p>
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
  goToSexy,
} = useNavigation();
</script>

<style scoped>
.ae-sexy-tab {
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
  background-color: #e8f5e8;
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