<!-- src/components/tabs/Top10Tab.vue -->
<template>
    <div class="top10-container">
      <div class="top10-grid">
        <div v-for="game in top10Games" :key="game.id" class="top10-item">
          <div class="top10-image-wrapper">
            <img
              :src="game.image"
              :alt="game.alt"
              @click="navigateToGame(game.id)"
            />
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
// Import all top 10 game images according to the sequence
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
import playtech from "@/assets/Playtech.png";
import pokerwin from "@/assets/pokerwin.png";
import mega88 from "@/assets/mega88.png";

// Use your existing navigation utilities
import { useNavigation } from '@/components/utils/navigation';

const {
  goToRegister,
  goToAcewin,
  goToJili,
  goToPlaytech,
  goToPragmaticPlay,
  goToAskmeslot,
  goToMicroslot,
  goToMonkeyking
} = useNavigation();

// Define the top 10 games (removed spadegaming and kingmidas)
const top10Games = [
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
    id: "login",
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
.top10-container {
  color: white;
}

.top10-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  padding: 15px;
}

.top10-item {
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.top10-item:hover {
  transform: translateY(-5px);
}

.top10-image-wrapper img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
  display: block;
  cursor: pointer;
  border-radius: 8px;
}

/* Tablet styles - 4 items per row */
@media screen and (min-width: 469px) and (max-width: 768px) {
  .top10-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 10px;
  }
}

/* Mobile styles - 3 items per row */
@media screen and (max-width: 468px) {
  .top10-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 8px;
  }

  .top10-item {
    border-radius: 6px;
  }
}

/* Larger screens - 6 items per row */
@media screen and (min-width: 1024px) {
  .top10-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>