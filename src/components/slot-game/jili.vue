<template>
  <div class="jili">
    <div class="game-grid">
      <div v-for="game in jiliGames" :key="game.id" class="game-card" @click="navigateToRegister">
        <div class="game-image">
          <img
            :src="game.image"
            :alt="`winbox JILI`"
            @error="handleImageError"
            @load="handleImageLoad"
          />
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
  console.error(`Failed to load image: ${event.target.alt}`);
  event.target.src = button_frame;
  event.target.style.objectFit = "contain";
};

// Function to log successful image loads
const handleImageLoad = (event) => {
  console.log(`Image loaded successfully: ${event.target.alt}`);
};

// Create a base structure for our games with dynamic imports
const jiliGames = ref([]);

// Approach 1: Using import.meta.url for Vue 3 (Vite compatible)
const getImageUrl = (name) => {
  try {
    // This approach works with Vite
    return new URL(`/src/assets/jili-img-1/${name}.png`, import.meta.url).href;
  } catch (error) {
    console.error(`Error getting image URL for ${name}:`, error);
    return button_frame; // Fallback to button frame
  }
};

// Initialize games
onMounted(() => {
  // Generate games dynamically (12 games for JILI)
  jiliGames.value = Array.from({ length: 12 }, (_, i) => {
    const gameNumber = i + 1;
    return {
      id: `jili${gameNumber}`,
      name: `Jili Game ${gameNumber}`,
      image: getImageUrl(`jili-g${gameNumber}`),
    };
  });
});

// Use navigation utility for automatic language detection
const navigateToRegister = () => {
  goToRegister();
};
</script>

<style scoped>
.jili {
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
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 10px; /* Space between image and button */
}

.game-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
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
}

/* Mobile styles - 3 items per row */
@media screen and (max-width: 468px) {
  .game-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    padding: 5px;
  }

  .game-card {
    border-radius: 6px;
  }
}
</style>