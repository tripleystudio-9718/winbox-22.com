<template>
  <div class="horsing-tab">
    <div class="game-grid">
      <div v-for="game in horsingGames" :key="game.id" class="game-card">
        <div class="game-image">
          <img :src="game.image" :alt="game.alt" @click="navigateToGame(game.id)">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import rcb_988 from '@/assets/rcb988.png';

// Use your existing navigation utilities
import { useNavigation } from '@/components/utils/navigation';
const { goToRegister } = useNavigation();

const horsingGames = [
  {
    id: 'login',
    name: 'RCB 988',
    image: rcb_988,
    alt: 'Winbox RCB 988'
  },
];

const navigateToGame = (gameId) => {
  if (gameId === 'login') {
    goToRegister();
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