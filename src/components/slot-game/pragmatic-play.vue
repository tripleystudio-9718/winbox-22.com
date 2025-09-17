<template>
  <div class="pragmatic-play">
    <div class="game-tabs" :class="{ 'mobile-tabs': isMobile }">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        class="tab-item"
        :class="{ active: activeTab === tab.id }"
        @click="setActiveTab(tab.id)"
      >
        <span>{{ $t(tab.translationKey) }}</span>
      </div>
    </div>

    <!-- Game Grid - VIDEO SLOT -->
    <div v-if="activeTab === 'VIDEO SLOT'" class="game-grid">
      <div
        v-for="(game, index) in videoSlotGames"
        :key="'video-slot-' + index"
        class="game-card"
        @click="navigateToRegister"
      >
        <div class="game-image">
          <img :src="game.image" :alt="`winbox pragmatic play`" @error="handleImageError" />
        </div>
        <div class="game-button">
          <button v-html="$t('common.Play')"></button>
        </div>
      </div>
    </div>

    <!-- Game Grid - SLOT KLASIK -->
    <div v-if="activeTab === 'SLOT KLASIK'" class="game-grid">
      <div
        v-for="(game, index) in slotKlasikGames"
        :key="'slot-klasik-' + index"
        class="game-card"
        @click="navigateToRegister"
      >
        <div class="game-image">
          <img :src="game.image" :alt="`winbox pragmatic play`" @error="handleImageError" />
        </div>
        <div class="game-button">
          <button v-html="$t('common.Play')"></button>
        </div>
      </div>
    </div>

    <!-- Game Grid - HOT -->
    <div v-if="activeTab === 'HOT'" class="game-grid">
      <div
        v-for="(game, index) in hotGames"
        :key="'hot-' + index"
        class="game-card"
        @click="navigateToRegister"
      >
        <div class="game-image">
          <img :src="game.image" :alt="`winbox pragmatic play`" @error="handleImageError" />
        </div>
        <div class="game-button">
          <button v-html="$t('common.Play')"></button>
        </div>
      </div>
    </div>

    <!-- Game Grid - MEGAWAYS -->
    <div v-if="activeTab === 'MEGAWAYS'" class="game-grid">
      <div
        v-for="(game, index) in megawaysGames"
        :key="'megaways-' + index"
        class="game-card"
        @click="navigateToRegister"
      >
        <div class="game-image">
          <img :src="game.image" :alt="`winbox pragmatic play`" @error="handleImageError" />
        </div>
        <div class="game-button">
          <button v-html="$t('common.Play')"></button>
        </div>
      </div>
    </div>

    <!-- Game Grid - BUY BONUS -->
    <div v-if="activeTab === 'BUY BONUS'" class="game-grid">
      <div
        v-for="(game, index) in buyBonusGames"
        :key="'buy-bonus-' + index"
        class="game-card"
        @click="navigateToRegister"
      >
        <div class="game-image">
          <img :src="game.image" :alt="`winbox pragmatic play`" @error="handleImageError" />
        </div>
        <div class="game-button">
          <button v-html="$t('common.Play')"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import button_frame from "@/assets/button-frame.png";
import { useNavigation } from '@/components/utils/navigation';

// Use your existing navigation utilities
const { goToRegister } = useNavigation();

// Mobile detection
const windowWidth = ref(window.innerWidth);
const isMobile = ref(windowWidth.value <= 468);

// Update window width on resize
const handleResize = () => {
  windowWidth.value = window.innerWidth;
  isMobile.value = windowWidth.value <= 468;
};

// Function to handle image loading errors
const handleImageError = (event) => {
  event.target.src = button_frame;
  console.error(`Failed to load image: ${event.target.alt}`);
};

// Tab configuration with translation keys
const tabs = [
  { id: "VIDEO SLOT", translationKey: "games.pragmaticPlay.videoSlot" },
  { id: "SLOT KLASIK", translationKey: "games.pragmaticPlay.slotKlasik" },
  { id: "HOT", translationKey: "games.pragmaticPlay.hot" },
  { id: "MEGAWAYS", translationKey: "games.pragmaticPlay.megaways" },
  { id: "BUY BONUS", translationKey: "games.pragmaticPlay.buyBonus" },
];

