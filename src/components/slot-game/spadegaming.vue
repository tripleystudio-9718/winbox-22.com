<template>
  <div class="spadegaming">
    <div class="game-grid">
      <div v-for="game in spadegamingGames" :key="game.id" class="game-card" @click="navigateToRegister">
        <div class="game-image">
          <img :src="game.image" :alt="`winbox spade gaming`" @error="handleImageError" />
        </div>
        <div class="game-button">
          <button v-html="$t('common.Play')"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import button_frame from "@/assets/button-frame.png";
import { useNavigation } from '@/components/utils/navigation';

// Use your existing navigation utilities
const { goToRegister } = useNavigation();

// Function to handle image loading errors
const handleImageError = (event) => {
  event.target.src = button_frame;
  console.error(`Failed to load image: ${event.target.alt}`);
};

// Create a base structure for our games with dynamic imports
const spadegamingGames = ref([]);

// Image URL generator
const getImageUrl = (name) => {
  try {
    return new URL(`/src/assets/spadegaming-img/${name}.png`, import.meta.url)
      .href;
  } catch (error) {
    console.error(`Error loading image ${name}:`, error);
    return button_frame;
  }
};

// Initialize games
onMounted(() => {
  // Generate games dynamically (85 games for Spadegaming)
  spadegamingGames.value = Array.from({ length: 85 }, (_, i) => {
    const gameNumber = i + 1;
    return {
      id: `spadegaming${gameNumber}`,
      name: `Spadegaming Game ${gameNumber}`,
      image: getImageUrl(`spadegaming${gameNumber}`),
    };
  });
});

// Use navigation utility for automatic language detection
const navigateToRegister = () => {
  goToRegister();
};
</script>

<style scoped>
.spadegaming {
  color: white;
  min-height: 100vh;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  padding: 15px;
}

.game-card {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

.game-image {
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 10px;
}

.game-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  border-radius: 12px;
  margin: 0;
  padding: 0;
}

.game-button {
  width: 100%;
  padding: 0;
  margin: 0;
}

.game-button button {
  width: 100%;
  background-image: url("@/assets/main-button.png");
  background-size: 100% 100%;
  background-color: transparent;
  background-position: center top;
  background-repeat: no-repeat;
  color: white;
  border: none;
  padding: 8px 0;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 20px;
}

.game-button button:hover {
  opacity: 0.8;
  transition: opacity 0.2s;
}

@media screen and (min-width: 469px) and (max-width: 768px) {
  .game-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 5px;
  }

  .game-image {
    height: 80px;
  }
}

/* Mobile styles - 3 items per row */
@media screen and (max-width: 468px) {
  .game-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    padding: 5px;
  }

  .game-image {
    height: 80px;
  }
  
  .game-card {
    border-radius: 6px;
  }
}
</style>