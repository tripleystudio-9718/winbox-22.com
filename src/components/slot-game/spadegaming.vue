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

    <!-- Content Section -->
    <div class="content-section">
      <div class="banner-section">
        <img 
          :src="spadegamingBanner" 
          alt="Spadegaming Banner" 
          class="banner-image"
        />
        </div>
      <h1>Spadegaming Slot Games</h1>
      
      <h2>Asia-themed slots meet modern mechanics</h2>
      
      <p>
        Spadegaming has built a strong reputation for its Asian-inspired game themes—dragons, mythologies, traditional symbols—combined with modern slot mechanics and mobile optimisation.
      </p>
      
      <p>
        With offices and operations across Asia and licences in place, the provider emphasises both quality and regional relevance.
      </p>

      <div class="content-block">
        <h2>Comparison Table: Platform & Features</h2>
        
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
                <td>PC players</td>
                <td>Full-screen visuals, wide view, easy controls</td>
              </tr>
              <tr>
                <td>
                  <strong>Mobile <a href="#" class="homepage-link" @click.prevent="goToDownload">Winbox APK</a></strong><br>
                  (Android / iOS)
                </td>
                <td>On-the-go players</td>
                <td>Touch-friendly, HTML5 optimised, responsive design</td>
              </tr>
              <tr>
                <td><strong>Demo Mode</strong></td>
                <td>New players</td>
                <td>Risk-free play, familiarise with mechanics</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>If you're unsure which version to try first, this table gives you a straightforward guide.</p>
      </div>

      <div class="content-block">
        <h2>Game Features & Mechanics</h2>
        
        <h3>Core Highlights</h3>
        <ul class="dots">
          <li>Rich variety: slots, fishing arcade games and table-style games.</li>
          <li>Visual excellence: high-quality graphics and animations tailored for Asian themes.</li>
          <li>Bonus mechanics: free spins, shifting wilds, retriggers, win-both-ways and high-win potential features.</li>
        </ul>

        <h3>Why it stands out</h3>
        <ul class="dots">
          <li>Deep theme-integration: From Chinese myth to jungle adventures, the themes are rich and engaging.</li>
          <li>Mobile-optimised since 2013: Strong focus on smartphone/tablet play ensures smooth gameplay.</li>
          <li>Demo mode and frequent releases make it easy to stay updated and explore new titles.</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>How to Get Started</h2>
        
        <ol class="numbered-list">
          <li>Casino platform <a href="#" class="homepage-link" @click.prevent="goToHomepage">Winbox Malaysia</a> offering Spadegaming titles just log in or create your account.</li>
          <li>Browse the game lobby and filter for "Spadegaming" to access their titles.</li>
          <li>You may play in demo mode first to familiarise yourself with the game mechanics.</li>
          <li>When ready, switch to real-money play — ensure you use supported payment methods and check any bonus conditions.</li>
          <li>Play responsibly: set your betting limits and treat the games as entertainment.</li>
        </ol>
      </div>

      <div class="content-block">
        <h2>Tips for Better Gameplay</h2>
        <ul class="dots">
          <li>Use <strong>demo mode</strong> first to understand bonus triggers, symbol values and game volatility.</li>
          <li>On mobile, ensure a <strong>stable internet connection</strong> to prevent disruptions during bonus rounds.</li>
          <li>Always review the <strong>paytable</strong> of each game to understand how win-ways, wilds and bonuses operate.</li>
          <li>Treat your playing time as entertainment — set budget limits to manage risk.</li>
          <li>Look more on Responsible Gambling</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>FAQs About Spadegaming</h2>
        
        <h3>Q: Can I play Spadegaming slots for free?</h3>
        <p>A: Yes. Many titles are available in demo-mode so you can try the game without deposit.</p>

        <h3>Q: Which platforms support Spadegaming games?</h3>
        <p>A: Android, iOS and desktop browser — thanks to their HTML5-powered games.</p>

        <h3>Q: Are these games suitable for Malaysian players?</h3>
        <p>A: Yes. Many titles cater to Asian themes, languages and payment options, making them appropriate for Malaysian users.</p>

        <h3>Q: What sort of bonus features do Spadegaming games offer?</h3>
        <p>A: Expect free spins, shifting wilds, retriggers, win-both-ways, and other modern slot mechanics.</p>

        <h3>Q: Are Spadegaming games safe and fair?</h3>
        <p>A: Yes. The provider is licensed, and their games have been audited for fairness.</p>

        <h3>Q: Where can I get help if I face issues playing?</h3>
        <p>A: Use your casino's live-chat or support — ensure you're playing via an authorised and reputable platform.</p>
      </div>

      <div class="content-block">
        <h2>Conclusion: Play Spadegaming Now</h2>
        
        <p>Spadegaming offers a rich collection of modern, mobile-first slots and arcade games infused with Asian-themed visuals and advanced mechanics.</p>
        
        <p>Whether you're playing casually or for real stakes, you can start in demo mode, explore the titles, choose your platform and enjoy high-quality entertainment.</p>
        
        <p>
          <strong>Login <a href="#" class="homepage-link" @click.prevent="goToLogin">H5 Winbox</a> now and Start playing Spadegaming slot games today on Winbox.</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import button_frame from "@/assets/button-frame.png";
import spadegamingBanner from "@/assets/spadegaming-banner.avif";
import { useNavigation } from '@/components/utils/navigation';

// Use your existing navigation utilities
const { goToRegister, goToHomepage, goToDownload, goToLogin } = useNavigation();

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

img {
  width: 100%;
}

/* Banner Section */
.banner-section {
  width: 100%;
  margin: 0;
  padding: 0;
}

.banner-section .banner-image {
  width: 100%;
  height: auto;
  display: block;
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

  .game-image {
    height: 80px;
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

  .game-image {
    height: 80px;
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