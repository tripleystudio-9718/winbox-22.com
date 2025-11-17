<template>
  <ThreeColumnContent>
    <div class="scratch-win">
      <!-- Banner Section -->
      <div class="banner-section">
        <img 
          :src="scratchWinBanner" 
          alt="Scratch and Win Banner" 
          class="banner-image"
        />
      </div>

      <!-- Main Content -->
      <div class="content">
        <h1>{{ $t('scratchWin.heading') }}</h1>
        
        <p class="subtitle">{{ $t('scratchWin.subtitle') }}</p>
        
        <p>
          {{ $t('scratchWin.introBefore') }}
          <a href="https://www.winbox88.me/scratch-and-win" target="_blank" class="link">
            {{ $t('scratchWin.introLink') }}
          </a>
          {{ $t('scratchWin.introAfter') }}
        </p>

        <h2>{{ $t('scratchWin.getCodeTitle') }}</h2>
        
        <div class="button-group">
          <button class="whatsapp-btn">
            <span class="icon"></span> WHATSAPP
          </button>
          <button class="start-btn">{{ $t('scratchWin.get_started') }}</button>
        </div>

        <h2>{{ $t('scratchWin.howToTitle') }}</h2>
        <ol>
          <li v-for="(step, index) in howToSteps" :key="index">
            <strong>{{ step.title }}</strong> {{ step.desc }}
            <a v-if="step.link" :href="step.link" target="_blank" class="link">{{ step.linkText }}</a>{{ step.descAfter }}
          </li>
        </ol>

        <h2>{{ $t('scratchWin.whatCanWinTitle') }}</h2>
        <div class="prizes-image">
          <img 
            :src="prizesTable" 
            alt="What Can You Win - Prizes and Probabilities" 
            class="table-image"
          />
        </div>

        <h2>{{ $t('scratchWin.whoCanJoinTitle') }}</h2>
        <ul>
            <li v-for="(item, index) in whoCanJoin" :key="index">
              <!-- If it's a simple HTML string -->
              <span v-if="typeof item === 'string'" v-html="item"></span>

              <!-- If it's an object (with textBefore/link/textAfter) -->
              <span v-else>
                <span v-html="item.textBefore"></span>
                <a 
                  :href="item.link" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="link"
                >
                  <span v-html="item.linkText"></span>
                </a>
                <span v-html="item.textAfter"></span>
              </span>
            </li>
          </ul>

        <h2>{{ $t('scratchWin.pastWinnerTitle') }}</h2>

        <!-- Past Winners Carousel -->
        <div class="carousel-container">
          <button class="carousel-btn prev" @click="scrollCarousel(-1)" :disabled="scrollPosition === 0">
            ‹
          </button>
          <div class="carousel-wrapper" ref="carouselWrapper">
            <div class="carousel-track" :style="{ transform: `translateX(-${scrollPosition * itemWidth}px)` }">
              <div 
                v-for="(winner, index) in pastWinners" 
                :key="index" 
                class="winner-card"
              >
                <img :src="winner" :alt="`Winner ${index + 1}`" />
              </div>
            </div>
          </div>
          <button class="carousel-btn next" @click="scrollCarousel(1)" :disabled="scrollPosition >= maxScroll">
            ›
          </button>
        </div>

        <h2>{{ $t('scratchWin.termsTitle') }}</h2>
        <ul>
          <li v-for="(term, index) in termsList" :key="index">
            <span v-if="typeof term === 'string'">{{ term }}</span>
            <span v-else>
              {{ term.textBefore }}
              <a :href="term.link" target="_blank" class="link">{{ term.linkText }}</a>
              {{ term.textAfter }}
            </span>
          </li>
        </ul>

        <h2>{{ $t('scratchWin.whyJoinTitle') }}</h2>
        <ul>
          <li 
            v-for="(reason, index) in whyJoinList" 
            :key="index" 
            v-html="reason">
          </li>
        </ul>

        <h2>{{ $t('scratchWin.faqTitle') }}</h2>
        <div v-for="(faq, index) in faqList" :key="index" class="faq-item">
          <p><strong>Q: {{ faq.q }}</strong></p>
          <p>A: {{ faq.a }}</p>
        </div>

        <!-- <p class="register-button-section">
          <router-link :to="routerLinks.register()" class="register-button">
            {{ $t('button.register') }}
          </router-link>
        </p> -->
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useNavigation } from "@/components/utils/navigation.js";
import ThreeColumnContent from "@/components/ThreeColumnContent.vue";
import scratchWinBanner from "@/assets/scratch-win-banner.avif";
import prizesTable from "@/assets/scratch-prizes-table.avif";
// Import past winner images
import winner1 from "@/assets/winner1.webp";
import winner2 from "@/assets/winner2.webp";
import winner3 from "@/assets/winner3.webp";
import winner4 from "@/assets/winner4.webp";
import winner5 from "@/assets/winner5.webp";
import winner6 from "@/assets/winner6.webp";
import winner7 from "@/assets/winner7.webp";
import winner8 from "@/assets/winner8.webp";
import winner9 from "@/assets/winner9.webp";
import winner10 from "@/assets/winner10.webp";
import winner11 from "@/assets/winner11.webp";
import winner12 from "@/assets/winner12.webp";

