<template>
  <div class="monkeyking">
    <div class="game-grid">
      <div v-for="game in monkeykingGames" :key="game.id" class="game-card" @click="navigateToRegister">
        <div class="game-image">
          <img :src="game.image" :alt="`winbox monkey king`" @error="handleImageError">
        </div>
        <div class="game-button">
          <button v-html="$t('common.Play')"></button>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section">
      <h1>Monkey King Slot Game</h1>
      
      <h2>Step into a legendary reels adventure</h2>
      
      <p>
        The <a href="#" class="homepage-link" @click.prevent="goToMonkeyKing">Monkey King</a> Slot Game invites you into a richly themed world inspired by the classic Chinese tale of Sun Wukong.
      </p>
      
      <p>
        With 5 reels (and in many versions 243 win-ways or similar), dynamic features and high-quality graphics, it offers both entertainment and win potential.
      </p>

      <div class="content-block">
        <h2>Comparison Table: Version / Platform Options</h2>
        
        <div class="table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Version</th>
                <th>Best For</th>
                <th>Key Features</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Desktop Browser</strong></td>
                <td>Casual PC players</td>
                <td>Full screen visuals, easy controls</td>
              </tr>
              <tr>
                <td>
                  <strong>Mobile <a href="#" class="homepage-link" @click.prevent="goToDownload">Winbox APK</a></strong><br>
                  (Android / iOS)
                </td>
                <td>On-the-go play</td>
                <td>Touch-friendly interface, mobile-optimised</td>
              </tr>
              <tr>
                <td><strong>Demo Mode</strong></td>
                <td>New players</td>
                <td>Risk-free spins, familiarise with features</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>Still not sure which version suits you? The table above shows you the options clearly.</p>
      </div>

      <div class="content-block">
        <h2>Game Features & Mechanics</h2>
        
        <h3>Core Features</h3>
        <ul class="dots">
          <li>5-reel layout with either fixed paylines or "win-ways" model depending on variant.</li>
          <li>High-quality Chinese-legend theme: symbols include the Monkey King, dragons, temple artifacts, and more.</li>
          <li>Bonus features: scattered free spins, wild substitutes, mini-games or bonus pick-me features in some versions.</li>
        </ul>

        <h3>Why it stands out</h3>
        <ul class="dots">
          <li>Immersive graphics and animations elevate the slot experience.</li>
          <li>Multiple payout methods (paylines, win-ways) give flexibility in game design.</li>
          <li>Many variants allow mobile and desktop play seamlessly.</li>
        </ul>
      </div>

      <div class="content-block">
        <div class="image-container">
          <img :src="monkeykingContentImage" alt="Monkey King Gameplay" class="content-image">
        </div>

        <h2>How to Play & Get Started</h2>
        
        <ol class="numbered-list">
          <li>Choose your platform: Browser <a href="#" class="homepage-link" @click.prevent="goToHomepage">Winbox H5</a> (desktop), Android, or iOS.</li>
          <li>Set your bet size and spin the reels. Adjust any autoplay or max-bet if needed.</li>
          <li>Aim for winning combinations via paylines or win-ways.</li>
          <li>Trigger bonus features by landing the required scatters/wilds.</li>
          <li>Use the demo mode first if you're new – no deposit required.</li>
        </ol>

        <h3>Tips for Better Gameplay</h3>
        <ul class="dots">
          <li>Start with the <strong>demo mode</strong> to learn the symbol values and bonus triggers without risk.</li>
          <li>Use a <strong>stable internet connection</strong> on mobile to prevent disruptions during bonus rounds.</li>
          <li>Always check the <strong>paytable</strong> before playing real money to understand the top symbols and features.</li>
          <li>Set <strong>bet limits</strong> and play responsibly. Treat the slot as entertainment, not income.</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>FAQs About Monkey King Slot</h2>
        
        <h3>Q: Can I play Monkey King Slot Game for free?</h3>
        <p>A: Yes. Many platforms offer a demo or "play for fun" mode so you can try the game without deposit.</p>

        <h3>Q: What devices are supported?</h3>
        <p>A: Desktop browser, Android smartphones/tablets, and iOS devices. Some versions may require specific OS versions.</p>

        <h3>Q: Does the game have bonus features?</h3>
        <p>A: Yes. Look out for free spins, wild symbols, scatter-triggered mini-games and sometimes progressive or pick-me bonus rounds.</p>

        <h3>Q: Is the theme based on a real legend?</h3>
        <p>A: Yes. The slot theme draws from the Chinese myth of Sun Wukong, often called The Monkey King.</p>

        <h3>Q: What is the RTP (Return to Player)?</h3>
        <p>A: This varies by game variant and provider. One version lists an RTP of ~95%.</p>

        <h3>Q: Where can I find help if I face issues?</h3>
        <p>A: Most game platforms provide live-chat support or help section. Be sure to use authorised versions to avoid unregulated apps.</p>
      </div>

      <div class="content-block">
        <h2>Start Your Spin Today</h2>
        
        <p>The Monkey King Slot Game offers an engaging mix of myth-inspired visuals, modern slot mechanics and flexible platform support.</p>
        
        <p>Whether you're playing for fun or real stakes, this game gives you a meaningful entertainment choice.</p>
        
        <p>Start in demo mode, understand the mechanics, and if you're comfortable — spin the reels with confidence.</p>
        
        <p>
          <strong>Login <a href="#" class="homepage-link" @click.prevent="goToHomepage">Winbox H5</a> Play the Monkey King Slot Game now.</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNavigation } from '@/components/utils/navigation';
import button_frame from '@/assets/main-button.png';
import monkeykingContentImage from '@/assets/monkeyking-content.avif'; // Import the content image

// Use your existing navigation utilities
const { goToRegister, goToHomepage, goToDownload } = useNavigation();

// Add goToMonkeyKing if it doesn't exist in your navigation
const goToMonkeyKing = () => {
  // Navigate to Monkey King page or current page
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Function to handle image loading errors
const handleImageError = (event) => {
  // Use a fallback image when the original fails to load
  event.target.src = button_frame;
  console.error(`Failed to load image: ${event.target.alt}`);
};

// Create a base structure for our games with dynamic imports
const monkeykingGames = ref([]);

// Approach 1: Using import.meta.url for Vue 3 (Vite compatible)
const getImageUrl = (name) => {
  try {
    // This approach works with Vite
    return new URL(`/src/assets/monkeyking-img/${name}.png`, import.meta.url).href;
  } catch (error) {
    console.error(`Error loading image ${name}:`, error);
    return button_frame; // Fallback to button frame
  }
};

// Initialize games
onMounted(() => {
  // Generate games dynamically (135 games for MonkeyKing)
  monkeykingGames.value = Array.from({ length: 135 }, (_, i) => {
    const gameNumber = i + 1;
    return {
      id: `monkeyking${gameNumber}`,
      name: `MonkeyKing Game ${gameNumber}`,
      image: getImageUrl(`monkeyking${gameNumber}`)
    };
  });
});

// Use navigation utility for automatic language detection
const navigateToRegister = () => {
  goToRegister();
};
</script>

<style scoped>
.monkeyking {
  color: white;
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

/* Content Section Styles - Standardized to match Lucky365 */
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

.image-container {
  width: 100%;
}

.content-image {
  max-width: 50%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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