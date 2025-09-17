<!-- src/components/tabs/SlotTab.vue -->
<template>
    <div class="slot-tab">
      <div class="game-grid">
        <div v-for="game in slotGames" :key="game.id" class="game-card">
          <div class="game-image">
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
  goToSpadeGaming,
  goToPlaytech,
  goToPragmaticPlay,
  goToAskmeslot,
  goToMicroslot,
  goToMonkeyking
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
.slot-tab {
  color: white;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  padding: 15px;
}

.game-card {
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.game-card:hover {
  transform: translateY(-5px);
}

.game-image img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
  display: block;
  cursor: pointer;
  border-radius: 8px;
}

/* Tablet styles - 4 items per row */
@media screen and (min-width: 469px) and (max-width: 768px) {
  .game-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 10px;
  }
}

/* Mobile styles - 3 items per row */
@media screen and (max-width: 468px) {
  .game-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    padding: 8px;
  }

  .game-card {
    border-radius: 6px;
  }
}

/* Larger screens - 6 items per row */
@media screen and (min-width: 1024px) {
  .game-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>