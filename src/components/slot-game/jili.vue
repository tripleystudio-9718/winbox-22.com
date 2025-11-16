<template>
  <div class="jili">
    <div class="game-grid">
      <div v-for="game in jiliGames" :key="game.id" class="game-card" @click="navigateToRegister">
        <div class="game-image">
          <img
            :src="game.image"
            :alt="`winbox JILI`"
            @error="handleImageError"
            @load="handleImageLoad"
          />
        </div>
        <div class="game-button">
          <button v-html="$t('common.Play')"></button>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section">
      <h1>Winbox JILI Slots Games</h1>
      
      <h2>Experience the JILI Games on Winbox</h2>
      
      <p>
        Looking for slot games that truly deliver excitement, fair play, and high payouts? You'll find them all under one roof at <a href="#" class="homepage-link" @click.prevent="goToHomepage">Winbox</a>, featuring the full suite of <a href="#" class="homepage-link" @click.prevent="goToJili">JILI Slots Gaming</a> titles. Known for innovation, smooth gameplay, and rewarding bonuses, JILI has become a trusted name among slot players across Asia.
      </p>
      
      <p>
        At Winbox, you can access <strong>dozens of popular JILI slots</strong> that combine cinematic visuals with game mechanics built for big wins. Whether you're chasing cascading reels, multipliers, or bonus spins, every spin offers the potential for something thrilling.
      </p>
      
      <p>
        From classic slots to modern adventures, JILI has crafted a catalogue that suits all playstyles--- and with the security of the Winbox login and instant withdrawals, every win is just a few taps away.
      </p>

      <div class="content-block">
        <h2>Why Play JILI Games on Winbox?</h2>
        
        <p><strong>JILI + Winbox = a perfect match for players who value trust, variety, and rewards.</strong></p>
        
        <p>Here's why thousands of users choose <a href="#" class="homepage-link" @click.prevent="goToHomepage">Winbox MY</a> to play JILI Games:</p>

        <ul class="dots">
          <li><strong>Huge Game Library:</strong> Explore a wide range of themes, from mythical Asia to futuristic adventures. JILI's collection includes both high-volatility and easy-to-win titles for every player type.</li>
          <li><strong>High RTP and Fair Payouts:</strong> Many JILI slots feature <strong>RTP rates above 96%</strong>, giving players a genuine edge with fair chances on every spin.</li>
          <li><strong>Mobile-Optimized Gameplay:</strong> Whether you're playing on Android or iOS, Winbox's interface ensures seamless navigation and fast loading---even on slower connections.</li>
          <li><strong>Exclusive Winbox Bonuses:</strong> New players can claim welcome bonuses and free spins designed specifically for JILI slots. Returning users enjoy reload rewards, cashback, and seasonal promos.</li>
          <li><strong>Trusted, Licensed, and Secure:</strong> Winbox employs industry-grade encryption and trusted payment systems, ensuring your gameplay and funds remain fully protected.</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>Top JILI Slot Games You Can Play Right Now</h2>
        
        <p>Each JILI slot game delivers unique gameplay elements, bonus triggers, and visual storytelling. Here are some of the fan favourites available now on Winbox:</p>

        <h3>1. Qin Shi Huang</h3>
        <p><strong>Quick Take:</strong> Travel back to the Qin Dynasty and uncover treasures buried beneath ancient ruins.</p>
        <p>This historical-themed slot blends culture with excitement. Watch the Terracotta Army come alive with expanding wilds and free spins that can multiply your wins up to 1000×. Ideal for players who love rich visuals and big bonus rounds.</p>
        <p><strong>Why We Like It:</strong> Strong storytelling, frequent wild symbols, and well-balanced volatility make it a reliable pick for casual and serious players alike.</p>

        <h3>2. Charge Buffalo</h3>
        <p><strong>Quick Take:</strong> Power through the plains with one of JILI's most adrenaline-fuelled titles.</p>
        <p>The Charge Buffalo slot delivers intense energy with thundering sound effects and wild stampede animations. Expect high multipliers, expanding reels, and a potential jackpot that reaches impressive figures.</p>
        <p><strong>Ideal For:</strong> Players who enjoy high-risk, high-reward gameplay and stunning nature-inspired graphics.</p>

        <h3>3. Money Coming</h3>
        <p><strong>Quick Take:</strong> Classic layout, modern twist---perfect for players who love simplicity with a touch of luck.</p>
        <p>Money Coming sticks to the basics with its 3-reel structure but surprises players with a <strong>Lucky Wheel bonus</strong> and quick win combinations. It's light, fun, and addictive, offering a nostalgic feel that still pays off.</p>
        <p><strong>Why It Works:</strong> Great for beginners or players who prefer fast rounds without complex features.</p>

        <h3>4. Golden Empire</h3>
        <p><strong>Quick Take:</strong> Step into a lost civilisation where treasures await behind every reel.</p>
        <p>Golden Empire uses cascading symbols and multipliers that grow with each consecutive win. The golden mask feature unlocks huge rewards, making it one of JILI's most rewarding slots on Winbox.</p>
        <p><strong>Why We Like It:</strong> Visually captivating with strong replay value and a progressive jackpot that keeps players engaged.</p>

        <h3>5. Crazy 777</h3>
        <p><strong>Quick Take:</strong> A modern twist on the classic fruit machine.</p>
        <p>If you're after simple fun and fast payouts, Crazy 777 delivers both. The triple-7 combo can multiply your stake many times over, while its auto-spin function keeps the excitement continuous.</p>
        <p><strong>Ideal For:</strong> Players who prefer minimal distractions and want that 777 line up.</p>
      </div>

      <div class="content-block">
        <h2>How to Start Playing JILI Games on Winbox</h2>
        
        <p>Getting started takes less than five minutes.</p>

        <h3>Step 1: Register or Login</h3>
        <p>Visit the Winbox site or open your app. Click <strong>Register</strong> if you're new, or <a href="#" class="homepage-link" @click.prevent="goToLogin">Winbox Login</a> using your existing credentials.</p>

        <h3>Step 2: Deposit Funds Securely</h3>
        <p>Choose your preferred payment method, including local bank transfers, e-wallets, or crypto options. Winbox supports fast deposits and withdrawals with full encryption.</p>

        <h3>Step 3: Open the JILI Section</h3>
        <p>Once logged in, navigate to "JILI Gaming" from the games list. You'll instantly access the latest JILI slot titles ready to play.</p>

        <h3>Step 4: Claim Your Bonuses</h3>
        <p>Don't forget to activate your <strong>welcome bonus or free spins</strong> before spinning. Promotions update frequently, so check the "Bonus" tab daily.</p>

        <h3>Step 5: Play and Win</h3>
        <p>Pick your favourite JILI game, adjust your bet, and hit spin. Winnings are credited instantly to your balance.</p>
      </div>

      <div class="content-block">
        <h2>Bonuses and Promotions for JILI Players</h2>
        
        <p>Winbox ensures every JILI player feels rewarded. Expect exciting promotions throughout the year, including:</p>

        <ul class="dots">
          <li><strong>Welcome Bonus:</strong> Deposit a minimum amount to unlock a 100% bonus or free spins.</li>
          <li><strong>Daily Cashback:</strong> Recover a portion of your losses every day---perfect for regular players.</li>
          <li><strong>JILI Tournament Events:</strong> Compete with others to top the leaderboard and win exclusive rewards.</li>
          <li><strong>VIP Rewards:</strong> Loyal players enjoy extra benefits such as higher withdrawal limits, birthday gifts, and priority support.</li>
        </ul>

        <p><strong>Tip:</strong> Always read the bonus terms to make sure you meet any wagering requirements before withdrawal.</p>
      </div>

      <div class="content-block">
        <h2>Fair, Safe, and Responsible Gaming</h2>
        
        <p>At Winbox, your security and enjoyment come first. The platform uses <strong>advanced SSL encryption</strong> to protect transactions, while JILI's games are powered by <strong>certified Random Number Generators (RNG)</strong> that guarantee fair outcomes. Regardless of whether you play on PC or using the <a href="#" class="homepage-link" @click.prevent="goToDownload">Winbox APK</a>, you're guaranteed safety.</p>

        <p>In addition, Winbox supports responsible gaming. You can set deposit limits, self-exclude temporarily, or contact support for guidance if needed.</p>

        <p>24/7 customer assistance is available through live chat, ensuring every player receives help whenever required.</p>
      </div>

      <div class="content-block">
        <h2>FAQs About JILI</h2>
        
        <h3>Is JILI Gaming safe to play on Winbox?</h3>
        <p>Yes. Both JILI and Winbox operate under strict licensing and security protocols, ensuring fair and transparent gameplay.</p>

        <h3>Can I play JILI Games on mobile?</h3>
        <p>Absolutely. Winbox's platform is fully optimised for Android and iOS, offering smooth performance and fast loading.</p>

        <h3>Do I need to download anything?</h3>
        <p>You can play directly on the <strong>Winbox app</strong> or access games via browser through <strong>Login Winbox H5</strong>. Both methods are secure and easy.</p>

        <h3>Are there demo modes for JILI slots?</h3>
        <p>Yes, selected titles offer demo versions where you can practise and explore game mechanics before using real funds.</p>

        <h3>How do I withdraw my winnings?</h3>
        <p>Go to your account dashboard, select <strong>Withdraw</strong>, and choose your preferred method. Funds are typically processed within minutes.</p>

        <h3>What are the top-rated JILI slots for beginners?</h3>
        <p>Money Coming and Crazy 777 are perfect for first-timers because of their simple rules and consistent payouts.</p>
      </div>

      <div class="content-block">
        <h2>Final Call: Play JILI Games Now on Winbox</h2>
        
        <p>Ready to spin for real rewards? Join thousands of Malaysian and regional players who trust Winbox as their go-to online casino. With <strong>JILI Gaming</strong>, every spin combines entertainment and winning potential.</p>
        
        <p>
          <strong><a href="#" class="homepage-link" @click.prevent="goToRegister">Register Winbox</a> today, claim your welcome bonus, and start spinning JILI's most exciting slots on Winbox.</strong>
        </p>
        
        <p><strong>Your next big win could be one spin away.</strong></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import button_frame from "@/assets/button-frame.png";
