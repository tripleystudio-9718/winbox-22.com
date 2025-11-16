<template>
  <ThreeColumnContent>
    <div class="ygr-tab">
      <!-- Banner Section -->
      <div class="banner-section">
        <img 
          :src="ygrBanner" 
          alt="YGR Games Banner" 
          class="banner-image"
        />
      </div>

      <div class="content-section">
        <h1>YGR Games Provider</h1>
        
        <p class="subtitle">Bringing Asian-themed innovation to slots & arcade games</p>

        <p>
          YGR Games is a game software provider committed to delivering high-quality slots, fishing and arcade titles crafted for Asian audiences. Established in recent years and already GLI-certified, YGR boasts a strong portfolio and technical backend geared toward operators and players alike.
        </p>

        <p>
          <a 
            :href="seoLinks.login()" 
            class="homepage-link"
            @click.prevent="goToLogin">Play Now</a>
        </p>

        <div class="content-block">
          <h2>Comparison Table: Platform & Features</h2>
          
          <div class="table-container">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Best For</th>
                  <th>Key Features</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Desktop Browser</strong></td>
                  <td>PC players</td>
                  <td>Full-screen experience, wide view, easy navigation</td>
                </tr>
                <tr>
                  <td>
                    <strong>Mobile <a 
                      :href="seoLinks.download()" 
                      class="homepage-link"
                      @click.prevent="goToDownload">Winbox APK</a></strong><br>
                    (Android / iOS)
                  </td>
                  <td>On-the-go players</td>
                  <td>Touch-optimized, HTML5 portability, responsive design</td>
                </tr>
                <tr>
                  <td><strong>Demo Mode</strong></td>
                  <td>New players</td>
                  <td>Try games risk-free, familiarize with mechanics</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>If you're unsure which version to try, this table helps you pick based on your device and style of play.</p>
        </div>

        <div class="content-block">
          <h2>Core Features & Mechanics</h2>
          
          <h3>What you get with YGR Games</h3>
          <ul class="dots">
            <li>Rich game types: slots, arcade (fishing), scratchcards.</li>
            <li>High-quality mobile graphics: games optimised for Android, iOS and desktop browsers.</li>
            <li>Engaging bonus mechanics: respins, free spins, jackpots, win-ways patterns.</li>
            <li>Operator-friendly backend: multi-language, multi-currency, real-time tools for management.</li>
          </ul>

          <h3>Why it stands out</h3>
          <ul class="dots">
            <li>A provider focusing on Asian market preferences: themes, language support and payment methods aligned.</li>
            <li>Modern architecture ensures quick game load, minimal downtime and seamless mobile experience.</li>
            <li>Demo availability helps users trial before committing — promotes trust and transparency.</li>
          </ul>
        </div>

        <div class="content-block">
          <h2>How to Get Started</h2>
          
          <ol class="numbered-list">
            <li>
              Choose a casino or platform offering YGR Games titles and create or log into your account.
            </li>
            <li>Explore games in the lobby; filter by provider if possible to find "YGR" games.</li>
            <li>Try demo mode if you're new to understand mechanics and bonus features.</li>
            <li>When ready, deposit using supported local payment methods and play with real money.</li>
            <li>Play responsibly: set budgets, understand payout mechanics and enjoy the experience.</li>
          </ol>
        </div>

        <div class="content-block">
          <h2>Tips for Better Gameplay</h2>
          <ul class="dots">
            <li>Use demo mode first — a smart way to learn symbol values, bonus triggers and volatility without risk.</li>
            <li>Ensure you play on a stable internet connection (particularly mobile) to avoid interruptions during bonus rounds.</li>
            <li>Always review the paytable of each game you play — it shows symbol values, bonus features, and mechanics like respins or win-ways.</li>
            <li>Treat gameplay as entertainment, not guaranteed profit. Set limits and play responsibly.</li>
          </ul>
        </div>

        <div class="content-block">
          <h2>FAQs About YGR</h2>
          
          <h3>Q: What games does YGR Games supply?</h3>
          <p>A: Slots, fishing arcade games and scratchcards tailored for Asian markets.</p>

          <h3>Q: Can I play YGR games on mobile and desktop?</h3>
          <p>A: Yes. YGR titles use HTML5 technology and support Android, iOS and desktop browser play.</p>

          <h3>Q: Are YGR games free to try before playing for real money?</h3>
          <p>A: Yes. Many titles have demo versions so you can play without real money to familiarise yourself.</p>

          <h3>Q: Are the games localised for Malaysia?</h3>
          <p>A: Yes. YGR supports multiple languages, currencies and Asian payment methods making it suitable for Malaysia.</p>

          <h3>Q: Is YGR certified and safe to play?</h3>
          <p>A: YGR holds GLI certification and partners with reputable platforms; still play at authorised casinos.</p>

          <h3>Q: Where do I get help if I face issues?</h3>
          <p>
            A: Use the casino's live chat or 
            <a 
              :href="seoLinks.chat()" 
              class="homepage-link"
              @click.prevent="goToChat">support team</a> 
            where you play the game. Always check you are playing through an authorised operator.
          </p>
        </div>

        <div class="content-block">
          <h2>Explore YGR Games Now</h2>
          <p>YGR Games offers a modern, mobile-optimised collection of slots, arcade and fishing titles designed for Asian audiences. Whether you're playing for fun or real stakes, you can begin with demo mode, choose your device platform, and enjoy engaging gameplay with trusted mechanics and high-quality graphics.</p>
          
          <p>
            <strong><a 
              :href="seoLinks.register()" 
              class="homepage-link"
              @click.prevent="goToRegister">Register Winbox</a> now and Start exploring YGR Games today and pick titles that match your style.</strong>
          </p>
        </div>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import { useNavigation } from '@/components/utils/navigation.js';
import ThreeColumnContent from '@/components/ThreeColumnContent.vue';
import ygrBanner from '@/assets/ygr-banner.avif';

const {
  goToHomepage,
  goToDownload,
  goToChat,
  goToLogin,
  goToRegister,
} = useNavigation();

const { seoLinks } = useNavigation();
</script>

<style scoped>
.ygr-tab {
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

.table-container {
  overflow-x: auto;
  margin: 15px 0;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.comparison-table th {
  background-color: #02D1FD;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
}

.comparison-table td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
}

.comparison-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.comparison-table tr:hover {
  background-color: #e8f4f8;
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
  .table-container {
    overflow-x: scroll;
  }

  .comparison-table {
    min-width: 600px;
  }
}
</style>