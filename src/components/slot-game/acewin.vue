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
      <h1>{{ $t('acewin.heading') }}</h1>
      
      <h2>{{ $t('acewin.subHeading') }}</h2>
      
      <p>
        <a 
          :href="seoLinks.acewin()" 
          class="homepage-link" 
          @click.prevent="goToAcewin">{{ $t('acewin.intro.linkText') }}</a> 
        {{ $t('acewin.intro.part1') }}
      </p>
      
      <p>{{ $t('acewin.introPara2') }}</p>

      <div class="content-block">
        <h2>{{ $t('acewin.comparisonTable.title') }}</h2>
        
        <div class="table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>{{ $t('acewin.comparisonTable.headers.platform') }}</th>
                <th>{{ $t('acewin.comparisonTable.headers.bestFor') }}</th>
                <th>{{ $t('acewin.comparisonTable.headers.keyFeatures') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('acewin.comparisonTable.rows.desktop.platform') }}</strong></td>
                <td>{{ $t('acewin.comparisonTable.rows.desktop.bestFor') }}</td>
                <td>{{ $t('acewin.comparisonTable.rows.desktop.features') }}</td>
              </tr>
              <tr>
                <td>
                  <strong>
                    {{ $t('acewin.comparisonTable.rows.mobile.platformBefore') }} 
                    <a 
                      :href="seoLinks.download()" 
                      class="homepage-link" 
                      @click.prevent="goToDownload">{{ $t('acewin.comparisonTable.rows.mobile.platformLink') }}</a>
                  </strong><br>
                  {{ $t('acewin.comparisonTable.rows.mobile.platformAfter') }}
                </td>
                <td>{{ $t('acewin.comparisonTable.rows.mobile.bestFor') }}</td>
                <td>{{ $t('acewin.comparisonTable.rows.mobile.features') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('acewin.comparisonTable.rows.demo.platform') }}</strong></td>
                <td>{{ $t('acewin.comparisonTable.rows.demo.bestFor') }}</td>
                <td>{{ $t('acewin.comparisonTable.rows.demo.features') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>{{ $t('acewin.comparisonTable.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('acewin.gameFeatures.title') }}</h2>
        
        <h3>{{ $t('acewin.gameFeatures.coreHighlights.title') }}</h3>
        <ul class="dots">
          <li>{{ $t('acewin.gameFeatures.coreHighlights.feature1') }}</li>
          <li>{{ $t('acewin.gameFeatures.coreHighlights.feature2') }}</li>
          <li>{{ $t('acewin.gameFeatures.coreHighlights.feature3') }}</li>
        </ul>

        <h3>{{ $t('acewin.gameFeatures.whyStandOut.title') }}</h3>
        <ul class="dots">
          <li>{{ $t('acewin.gameFeatures.whyStandOut.reason1') }}</li>
          <li>{{ $t('acewin.gameFeatures.whyStandOut.reason2') }}</li>
          <li>{{ $t('acewin.gameFeatures.whyStandOut.reason3') }}</li>
        </ul>

        <h3>{{ $t('acewin.gameFeatures.howToStart.title') }}</h3>
        <ol class="numbered-list">
          <li>
            {{ $t('acewin.gameFeatures.howToStart.step1Before') }} 
            <a 
              :href="seoLinks.login()" 
              class="homepage-link" 
              @click.prevent="goToLogin">{{ $t('acewin.gameFeatures.howToStart.step1Link') }}</a>
            {{ $t('acewin.gameFeatures.howToStart.step1After') }}
          </li>
          <li>{{ $t('acewin.gameFeatures.howToStart.step2') }}</li>
          <li>{{ $t('acewin.gameFeatures.howToStart.step3') }}</li>
          <li>{{ $t('acewin.gameFeatures.howToStart.step4') }}</li>
          <li>{{ $t('acewin.gameFeatures.howToStart.step5') }}</li>
        </ol>
      </div>

      <div class="content-block">
        <h2>{{ $t('acewin.tips.title') }}</h2>
        <ul class="dots">
          <li v-html="$t('acewin.tips.tip1')"></li>
          <li v-html="$t('acewin.tips.tip2')"></li>
          <li v-html="$t('acewin.tips.tip3')"></li>
          <li v-html="$t('acewin.tips.tip4')"></li>
        </ul>
      </div>

      <div class="content-block">
        <h2>{{ $t('acewin.faqs.title') }}</h2>
        
        <div class="faq-item">
          <h3>{{ $t('acewin.faqs.q1') }}</h3>
          <p>{{ $t('acewin.faqs.a1') }}</p>
        </div>

        <div class="faq-item">
          <h3>{{ $t('acewin.faqs.q2') }}</h3>
          <p>{{ $t('acewin.faqs.a2') }}</p>
        </div>

        <div class="faq-item">
          <h3>{{ $t('acewin.faqs.q3') }}</h3>
          <p>{{ $t('acewin.faqs.a3') }}</p>
        </div>

        <div class="faq-item">
          <h3>{{ $t('acewin.faqs.q4') }}</h3>
          <p>{{ $t('acewin.faqs.a4') }}</p>
        </div>

        <div class="faq-item">
          <h3>{{ $t('acewin.faqs.q5') }}</h3>
          <p>
            {{ $t('acewin.faqs.a5Before') }} 
            <a 
              :href="seoLinks.home()" 
              class="homepage-link" 
              @click.prevent="goToHomepage">{{ $t('acewin.faqs.a5Link') }}</a> 
            {{ $t('acewin.faqs.a5After') }}
          </p>
        </div>

        <div class="faq-item">
          <h3>{{ $t('acewin.faqs.q6') }}</h3>
          <p>{{ $t('acewin.faqs.a6') }}</p>
        </div>
      </div>

      <div class="content-block">
        <h2>{{ $t('acewin.startExploring.title') }}</h2>
        
        <p>{{ $t('acewin.startExploring.para1') }}</p>
        
        <p>{{ $t('acewin.startExploring.para2') }}</p>
        
        <p>
          <strong>
            <a 
              :href="seoLinks.register()" 
              class="homepage-link" 
              @click.prevent="goToRegister">{{ $t('acewin.startExploring.ctaBefore') }}</a> 
            {{ $t('acewin.startExploring.ctaAfter') }}
          </strong>
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
const { goToRegister, goToHomepage, goToDownload, goToLogin, goToAcewin, seoLinks } = useNavigation();

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