import { useNavigation } from '@/components/utils/navigation';

// Use your existing navigation utilities
const { goToRegister, goToHomepage, goToLogin, goToDownload } = useNavigation();

// Add goToJili function
const goToJili = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Function to handle image loading errors
const handleImageError = (event) => {
  console.error(`Failed to load image: ${event.target.alt}`);
  event.target.src = button_frame;
  event.target.style.objectFit = "contain";
};

// Function to log successful image loads
const handleImageLoad = (event) => {
  console.log(`Image loaded successfully: ${event.target.alt}`);
};

// Create a base structure for our games with dynamic imports
const jiliGames = ref([]);

// Using import.meta.url for Vue 3 (Vite compatible)
const getImageUrl = (name) => {
  try {
    return new URL(`/src/assets/jili-img-1/${name}.png`, import.meta.url).href;
  } catch (error) {
    console.error(`Error getting image URL for ${name}:`, error);
    return button_frame;
  }
};

// Initialize games
onMounted(() => {
  // Generate games dynamically (12 games for JILI)
  jiliGames.value = Array.from({ length: 12 }, (_, i) => {
    const gameNumber = i + 1;
    return {
      id: `jili${gameNumber}`,
      name: `Jili Game ${gameNumber}`,
      image: getImageUrl(`jili-g${gameNumber}`),
    };
  });
});

// Use navigation utility for automatic language detection
const navigateToRegister = () => {
  goToRegister();
};
</script>

<style scoped>
.jili {
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
}
</style>