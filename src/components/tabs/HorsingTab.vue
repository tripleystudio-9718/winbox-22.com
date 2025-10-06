<template>
  <div class="horsing-tab">
    <div class="game-grid">
      <div v-for="game in horsingGames" :key="game.id" class="game-card">
        <div class="game-image">
          <img :src="game.image" :alt="game.alt" @click="navigateToGame(game.id)">
        </div>
      </div>
    </div>

    <!-- Content Section Based on Document -->
    <div class="content-section">
      <license_payment />
      <h1>{{ $t('horseRacing.title') }}</h1>
      
      <p>{{ $t('horseRacing.intro.description1') }}</p>
      <p>{{ $t('horseRacing.intro.description2') }}</p>
      <p>{{ $t('horseRacing.intro.description3') }} <a 
          :href="seoLinks.horsing()" 
          class="homepage-link"
          @click.prevent="goToHorse"
          >{{ $t('horseRacing.intro.linkText') }}</a>{{ $t('horseRacing.intro.description4') }}</p>
      <p>{{ $t('horseRacing.intro.description5') }}</p>

      <div class="content-block">
        <h2>{{ $t('horseRacing.betTypes.title') }}</h2>
        
        <div class="table-container">
          <table class="bet-types-table">
            <thead>
              <tr>
                <th>{{ $t('horseRacing.betTypes.table.headers.betType') }}</th>
                <th>{{ $t('horseRacing.betTypes.table.headers.bestFor') }}</th>
                <th>{{ $t('horseRacing.betTypes.table.headers.howToWin') }}</th>
                <th>{{ $t('horseRacing.betTypes.table.headers.payoutLevel') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('horseRacing.betTypes.table.rows.win.type') }}</strong></td>
                <td>{{ $t('horseRacing.betTypes.table.rows.win.bestFor') }}</td>
                <td>{{ $t('horseRacing.betTypes.table.rows.win.howToWin') }}</td>
                <td>{{ $t('horseRacing.betTypes.table.rows.win.payout') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('horseRacing.betTypes.table.rows.place.type') }}</strong></td>
                <td>{{ $t('horseRacing.betTypes.table.rows.place.bestFor') }}</td>
                <td>{{ $t('horseRacing.betTypes.table.rows.place.howToWin') }}</td>
                <td>{{ $t('horseRacing.betTypes.table.rows.place.payout') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('horseRacing.betTypes.table.rows.show.type') }}</strong></td>
                <td>{{ $t('horseRacing.betTypes.table.rows.show.bestFor') }}</td>
                <td>{{ $t('horseRacing.betTypes.table.rows.show.howToWin') }}</td>
                <td>{{ $t('horseRacing.betTypes.table.rows.show.payout') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p><em>{{ $t('horseRacing.betTypes.note') }}</em></p>
      </div>

      <div class="content-block">
        <h2>{{ $t('horseRacing.whatIsWinbox.title') }}</h2>
        <p><strong>{{ $t('horseRacing.whatIsWinbox.description1') }}</strong></p>
        <p>{{ $t('horseRacing.whatIsWinbox.description2') }}</p>
        <p>{{ $t('horseRacing.whatIsWinbox.description3') }}</p>
        <p>{{ $t('horseRacing.whatIsWinbox.description4') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('horseRacing.howToBet.title') }}</h2>
        <p><strong>{{ $t('horseRacing.howToBet.description') }}</strong></p>
        <p>{{ $t('horseRacing.howToBet.subtitle') }}</p>
        
        <ol class="numbered-list">
          <li><strong>{{ $t('horseRacing.howToBet.steps.step1.title') }}</strong> {{ $t('horseRacing.howToBet.steps.step1.description') }}</li>
          <li><strong>{{ $t('horseRacing.howToBet.steps.step2.title') }}</strong> {{ $t('horseRacing.howToBet.steps.step2.description') }}</li>
          <li><strong>{{ $t('horseRacing.howToBet.steps.step3.title') }}</strong> {{ $t('horseRacing.howToBet.steps.step3.description') }}</li>
          <li><strong>{{ $t('horseRacing.howToBet.steps.step4.title') }}</strong> {{ $t('horseRacing.howToBet.steps.step4.description') }}</li>
          <li><strong>{{ $t('horseRacing.howToBet.steps.step5.title') }}</strong> {{ $t('horseRacing.howToBet.steps.step5.description') }}</li>
        </ol>
      </div>

      <div class="content-block">
        <h2>{{ $t('horseRacing.basicBets.title') }}</h2>
        <p><strong>{{ $t('horseRacing.basicBets.description') }}</strong></p>
        <p>{{ $t('horseRacing.basicBets.subtitle') }}</p>
        
        <ul class="dots">
          <li><strong>{{ $t('horseRacing.basicBets.types.win.title') }}</strong> {{ $t('horseRacing.basicBets.types.win.description') }}</li>
          <li><strong>{{ $t('horseRacing.basicBets.types.place.title') }}</strong> {{ $t('horseRacing.basicBets.types.place.description') }}</li>
          <li><strong>{{ $t('horseRacing.basicBets.types.show.title') }}</strong> {{ $t('horseRacing.basicBets.types.show.description') }}</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>{{ $t('horseRacing.whyWinbox.title') }}</h2>
        <p><strong>{{ $t('horseRacing.whyWinbox.description') }}</strong></p>
        <p>{{ $t('horseRacing.whyWinbox.subtitle') }}</p>
        
        <ul class="dots">
          <li><strong>{{ $t('horseRacing.whyWinbox.features.security.title') }}</strong> {{ $t('horseRacing.whyWinbox.features.security.description') }}</li>
          <li><strong>{{ $t('horseRacing.whyWinbox.features.support.title') }}</strong> {{ $t('horseRacing.whyWinbox.features.support.description') }}</li>
          <li><strong>{{ $t('horseRacing.whyWinbox.features.mobile.title') }}</strong> {{ $t('horseRacing.whyWinbox.features.mobile.description') }}</li>
          <li><strong>{{ $t('horseRacing.whyWinbox.features.expert.title') }}</strong> {{ $t('horseRacing.whyWinbox.features.expert.description') }}</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>{{ $t('horseRacing.winningStart.title') }}</h2>
        <p>{{ $t('horseRacing.winningStart.description1') }}</p>
        <p>{{ $t('horseRacing.winningStart.description2') }}</p>
        <p><a 
          :href="seoLinks.login()" 
          class="homepage-link"
          @click.prevent="goToLogin">{{ $t('horseRacing.winningStart.linkText') }}</a> {{ $t('horseRacing.winningStart.description3') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('horseRacing.faqs.title') }}</h2>
        
        <h3>{{ $t('horseRacing.faqs.questions.whatIsRcb.question') }}</h3>
        <p>{{ $t('horseRacing.faqs.questions.whatIsRcb.answer') }}</p>

        <h3>{{ $t('horseRacing.faqs.questions.safety.question') }}</h3>
        <p>{{ $t('horseRacing.faqs.questions.safety.answer') }}</p>

        <h3>{{ $t('horseRacing.faqs.questions.easiest.question') }}</h3>
        <p>{{ $t('horseRacing.faqs.questions.easiest.answer') }}</p>

        <h3>{{ $t('horseRacing.faqs.questions.results.question') }}</h3>
        <p>{{ $t('horseRacing.faqs.questions.results.answer') }} <strong>{{ $t('horseRacing.faqs.questions.results.platform') }}</strong>{{ $t('horseRacing.faqs.questions.results.continued') }}</p>

        <h3>{{ $t('horseRacing.faqs.questions.international.question') }}</h3>
        <p>{{ $t('horseRacing.faqs.questions.international.answer') }} <strong>{{ $t('horseRacing.faqs.questions.international.platform') }}</strong> {{ $t('horseRacing.faqs.questions.international.continued') }}</p>

        <h3>{{ $t('horseRacing.faqs.questions.help.question') }}</h3>
        <p>{{ $t('horseRacing.faqs.questions.help.answer') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import rcb_988 from '@/assets/rcb988.png';
import license_payment from '../license_payment.vue';


// Use your existing navigation utilities
import { useNavigation } from '@/components/utils/navigation';

const { seoLinks, routerLinks, getLocalizedPath } = useNavigation()

const {
  goToRegister,
  goToHomepage,
  goToLogin,
  goToHorse,
  goToRcb988,
} = useNavigation();

const horsingGames = [
  {
    id: 'rcb988',
    name: 'RCB 988',
    image: rcb_988,
    alt: 'Winbox RCB 988'
  },
];

const navigateToGame = (gameId) => {
  if (gameId === 'rcb988') {
    goToRcb988();
  } else {
    // For future horse racing specific pages
    goToRegister();
  }
};
</script>

<style scoped>
.horsing-tab {
  color: white;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
  padding: 15px;
}

.game-card {
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.game-card:hover {
  transform: translateY(-5px);
}

.game-image img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
  display: block;
  cursor: pointer;
  border-radius: 8px;
}

/* Content Section - Based on previous components */
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

/* Lists */
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

/* Table styling */
.table-container {
  overflow-x: auto;
  margin: 15px 0;
}

.bet-types-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.bet-types-table th {
  background-color: #02D1FD;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
}

.bet-types-table td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
}

.bet-types-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.bet-types-table tr:hover {
  background-color: #e8f4f8;
}

/* Homepage links */
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

/* Tablet styles - 4 items per row */
@media screen and (min-width: 469px) and (max-width: 768px) {
  .game-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 10px;
  }

  .table-container {
    overflow-x: scroll;
  }
}

/* Mobile styles - 3 items per row */
@media screen and (max-width: 468px) {
  .game-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 8px;
  }

  .game-card {
    border-radius: 6px;
  }

  .table-container {
    overflow-x: scroll;
  }

  .bet-types-table {
    min-width: 500px;
  }
}
</style>