<template>
  <div class="sports-container">
    <div class="sports-grid">
      <div v-for="game in sportsGames" :key="game.id" class="sports-item">
        <div class="sports-image-wrapper">
          <img :src="game.image" :alt="game.alt" @click="navigateToGame(game.id)">
        </div>
      </div>
    </div>

    <!-- Content Section Based on Document -->
    <div class="content-section">
      <h1>{{ $t('sportsBetting.title') }}</h1>
      
      <p v-html="$t('sportsBetting.intro.description1')"></p>
      <p>{{ $t('sportsBetting.intro.description2') }} <span class="homepage-link" @click="goToSportsBetting">{{ $t('sportsBetting.intro.linkText') }}</span> {{ $t('sportsBetting.intro.description3') }}</p>

      <div class="content-block">
        <h2>{{ $t('sportsBetting.providers.title') }}</h2>
        <p>{{ $t('sportsBetting.providers.description1') }} <span class="homepage-link" @click="goToHomepage">{{ $t('sportsBetting.providers.linkText') }}</span> {{ $t('sportsBetting.providers.description2') }}</p>

        <h3>{{ $t('sportsBetting.providers.maxbet.title') }}</h3>
        <p v-html="$t('sportsBetting.providers.maxbet.description')"></p>
        <ul class="dots">
          <li v-html="$t('sportsBetting.providers.maxbet.features.odds')"></li>
          <li v-html="$t('sportsBetting.providers.maxbet.features.live')"></li>
        </ul>

        <h3>{{ $t('sportsBetting.providers.cmd368.title') }}</h3>
        <p v-html="$t('sportsBetting.providers.cmd368.description')"></p>
        <ul class="dots">
          <li v-html="$t('sportsBetting.providers.cmd368.features.markets')"></li>
          <li v-html="$t('sportsBetting.providers.cmd368.features.coverage')"></li>
        </ul>

        <h3>{{ $t('sportsBetting.providers.wickets.title') }}</h3>
        <p>{{ $t('sportsBetting.providers.wickets.description') }}</p>
        <ul class="dots">
          <li v-html="$t('sportsBetting.providers.wickets.features.focus')"></li>
          <li v-html="$t('sportsBetting.providers.wickets.features.diversity')"></li>
        </ul>

        <h3>{{ $t('sportsBetting.providers.bti.title') }}</h3>
        <p>{{ $t('sportsBetting.providers.bti.description') }}</p>
        <ul class="dots">
          <li v-html="$t('sportsBetting.providers.bti.features.trusted')"></li>
          <li v-html="$t('sportsBetting.providers.bti.features.experience')"></li>
        </ul>
      </div>

      <div class="content-block">
        <h2>{{ $t('sportsBetting.analyticalEdge.title') }}</h2>
        <p>{{ $t('sportsBetting.analyticalEdge.description') }}</p>

        <h3>{{ $t('sportsBetting.analyticalEdge.football.title') }}</h3>
        <p v-html="$t('sportsBetting.analyticalEdge.football.description')"></p>
        <ul class="dots">
          <li v-html="$t('sportsBetting.analyticalEdge.football.betTypes.result')"></li>
          <li v-html="$t('sportsBetting.analyticalEdge.football.betTypes.handicap')"></li>
          <li v-html="$t('sportsBetting.analyticalEdge.football.betTypes.totals')"></li>
          <li v-html="$t('sportsBetting.analyticalEdge.football.betTypes.parlay')"></li>
          <li v-html="$t('sportsBetting.analyticalEdge.football.betTypes.score')"></li>
        </ul>
        <p>{{ $t('sportsBetting.analyticalEdge.football.coverage') }}</p>

        <h3>{{ $t('sportsBetting.analyticalEdge.beyond.title') }}</h3>
        <p v-html="$t('sportsBetting.analyticalEdge.beyond.description')"></p>
      </div>

      <div class="content-block">
        <h2>{{ $t('sportsBetting.security.title') }}</h2>
        <p>{{ $t('sportsBetting.security.description') }}</p>
        <ul class="dots">
          <li>
            <strong>{{ $t('sportsBetting.security.features.licensed.title') }}</strong> 
            {{ $t('sportsBetting.security.features.licensed.description1') }} 
            <a href="https://www.pagcor.ph/index.php" class="homepage-link" target="_blank">PAGCOR</a> 
            {{ $t('sportsBetting.security.features.licensed.description2') }}
          </li>
          <li v-html="$t('sportsBetting.security.features.certified')"></li>
          <li v-html="$t('sportsBetting.security.features.financial')"></li>
        </ul>
      </div>

      <div class="content-block">
        <h2>{{ $t('sportsBetting.faqs.title') }}</h2>
        
        <h3>{{ $t('sportsBetting.faqs.questions.providers.question') }}</h3>
        <p>{{ $t('sportsBetting.faqs.questions.providers.answer') }}</p>
        <ul class="dots">
          <li v-html="$t('sportsBetting.faqs.questions.providers.benefits.compare')"></li>
          <li v-html="$t('sportsBetting.faqs.questions.providers.benefits.secure')"></li>
          <li v-html="$t('sportsBetting.faqs.questions.providers.benefits.maximize')"></li>
        </ul>

        <h3>{{ $t('sportsBetting.faqs.questions.trusted.question') }}</h3>
        <p>{{ $t('sportsBetting.faqs.questions.trusted.answer') }}</p>
        <ul class="dots">
          <li v-html="$t('sportsBetting.faqs.questions.trusted.credentials.licensed')"></li>
          <li v-html="$t('sportsBetting.faqs.questions.trusted.credentials.certified')"></li>
          <li v-html="$t('sportsBetting.faqs.questions.trusted.credentials.integrity')"></li>
        </ul>

        <h3>{{ $t('sportsBetting.faqs.questions.live.question') }}</h3>
        <p>{{ $t('sportsBetting.faqs.questions.live.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('sportsBetting.conclusion.title') }}</h2>
        <p>{{ $t('sportsBetting.conclusion.description') }}</p>
        <p><span class="homepage-link" @click="goToLogin">{{ $t('sportsBetting.conclusion.loginText') }}</span> | <span class="homepage-link" @click="goToRegister">{{ $t('sportsBetting.conclusion.betText') }}</span></p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import the sports betting platform images in the specified sequence
import maxbet from '@/assets/maxbet.png';
import cmd368 from '@/assets/cmd368.png';
import wickets9 from '@/assets/9-wickets.png';
import bti from '@/assets/bti.png';

// Use your existing navigation utilities
import { useNavigation } from '@/components/utils/navigation';

const {
  goToRegister,
  goToHomepage,
  goToLogin,
  goToSportsBetting,
} = useNavigation();

// Define sports games in the specified sequence
const sportsGames = [
  {
    id: 'login',
    name: 'Max Bet',
    image: maxbet,
    alt: 'Winbox Max Bet'
  },
  {
    id: 'login',
    name: 'CMD368',
    image: cmd368,
    alt: 'Winbox CMD368'
  },
  {
    id: 'login',
    name: '9 Wickets',
    image: wickets9,
    alt: 'Winbox 9 Wickets'
  },
  {
    id: 'login',
    name: 'BTI',
    image: bti,
    alt: 'Winbox BTI'
  },
];

const navigateToGame = (gameId) => {
  if (gameId === 'login') {
    goToRegister();
  } else {
    goToRegister();
  }
};
</script>

<style scoped>
.sports-container {
  color: white;
}

.sports-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
  padding: 15px;
}

.sports-item {
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.sports-item:hover {
  transform: translateY(-5px);
}

.sports-image-wrapper img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
  display: block;
  cursor: pointer;
  border-radius: 8px;
}

/* Content Section - Based on contactus CSS */
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

/* Lists - exactly like contactus */
.dots {
  padding-left: 30px;
  font-size: 14px;
}

.dots li {
  margin-bottom: 5px;
}

/* Homepage links - exactly like contactus */
.homepage-link {
  color: #02D1FD;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

/* Tablet styles - 4 items per row */
@media screen and (min-width: 469px) and (max-width: 768px) {
  .sports-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 10px;
  }
}

/* Mobile styles - 3 items per row */
@media screen and (max-width: 468px) {
  .sports-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 8px;
  }
  
  .sports-item {
    border-radius: 6px;
  }
}
</style>