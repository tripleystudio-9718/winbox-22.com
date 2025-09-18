<template>
    <div class="askmeslot">
      <div class="game-grid">
        <div v-for="game in askmeslotGames" :key="game.id" class="game-card" @click="navigateToRegister">
          <div class="game-image">
            <img :src="game.image" :alt="`winbox ask me slot`" @error="handleImageError">
          </div>
          <div class="game-button">
            <button v-html="$t('common.Play')"></button>
          </div>
        </div>
      </div>

      <!-- Content Section -->
      <div class="content-section">
        <h1>{{ $t('askMeSlot.title') }}</h1>
        
        <p>{{ $t('askMeSlot.subtitle') }}</p>
        
        <p><span class="homepage-link" @click="goToHomepage">{{ $t('askMeSlot.description').split(' ')[0] + ' ' + $t('askMeSlot.description').split(' ')[1] + ' ' + $t('askMeSlot.description').split(' ')[2] }}</span> {{ $t('askMeSlot.description').split(' ').slice(3).join(' ') }}</p>
        
        <p>{{ $t('askMeSlot.callToAction') }}</p>

        <h2>{{ $t('askMeSlot.trusted.title') }}</h2>
        <p>{{ $t('askMeSlot.trusted.featured') }}</p>

        <h2>{{ $t('askMeSlot.faqs.title') }}</h2>
        
        <div class="faq-section">
          <div class="faq-item">
            <h3>{{ $t('askMeSlot.faqs.questions.whatIs.question') }}</h3>
            <p>{{ $t('askMeSlot.faqs.questions.whatIs.answer') }}</p>
          </div>

          <div class="faq-item">
            <h3>{{ $t('askMeSlot.faqs.questions.playFree.question') }}</h3>
            <p>{{ $t('askMeSlot.faqs.questions.playFree.answer') }}</p>
          </div>

          <div class="faq-item">
            <h3>{{ $t('askMeSlot.faqs.questions.needApp.question') }}</h3>
            <p>{{ $t('askMeSlot.faqs.questions.needApp.answer') }}</p>
          </div>

          <div class="faq-item">
            <h3>{{ $t('askMeSlot.faqs.questions.safety.question') }}</h3>
            <p>{{ $t('askMeSlot.faqs.questions.safety.answer') }}</p>
          </div>

          <div class="faq-item">
            <h3>{{ $t('askMeSlot.faqs.questions.payments.question') }}</h3>
            <p>{{ $t('askMeSlot.faqs.questions.payments.answer') }}</p>
          </div>

          <div class="faq-item">
            <h3>{{ $t('askMeSlot.faqs.questions.fairness.question') }}</h3>
            <p>{{ $t('askMeSlot.faqs.questions.fairness.answer') }}</p>
          </div>

          <div class="faq-item">
            <h3>{{ $t('askMeSlot.faqs.questions.realMoney.question') }}</h3>
            <p>{{ $t('askMeSlot.faqs.questions.realMoney.answer') }}</p>
          </div>

          <div class="faq-item">
            <h3>{{ $t('askMeSlot.faqs.questions.noApp.question') }}</h3>
            <p>{{ $t('askMeSlot.faqs.questions.noApp.answer') }}</p>
          </div>

          <div class="faq-item">
            <h3>{{ $t('askMeSlot.faqs.questions.bahasaService.question') }}</h3>
            <p>{{ $t('askMeSlot.faqs.questions.bahasaService.answer') }}</p>
          </div>

          <div class="faq-item">
            <h3>{{ $t('askMeSlot.faqs.questions.verification.question') }}</h3>
            <p>{{ $t('askMeSlot.faqs.questions.verification.answer') }}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNavigation } from '@/components/utils/navigation';
import button_frame from '@/assets/main-button.png'; // Import fallback image

// Use your existing navigation utilities
const { goToRegister, goToHomepage, goToLogin } = useNavigation();

// Function to handle image loading errors
const handleImageError = (event) => {
  // Use a fallback image when the original fails to load
  event.target.src = button_frame;
  console.error(`Failed to load image: ${event.target.alt}`);
};

// Create a base structure for our games with dynamic imports
const askmeslotGames = ref([]);

// Approach 1: Using import.meta.url for Vue 3 (Vite compatible)
const getImageUrl = (name) => {
  try {
    // This approach works with Vite
    return new URL(`/src/assets/askmeslot-img/${name}.png`, import.meta.url).href;
  } catch (error) {
    console.error(`Error loading image ${name}:`, error);
    return button_frame; // Fallback to button frame
  }
};

// Initialize games
onMounted(() => {
  // Generate games dynamically (75 games for AskMeSlot)
  askmeslotGames.value = Array.from({ length: 75 }, (_, i) => {
    const gameNumber = i + 1;
    return {
      id: `askmeslot${gameNumber}`,
      name: `AskMeSlot Game ${gameNumber}`,
      image: getImageUrl(`askmeslot${gameNumber}`)
    };
  });
});

// Use navigation utility for automatic language detection
const navigateToRegister = () => {
  goToRegister();
};
</script>

<style scoped>
.askmeslot {
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

/* Content Section Styling - Based on your contactus CSS */
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

/* Content sections with flex layout */
.content-section > div {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Feature Table Styling */
.feature-table {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 15px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.feature-name {
  font-weight: bold;
  font-size: 14px;
}

.feature-description {
  font-size: 14px;
  line-height: 1.6;
}

/* Lists Styling - exactly like contactus */
.dots {
  padding-left: 30px;
  font-size: 14px;
}

.dots li {
  margin-bottom: 5px;
}

.steps-list {
  padding-left: 30px;
  font-size: 14px;
}

.steps-list li {
  margin-bottom: 10px;
}

/* FAQ Styling */
.faq-section {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.faq-item {
  background-color: rgba(0, 0, 0, 0.02);
  padding: 15px;
  border-radius: 8px;
}

.faq-item h3 {
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: #02D1FD;
}

.faq-item p {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
}

/* Homepage Link Styling - exactly like contactus */
.homepage-link {
  color: #02D1FD;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s ease;
}

@media screen and (min-width: 469px) and (max-width: 768px) {
  .game-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 5px;
  }
  
  .table-row {
    grid-template-columns: 1fr;
    gap: 5px;
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
  
  .table-row {
    grid-template-columns: 1fr;
    gap: 5px;
  }
}
</style>