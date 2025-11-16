<template>
  <ThreeColumnContent>
    <div class="play8-tab">
      <!-- Banner Section -->
      <div class="banner-section">
        <img 
          :src="play8Banner" 
          alt="Play8 Gaming Banner" 
          class="banner-image"
        />
      </div>

      <div class="content-section">
        <h1>Winbox Play8 Slots</h1>

        <p>
          If you're looking for a casino provider that blends fun, design, and performance, look no further than Play8 on <a 
            :href="seoLinks.home()" 
            class="homepage-link"
            @click.prevent="goToHomepage">Winbox Malaysia</a>. Known for its stunning visuals, fluid gameplay, and unique mix of slots and fish-shooting games, Play8 brings a refreshing edge to the Winbox experience.
        </p>

        <p>
          From light-hearted arcade fun to serious jackpot slots, Play8 caters to every kind of player. Each game is designed using HTML5 technology, ensuring smooth play on mobile and desktop, with crisp animations and exciting soundtracks that keep the adrenaline high.
        </p>

        <p>
          Whether you're new to Winbox or already a seasoned player, Play8's selection promises hours of excitement—and plenty of winning opportunities.
        </p>

        <p>
          <a 
            :href="seoLinks.login()" 
            class="homepage-link"
            @click.prevent="goToLogin">Play Now</a>
        </p>

        <div class="content-block">
          <h2>Why Play8 on Winbox Is Worth Your Time</h2>

          <h3>1. Huge Game Library</h3>
          <p>Play8 offers more than 120 titles across multiple genres. Expect everything from high-volatility slot machines to colourful fishing and arcade games that deliver consistent thrills.</p>

          <h3>2. Mobile-First Gaming</h3>
          <p>Every Play8 title is built using HTML5 technology, which means zero lag, fast loading, and full compatibility across Android, iOS, and desktop. Whether you're using <a 
            :href="seoLinks.download()" 
            class="homepage-link"
            @click.prevent="goToDownload">Winbox APK</a> or <a 
            :href="seoLinks.login()" 
            class="homepage-link"
            @click.prevent="goToLogin">Login Winbox H5</a>, your experience will always be seamless.</p>

          <h3>3. Stunning Visuals and Engaging Themes</h3>
          <p>From underwater worlds to Asian-inspired symbols, Play8's games are a visual treat. The provider invests heavily in storytelling, ensuring that every spin feels immersive and dynamic.</p>

          <h3>4. Exclusive Winbox Bonuses</h3>
          <p>When you play Play8 through Winbox, you unlock special promotions and free-spin events. Regular players can enjoy cashback, tournaments, and VIP privileges that keep the excitement fresh all year long.</p>

          <h3>5. Secure and Trusted Platform</h3>
          <p>Both Play8 and Winbox prioritise transparency and fairness. Your gameplay, deposits, and withdrawals are fully protected under industry-grade encryption, with fast customer support available 24/7.</p>
        </div>

        <div class="content-block">
          <h2>Top Play8 Games You Can Enjoy on Winbox</h2>
          
          <p>Each Play8 title is packed with distinctive gameplay mechanics, ensuring you'll never get bored. Here are some of the fan favourites currently trending on Winbox.</p>

          <h3>1. Super Lucky Cat</h3>
          <p><strong>Quick Take:</strong> The legendary Maneki Neko brings fortune to your reels.</p>
          <p>Super Lucky Cat is a vibrant Asian-inspired slot that blends charm and high win potential. The Lucky Cat symbol triggers free spins, while multipliers boost your payout significantly.</p>
          <p><strong>Ideal For:</strong> Players who love cheerful visuals and frequent bonuses.</p>

          <h3>2. Dolphin Reef</h3>
          <p><strong>Quick Take:</strong> Swim into the deep blue for oceanic riches.</p>
          <p>Dolphin Reef offers an underwater adventure where dolphins act as wilds, unlocking respins and expanding symbols. With high RTP and strong visual appeal, this game remains a community favourite.</p>
          <p><strong>Why We Like It:</strong> Easy to play, relaxing soundtrack, and surprisingly rewarding mechanics.</p>

          <h3>3. Rich Mouse</h3>
          <p><strong>Quick Take:</strong> A festive, fun-filled slot celebrating fortune and abundance.</p>
          <p>Rich Mouse combines traditional Chinese motifs with bright graphics and lucrative bonus rounds. Wilds appear frequently, and the bonus wheel can multiply your stake for massive wins.</p>
          <p><strong>Ideal For:</strong> Players who enjoy energetic, fast-paced slots with frequent payouts.</p>

          <h3>4. Ocean King (Fishing Game)</h3>
          <p><strong>Quick Take:</strong> Aim, shoot, and reel in rewards.</p>
          <p>Ocean King is one of Play8's signature arcade-style games, featuring an interactive fish-shooting mechanic. Earn points and prizes by taking down the biggest targets, all while competing with other players in real time.</p>
          <p><strong>Why It Works:</strong> Unique gameplay and high replay value make it a must-try for fans of action-based casino games.</p>

          <h3>5. Treasure Sea</h3>
          <p><strong>Quick Take:</strong> Embark on an ocean voyage to uncover buried riches.</p>
          <p>Treasure Sea merges classic slot play with mini-bonus events and random multipliers. Its design keeps players engaged with unpredictable prize rounds and frequent wilds.</p>
          <p><strong>Ideal For:</strong> Players who enjoy risk-reward mechanics and bonus-heavy games.</p>
        </div>

        <div class="content-block">
          <h2>How to Start Playing Play8 Games on Winbox</h2>
          
          <p>Starting your Play8 journey takes just a few minutes.</p>

          <ol class="numbered-list">
            <li><strong>Register or Log In:</strong> Create your Winbox account or log in through the <a 
              :href="seoLinks.login()" 
              class="homepage-link"
              @click.prevent="goToLogin">H5 Winbox portal</a>. The process is quick and secure.</li>
            <li><strong>Deposit Funds:</strong> Select your preferred method—bank transfer, FPX, or e-wallet. Deposits are processed instantly with minimal fees.</li>
            <li><strong>Open the Play8 Section:</strong> Head to the "Game Providers" list and choose Play8. You'll see all available titles categorised by theme and popularity.</li>
            <li><strong>Pick a Game and Play:</strong> Select your game, adjust your bet size, and spin the reels or start your fishing challenge.</li>
            <li><strong>Withdraw Winnings:</strong> When you're ready, head to your account wallet and request a withdrawal. Winbox ensures fast and secure payouts straight to your chosen banking method.</li>
          </ol>
        </div>

        <div class="content-block">
          <h2>Bonuses and Promotions for Play8 Players</h2>
          
          <p>At Winbox, the fun doesn't end with gameplay. Players who enjoy Play8 titles can take advantage of a variety of ongoing promotions.</p>

          <ul class="dots">
            <li><strong>Welcome Bonus:</strong> Get a 100% match bonus when you make your first deposit to play Play8 games.</li>
            <li><strong>Reload Offers:</strong> Receive bonus credits when you top up your account.</li>
            <li><strong>Daily Cashback:</strong> A percentage of your net losses is returned to your account the next day.</li>
            <li><strong>Tournaments:</strong> Compete in Play8 slot tournaments for leaderboard rewards and free credits.</li>
            <li><strong>VIP Programme:</strong> Regular players unlock higher bonuses, faster withdrawals, and exclusive event invitations.</li>
          </ul>

          <p><strong>Pro Tip:</strong> Always review the terms and wagering requirements for each promotion to ensure eligibility.</p>
        </div>

        <div class="content-block">
          <h2>Safe, Fair, and Responsible Gaming</h2>
          
          <p>Both Winbox and Play8 uphold strong standards of fair play and player protection. Every game runs on certified Random Number Generators (RNG), ensuring unpredictable outcomes for every spin or shot.</p>

          <p>Winbox also provides several safety features:</p>

          <ul class="dots">
            <li><strong>Data Security:</strong> SSL encryption protects all transactions.</li>
            <li><strong>Responsible Play Tools:</strong> Set deposit limits or self-exclude if you need a break.</li>
            <li><strong>24/7 Support:</strong> A live team is always ready to assist via chat or messaging apps.</li>
          </ul>

          <p>When you <a 
            :href="seoLinks.register()" 
            class="homepage-link"
            @click.prevent="goToRegister">Winbox register</a> and play Play8 on Winbox, you're engaging with a safe, transparent, and enjoyable gaming environment.</p>
        </div>

        <div class="content-block">
          <h2>FAQs About Play8</h2>
          
          <h3>Is Play8 safe to play on Winbox?</h3>
          <p>Yes. Play8 is a verified provider that operates under industry standards. Combined with Winbox's licensed platform, it offers a secure and fair gaming experience.</p>

          <h3>Can I play Play8 games on my mobile phone?</h3>
          <p>Absolutely. Every Play8 game is optimised for both Android and iOS devices, ensuring smooth play through Winbox APK or H5 browser access.</p>

          <h3>Do I need to download a special app?</h3>
          <p>You can play directly via the Winbox H5 browser site or download the Winbox APK for an even smoother interface—both methods give full access to Play8's game list.</p>

          <h3>What types of games does Play8 offer?</h3>
          <p>Play8 specialises in slot machines, fish-shooting games, and arcade titles. With over 120 games to choose from, there's something for every player preference.</p>

          <h3>How do I claim bonuses for Play8 games?</h3>
          <p>Log in to your Winbox account, open the Promotions tab, and select any bonus labelled as "Play8 Eligible." Follow the steps and start playing to meet the wagering requirements.</p>

          <h3>How fast are withdrawals after winning on Play8?</h3>
          <p>Winbox supports rapid withdrawals. Once your request is approved, funds are typically received within minutes, depending on your chosen payment channel.</p>
        </div>

        <div class="content-block">
          <h2>Final Call: Spin, Shoot, and Win with Play8 on Winbox</h2>
          
          <p>Whether you're a casual player or a jackpot chaser, Play8 on Winbox offers endless excitement across slots, arcade, and fishing titles.</p>
          
          <p>Every game blends vibrant visuals, rewarding features, and lightning-fast performance—powered by Malaysia's leading online casino platform.</p>
          
          <p>With Winbox's secure system, easy navigation, and constant rewards, there's no better time to dive in.</p>
          
          <p>
            <strong><a 
              :href="seoLinks.register()" 
              class="homepage-link"
              @click.prevent="goToRegister">Register Winbox</a> today, claim your welcome bonus, and experience the thrill of Play8 games on Winbox—where every spin and shot could be your next big win.</strong>
          </p>
        </div>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import { useNavigation } from '@/components/utils/navigation.js';
import ThreeColumnContent from '@/components/ThreeColumnContent.vue';
import play8Banner from '@/assets/play8-banner.avif';

const {
  goToHomepage,
  goToDownload,
  goToLogin,
  goToRegister,
} = useNavigation();

const { seoLinks } = useNavigation();
</script>

<style scoped>
.play8-tab {
  color: white;
  padding: 20px 10px;
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

.content-section {
  margin: 0 auto;
  padding: 12px 20px;
  color: black;
  font-family: Arial, sans-serif;
}

.content-section h1 {
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: 600;
  text-align: left;
}

.subtitle {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
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

@media screen and (max-width: 768px) {
  .content-section {
    padding: 12px 15px;
  }
}
</style>