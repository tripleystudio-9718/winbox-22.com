<template>
  <div class="lottery-tab">
    <div class="game-grid">
      <div 
        v-for="game in lotteryGames" 
        :key="game.id" 
        class="game-card"
        @click="navigateToGame(game.id)"
      >
        <div class="game-image">
          <img :src="game.image" :alt="game.alt">
        </div>
      </div>
    </div>

    <div class="content-section">
      <license_payment />
      <h1>{{ $t('lottery.title') }}</h1>
      
      <p>{{ $t('lottery.intro.description1') }} <a 
          :href="seoLinks.ekor()" 
          class="homepage-link"
          @click.prevent="goToEkor"
          >{{ $t('lottery.intro.linkText') }}</a> {{ $t('lottery.intro.description2') }}</p>
      <p>{{ $t('lottery.intro.description3') }}</p>
      
      <ul class="dots">
        <li>{{ $t('lottery.intro.features.interface') }}</li>
        <li>{{ $t('lottery.intro.features.betTypes') }}</li>
        <li>{{ $t('lottery.intro.features.rules') }}</li>
        <li>{{ $t('lottery.intro.features.results') }}</li>
      </ul>

      <div class="content-block">
        <h2>{{ $t('lottery.howItWorks.title') }}</h2>
        
        <div class="table-container">
          <table class="game-terms-table">
            <thead>
              <tr>
                <th>{{ $t('lottery.howItWorks.table.headers.term') }}</th>
                <th>{{ $t('lottery.howItWorks.table.headers.meaning') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('lottery.howItWorks.table.rows.fourD.term') }}</strong></td>
                <td>{{ $t('lottery.howItWorks.table.rows.fourD.meaning') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('lottery.howItWorks.table.rows.ekor.term') }}</strong></td>
                <td>{{ $t('lottery.howItWorks.table.rows.ekor.meaning') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('lottery.howItWorks.table.rows.bigSmall.term') }}</strong></td>
                <td>{{ $t('lottery.howItWorks.table.rows.bigSmall.meaning') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('lottery.howItWorks.table.rows.otherBets.term') }}</strong></td>
                <td>{{ $t('lottery.howItWorks.table.rows.otherBets.meaning') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="content-block">
        <h2>{{ $t('lottery.stepByStep.title') }}</h2>
        
        <ol class="numbered-list">
          <li>{{ $t('lottery.stepByStep.steps.step1') }} <strong>Winbox</strong> {{ $t('lottery.stepByStep.steps.step1b') }}</li>
          <li>{{ $t('lottery.stepByStep.steps.step2') }} <strong>{{ $t('lottery.stepByStep.steps.step2b') }}</strong> {{ $t('lottery.stepByStep.steps.step2c') }}</li>
          <li>{{ $t('lottery.stepByStep.steps.step3') }}</li>
          <li>{{ $t('lottery.stepByStep.steps.step4') }}</li>
          <li>{{ $t('lottery.stepByStep.steps.step5') }}</li>
          <li>{{ $t('lottery.stepByStep.steps.step6') }}</li>
          <li>{{ $t('lottery.stepByStep.steps.step7') }}</li>
          <li>{{ $t('lottery.stepByStep.steps.step8') }}</li>
          <li>{{ $t('lottery.stepByStep.steps.step9') }}</li>
        </ol>
      </div>

      <div class="content-block">
        <h2>{{ $t('lottery.odds.title') }}</h2>
        
        <ul class="dots">
          <li v-html="$t('lottery.odds.points.prizeStructure')"></li>
          <li>{{ $t('lottery.odds.points.bigVsSmall') }}</li>
          <li>{{ $t('lottery.odds.points.systemBets') }}</li>
        </ul>
        
        <p>{{ $t('lottery.odds.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('lottery.tips.title') }}</h2>
        
        <ul class="dots">
          <li><strong>{{ $t('lottery.tips.points.startSmall.title') }}</strong> {{ $t('lottery.tips.points.startSmall.description') }}</li>
          <li><strong>{{ $t('lottery.tips.points.mixBets.title') }}</strong> {{ $t('lottery.tips.points.mixBets.description') }}</li>
          <li><strong>{{ $t('lottery.tips.points.trackDraws.title') }}</strong> {{ $t('lottery.tips.points.trackDraws.description') }}</li>
          <li><strong>{{ $t('lottery.tips.points.manageBudget.title') }}</strong> {{ $t('lottery.tips.points.manageBudget.description') }}</li>
          <li><strong>{{ $t('lottery.tips.points.knowDeadlines.title') }}</strong> {{ $t('lottery.tips.points.knowDeadlines.description') }}</li>
          <li><strong>{{ $t('lottery.tips.points.usePromotions.title') }}</strong> {{ $t('lottery.tips.points.usePromotions.description') }}</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>{{ $t('lottery.faqs.title') }}</h2>
        
        <h3>{{ $t('lottery.faqs.questions.bigSmall.question') }}</h3>
        <p>{{ $t('lottery.faqs.questions.bigSmall.answer') }}</p>

        <h3>{{ $t('lottery.faqs.questions.betTypes.question') }}</h3>
        <ul class="dots">
          <li><strong>{{ $t('lottery.faqs.questions.betTypes.answers.roll.title') }}</strong> {{ $t('lottery.faqs.questions.betTypes.answers.roll.description') }}</li>
          <li><strong>{{ $t('lottery.faqs.questions.betTypes.answers.system.title') }}</strong> {{ $t('lottery.faqs.questions.betTypes.answers.system.description') }}</li>
        </ul>

        <h3>{{ $t('lottery.faqs.questions.winners.question') }}</h3>
        <p>{{ $t('lottery.faqs.questions.winners.answer') }}</p>

        <h3>{{ $t('lottery.faqs.questions.claim.question') }}</h3>
        <p>{{ $t('lottery.faqs.questions.claim.answer') }}</p>

        <h3>{{ $t('lottery.faqs.questions.legal.question') }}</h3>
        <p>{{ $t('lottery.faqs.questions.legal.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('lottery.advantages.title') }}</h2>
        
        <ul class="dots">
          <li>{{ $t('lottery.advantages.points.mobile') }}</li>
          <li>{{ $t('lottery.advantages.points.multiple') }}</li>
          <li>{{ $t('lottery.advantages.points.instant') }}</li>
          <li>{{ $t('lottery.advantages.points.transparency') }}</li>
          <li>{{ $t('lottery.advantages.points.control') }}</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>{{ $t('lottery.conclusion.title') }}</h2>
        <p>{{ $t('lottery.conclusion.description1') }} <strong>{{ $t('lottery.conclusion.highlight') }}</strong> {{ $t('lottery.conclusion.description2') }}</p>
        <p>{{ $t('lottery.conclusion.description3') }}</p>
        <p>{{ $t('lottery.conclusion.description4') }} <a 
          :href="seoLinks.register()" 
          class="homepage-link"
          @click.prevent="goToRegister"
          >{{ $t('lottery.conclusion.linkText') }}</a> {{ $t('lottery.conclusion.description5') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ekor from '@/assets/ekor.png';
import license_payment from '../license_payment.vue';

// Use your existing navigation utilities
import { useNavigation } from '@/components/utils/navigation';

const { seoLinks, routerLinks, getLocalizedPath } = useNavigation()

const {
  goToRegister,
  goToHomepage,
  goToLogin,
  goToEkor,
} = useNavigation();

const navigateToGame = (gameId) => {
  if (gameId === "ekor") {
    goToEkor();
  } else {
    // For future lottery-specific pages
    goToRegister();
  }
};

const lotteryGames = [
  {
    id: 'ekor',
    name: 'Ekor',
    image: ekor,
    alt: 'Winbox Ekor'
  },
  // You can add more lottery games here
];
</script>

<style scoped>
.lottery-tab {
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
  cursor: pointer;
}

.game-card:hover {
  transform: translateY(-5px);
}

.game-image img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
  display: block;
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

.game-terms-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.game-terms-table th {
  background-color: #02D1FD;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
}

.game-terms-table td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
}

.game-terms-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.game-terms-table tr:hover {
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

  .game-terms-table {
    min-width: 400px;
  }
}
</style>