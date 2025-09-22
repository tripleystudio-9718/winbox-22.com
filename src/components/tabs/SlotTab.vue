<template>
    <div class="slot-container">
      <div class="slot-grid">
        <div v-for="game in slotGames" :key="game.id" class="slot-item">
          <div class="slot-image-wrapper">
            <img
              :src="game.image"
              :alt="game.alt"
              @click="navigateToGame(game.id)"
            />
          </div>
        </div>
      </div>

      <!-- Content Section Based on Document -->
      <div class="content-section">
        <license_payment />
        <h1>{{ $t('slotGames.title') }}</h1>
        
        <p>{{ $t('slotGames.intro.description1') }} <span class="homepage-link" @click="goToSlots">{{ $t('slotGames.intro.linkText') }}</span> {{ $t('slotGames.intro.description2') }}</p>
        
        <p v-html="$t('slotGames.intro.welcome')"></p>

        <div class="content-block">
          <h2>{{ $t('slotGames.whyChoice.title') }}</h2>
          <p>{{ $t('slotGames.whyChoice.description') }}</p>

          <h3>{{ $t('slotGames.whyChoice.jackpots.title') }}</h3>
          <p>{{ $t('slotGames.whyChoice.jackpots.description') }}</p>

          <h3>{{ $t('slotGames.whyChoice.security.title') }}</h3>
          <p>{{ $t('slotGames.whyChoice.security.description') }}</p>

          <h3>{{ $t('slotGames.whyChoice.bonuses.title') }}</h3>
          <p>{{ $t('slotGames.whyChoice.bonuses.description') }}</p>
        </div>

        <div class="content-block">
          <h2>{{ $t('slotGames.providers.title') }}</h2>
          <p>{{ $t('slotGames.providers.description') }}</p>

          <ul class="dots">
            <li><strong>{{ $t('slotGames.providers.pragmatic.name') }}</strong> {{ $t('slotGames.providers.pragmatic.description') }}</li>
            <li><strong>{{ $t('slotGames.providers.jili.name') }}</strong> {{ $t('slotGames.providers.jili.description') }}</li>
            <li><strong>{{ $t('slotGames.providers.playtech.name') }}</strong> {{ $t('slotGames.providers.playtech.description') }}</li>
            <li><strong>{{ $t('slotGames.providers.spade.name') }}</strong> {{ $t('slotGames.providers.spade.description') }}</li>
            <li v-html="$t('slotGames.providers.others.name')"></li>
          </ul>
        </div>

        <div class="content-block">
          <h2>{{ $t('slotGames.howToStart.title') }}</h2>
          <p>{{ $t('slotGames.howToStart.description') }}</p>

          <h3>{{ $t('slotGames.howToStart.step1.title') }}</h3>
          <p>{{ $t('slotGames.howToStart.step1.description') }}</p>

          <h3>{{ $t('slotGames.howToStart.step2.title') }}</h3>
          <p>{{ $t('slotGames.howToStart.step2.description') }}</p>

          <h3>{{ $t('slotGames.howToStart.step3.title') }}</h3>
          <p>{{ $t('slotGames.howToStart.step3.description') }}</p>
        </div>

        <div class="content-block">
          <h2>{{ $t('slotGames.faqs.title') }}</h2>
          
          <h3>{{ $t('slotGames.faqs.questions.fairness.question') }}</h3>
          <p>{{ $t('slotGames.faqs.questions.fairness.answer') }}</p>

          <h3>{{ $t('slotGames.faqs.questions.mobile.question') }}</h3>
          <p>{{ $t('slotGames.faqs.questions.mobile.answer1') }} <span class="homepage-link" @click="goToDownload">{{ $t('slotGames.faqs.questions.mobile.linkText') }}</span> {{ $t('slotGames.faqs.questions.mobile.answer2') }}</p>

          <h3>{{ $t('slotGames.faqs.questions.safety.question') }}</h3>
          <p>{{ $t('slotGames.faqs.questions.safety.answer') }}</p>
        </div>

        <div class="content-block">
          <h2>{{ $t('slotGames.conclusion.title') }}</h2>
          <p>{{ $t('slotGames.conclusion.description') }}</p>
          <p><strong>{{ $t('slotGames.conclusion.cta1') }} <span class="homepage-link" @click="goToHomepage">{{ $t('slotGames.conclusion.linkText') }}</span> {{ $t('slotGames.conclusion.cta2') }}</strong></p>
        </div>
      </div>
    </div>
</template>

<script setup>
import license_payment from '../license_payment.vue';

