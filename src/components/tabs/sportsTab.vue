<template>
  <div class="sports-book-tab">
    <div class="game-grid">
      <div v-for="game in sportsGames" :key="game.id" class="game-card">
        <div class="game-image">
          <img :src="game.image" :alt="game.alt" @click="navigateToGame(game.id)">
        </div>
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
const { goToRegister } = useNavigation();

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
    // For future sport-specific pages, you could add navigation here
    goToRegister();
  }
};
</script>

<style scoped>
.sports-book-tab {
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