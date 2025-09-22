<template>
  <div class="three-column-container">
    <!-- Mobile top slider -->
    <div v-if="isMobile" class="s1-slider">
      <div class="slider-container">
        <div class="slider-content">
          <div class="slides-wrapper">
            <transition-group name="fade" tag="div" class="slides">
              <div 
                v-for="(slide, index) in slides" 
                :key="slide.img"
                v-show="currentSlide === index"
                class="slide"
              >
                <img :src="slide.img" :alt="slide.alt" class="slide-image" @click="navigateToRegister">
              </div>
            </transition-group>
          </div>
          
          <div class="slider-dots">
            <span 
              v-for="(slide, index) in slides" 
              :key="index"
              :class="['dot', { active: currentSlide === index }]"
              @click="goToSlide(index)"
            ></span>
          </div>
        </div>
        
        <div class="slider-progress">
          <div class="progress-bar" :style="{ width: `${progressPercent}%` }"></div>
        </div>
      </div>
    </div>

    <!-- Three Column Layout -->
    <div class="three-columns">
      <!-- Left Column -->
      <div class="column-left">
        <!-- Desktop slider -->
        <div v-if="!isMobile" class="s1-slider">
          <div class="slider-container">
            <div class="slider-content">
              <div class="slides-wrapper">
                <transition-group name="fade" tag="div" class="slides">
                  <div 
                    v-for="(slide, index) in slides" 
                    :key="slide.img"
                    v-show="currentSlide === index"
                    class="slide"
                  >
                    <img :src="slide.img" :alt="slide.alt" class="slide-image" @click="navigateToRegister">
                  </div>
                </transition-group>
              </div>
              
              <div class="slider-dots">
                <span 
                  v-for="(slide, index) in slides" 
                  :key="index"
                  :class="['dot', { active: currentSlide === index }]"
                  @click="goToSlide(index)"
                ></span>
              </div>
            </div>
            
            <div class="slider-progress">
              <div class="progress-bar" :style="{ width: `${progressPercent}%` }"></div>
            </div>
          </div>
        </div>

        <div class="column-left-2">
          <img :src="left_banner" alt="Partnership Image" @click="navigateToRegister"/>
        </div>

        <!-- Live Transaction Table -->
        <div class="s1-table">
          <div class="table-container">
            <div class="header-container">
              <div class="header-text">LIVE TRANSACTION</div>
              <div class="live-indicator">
                <div class="live-text">LIVE</div>
                <div class="recording-status"></div>
              </div>
            </div>
            
            <table class="transaction-table">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              
              <tr>
                <td colspan="2" class="section-header topup-header">TOP UP</td>
                <td colspan="3" class="section-header withdraw-header">WITHDRAW</td>
              </tr>
              <tbody>
                <tr v-for="(transaction, index) in transactions" 
                    :key="index" 
                    class="transaction-row dark-row">
                  <td class="transaction-id" :class="{ highlight: highlightedCells['topUp-' + index] }">
                    {{ transaction.topUpId }}
                  </td>
                  <td class="amount" :class="{ highlight: highlightedCells['topUp-' + index] }">
                    {{ transaction.topUpAmount }}
                  </td>
                  <td class="transaction-id" :class="{ highlight: highlightedCells['withdraw-' + index] }">
                    {{ transaction.withdrawId }}
                  </td>
                  <td class="amount" :class="{ highlight: highlightedCells['withdraw-' + index] }">
                    {{ transaction.withdrawAmount }}
                  </td>
                  <td class="provider" :class="{ highlight: highlightedCells['withdraw-' + index] }">
                    {{ transaction.provider }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Mobile Login/Register -->
        <div v-if="isMobile" class="login-register">
          <div class="lr-button">
            <img :src="login_button" alt="login" @click="navigateToLogin">
            <img :src="register_button" alt="register" @click="navigateToRegister">
          </div>

          <div class="amount-management">
            <div class="amount-balance">
              <p>Baki:</p>
              <p style="font-size: 18px;">RM0.00</p>
              <p>Deposit Minimum: RM1.00</p>
              <p>Withdraw Minimum: RM25.00</p>
            </div>

            <div class="amount-withdraw">
              <img :src="deposit_button" alt="deposit" @click="navigateToRegister">
              <img :src="withdraw_button" alt="withdraw" @click="navigateToRegister">
              <img :src="refresh_button" alt="refresh" @click="navigateToRegister">
            </div>
          </div>
        </div>

        <!-- Mobile promotional images -->
        <div v-if="isMobile" class="latest-game-tips">
          <img :src="mega_giveaway" alt="mega giveaway" @click="navigateToRegister">
        </div>
        <div v-if="isMobile" class="dragon-tiger-ranking">
          <img :src="lucky365RankingChampionshipBanner" alt="Lucky365 Ranking Championship banner with a mystical character, RM288,888 prize, and 'MAKE YOUR MONEY AS YOU WISH' text." @click="navigateToRegister">
        </div>

        <div class="column-left-4">
          <img :src="rescue_bonus" alt="Rescue Bonus" @click="navigateToRegister" />
        </div>

        <!-- Button Section -->
        <div class="button-section">
          <div class="button-sec">
            <div class="button-left">
              <img :src="share_buton" alt="Share Button" @click="navigateToRegister" />
            </div>
            <div class="button-left">
              <img :src="downline_button" alt="Downline Button" @click="navigateToRegister"/>
            </div>
          </div>
          <div class="button-sec">
            <div class="button-left">
              <img :src="copy_referral_button" alt="Copy Referral Button" @click="navigateToRegister"/>
            </div>
            <div class="button-left">
              <img :src="game_tips_button" alt="Game Tips Button" @click="navigateToRegister"/>
            </div>
          </div>
        </div>

        <div class="image-button">
          <img :src="claim_angpao_now" alt="Banner promoting a free Ang Pau offer with a woman in traditional red attire, accompanied by gold coins and a 'CLAIM NOW' button." @click="navigateToRegister"/>
          <img :src="mahjiong_coming" alt="Mahjong game banner featuring Chinese characters, mahjong tiles, and a 'PLAY NOW' button." @click="navigateToRegister"/>
        </div>

        <!-- Game Carousel -->
        <div class="game-marquee-container">
          <div class="swiper swiper-horizontal" id="game-marquee" ref="gameMarquee">
            <div class="game-banners swiper-wrapper">
              <div 
                v-for="(game, index) in games" 
                :key="game.id" 
                class="game-banner swiper-slide" 
                :role="`group`" 
                :aria-label="`${index + 1} / ${games.length}`"
                :data-game-id="game.id"
                @click="handleGameClick(game.id)"
              >
                <img :src="game.image" :alt="game.alt" @click="navigateToRegister">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Center Column - Slot for page content -->
      <div class="column-center">
        <slot />
      </div>

      <!-- Right Column -->
      <div class="column-right">
        <div v-if="!isMobile" class="right-image">
          <img :src="rescue_bonus_50000" alt="rescue bonus" @click="navigateToRegister">
        </div>

        <div v-if="!isMobile" class="login-register">
          <div class="lr-button">
            <img :src="login_button" alt="login" @click="navigateToLogin">
            <img :src="register_button" alt="register" @click="navigateToRegister">
          </div>

          <div class="amount-management">
            <div class="amount-balance">
              <p>Baki:</p>
              <p class="rm-amount">RM0.00</p>
              <p>Deposit Minimum: RM1.00</p>
              <p>Withdraw Minimum: RM25.00</p>
            </div>

            <div class="amount-withdraw">
              <img :src="deposit_button" alt="deposit" @click="navigateToRegister">
              <img :src="withdraw_button" alt="withdraw" @click="navigateToRegister">
              <img :src="refresh_button" alt="refresh" @click="navigateToRegister">
            </div>
          </div>
        </div>

        <div v-if="!isMobile" class="latest-game-tips">
          <img :src="mega_giveaway" alt="mega giveaway" @click="navigateToRegister">
        </div>
        <div v-if="!isMobile" class="dragon-tiger-ranking">
          <img :src="lucky365RankingChampionshipBanner" alt="Lucky365 Ranking Championship banner with a mystical character, RM288,888 prize, and 'MAKE YOUR MONEY AS YOU WISH' text." @click="navigateToRegister">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import { useNavigation } from '@/components/utils/navigation'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

// Image Imports
import banner1 from '@/assets/banner-1.jpg'
import banner2 from '@/assets/banner-2.jpg'
import banner3 from '@/assets/banner-3.jpg'
import left_banner from '@/assets/column-left-banner.jpg'
import rescue_bonus from '@/assets/rescue-bonus.gif'
import share_buton from '@/assets/share-button.gif'
import downline_button from '@/assets/downline-button.png'
import copy_referral_button from '@/assets/copy-referral-link-button.png'
import game_tips_button from '@/assets/game-tips-button.gif'
import login_button from '@/assets/login-button.png'
import register_button from '@/assets/register-button.png'
import deposit_button from '@/assets/deposit-button.gif'
import withdraw_button from '@/assets/withdraw-button.gif'
import refresh_button from '@/assets/refresh-button.gif'
import mega_giveaway from '@/assets/mega-giveaway.gif'
import claim_angpao_now from "@/assets/claim-angpao-now.gif"
import mahjiong_coming from "@/assets/mahjiong-coming.gif"
import lucky365RankingChampionshipBanner from "@/assets/lucky365-ranking-championship-banner.gif"
import rescue_bonus_50000 from '@/assets/rescue-bonus-50000.gif'
import game1Image from "@/assets/game1.gif"
import game2Image from "@/assets/game2.gif"
import game3Image from "@/assets/game3.gif"
import game4Image from "@/assets/game4.gif"
import game5Image from "@/assets/game5.gif"

// Navigation functions (replaced useRouter)
const { goToLogin, goToRegister } = useNavigation()
const navigateToLogin = goToLogin
const navigateToRegister = goToRegister

// Mobile detection
const windowWidth = ref(window.innerWidth)
const isMobile = computed(() => windowWidth.value <= 468)

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// Games data
// const games = ref([
//   { 
//     id: 'game1', 
//     image: 'http://tripleys19.sg-host.com/wp-content/uploads/2025/03/6fb694be31e764c603e4b.gif', 
//     alt: 'Game 1' 
//   },
//   { 
//     id: 'game2', 
//     image: 'http://tripleys19.sg-host.com/wp-content/uploads/2025/03/3a0490ce31e76786052d2.gif', 
//     alt: 'Game 2' 
//   },
//   { 
//     id: 'game3', 
//     image: 'http://tripleys19.sg-host.com/wp-content/uploads/2025/03/ad72d5ce31e76745a0101.gif', 
//     alt: 'Game 3' 
//   },
//   { 
//     id: 'game4', 
//     image: 'http://tripleys19.sg-host.com/wp-content/uploads/2025/03/876c29ce31e7618ae6f1d-1.gif', 
//     alt: 'Game 4' 
//   },
//   { 
//     id: 'game5', 
//     image: 'http://tripleys19.sg-host.com/wp-content/uploads/2025/03/36242dbe31e76d7711255-3.gif', 
//     alt: 'Game 5' 
//   }
// ])

const games = ref([
  { 
    id: 'game1', 
    image: game1Image, 
    alt: 'Icon for the game \'Pirate Queen 2\' by JILI, includes a \'PLAY NOW!\' button.' 
  },
  { 
    id: 'game2', 
    image: game2Image, 
    alt: 'Fist Champion online slot game by Acewin, featuring two boxers in a fighting ring.' 
  },
  { 
    id: 'game3', 
    image: game3Image, 
    alt: 'Sparta Megah5 slot game tile, showing an ancient Spartan warrior with a sword and shield.' 
  },
  { 
    id: 'game4', 
    image: game4Image, 
    alt: 'Promotional tile for the Golden Lotus online slot from Megah5, featuring a large golden lotus flower.' 
  },
  { 
    id: 'game5', 
    image: game5Image, 
    alt: 'The Golden Hen slot game by Acewin, displaying a golden hen character.' 
  }
])

// Swiper instance for game marquee
const gameMarquee = ref(null)
const swiperInstance = ref(null)

// Handle game click
const handleGameClick = (gameId) => {
  console.log(`Game ${gameId} clicked`)
}

// Slider Logic
const slides = ref([
  { img: banner1, alt: '100% Welcome Bonus' },
  { img: banner2, alt: 'Join Telegram Free Prizes' },
  { img: banner3, alt: 'LUCKY 7 BOOST BONUS' },
])

const currentSlide = ref(0)
const progressPercent = ref(0)
const autoplayInterval = ref(null)
const progressInterval = ref(null)
const autoplayDuration = 5000
const progressUpdateInterval = 50

// Transaction Table Logic
const transactions = ref([
  { 
    topUpId: '60******25', 
    topUpAmount: 'RM10.00',
    withdrawId: '60******84', 
    withdrawAmount: 'RM108.00', 
    provider: 'PRAGMATIC' 
  },
  { 
    topUpId: '60******25',
    topUpAmount: 'RM10.00',
    withdrawId: '60******14', 
    withdrawAmount: 'RM110.00', 
    provider: 'VP' 
  },
  { 
    topUpId: '60******21', 
    topUpAmount: 'RM5.00',
    withdrawId: '60******27', 
    withdrawAmount: 'RM45.00', 
    provider: 'JILI' 
  },
  { 
    topUpId: '60******61', 
    topUpAmount: 'RM30.00',
    withdrawId: '60******36', 
    withdrawAmount: 'RM45.00', 
    provider: 'MEGA888' 
  },
  { 
    topUpId: '60******08', 
    topUpAmount: 'RM5.00',
    withdrawId: '60******97', 
    withdrawAmount: 'RM150.00', 
    provider: 'JILI' 
  }
])

const highlightedCells = ref({})

// Helper functions for transactions
const generateTransactionId = () => {
  return '60******' + Math.floor(Math.random() * 100).toString().padStart(2, '0')
}

const generateAmount = () => {
  const amount = Math.floor(Math.random() * 196) + 5
  return Math.random() < 0.3 
    ? `RM${amount}.` + Math.floor(Math.random() * 100).toString().padStart(2, '0')
    : `RM${amount}.00`
}

const providers = ['PRAGMATIC', 'VP', 'JILI', 'MEGA888', 'PUSSY888', 'JOKER', 'SPADEGAMING']

const getRandomProvider = () => {
  return providers[Math.floor(Math.random() * providers.length)]
}

const updateTransactionTable = () => {
  const numRowsToUpdate = Math.floor(Math.random() * 2) + 1
  const rowsToUpdate = new Set()

  while (rowsToUpdate.size < numRowsToUpdate) {
    rowsToUpdate.add(Math.floor(Math.random() * transactions.value.length))
  }

  const updatedTransactions = [...transactions.value]
  const updatedHighlightedCells = { ...highlightedCells.value }
  
  rowsToUpdate.forEach(index => {
    const updateSide = Math.floor(Math.random() * 3)
    
    if (updateSide === 0 || updateSide === 2) {
      updatedTransactions[index].topUpId = generateTransactionId()
      updatedTransactions[index].topUpAmount = generateAmount()
      updatedHighlightedCells['topUp-' + index] = true
      
      setTimeout(() => {
        highlightedCells.value['topUp-' + index] = false
      }, 1000)
    }
    
    if (updateSide === 1 || updateSide === 2) {
      updatedTransactions[index].withdrawId = generateTransactionId()
      updatedTransactions[index].withdrawAmount = generateAmount()
      updatedTransactions[index].provider = getRandomProvider()
      updatedHighlightedCells['withdraw-' + index] = true
      
      setTimeout(() => {
        highlightedCells.value['withdraw-' + index] = false
      }, 1000)
    }
  })

  transactions.value = updatedTransactions
  highlightedCells.value = updatedHighlightedCells
}

// Slider Progress Logic
const progressIncrement = computed(() => {
  return (100 / (autoplayDuration / progressUpdateInterval))
})

const startAutoplay = () => {
  stopAutoplay()
  progressPercent.value = 0
  
  progressInterval.value = setInterval(() => {
    progressPercent.value += progressIncrement.value
    
    if (progressPercent.value >= 100) {
      progressPercent.value = 100
      clearInterval(progressInterval.value)
      nextSlide()
    }
  }, progressUpdateInterval)
}

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearTimeout(autoplayInterval.value)
  }
  if (progressInterval.value) {
    clearInterval(progressInterval.value)
  }
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
  startAutoplay()
}