// Import all slot game images according to the sequence
import askmeslot from "@/assets/askmeslot.png";
import pragmatic_play from "@/assets/pragmatic-play.png";
import lucky365 from "@/assets/lucky365.png";
import microslot from "@/assets/microslot.png";
import monkey_king from "@/assets/monkey-king.png";
import jili from "@/assets/JILI.png";
import jdb from "@/assets/jdb.png";
import ygr from "@/assets/ygr.png";
import acewin from "@/assets/Acewin.png";
import play8 from "@/assets/play8.png";
import kingmidas from "@/assets/kingmidas.png";
import spadegaming from "@/assets/Spadegaming.png";
import playtech from "@/assets/Playtech.png";
import pokerwin from "@/assets/pokerwin.png";
import mega88 from "@/assets/mega88.png";

// Use your existing navigation utilities
import { useNavigation } from '@/components/utils/navigation';

const {
  goToRegister,
  goToAcewin,
  goToJili,
  goToLucky365,
  goToSpadeGaming,
  goToPlaytech,
  goToPragmaticPlay,
  goToAskmeslot,
  goToMicroslot,
  goToMonkeyking,
  goToHomepage,
  goToDownload,
  goToSlots
} = useNavigation();

// Define the slot games in the specified sequence
const slotGames = [
  {
    id: "askmeslot",
    name: "Ask Me Slot",
    image: askmeslot,
    alt: "Winbox Ask Me Slot"
  },
  {
    id: "pragmatic-play",
    name: "Pragmatic Play",
    image: pragmatic_play,
    alt: "Winbox Pragmatic Play"
  },
  {
    id: "lucky365",
    name: "Lucky 365",
    image: lucky365,
    alt: "Winbox Lucky 365"
  },
  {
    id: "microslot",
    name: "Micro Slot",
    image: microslot,
    alt: "Winbox Micro Slot"
  },
  {
    id: "monkeyking",
    name: "Monkey King",
    image: monkey_king,
    alt: "Winbox Monkey King"
  },
  {
    id: "jili",
    name: "JILI",
    image: jili,
    alt: "Winbox JILI"
  },
  {
    id: "login",
    name: "JDB Fishing",
    image: jdb,
    alt: "Winbox JDB Fishing"
  },
  {
    id: "login",
    name: "YGR",
    image: ygr,
    alt: "Winbox YGR"
  },
  {
    id: "acewin",
    name: "Acewin",
    image: acewin,
    alt: "Winbox Acewin"
  },
  {
    id: "login",
    name: "Play8",
    image: play8,
    alt: "Winbox Play8"
  },
  {
    id: "login",
    name: "King Midas",
    image: kingmidas,
    alt: "Winbox King Midas"
  },
  {
    id: "spadegaming",
    name: "Spade Gaming",
    image: spadegaming,
    alt: "Winbox Spade Gaming"
  },
  {
    id: "playtech",
    name: "Playtech",
    image: playtech,
    alt: "Winbox Playtech"
  },
  {
    id: "login",
    name: "Poker Win",
    image: pokerwin,
    alt: "Winbox Poker Win"
  },
  {
    id: "login",
    name: "Mega88",
    image: mega88,
    alt: "Winbox Mega88"
  }
];

// Navigation function using your existing utilities
const navigateToGame = (gameId) => {
  switch (gameId) {
    case "login":
      goToRegister();
      break;
    case "lucky365":
      goToLucky365();
      break;
    case "askmeslot":
      goToAskmeslot();
      break;
    case "pragmatic-play":
      goToPragmaticPlay();
      break;
    case "microslot":
      goToMicroslot();
      break;
    case "monkeyking":
      goToMonkeyking();
      break;
    case "jili":
      goToJili();
      break;
    case "acewin":
      goToAcewin();
      break;
    case "spadegaming":
      goToSpadeGaming();
      break;
    case "playtech":
      goToPlaytech();
      break;
    default:
      // For any games not specifically handled, navigate to register
      goToRegister();
      break;
  }
};
</script>

<style scoped>
.slot-container {
  color: white;
}

.slot-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  padding: 15px;
}

.slot-item {
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.slot-item:hover {
  transform: translateY(-5px);
}

.slot-image-wrapper img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
  display: block;
  cursor: pointer;
  border-radius: 8px;
}

/* Content Section - Based on contactus CSS */
.content-section {
  margin: 0 auto;
  padding: 20px 10px;
  color: black;
  font-family: Arial, sans-serif;
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

.content-block {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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

/* Tablet styles - 4 items per row */
@media screen and (min-width: 469px) and (max-width: 768px) {
  .slot-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 10px;
  }
}

/* Mobile styles - 3 items per row */
@media screen and (max-width: 468px) {
  .slot-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 8px;
  }

  .slot-item {
    border-radius: 6px;
  }
}

/* Larger screens - 6 items per row */
@media screen and (min-width: 1024px) {
  .slot-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>