<template>
  <div class="microslot">
    <div class="game-grid">
      <div v-for="game in microslotGames" :key="game.id" class="game-card" @click="navigateToRegister">
        <div class="game-image">
          <img :src="game.image" :alt="`winbox microslot`" @error="handleImageError">
        </div>
        <div class="game-button">
          <button v-html="$t('common.Play')"></button>
        </div>
      </div>
    </div>

    <!-- Content Section Based on Document -->
    <div class="content-section">
      <img :src="microslotBanner" alt="winbox microslot banner" class="banner-img">
      <h1>{{ $t('microslot.title') }}</h1>
      
      <p>{{ $t('microslot.intro.description1') }} <span class="homepage-link" @click="goToMicroslot">{{ $t('microslot.intro.linkText') }}</span> {{ $t('microslot.intro.description2') }}</p>
      <p>{{ $t('microslot.intro.description3') }}</p>
      <p>{{ $t('microslot.intro.description4') }}</p>
      <p>{{ $t('microslot.intro.description5') }}</p>

      <div class="content-block">
        <h2>{{ $t('microslot.comparison.title') }}</h2>
        
        <div class="table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>{{ $t('microslot.comparison.table.headers.feature') }}</th>
                <th>{{ $t('microslot.comparison.table.headers.microslot') }}</th>
                <th>{{ $t('microslot.comparison.table.headers.others') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('microslot.comparison.table.rows.gameLibrary.feature') }}</strong></td>
                <td>{{ $t('microslot.comparison.table.rows.gameLibrary.microslot') }}</td>
                <td>{{ $t('microslot.comparison.table.rows.gameLibrary.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('microslot.comparison.table.rows.demoMode.feature') }}</strong></td>
                <td>{{ $t('microslot.comparison.table.rows.demoMode.microslot') }}</td>
                <td>{{ $t('microslot.comparison.table.rows.demoMode.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('microslot.comparison.table.rows.mobileOptimization.feature') }}</strong></td>
                <td>{{ $t('microslot.comparison.table.rows.mobileOptimization.microslot') }}</td>
                <td>{{ $t('microslot.comparison.table.rows.mobileOptimization.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('microslot.comparison.table.rows.languageSupport.feature') }}</strong></td>
                <td>{{ $t('microslot.comparison.table.rows.languageSupport.microslot') }}</td>
                <td>{{ $t('microslot.comparison.table.rows.languageSupport.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('microslot.comparison.table.rows.payoutSpeed.feature') }}</strong></td>
                <td>{{ $t('microslot.comparison.table.rows.payoutSpeed.microslot') }}</td>
                <td>{{ $t('microslot.comparison.table.rows.payoutSpeed.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('microslot.comparison.table.rows.certification.feature') }}</strong></td>
                <td>{{ $t('microslot.comparison.table.rows.certification.microslot') }}</td>
                <td>{{ $t('microslot.comparison.table.rows.certification.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('microslot.comparison.table.rows.support.feature') }}</strong></td>
                <td>{{ $t('microslot.comparison.table.rows.support.microslot') }}</td>
                <td>{{ $t('microslot.comparison.table.rows.support.others') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>{{ $t('microslot.comparison.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('microslot.gamesAvailable.title') }}</h2>
        <p>{{ $t('microslot.gamesAvailable.description1') }}</p>
        <p>{{ $t('microslot.gamesAvailable.description2') }}</p>
        <p>{{ $t('microslot.gamesAvailable.description3') }}</p>
        <p>{{ $t('microslot.gamesAvailable.description4') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('microslot.whyStandsOut.title') }}</h2>
        <p>{{ $t('microslot.whyStandsOut.description1') }}</p>
        <p>{{ $t('microslot.whyStandsOut.description2') }}</p>
        <p>{{ $t('microslot.whyStandsOut.description3') }}</p>
        <p>{{ $t('microslot.whyStandsOut.description4') }}</p>
        <p>{{ $t('microslot.whyStandsOut.description5') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('microslot.howToStart.title') }}</h2>
        
        <ol class="numbered-list">
          <li>{{ $t('microslot.howToStart.steps.step1') }}</li>
          <li>{{ $t('microslot.howToStart.steps.step2') }}</li>
          <li>{{ $t('microslot.howToStart.steps.step3') }}</li>
          <li>{{ $t('microslot.howToStart.steps.step4') }}</li>
          <li>{{ $t('microslot.howToStart.steps.step5') }}</li>
        </ol>
        
        <p>{{ $t('microslot.howToStart.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('microslot.fairness.title') }}</h2>
        <p>{{ $t('microslot.fairness.description1') }}</p>
        <p>{{ $t('microslot.fairness.description2') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('microslot.conclusion.title') }}</h2>
        <p>{{ $t('microslot.conclusion.description1') }}</p>
        <p>{{ $t('microslot.conclusion.description2') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('microslot.faqs.title') }}</h2>
        
        <h3>{{ $t('microslot.faqs.questions.whatIs.question') }}</h3>
        <p>{{ $t('microslot.faqs.questions.whatIs.answer') }}</p>

        <h3>{{ $t('microslot.faqs.questions.playFree.question') }}</h3>
        <p>{{ $t('microslot.faqs.questions.playFree.answer') }}</p>

        <h3>{{ $t('microslot.faqs.questions.safeToPlay.question') }}</h3>
        <p>{{ $t('microslot.faqs.questions.safeToPlay.answer') }}</p>

        <h3>{{ $t('microslot.faqs.questions.popularGames.question') }}</h3>
        <p>{{ $t('microslot.faqs.questions.popularGames.answer') }}</p>

        <h3>{{ $t('microslot.faqs.questions.needDownload.question') }}</h3>
        <p>{{ $t('microslot.faqs.questions.needDownload.answer') }}</p>

        <h3>{{ $t('microslot.faqs.questions.withdraw.question') }}</h3>
        <p>{{ $t('microslot.faqs.questions.withdraw.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('microslot.readyToSpin.title') }}</h2>
        <p>{{ $t('microslot.readyToSpin.description') }}</p>
        <p><span class="homepage-link" @click="goToDownload">{{ $t('microslot.readyToSpin.linkText') }}</span> {{ $t('microslot.readyToSpin.bonus') }}</p>
        <p><em>{{ $t('microslot.readyToSpin.tagline') }}</em></p>
        <p><em>{{ $t('microslot.readyToSpin.slogan') }}</em></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNavigation } from '@/components/utils/navigation';
import button_frame from '@/assets/main-button.png'; // Import fallback image
import microslotBanner from "@/assets/microslot-banner.png";

// Use your existing navigation utilities
const { 
  goToRegister,
  goToMicroslot,
  goToDownload 
} = useNavigation();

// Function to handle image loading errors
const handleImageError = (event) => {
  // Use a fallback image when the original fails to load
  event.target.src = button_frame;
  console.error(`Failed to load image: ${event.target.alt}`);
};

// Create a base structure for our games with dynamic imports
const microslotGames = ref([]);

// Approach 1: Using import.meta.url for Vue 3 (Vite compatible)
const getImageUrl = (name) => {
  try {
    // This approach works with Vite
    return new URL(`/src/assets/microslot-img/${name}.png`, import.meta.url).href;
  } catch (error) {
    console.error(`Error loading image ${name}:`, error);
    return button_frame; // Fallback to button frame
  }
};

// Initialize games
onMounted(() => {
  // Generate games dynamically (38 games for Microslot)
  microslotGames.value = Array.from({ length: 38 }, (_, i) => {
    const gameNumber = i + 1;
    return {
      id: `microslot${gameNumber}`,
      name: `Microslot Game ${gameNumber}`,
      image: getImageUrl(`microslot${gameNumber}`)
    };
  });
});

// Use navigation utility for automatic language detection
const navigateToRegister = () => {
  goToRegister();
};
</script>

<style scoped>
.microslot {
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

.content-section {
  width: 70%;
  margin: 0 auto;
  padding: 20px 10px;
  color: black;
  font-family: Arial, sans-serif;
}

img {
    width: 100%;
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

.numbered-list {
  padding-left: 30px;
  font-size: 14px;
  margin-bottom: 15px;
}

.numbered-list li {
  margin-bottom: 8px;
}

.table-container {
  overflow-x: auto;
  margin: 15px 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.comparison-table th {
  background-color: #02D1FD;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
}

.comparison-table td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
}

.comparison-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.comparison-table tr:hover {
  background-color: #e8f4f8;
}

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

@media screen and (min-width: 469px) and (max-width: 768px) {
  .game-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 5px;
  }

  .table-container {
    overflow-x: scroll;
  }

  .comparison-table {
    min-width: 600px;
  }

  .content-section {
    width: 100%;
    padding: 20px 10px;
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

  .table-container {
    overflow-x: scroll;
  }

  .comparison-table {
    min-width: 600px;
  }

  .content-section {
    width: 100%;
    padding: 20px 10px;
  }
}
</style>