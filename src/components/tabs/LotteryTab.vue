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
  </div>
</template>

<script setup>
import ekor from '@/assets/ekor.png';

// Use your existing navigation utilities
import { useNavigation } from '@/components/utils/navigation';
const { goToRegister } = useNavigation();

const navigateToGame = (gameId) => {
  if (gameId === "login") {
    goToRegister();
  } else {
    // For future lottery-specific pages
    goToRegister();
  }
};

const lotteryGames = [
  {
    id: 'login',
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