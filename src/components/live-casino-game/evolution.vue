<template>
<ThreeColumnContent>
  <div class="evolution-tab">
    <div class="content-section">
      <h1>{{ $t('evolution.title') }}</h1>
      
      <h2>{{ $t('evolution.subtitle') }}</h2>
      <p>{{ $t('evolution.intro.description1') }} 
        <a 
          :href="seoLinks.home()" 
          class="homepage-link"
          @click.prevent="goToHomepage">{{ $t('evolution.intro.linkText') }}</a>{{ $t('evolution.intro.description2') }}</p>
      <p>{{ $t('evolution.intro.description3') }}</p>

      <div class="content-block">
        <h2>{{ $t('evolution.whyEvolution.title') }}</h2>
        <p><a 
          :href="seoLinks.evolution()" 
          class="homepage-link"
          @click.prevent="goToEvolution">{{ $t('evolution.whyEvolution.linkText') }}</a> {{ $t('evolution.whyEvolution.description1') }}</p>
        <p>{{ $t('evolution.whyEvolution.description2') }}</p>
        
        <p>{{ $t('evolution.whyEvolution.problems.title') }}</p>
        <ul class="dots">
          <li>{{ $t('evolution.whyEvolution.problems.outdated') }}</li>
          <li>{{ $t('evolution.whyEvolution.problems.downloads') }}</li>
          <li>{{ $t('evolution.whyEvolution.problems.support') }}</li>
          <li>{{ $t('evolution.whyEvolution.problems.currency') }}</li>
        </ul>
        
        <p>{{ $t('evolution.whyEvolution.solution') }}</p>
        <p>{{ $t('evolution.whyEvolution.direct') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('evolution.gamesAvailable.title') }}</h2>
        
        <div class="table-container">
          <table class="games-table">
            <thead>
              <tr>
                <th>{{ $t('evolution.gamesAvailable.table.headers.game') }}</th>
                <th>{{ $t('evolution.gamesAvailable.table.headers.bestFor') }}</th>
                <th>{{ $t('evolution.gamesAvailable.table.headers.feature') }}</th>
                <th>{{ $t('evolution.gamesAvailable.table.headers.price') }}</th>
                <th>{{ $t('evolution.gamesAvailable.table.headers.why') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('evolution.gamesAvailable.table.rows.lightning.game') }}</strong></td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.lightning.bestFor') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.lightning.feature') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.lightning.price') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.lightning.why') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('evolution.gamesAvailable.table.rows.dream.game') }}</strong></td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.dream.bestFor') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.dream.feature') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.dream.price') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.dream.why') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('evolution.gamesAvailable.table.rows.blackjack.game') }}</strong></td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.blackjack.bestFor') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.blackjack.feature') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.blackjack.price') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.blackjack.why') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('evolution.gamesAvailable.table.rows.monopoly.game') }}</strong></td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.monopoly.bestFor') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.monopoly.feature') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.monopoly.price') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.monopoly.why') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('evolution.gamesAvailable.table.rows.andar.game') }}</strong></td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.andar.bestFor') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.andar.feature') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.andar.price') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.andar.why') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('evolution.gamesAvailable.table.rows.baccarat.game') }}</strong></td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.baccarat.bestFor') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.baccarat.feature') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.baccarat.price') }}</td>
                <td>{{ $t('evolution.gamesAvailable.table.rows.baccarat.why') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>{{ $t('evolution.gamesAvailable.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('evolution.howToStart.title') }}</h2>
        
        <ol class="numbered-list">
          <li>{{ $t('evolution.howToStart.steps.step1') }} 
            <a 
          :href="seoLinks.home()" 
          class="homepage-link"
          @click.prevent="goToHomepage">{{ $t('evolution.howToStart.steps.step1Link') }}</a></li>
          <li>{{ $t('evolution.howToStart.steps.step2') }} <strong>{{ $t('evolution.howToStart.steps.step2Bold') }}</strong> {{ $t('evolution.howToStart.steps.step2Continued') }}</li>
          <li>{{ $t('evolution.howToStart.steps.step3') }} <strong>{{ $t('evolution.howToStart.steps.step3Bold') }}</strong></li>
          <li>{{ $t('evolution.howToStart.steps.step4') }}</li>
          <li>{{ $t('evolution.howToStart.steps.step5') }}</li>
          <li>{{ $t('evolution.howToStart.steps.step6') }}</li>
        </ol>
        
        <p>{{ $t('evolution.howToStart.simple') }}</p>
        <p>{{ $t('evolution.howToStart.processing') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('evolution.faqs.title') }}</h2>
        
        <h3>{{ $t('evolution.faqs.questions.legal.question') }}</h3>
        <p>{{ $t('evolution.faqs.questions.legal.answer') }}</p>

        <h3>{{ $t('evolution.faqs.questions.app.question') }}</h3>
        <p>{{ $t('evolution.faqs.questions.app.answer') }}</p>

        <h3>{{ $t('evolution.faqs.questions.myr.question') }}</h3>
        <p>{{ $t('evolution.faqs.questions.myr.answer') }}</p>

        <h3>{{ $t('evolution.faqs.questions.support.question') }}</h3>
        <p>{{ $t('evolution.faqs.questions.support.answer') }}</p>

        <h3>{{ $t('evolution.faqs.questions.lag.question') }}</h3>
        <p>{{ $t('evolution.faqs.questions.lag.answer') }}</p>

        <h3>{{ $t('evolution.faqs.questions.rigged.question') }}</h3>
        <p>{{ $t('evolution.faqs.questions.rigged.answer') }}</p>

        <h3>{{ $t('evolution.faqs.questions.different.question') }}</h3>
        <p>{{ $t('evolution.faqs.questions.different.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('evolution.conclusion.title') }}</h2>
        <p>{{ $t('evolution.conclusion.description1') }} <strong>{{ $t('evolution.conclusion.highlight') }}</strong> {{ $t('evolution.conclusion.description2') }}</p>
        <p>{{ $t('evolution.conclusion.description3') }}</p>
        <p>{{ $t('evolution.conclusion.description4') }}</p>
        <p>{{ $t('evolution.conclusion.description5') }}</p>
        <p><a 
          :href="seoLinks.register()" 
          class="homepage-link"
          @click.prevent="goToRegister">{{ $t('evolution.conclusion.registerButton') }}</a> {{ $t('evolution.conclusion.playNow') }}</p>
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
  goToEvolution,
} = useNavigation();

const { seoLinks, routerLinks, getLocalizedPath } = useNavigation()
</script>

<style scoped>
.evolution-tab {
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

.content-section p {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
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

.games-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.games-table th {
  background-color: #02D1FD;
  color: white;
  padding: 10px 8px;
  text-align: left;
  font-weight: bold;
  font-size: 11px;
}

.games-table td {
  padding: 10px 8px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
  font-size: 11px;
}

.games-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.games-table tr:hover {
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

  .games-table {
    min-width: 700px;
  }
  
  .games-table th,
  .games-table td {
    padding: 8px 6px;
    font-size: 10px;
  }
}
</style>