const goToSlide = (index) => {
  currentSlide.value = index
  startAutoplay()
}

// Lifecycle Hooks
onMounted(() => {
  startAutoplay()
  
  // Start transaction updates
  setInterval(updateTransactionTable, 5000)

  // Initialize Swiper
  nextTick(() => {
    if (gameMarquee.value) {
      swiperInstance.value = new Swiper(gameMarquee.value, {
        slidesPerView: 3,
        spaceBetween: 15,
        speed: 3000,
        allowTouchMove: true,
        grabCursor: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false
        }
      })
    }
  })
})

onUnmounted(() => {
  stopAutoplay()

  if (swiperInstance.value) {
    swiperInstance.value.destroy()
  }
})
</script>

<style scoped>
.three-column-container {
  width: 100%;
}

.three-columns {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: auto;
  align-items: stretch;
}

img {
  cursor: pointer;
}

.column-left, .column-center, .column-right {
  min-height: auto;
}

.column-left {
  width: 20%;
  background: rgba(0, 0, 0, .3);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.column-left img {
  width: 100%;
}

.column-center {
  width: 60%;
}

.column-right {
  width: 20%;
  background: rgba(0, 0, 0, .3);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Slider Styles */
.slider-container {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  font-family: Arial, sans-serif;
}

.slider-content {
  position: relative;
  width: 100%;
  aspect-ratio: 2.3/1;
}

.slides-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slides {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slider-dots {
  position: absolute;
  bottom: 15px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s;
}

.dot.active {
  background-color: white;
}

.slider-progress {
  position: relative;
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.2);
}

.progress-bar {
  height: 100%;
  background-color: #ffc107;
  transition: width 0.05s linear;
}

/* FIXED RESPONSIVE TABLE STYLES */
.s1-table {
  width: 100%;
  height: auto;
  margin: 0 auto;
}

.table-container {
  width: 100%;
  height: auto;
  margin: 0 auto;
  border: 1px solid #238aa1;
  border-radius: 4px;
  overflow: hidden;
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #238aa1;
  padding: 6px 8px;
  background: linear-gradient(135deg, #238aa1, #2ea3c0);
}

.header-text {
  color: white;
  font-weight: 700;
  font-size: clamp(11px, 2.5vw, 14px);
  font-family: 'Poppin', sans-serif;
  letter-spacing: 0.3px;
}

.live-indicator {
  display: flex;
  align-items: center;
  background-color: #ff0000;
  animation: blink 1.2s infinite;
  border-radius: 3px;
  padding: 2px 6px;
}

.live-text {
  color: #ffffff;
  font-weight: 500;
  font-size: clamp(9px, 2vw, 11px);
  margin-right: 4px;
}

.recording-status {
  width: 6px;
  height: 6px;
  background-color: #ffffff;
  border-radius: 50%;
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}

.transaction-table {
  border-collapse: collapse;
  font-size: clamp(9px, 2vw, 11px);
  font-family: 'Poppin', sans-serif;
  width: 100%;
  table-layout: auto; /* Changed from fixed */
}

/* Responsive column widths */
.transaction-table colgroup col:nth-child(1) { width: 20%; } /* Top Up ID */
.transaction-table colgroup col:nth-child(2) { width: 16%; } /* Top Up Amount */
.transaction-table colgroup col:nth-child(3) { width: 20%; } /* Withdraw ID */
.transaction-table colgroup col:nth-child(4) { width: 16%; } /* Withdraw Amount */
.transaction-table colgroup col:nth-child(5) { width: 28%; } /* Provider */

.section-header {
  padding: 4px 3px;
  border: 1px solid #238aa1;
  text-align: center;
  font-weight: 700;
  font-size: clamp(9px, 2.2vw, 12px);
  white-space: nowrap;
}

.topup-header {
  background-image: linear-gradient(to right, #8d8f11, #d7c965);
  color: #fff;
}

.withdraw-header {
  background-image: linear-gradient(to left, #374439, #28ab3f);
  color: #fff;
}

.transaction-row td {
  border: 1px solid #238aa1;
  text-align: left;
  padding: 3px 2px;
  vertical-align: middle;
  white-space: nowrap; /* Prevent text wrapping */
  overflow: visible; /* Show all text */
  text-overflow: clip; /* Don't add ellipsis */
}

.transaction-id {
  color: #2c3e50;
  text-align: left !important;
  font-weight: 500;
}

.amount {
  color: #e74c3c;
  text-align: right !important;
  font-weight: 600;
}

.provider {
  color: #27ae60;
  text-align: center !important;
  font-weight: 600;
}

.transaction-row {
  height: auto; /* Let height adjust to content */
  min-height: 24px;
  width: 100%;
}

.highlight {
  animation: highlight 1s ease-out;
}

@keyframes highlight {
  0% { background-color: rgba(255, 235, 59, 0.7); }
  100% { background-color: transparent; }
}

/* Responsive breakpoints for table */
@media screen and (max-width: 1200px) {
  .transaction-table colgroup col:nth-child(1) { width: 22%; }
  .transaction-table colgroup col:nth-child(2) { width: 17%; }
  .transaction-table colgroup col:nth-child(3) { width: 22%; }
  .transaction-table colgroup col:nth-child(4) { width: 17%; }
  .transaction-table colgroup col:nth-child(5) { width: 22%; }
}

@media screen and (max-width: 992px) {
  .transaction-table colgroup col:nth-child(1) { width: 23%; }
  .transaction-table colgroup col:nth-child(2) { width: 18%; }
  .transaction-table colgroup col:nth-child(3) { width: 23%; }
  .transaction-table colgroup col:nth-child(4) { width: 18%; }
  .transaction-table colgroup col:nth-child(5) { width: 18%; }
  
  .header-container {
    padding: 5px 6px;
  }
}

@media screen and (max-width: 768px) {
  .transaction-table colgroup col:nth-child(1) { width: 24%; }
  .transaction-table colgroup col:nth-child(2) { width: 19%; }
  .transaction-table colgroup col:nth-child(3) { width: 24%; }
  .transaction-table colgroup col:nth-child(4) { width: 19%; }
  .transaction-table colgroup col:nth-child(5) { width: 14%; }
  
  .transaction-row td {
    padding: 2px 1px;
  }
  
  .header-container {
    padding: 4px 5px;
  }
  
  .section-header {
    padding: 3px 2px;
  }
}

@media screen and (max-width: 576px) {
  .transaction-table colgroup col:nth-child(1) { width: 25%; }
  .transaction-table colgroup col:nth-child(2) { width: 20%; }
  .transaction-table colgroup col:nth-child(3) { width: 25%; }
  .transaction-table colgroup col:nth-child(4) { width: 20%; }
  .transaction-table colgroup col:nth-child(5) { width: 10%; }
  
  .provider {
    font-size: 8px;
    writing-mode: horizontal-tb;
    text-orientation: mixed;
  }
}

/* Button Section Styles */
.button-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px; 
}

.button-sec {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
}

.button-left {
  width: 100%;
}

.button-left img {
  width: 100%;
  cursor: pointer;
}

.image-button img {
  max-width: 100%;
  height: auto;
  border-radius: 20px;
}

.dragon-tiger-ranking img {
  width: 100%;
  height: auto;
}

.game-marquee-container {
  width: 100%;
  margin: 10px 0;
}

.game-banner {
  width: 113.333px !important;
  margin-right: 15px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}

.game-banner img {
  width: 100%;
  display: block;
  border-radius: 8px;
}

.game-banners.swiper-wrapper {
  transition-timing-function: linear !important;
}

.right-image img {
  width: 100%;
  border-radius: 20px;
}

.login-register {
  background: linear-gradient(0deg, #f0f0f0, #f0f0f0);
  box-shadow: 2px 4px 20px rgb(14 14 14 / 61%);
  line-height: 23px;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 13px;
  gap: 20px;
  display: flex;
  flex-direction: column;
}

.lr-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.lr-button img {
  width: 50%;
  height: auto;
}

.amount-management{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px !important;
}

.amount-balance {
  width: 55%;
}

.amount-withdraw {
  width: 40%;
}

.amount-balance p {
  font-size: 11px;
}

.rm-amount {
  font-size: 20px !important;
  color: gold; 
}

.amount-withdraw img {
  width: 100%;
}

.latest-game-tips img{
  width: 100%;
  border-radius: 20px;
}

/* Tablet Styles (469px - 768px) */
@media screen and (min-width: 469px) and (max-width: 768px) {
  .three-columns {
    flex-wrap: wrap;
  }
  
  .column-left {
    width: 100%;
    order: 1;
    padding: 8px;
    background-color: white;
  }
  
  .column-center {
    width: 100%;
    order: 2;
    background-color: white;
  }
  
  .column-right {
    width: 100%;
    order: 3;
    padding: 8px;
    background-color: white;
  }
  
  .game-banner {
    width: calc(33.333% - 10px) !important;
  }
  
  .button-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
  
  .button-sec {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  .transaction-table {
    font-size: 10px;
  }
  
  .amount-management {
    gap: 10px !important;
  }
  
  .amount-balance, .amount-withdraw {
    width: 100%;
  }
  
  .lr-button img {
    width: 45%;
  }
}

/* Mobile Styles (max-width: 468px) */
@media screen and (max-width: 468px) {
  .three-columns {
    flex-direction: column;
  }
  
  .column-left, .column-center, .column-right {
    width: 100%;
    padding: 5px;
  }
  
  .column-left {
    order: 1;
    background-color: white;
  }
  
  .column-center {
    order: 2;
    background-color: white;
  }
  
  .column-right {
    order: 3;
    background-color: white;
  }
  
  .slider-content {
    aspect-ratio: 1.8/1;
  }
  
  .slider-dots {
    bottom: 5px;
  }
  
  .dot {
    width: 6px;
    height: 6px;
  }
  
  .transaction-table {
    font-size: 9px;
  }
  
  .header-text {
    font-size: 10px;
  }
  
  .transaction-row {
    height: 18px;
  }
  
  .button-section {
    flex-direction: column;
    gap: 5px;
  }
  
  .button-sec {
    flex-direction: row;
  }
  
  .game-banner {
    width: 105px !important;
  }
  
  .lr-button {
    justify-content: space-between;
  }
  
  .amount-management {
    gap: 10px !important;
  }
  
  .amount-balance, .amount-withdraw {
    width: 100%;
  }
  
  .amount-balance p {
    font-size: 11px;
    margin: 2px 0;
  }
  
  .rm-amount {
    font-size: 18px !important;
    margin: 5px 0;
  }
  
  .amount-withdraw {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  
  .amount-withdraw img {
    width: 90%;
  }
}
</style>