const { tm } = useI18n();
const { routerLinks } = useNavigation();

// Fetch structured arrays/objects
const howToSteps = tm("scratchWin.howToSteps") || [];
const whoCanJoin = tm("scratchWin.whoCanJoin") || [];
const termsList = tm("scratchWin.termsList") || [];
const whyJoinList = tm("scratchWin.whyJoinList") || [];
const faqList = tm("scratchWin.faqList") || [];

// Past winners carousel
const pastWinners = [winner1, winner2, winner3, winner4, winner5, winner6, winner7, winner8, winner9, winner10, winner11, winner12];
const carouselWrapper = ref(null);
const scrollPosition = ref(0);
const itemWidth = ref(0);

const maxScroll = computed(() => {
  return Math.max(0, pastWinners.length - 5);
});

const scrollCarousel = (direction) => {
  scrollPosition.value = Math.max(0, Math.min(scrollPosition.value + direction, maxScroll.value));
};

onMounted(() => {
  // Calculate item width (showing 5.2 items means each item is ~19.23% of container width)
  if (carouselWrapper.value) {
    itemWidth.value = carouselWrapper.value.offsetWidth / 5.2;
  }
});
</script>

<style scoped>
.scratch-win {
  margin: 0;
  padding: 20px 10px;
  font-family: Arial, sans-serif;
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

/* Main Content */
.content {
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

.content h1 {
  font-size: 28px;
  font-weight: 700;
  margin: 30px 0 20px;
}

.subtitle {
  font-size: 18px;
  font-weight: 600;
  margin: 15px 0;
}

.content h2 {
  font-size: 20px;
  font-weight: 700;
  margin: 30px 0 15px;
}

.content p {
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 15px;
}

.content strong {
  font-weight: 700;
}

/* Links */
.link {
  color: #02D1FD;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

/* Button Group */
.button-group {
  display: flex;
  gap: 15px;
  margin: 25px 0;
}

.whatsapp-btn,
.start-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #02D1FD;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 160px;
  height: 40px;
}

.whatsapp-btn {
  background: #33B4E2;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
}

.start-btn {
  background: #33B4E2;
  color: white;
}

.whatsapp-btn:hover,
.start-btn:hover {
  opacity: 0.9;
}

.icon {
  font-size: 20px;
}

/* Register Button */
.register-button-section {
  margin: 35px 0;
  text-align: center;
}

.register-button {
  display: inline-block;
  min-width: 220px;
  padding: 14px 35px;
  background: linear-gradient(135deg, #02D1FD 0%, #0298c7 100%);
  color: white;
  text-decoration: none;
  font-weight: 700;
  border-radius: 12px;
  font-size: 17px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.register-button:hover {
  opacity: 0.9;
}

/* Prizes Image */
.prizes-image {
  margin: 25px 0;
}

.table-image {
  width: 100%;
  max-width: 400px;
  height: auto;
  display: block;
}

/* Lists */
.content ul,
.content ol {
  margin: 15px 0 25px;
  padding-left: 25px;
}

.content li {
  margin-bottom: 10px;
  line-height: 1.7;
  font-size: 15px;
}

/* Carousel Container */
.carousel-container {
  position: relative;
  width: 100%;
  margin: 30px 0;
  display: flex;
  align-items: center;
  gap: 15px;
}

.carousel-wrapper {
  overflow: hidden;
  width: 100%;
}

.carousel-track {
  display: flex;
  gap: 15px;
  transition: transform 0.3s ease;
}

.winner-card {
  flex: 0 0 calc((100% - 60px) / 5.2);
  min-width: calc((100% - 60px) / 5.2);
}

.winner-card img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.carousel-btn {
  background: #33B4E2;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;
}

.carousel-btn:hover:not(:disabled) {
  opacity: 0.8;
}

.carousel-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

.carousel-btn.prev {
  margin-right: 5px;
}

.carousel-btn.next {
  margin-left: 5px;
}

/* FAQ */
.faq-item {
  margin-bottom: 20px;
}

.faq-item p {
  margin: 5px 0;
}

/* Mobile */
@media (max-width: 768px) {
  .content {
    padding: 15px 10px;
  }

  .content h1 {
    font-size: 24px;
  }

  .content h2 {
    font-size: 18px;
  }

  .button-group {
    flex-direction: column;
  }

  .whatsapp-btn,
  .start-btn {
    width: 100%;
  }

  .table-image {
    max-width: 100%;
  }

  .carousel-container {
    gap: 10px;
  }

  .carousel-track {
    gap: 10px;
  }

  .winner-card {
    flex: 0 0 calc((100% - 30px) / 3.2);
    min-width: calc((100% - 30px) / 3.2);
  }

  .carousel-btn {
    width: 35px;
    height: 35px;
    font-size: 20px;
  }
}
</style>