// Active tab state
const activeTab = ref("VIDEO SLOT");

// Tab switching function
const setActiveTab = (tabId) => {
  activeTab.value = tabId;
};

// Game collections
const videoSlotGames = ref([]);
const slotKlasikGames = ref([]);
const hotGames = ref([]);
const megawaysGames = ref([]);
const buyBonusGames = ref([]);

// Image URL generator
const getImageUrl = (name) => {
  try {
    return new URL(`/src/assets/pragmatic-play-img/${name}.png`, import.meta.url)
      .href;
  } catch (error) {
    console.error(`Error loading image ${name}:`, error);
    return button_frame;
  }
};

// Initialize games
onMounted(() => {
  // Setup resize listener
  window.addEventListener('resize', handleResize);
  
  // Video Slot Games
  const videoSlotGamesCollection = Array.from({ length: 533 }, (_, i) => {
    const gameNumber = i + 1;
    return {
      name: `Pragmatic Play Video Slot Game ${gameNumber}`,
      image: getImageUrl(`playmatic-play${gameNumber}`),
    };
  });
  videoSlotGames.value = videoSlotGamesCollection;

  // Slot Klasik Games
  const slotKlasikGamesCollection = Array.from({ length: 3 }, (_, i) => {
    const gameNumber = i + 600;
    return {
      name: `Pragmatic Play Slot Klasik Game ${gameNumber}`,
      image: getImageUrl(`playmatic-play${gameNumber}`),
    };
  });
  slotKlasikGames.value = slotKlasikGamesCollection;

  // Hot Games
  const hotGamesCollection = Array.from({ length: 18 }, (_, i) => {
    const gameNumber = i + 700;
    return {
      name: `Pragmatic Play Hot Game ${gameNumber}`,
      image: getImageUrl(`playmatic-play${gameNumber}`),
    };
  });
  hotGames.value = hotGamesCollection;

  // Megaways Games
  const megawaysGamesCollection = Array.from({ length: 53 }, (_, i) => {
    const gameNumber = i + 800;
    return {
      name: `Pragmatic Play Megaways Game ${gameNumber}`,
      image: getImageUrl(`playmatic-play${gameNumber}`),
    };
  });
  megawaysGames.value = megawaysGamesCollection;

  // Buy Bonus Games
  const buyBonusGamesCollection = Array.from({ length: 135 }, (_, i) => {
    const gameNumber = i + 900;
    return {
      name: `Pragmatic Play Buy Bonus Game ${gameNumber}`,
      image: getImageUrl(`playmatic-play${gameNumber}`),
    };
  });
  buyBonusGames.value = buyBonusGamesCollection;
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

// Use navigation utility for automatic language detection
const navigateToRegister = () => {
  goToRegister();
};
</script>

<style scoped>
.pragmatic-play {
  color: white;
  min-height: 100vh;
}

.game-tabs {
  display: flex;
  justify-content: center;
  background-color: #333;
  margin-bottom: 6px;
  padding: 4px 5px;
  gap: 6px;
}

.tab-item {
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s ease;
  white-space: nowrap;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  font-size: 13px;
  border-radius: 4px;
}

.tab-item.active {
  background-color: #ff9800;
  color: white;
  opacity: 1;
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
  margin-bottom: 10px;
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
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 5px;
  }
}

/* Mobile styles */
@media screen and (max-width: 468px) {
  .game-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    padding: 5px;
  }
  
  .game-card {
    border-radius: 6px;
  }
  
  .mobile-tabs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    padding: 2px;
  }
  
  .mobile-tabs .tab-item {
    padding: 8px 5px;
    font-size: 12px;
    border-radius: 0;
    margin-bottom: 2px;
  }
  
  .mobile-tabs .tab-item:nth-child(1) {
    border-top-left-radius: 4px;
  }
  
  .mobile-tabs .tab-item:nth-child(2) {
    border-top-right-radius: 4px;
  }
  
  .mobile-tabs .tab-item:nth-child(5) {
    border-bottom-left-radius: 4px;
    grid-column: span 2;
  }
  
  .mobile-tabs .tab-item span {
    font-size: 11px;
  }
}
</style>