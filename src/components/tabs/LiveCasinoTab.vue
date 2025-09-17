<template>
  <div class="live-game-tab">
    <div class="game-grid">
      <div v-for="game in liveGames" :key="game.id" class="game-card">
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
// Import the live casino provider images in the specified sequence
import evolution from "@/assets/evolution.png";
import sexy from "@/assets/sexy.png";
import hotroad from "@/assets/hot-road.png";
import prettyGaming from "@/assets/pretty-gaming.png";
import ezugi from "@/assets/ezugi.png";
import dbCasino from "@/assets/db-gaming.png";
import playtech from "@/assets/Playtech.png";
import asiaGaming from "@/assets/asia-gaming.png";
import bigGaming from "@/assets/big-gaming.png";
import sv388 from "@/assets/sv388.png";

// Use your existing navigation utilities
import { useNavigation } from '@/components/utils/navigation';
const { goToRegister } = useNavigation();

// Define live casino games in the specified sequence
const liveGames = [
  {
    id: "login",
    name: "Evolution",
    image: evolution,
    alt: "Winbox Evolution"
  },
  {
    id: "login",
    name: "AE Sexy",
    image: sexy,
    alt: "Winbox AE Sexy"
  },
  {
    id: "login",
    name: "Hot Road",
    image: hotroad,
    alt: "Winbox Hot Road"
  },
  {
    id: "login",
    name: "Pretty Gaming",
    image: prettyGaming,
    alt: "Winbox Pretty Gaming"
  },
  {
    id: "login",
    name: "Ezugi",
    image: ezugi,
    alt: "Winbox Ezugi"
  },
  {
    id: "login",
    name: "DB Casino",
    image: dbCasino,
    alt: "Winbox DB Casino"
  },
  {
    id: "login",
    name: "Playtech",
    image: playtech,
    alt: "Winbox Playtech"
  },
  {
    id: "login",
    name: "Asia Gaming",
    image: asiaGaming,
    alt: "Winbox Asia Gaming"
  },
  {
    id: "login",
    name: "Big Gaming",
    image: bigGaming,
    alt: "Winbox Big Gaming"
  },
  {
    id: "login",
    name: "SV388",
    image: sv388,
    alt: "Winbox SV388"
  }
];

const navigateToGame = (gameId) => {
  if (gameId === "login") {
    goToRegister();
  } else {
    // For future live casino specific pages
    goToRegister();
  }
};
</script>

<style scoped>
.live-game-tab {
  color: white;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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
</style>