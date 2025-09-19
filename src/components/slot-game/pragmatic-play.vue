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

    <!-- Content Section Based on Document -->
    <div class="content-section">
      <h1>{{ $t('pragmaticPlay.title') }}</h1>
      <p>{{ $t('pragmaticPlay.subtitle') }}</p>

      <div class="content-block">
        <h2>{{ $t('pragmaticPlay.whyMatters.title') }}</h2>
        <p>{{ $t('pragmaticPlay.whyMatters.intro') }}</p>
        <p>{{ $t('pragmaticPlay.whyMatters.description1') }} <span class="homepage-link" @click="goToPragmaticPlay">{{ $t('pragmaticPlay.whyMatters.linkText') }}</span> {{ $t('pragmaticPlay.whyMatters.description2') }}</p>
        <p>{{ $t('pragmaticPlay.whyMatters.description3') }}</p>
        <p>{{ $t('pragmaticPlay.whyMatters.conclusion') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('pragmaticPlay.atGlance.title') }}</h2>
        
        <div class="feature-table">
          <div class="table-header">
            <div class="feature-col">{{ $t('pragmaticPlay.atGlance.tableHeader.feature') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.tableHeader.freeDemo') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.tableHeader.realMoney') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.tableHeader.liveCasino') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.tableHeader.mobileReady') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.tableHeader.localSupport') }}</div>
          </div>
          <div class="table-row-6col">
            <div class="feature-col">{{ $t('pragmaticPlay.atGlance.rows.access.title') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.access.freeDemo') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.access.realMoney') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.access.liveCasino') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.access.mobileReady') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.access.localSupport') }}</div>
          </div>
          <div class="table-row-6col">
            <div class="feature-col">{{ $t('pragmaticPlay.atGlance.rows.games.title') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.games.freeDemo') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.games.realMoney') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.games.liveCasino') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.games.mobileReady') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.games.localSupport') }}</div>
          </div>
          <div class="table-row-6col">
            <div class="feature-col">{{ $t('pragmaticPlay.atGlance.rows.minimumBet.title') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.minimumBet.freeDemo') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.minimumBet.realMoney') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.minimumBet.liveCasino') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.minimumBet.mobileReady') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.minimumBet.localSupport') }}</div>
          </div>
          <div class="table-row-6col">
            <div class="feature-col">{{ $t('pragmaticPlay.atGlance.rows.payoutSpeed.title') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.payoutSpeed.freeDemo') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.payoutSpeed.realMoney') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.payoutSpeed.liveCasino') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.payoutSpeed.mobileReady') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.payoutSpeed.localSupport') }}</div>
          </div>
          <div class="table-row-6col">
            <div class="feature-col">{{ $t('pragmaticPlay.atGlance.rows.paymentMethods.title') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.paymentMethods.freeDemo') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.paymentMethods.realMoney') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.paymentMethods.liveCasino') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.paymentMethods.mobileReady') }}</div>
            <div class="why-col">{{ $t('pragmaticPlay.atGlance.rows.paymentMethods.localSupport') }}</div>
          </div>
        </div>
        
        <p>{{ $t('pragmaticPlay.atGlance.footer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('pragmaticPlay.topGames.title') }}</h2>

        <h3>{{ $t('pragmaticPlay.topGames.gatesOfOlympus.title') }}</h3>
        <p>{{ $t('pragmaticPlay.topGames.gatesOfOlympus.description') }}</p>
        <p>{{ $t('pragmaticPlay.topGames.gatesOfOlympus.details') }}</p>
        <p>"{{ $t('pragmaticPlay.topGames.gatesOfOlympus.testimonial') }}"</p>

        <h3>{{ $t('pragmaticPlay.topGames.sweetBonanza.title') }}</h3>
        <p>{{ $t('pragmaticPlay.topGames.sweetBonanza.description') }}</p>
        <p>{{ $t('pragmaticPlay.topGames.sweetBonanza.details') }}</p>

        <h3>{{ $t('pragmaticPlay.topGames.wolfGold.title') }}</h3>
        <p>{{ $t('pragmaticPlay.topGames.wolfGold.description') }}</p>
        <p>{{ $t('pragmaticPlay.topGames.wolfGold.details') }}</p>

        <h3>{{ $t('pragmaticPlay.topGames.greatRhino.title') }}</h3>
        <p>{{ $t('pragmaticPlay.topGames.greatRhino.description') }}</p>
        <p>{{ $t('pragmaticPlay.topGames.greatRhino.details') }}</p>

        <h3>{{ $t('pragmaticPlay.topGames.chilliHeat.title') }}</h3>
        <p>{{ $t('pragmaticPlay.topGames.chilliHeat.description') }}</p>
        <p>{{ $t('pragmaticPlay.topGames.chilliHeat.details') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('pragmaticPlay.liveCasino.title') }}</h2>
        <p>{{ $t('pragmaticPlay.liveCasino.subtitle') }}</p>
        
        <ul class="dots">
          <li>{{ $t('pragmaticPlay.liveCasino.games.blackjack') }}</li>
          <li>{{ $t('pragmaticPlay.liveCasino.games.roulette') }}</li>
          <li>{{ $t('pragmaticPlay.liveCasino.games.baccarat') }}</li>
          <li>{{ $t('pragmaticPlay.liveCasino.games.megaWheel') }}</li>
        </ul>
        
        <p>{{ $t('pragmaticPlay.liveCasino.footer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('pragmaticPlay.whyWinboxDifferent.title') }}</h2>
        
        <ul class="dots">
          <li>{{ $t('pragmaticPlay.whyWinboxDifferent.points.noApp') }}</li>
          <li>{{ $t('pragmaticPlay.whyWinboxDifferent.points.deposit') }}</li>
          <li>{{ $t('pragmaticPlay.whyWinboxDifferent.points.withdrawals') }}</li>
          <li>{{ $t('pragmaticPlay.whyWinboxDifferent.points.localSupport') }}</li>
          <li>{{ $t('pragmaticPlay.whyWinboxDifferent.points.fairSafe') }}</li>
          <li>{{ $t('pragmaticPlay.whyWinboxDifferent.points.noHiddenFees') }}</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>{{ $t('pragmaticPlay.faqs.title') }}</h2>
        
        <h3>{{ $t('pragmaticPlay.faqs.questions.whatIsDemo.question') }}</h3>
        <p>{{ $t('pragmaticPlay.faqs.questions.whatIsDemo.answer') }}</p>

        <h3>{{ $t('pragmaticPlay.faqs.questions.canWinRealMoney.question') }}</h3>
        <p>{{ $t('pragmaticPlay.faqs.questions.canWinRealMoney.answer') }}</p>

        <h3>{{ $t('pragmaticPlay.faqs.questions.isLegal.question') }}</h3>
        <p>{{ $t('pragmaticPlay.faqs.questions.isLegal.answer') }}</p>

        <h3>{{ $t('pragmaticPlay.faqs.questions.switchToRealMoney.question') }}</h3>
        <p>{{ $t('pragmaticPlay.faqs.questions.switchToRealMoney.answer') }}</p>

        <h3>{{ $t('pragmaticPlay.faqs.questions.olderPhones.question') }}</h3>
        <p>{{ $t('pragmaticPlay.faqs.questions.olderPhones.answer') }}</p>

        <h3>{{ $t('pragmaticPlay.faqs.questions.freeSpins.question') }}</h3>
        <p>{{ $t('pragmaticPlay.faqs.questions.freeSpins.answer') }}</p>

        <h3>{{ $t('pragmaticPlay.faqs.questions.needDownload.question') }}</h3>
        <p>{{ $t('pragmaticPlay.faqs.questions.needDownload.answer1') }} <span class="homepage-link" @click="goToDownload">{{ $t('pragmaticPlay.faqs.questions.needDownload.linkText') }}</span> {{ $t('pragmaticPlay.faqs.questions.needDownload.answer2') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('pragmaticPlay.readyToPlay.title') }}</h2>
        <p><span class="homepage-link" @click="goToLogin">{{ $t('pragmaticPlay.readyToPlay.loginText') }}</span> {{ $t('pragmaticPlay.readyToPlay.description') }}</p>
        <p>{{ $t('pragmaticPlay.readyToPlay.footer') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import button_frame from "@/assets/button-frame.png";
import { useNavigation } from '@/components/utils/navigation';

// Use your existing navigation utilities
const { goToRegister, goToHomepage, goToLogin, goToDownload, goToPragmaticPlay } = useNavigation();

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

.content-section {
  width: 70%;
  margin: 0 auto;
  padding: 20px 10px;
  color: black;
  font-family: Arial, sans-serif;
}

.content-section h1 {
  font-size: 32px;
  margin-bottom: 30px;
  font-weight: 600;
  text-align: left;
}

.content-section p, li {
  font-size: 14px;
  line-height: 1.6;
}

.content-section h2 {
  font-size: 22px;
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

.feature-table {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  background-color: #f5f5f5;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
}

.table-row-6col {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid #eee;
}

.table-row-6col:last-child {
  border-bottom: none;
}

.feature-col, .why-col {
  padding: 12px 8px;
  font-size: 12px;
  line-height: 1.4;
  border-right: 1px solid #eee;
}

.feature-col {
  font-weight: bold;
}

.feature-col:last-child, .why-col:last-child {
  border-right: none;
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

@media screen and (min-width: 469px) and (max-width: 768px) {
  .game-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 5px;
  }
  
  .table-header, .table-row-6col {
    grid-template-columns: 1fr;
  }
  
  .feature-col, .why-col {
    border-right: none;
    border-bottom: 1px solid #eee;
    padding: 8px;
    font-size: 14px;
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
  
  .table-header, .table-row-6col {
    grid-template-columns: 1fr;
  }
  
  .feature-col, .why-col {
    border-right: none;
    border-bottom: 1px solid #eee;
    padding: 8px;
    font-size: 14px;
  }
}
</style>