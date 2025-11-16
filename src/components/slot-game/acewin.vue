<template>
  <div class="acewin">
    <div class="game-grid">
      <div v-for="game in acewinGames" :key="game.id" class="game-card" @click="navigateToRegister">
        <div class="game-image">
          <img :src="game.image" :alt="`winbox acewin`" @error="handleImageError">
        </div>
        <div class="game-button">
          <button v-html="$t('common.Play')"></button>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section">
      <h1>Acewin - Slot Games</h1>
      
      <h2>Asian-style visuals meet modern game mechanics</h2>
      
      <p>
        <a href="#" class="homepage-link" @click.prevent="goToAcewin">Acewin</a> is a game-software provider specialising in slots, fishing arcades, table games and more, focused primarily on Southeast Asian markets.
      </p>
      
      <p>
        While full technical details (such as RTP) may be limited, their catalogue includes over 50 titles and innovative features such as All Ways payout systems and extra-bet functionality.
      </p>

      <div class="content-block">
        <h2>Comparison Table: Platform Options & Features</h2>
        
        <div class="table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Platform</th>
                <th>Best For</th>
                <th>Key Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Desktop Browser</strong></td>
                <td>Traditional PC players</td>
                <td>Full-screen experience, wide view, easy bank/withdrawal UI</td>
              </tr>
              <tr>
                <td>
                  <strong>Mobile <a href="#" class="homepage-link" @click.prevent="goToDownload">Winbox App</a></strong><br>
                  (Android / iOS)
                </td>
                <td>On-the-go players</td>
                <td>Touch-optimized UI, HTML5 portability, seamless register/deposit</td>
              </tr>
              <tr>
                <td><strong>Demo Mode</strong></td>
                <td>New users</td>
                <td>Try games risk-free without initial deposit, familiarise mechanics</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>Still unsure which format suits you? The above table helps simplify your choice.</p>
      </div>

      <div class="content-block">
        <h2>Game Features & Mechanics</h2>
        
        <h3>Core Highlights</h3>
        <ul class="dots">
          <li>Variety of game types: slots, fishing arcades, table games.</li>
          <li>Mobile-first design via HTML5 ensures cross-device compatibility on Android, iOS and Windows.</li>
          <li>Mechanics like All Ways (win if certain symbols land adjacent reels) and Extra Bet options for bonus multiplier features.</li>
        </ul>

        <h3>Why it stands out</h3>
        <ul class="dots">
          <li>Games designed specifically for Asian audiences (themes, symbols, language).</li>
          <li>Fast-loading, modern graphics and intuitive UI across devices.</li>
          <li>Access to demo versions gives risk-free trial before real funds.</li>
        </ul>

        <h3>How to Get Started</h3>
        <ol class="numbered-list">
          <li>Choose the platform: Browser <a href="#" class="homepage-link" @click.prevent="goToLogin">Winbox Login Web</a>, Android or iOS.</li>
          <li>Register an account or log in via your preferred casino partner.</li>
          <li>Explore the game catalogue and try demo play if you're new.</li>
          <li>When ready, deposit using your local preferred payment methods.</li>
          <li>Select a game, set your bet, and spin or play. Monitor your session and set limits responsibly.</li>
        </ol>
      </div>

      <div class="content-block">
        <h2>Tips for Better Gameplay</h2>
        <ul class="dots">
          <li>Use <strong>demo mode</strong> first to test how the game handles symbols, bonus triggers and features.</li>
          <li>Play on a <strong>stable internet connection</strong> (especially mobile) to avoid lag during bonus rounds.</li>
          <li>Review the <strong>paytable</strong> for each title to understand the symbol values, win-ways or paylines, and bonus triggers.</li>
          <li>Budget your play: treat games as entertainment rather than guaranteed income.</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>FAQs About Acewin</h2>
        
        <h3>Q: Can I access Acewin games for free?</h3>
        <p>A: Yes. Many titles have a demo mode allowing you to play without deposit.</p>

        <h3>Q: Which devices support Acewin games?</h3>
        <p>A: ALL, Android, iOS and desktop via browser --- thanks to HTML5 optimisation.</p>

        <h3>Q: Are the games localised for Malaysia?</h3>
        <p>A: Yes. Languages and currencies include Malay and regional payment methods.</p>

        <h3>Q: Does Acewin show clear RTPs (Return to Player)?</h3>
        <p>A: Not always. Some titles lack published RTP, so demo play is recommended first.</p>

        <h3>Q: Where can I find help if I face issues?</h3>
        <p>A: Check your casino partner's live-chat support or help desk. Use authorised platforms like <a href="#" class="homepage-link" @click.prevent="goToHomepage">Winbox22.com</a> only.</p>

        <h3>Q: Are there special bonus or pick-me features in Acewin games?</h3>
        <p>A: Yes. Some titles include Extra Bet, hold-&-win rounds, progressive jackpot features and All Ways payout styles.</p>
      </div>

      <div class="content-block">
        <h2>Start Exploring Acewin Games</h2>
        
        <p>Acewin offers a rich catalogue of modern, mobile-friendly Asian-themed gaming titles --- from slots to fishing arcades to table games.</p>
        
        <p>Whether you're exploring for fun or ready for real-stake play, start with demo mode, understand the features, pick your device platform and enjoy the experience responsibly.</p>
        
        <p>
          <strong><a href="#" class="homepage-link" @click.prevent="goToRegister">Register Winbox</a> and Start exploring Acewin now and choose a game that fits your style.</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNavigation } from '@/components/utils/navigation';
import button_frame from '@/assets/main-button.png';

// Use your existing navigation utilities
const { goToRegister, goToHomepage, goToDownload, goToLogin } = useNavigation();

// Add goToAcewin if it doesn't exist in your navigation
const goToAcewin = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Function to handle image loading errors
const handleImageError = (event) => {
  event.target.src = button_frame;
  console.error(`Failed to load image: ${event.target.alt}`);
};

// Create a base structure for our games with dynamic imports
const acewinGames = ref([]);

// Using import.meta.url for Vue 3 (Vite compatible)
const getImageUrl = (name) => {
  try {
    return new URL(`/src/assets/acewin-img/${name}.png`, import.meta.url).href;
  } catch (error) {
    console.error(`Error loading image ${name}:`, error);
    return button_frame;
  }
};

// Initialize games
onMounted(() => {
  // Generate games dynamically (54 games for Acewin)
  acewinGames.value = Array.from({ length: 54 }, (_, i) => {
    const gameNumber = i + 1;
    return {
      id: `acewin${gameNumber}`,
      name: `AceWin Game ${gameNumber}`,
      image: getImageUrl(`acewin${gameNumber}`)
    };
  });
});

// Use navigation utility for automatic language detection
const navigateToRegister = () => {
  goToRegister();
};
</script>

<style scoped>
.acewin {
  color: white;
  min-height: 100vh;
}

img {
  width: 100%;
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

/* Content Section Styles - Standardized */
.content-section {
  margin: 0 auto;
  padding: 20px 10px;
  color: black;
  font-family: Arial, sans-serif;
  width: 70%;
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

.dots {
  padding-left: 30px;
  font-size: 14px;
  margin-bottom: 15px;
}

.dots li {
  margin-bottom: 8px;
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
    min-width: 500px;
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
    min-width: 500px;
  }
}
</style>