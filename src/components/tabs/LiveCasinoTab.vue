<template>
  <div class="live-game-tab">
    <div class="game-grid">
      <div v-for="game in liveGames" :key="game.id" class="game-card">
        <div class="game-image">
          <img
            :src="game.image"
            :alt="game.alt"
            @click="navigateToGame(game.id)"
          />
        </div>
      </div>
    </div>

    <!-- Content Section Based on Document -->
    <div class="content-section">
      <h1>{{ $t('liveCasino.title') }}</h1>
      
      <p>{{ $t('liveCasino.intro.description1') }}</p>
      <p>{{ $t('liveCasino.intro.description2') }} <span class="homepage-link" @click="goToHomepage">{{ $t('liveCasino.intro.linkText') }}</span> {{ $t('liveCasino.intro.description3') }}<strong>{{ $t('liveCasino.intro.description4') }}</strong>{{ $t('liveCasino.intro.description5') }}</p>
      <p>{{ $t('liveCasino.intro.description6') }}</p>

      <div class="content-block">
        <h2>{{ $t('liveCasino.whyWinbox.title') }}</h2>
        <p>{{ $t('liveCasino.whyWinbox.description') }}</p>

        <h3>{{ $t('liveCasino.whyWinbox.dealers.title') }}</h3>
        <p>{{ $t('liveCasino.whyWinbox.dealers.description') }}</p>

        <h3>{{ $t('liveCasino.whyWinbox.streaming.title') }}</h3>
        <p>{{ $t('liveCasino.whyWinbox.streaming.description') }}</p>

        <h3>{{ $t('liveCasino.whyWinbox.security.title') }}</h3>
        <p>{{ $t('liveCasino.whyWinbox.security.description1') }} 
        <a href="https://www.pagcor.ph/index.php" class="homepage-link" target="_blank">PAGCOR</a> 
        {{ $t('liveCasino.whyWinbox.security.description2') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('liveCasino.providers.title') }}</h2>
        <p>{{ $t('liveCasino.providers.description') }}</p>

        <ul class="dots">
          <li><strong>{{ $t('liveCasino.providers.evolution.title') }}</strong> {{ $t('liveCasino.providers.evolution.description') }}</li>
          <li><strong>{{ $t('liveCasino.providers.sexy.title') }}</strong> {{ $t('liveCasino.providers.sexy.description') }}</li>
          <li><strong>{{ $t('liveCasino.providers.asiaGaming.title') }}</strong> {{ $t('liveCasino.providers.asiaGaming.description') }}</li>
          <li><strong>{{ $t('liveCasino.providers.playtech.title') }}</strong> {{ $t('liveCasino.providers.playtech.description') }}</li>
          <li><strong>{{ $t('liveCasino.providers.bigGaming.title') }}</strong> {{ $t('liveCasino.providers.bigGaming.description') }}</li>
          <li><strong>{{ $t('liveCasino.providers.others.title') }}</strong> {{ $t('liveCasino.providers.others.description') }}</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>{{ $t('liveCasino.games.title') }}</h2>
        <p>{{ $t('liveCasino.games.description') }}</p>

        <h3>{{ $t('liveCasino.games.baccarat.title') }}</h3>
        <p>{{ $t('liveCasino.games.baccarat.description1') }} <span class="homepage-link" @click="goToLiveCasino">{{ $t('liveCasino.games.baccarat.linkText') }}</span> {{ $t('liveCasino.games.baccarat.description2') }}</p>

        <h3>{{ $t('liveCasino.games.roulette.title') }}</h3>
        <p>{{ $t('liveCasino.games.roulette.description') }}</p>

        <h3>{{ $t('liveCasino.games.blackjack.title') }}</h3>
        <p>{{ $t('liveCasino.games.blackjack.description') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('liveCasino.faqs.title') }}</h2>
        
        <h3>{{ $t('liveCasino.faqs.questions.difference.question') }}</h3>
        <p>{{ $t('liveCasino.faqs.questions.difference.answer') }}</p>

        <h3>{{ $t('liveCasino.faqs.questions.fairness.question') }}</h3>
        <p>{{ $t('liveCasino.faqs.questions.fairness.answer') }}</p>

        <h3>{{ $t('liveCasino.faqs.questions.requirements.question') }}</h3>
        <p>{{ $t('liveCasino.faqs.questions.requirements.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('liveCasino.conclusion.title') }}</h2>
        <p>{{ $t('liveCasino.conclusion.description') }}</p>
        <p>{{ $t('liveCasino.conclusion.loginText1') }}<span class="homepage-link" @click="goToLogin">{{ $t('liveCasino.conclusion.loginText') }}</span> {{ $t('liveCasino.conclusion.playText') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import the live casino provider images in the specified sequence
import evolution from "@/assets/evolution.png";
import sexy from "@/assets/sexy.png";
import hotroad from "@/assets/hot-road.png";
import prettyGaming from "@/assets/pretty-gaming.png";
import ezugi from "@/assets/ezugi.png";
import dbCasino from "@/assets/db-gaming.png";
import playtech from "@/assets/Playtech.png";
import asiaGaming from "@/assets/asia-gaming.png";
import bigGaming from "@/assets/big-gaming.png";
import sv388 from "@/assets/sv388.png";

// Use your existing navigation utilities
import { useNavigation } from '@/components/utils/navigation';

const {
  goToRegister,
  goToHomepage,
  goToLogin,
  goToLiveCasino,
} = useNavigation();

// Define live casino games in the specified sequence
const liveGames = [
  {
    id: "login",
    name: "Evolution",
    image: evolution,
    alt: "Winbox Evolution"
  },
  {
    id: "login",
    name: "AE Sexy",
    image: sexy,
    alt: "Winbox AE Sexy"
  },
  {
    id: "login",
    name: "Hot Road",
    image: hotroad,
    alt: "Winbox Hot Road"
  },
  {
    id: "login",
    name: "Pretty Gaming",
    image: prettyGaming,
    alt: "Winbox Pretty Gaming"
  },
  {
    id: "login",
    name: "Ezugi",
    image: ezugi,
    alt: "Winbox Ezugi"
  },
  {
    id: "login",
    name: "DB Casino",
    image: dbCasino,
    alt: "Winbox DB Casino"
  },
  {
    id: "login",
    name: "Playtech",
    image: playtech,
    alt: "Winbox Playtech"
  },
  {
    id: "login",
    name: "Asia Gaming",
    image: asiaGaming,
    alt: "Winbox Asia Gaming"
  },
  {
    id: "login",
    name: "Big Gaming",
    image: bigGaming,
    alt: "Winbox Big Gaming"
  },
  {
    id: "login",
    name: "SV388",
    image: sv388,
    alt: "Winbox SV388"
  }
];

const navigateToGame = (gameId) => {
  if (gameId === "login") {
    goToRegister();
  } else {
    // For future live casino specific pages
    goToRegister();
  }
};
</script>

<style scoped>
.live-game-tab {
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

/* Content Section - Based on sports betting CSS */
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

/* Lists - exactly like sports betting */
.dots {
  padding-left: 30px;
  font-size: 14px;
}

.dots li {
  margin-bottom: 5px;
}

/* Homepage links - exactly like sports betting */
.homepage-link {
  color: #02D1FD;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

/* Tablet styles - 4 items per row */
@media screen and (min-width: 469px) and (max-width: 768px) {
  .game-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 10px;
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
}
</style>