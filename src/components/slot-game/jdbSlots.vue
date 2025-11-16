<template>
  <ThreeColumnContent>
    <div class="jdb-tab">
      <!-- Banner Section -->
      <div class="banner-section">
        <img 
          :src="jdbBanner" 
          alt="JDB Gaming Banner" 
          class="banner-image"
        />
      </div>

      <!-- Demo Play UI Section -->
      <div class="demo-play-section">
        <iframe 
          src="https://www.jdbgaming.com/en/games/list" 
          frameborder="0" 
          width="100%" 
          height="600"
          title="JDB Demo Play"
          loading="lazy"
        ></iframe>
      </div>

      <div class="content-section">
        <h1>Winbox JDB Slots Gaming</h1>
        
        <p class="subtitle">Experience JDB Slots on Winbox</p>

        <p>
          If you love variety, fast-paced action, and rewarding gameplay, JDB Slots Gaming on Winbox is the destination for you. JDB is one of Asia's most trusted and innovative game developers, offering everything from high-volatility slots to immersive arcade and fish-shooting games.
        </p>

        <p>
          At <a 
            :href="seoLinks.home()" 
            class="homepage-link"
            @click.prevent="goToHomepage">Winbox MY</a>, players gain instant access to JDB's full game library in one secure platform. Whether you enjoy classic fruit machines, culturally themed adventures, or modern bonus mechanics, there's something for every mood.
        </p>

        <p>
          Every spin is powered by advanced RNG systems, ensuring fairness, excitement, and endless opportunities to win — all wrapped in Winbox's sleek, mobile-first interface.
        </p>

        <div class="content-block">
          <h2>Why Play JDB Games on Winbox?</h2>
          
          <p>When it comes to slot variety and gameplay innovation, JDB stands in a league of its own. Combined with Winbox's trusted reputation and reliable platform, players can enjoy the best of both worlds.</p>

          <h3>1. Massive Game Collection</h3>
          <p>JDB brings over 150+ games including slots, arcade, fishing, and bingo titles. Whether you prefer spinning reels or testing reflexes in shooting games, the JDB portfolio delivers endless entertainment.</p>

          <h3>2. High RTP and Fair Payouts</h3>
          <p>Many JDB titles feature RTPs above 96%, giving players a balanced mix of fun and fairness. Expect frequent wins, bonus rounds, and jackpot potential across multiple titles.</p>

          <h3>3. Optimised for Mobile and Desktop</h3>
          <p>No need for complex downloads or heavy apps. Every JDB title works flawlessly through <a 
            :href="seoLinks.download()" 
            class="homepage-link"
            @click.prevent="goToDownload">Winbox APK</a> or the <a 
            :href="seoLinks.login()" 
            class="homepage-link"
            @click.prevent="goToLogin">Winbox login web</a> platform, making it easy to play anywhere, anytime.</p>

          <h3>4. Exclusive Winbox Promotions</h3>
          <p>Enjoy special Winbox bonuses tailored for JDB players. From welcome packages to daily cashback and tournament events, rewards are built into your gameplay experience.</p>

          <h3>5. Secure and Licensed Platform</h3>
          <p>Your safety is guaranteed. Winbox uses encrypted systems and verified payment channels, while JDB ensures all titles meet international RNG and fairness standards.</p>
        </div>

        <div class="content-block">
          <h2>Top JDB Games to Play on Winbox</h2>
          
          <p>JDB's signature appeal lies in how it blends fast gameplay, creative design, and powerful reward mechanics. Below are some of the most played JDB titles you can enjoy today.</p>

          <h3>1. Bull Treasure</h3>
          <p><strong>Quick Take:</strong> Enter a thrilling jungle adventure filled with ancient gold and bonus rounds.</p>
          <p>This crowd-favourite slot features expanding wilds, stacked symbols, and random respins that keep the excitement alive. Players can trigger multipliers of up to 1000× with every bonus feature.</p>
          <p><strong>Ideal For:</strong> Fans of adventure-themed slots who enjoy surprise win chains and large jackpots.</p>

          <h3>2. Flirting Scholar Tang II</h3>
          <p><strong>Quick Take:</strong> Inspired by a classic Chinese story, this JDB hit combines humour, charm, and high volatility.</p>
          <p>Spin through colourful reels featuring scholar symbols and bonus-triggering characters. Free spins and wild replacements appear often, giving this game both fun narrative and real payout potential.</p>
          <p><strong>Why We Like It:</strong> Strong theme integration, frequent bonus features, and beautifully animated visuals.</p>

          <h3>3. Fruity Bonanza</h3>
          <p><strong>Quick Take:</strong> A modern twist on the timeless fruit slot — easy to play, but hard to stop.</p>
          <p>This game captures classic simplicity with smooth modern design and cascading wins. Every win can chain into another through exploding symbols, boosting your total rewards.</p>
          <p><strong>Ideal For:</strong> Players who love fast rounds and low-risk, steady wins.</p>

          <h3>4. Koi Trio</h3>
          <p><strong>Quick Take:</strong> Dive into tranquil waters where koi fish bring luck, multipliers, and big wins.</p>
          <p>Koi Trio stands out with its gorgeous visuals and peaceful sound design. It's relaxing yet thrilling, especially when the wild koi symbols multiply your winnings.</p>
          <p><strong>Why It Works:</strong> Balanced volatility, fluid animations, and generous payout patterns.</p>

          <h3>5. Lucky Dragon Ball</h3>
          <p><strong>Quick Take:</strong> Channel ancient fortune as the mighty dragon releases power across the reels.</p>
          <p>Packed with expanding reels, free spin rounds, and high symbol payouts, Lucky Dragon Ball is a JDB masterpiece for players who crave visual spectacle and generous rewards.</p>
        </div>

        <div class="content-block">
          <h2>How to Play JDB Games on Winbox</h2>
          
          <p>Getting started with JDB on Winbox is fast and easy. Follow these simple steps to begin spinning or shooting for real wins.</p>

          <ol class="numbered-list">
            <li>
              <strong>Register or Login:</strong> Create a Winbox account in less than a minute or log in through the official <a 
                :href="seoLinks.login()" 
                class="homepage-link"
                @click.prevent="goToLogin">Winbox Login Web</a>.
            </li>
            <li><strong>Deposit Funds:</strong> Choose your preferred payment option, including FPX transfers, e-wallets, or local bank channels. Deposits reflect instantly.</li>
            <li><strong>Open the JDB Slots Gaming Section:</strong> Navigate to the JDB Gaming tab on the Winbox homepage. You'll find hundreds of titles categorised by theme and genre.</li>
            <li><strong>Choose Your Game:</strong> Pick any JDB slot or arcade title. Adjust your stake and start playing.</li>
            <li><strong>Withdraw Your Winnings:</strong> Once you're ready, visit your wallet to withdraw securely to your linked account — usually within minutes.</li>
          </ol>
        </div>

        <div class="content-block">
          <h2>Bonuses and Promotions for JDB Players</h2>
          
          <p>Winbox makes every JDB session more rewarding with ongoing Winbox promotions:</p>

          <ul class="dots">
            <li><strong>Welcome Bonus:</strong> New players enjoy a 100% match bonus for JDB slots.</li>
            <li><strong>Daily Cashback:</strong> Get back a percentage of your losses each day.</li>
            <li><strong>Reload Bonuses:</strong> Top up your account and receive bonus credits.</li>
            <li><strong>JDB Tournaments:</strong> Compete with others to win leaderboard rewards.</li>
            <li><strong>VIP Benefits:</strong> Unlock higher withdrawal limits and exclusive perks as you play more.</li>
          </ul>

          <p><strong>Tip:</strong> Check the Promotions tab regularly, as Winbox frequently updates seasonal bonuses and JDB-specific events.</p>
        </div>

        <div class="content-block">
          <h2>Safe and Fair Gaming on Winbox</h2>
          
          <p>Both Winbox and JDB Gaming are committed to secure, responsible, and transparent gameplay.</p>

          <ul class="dots">
            <li><strong>Certified RNG:</strong> Every JDB title uses independently audited random number generators to ensure fair results.</li>
            <li><strong>SSL Encryption:</strong> All deposits and withdrawals on Winbox are protected by advanced encryption systems.</li>
            <li><strong>Responsible Gaming Tools:</strong> Set spending limits, self-exclude, or contact support for guidance anytime.</li>
            <li><strong>24/7 Customer Support:</strong> Winbox's team is available around the clock via live chat or email to assist you.</li>
          </ul>

          <p>When you play JDB games on Winbox, you're joining a community built on trust, entertainment, and integrity.</p>
        </div>

        <div class="content-block">
          <h2>FAQs About JDB Slots</h2>
          
          <h3>Is JDB Slots Gaming safe to play on Winbox?</h3>
          <p>Yes. JDB is a reputable provider with strict compliance standards, and Winbox ensures every transaction and gameplay session is secure.</p>

          <h3>Can I play JDB Games on mobile devices?</h3>
          <p>Absolutely. JDB titles are built using HTML5 technology, making them fully compatible with Android, iOS, and desktop devices.</p>

          <h3>Do I need to download the Winbox app?</h3>
          <p>You can either play via <a 
            :href="seoLinks.download()" 
            class="homepage-link"
            @click.prevent="goToDownload">Winbox APK</a> for smoother access or log in through Winbox on your browser. Both offer the same secure experience.</p>

          <h3>Are there demo versions of JDB slots?</h3>
          <p>Yes, many JDB slots include demo play modes where you can test features before betting real money.</p>

          <h3>What types of games does JDB offer?</h3>
          <p>JDB provides an exciting mix of slots, arcade, fish-shooting, and bingo games, catering to every gaming preference.</p>

          <h3>How do I claim JDB bonuses on Winbox?</h3>
          <p>Log in to your Winbox account, open the Promotions page, select a JDB-eligible bonus, and start playing. Always check wagering requirements before withdrawal.</p>
        </div>

        <div class="content-block">
          <h2>Play JDB Slots Gaming on Winbox Today</h2>
          
          <p>Ready to explore a new level of entertainment? JDB Gaming on Winbox brings together fast action, trusted technology, and rewarding experiences in one powerful platform.</p>
          
          <p>From classic slots to fish-shooting adventures, every JDB title is designed to thrill.</p>
          
          <p>Combine that with Winbox's smooth gameplay, instant withdrawals, and reliable support, and you have the ultimate gaming destination for 2025.</p>
          
          <p>
            <strong><a 
              :href="seoLinks.register()" 
              class="homepage-link"
              @click.prevent="goToRegister">Register Winbox</a> now, claim your welcome bonus, and start spinning JDB's best games on Winbox today. Your next big win could be just one spin away.</strong>
          </p>
        </div>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import { useNavigation } from '@/components/utils/navigation.js';
import ThreeColumnContent from '@/components/ThreeColumnContent.vue';
import jdbBanner from '@/assets/jdb-banner.avif';

const {
  goToHomepage,
  goToDownload,
  goToLogin,
  goToRegister,
} = useNavigation();

const { seoLinks } = useNavigation();
</script>

<style scoped>
.jdb-tab {
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