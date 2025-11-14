<template>
  <ThreeColumnContent>
    <div class="mega88-tab">
      <!-- Banner Section -->
      <div class="banner-section">
        <img 
          :src="mega88Banner" 
          alt="Mega88 APK Banner" 
          class="banner-image"
        />
      </div>

      <div class="content-section">
        <h1>{{ $t('mega88.title') }}</h1>
        
        <p class="subtitle">{{ $t('mega88.subtitle') }}</p>

        <p>
          <a 
            :href="seoLinks.mega88()" 
            class="homepage-link"
            @click.prevent="goToMega88">{{ $t('mega88.intro.linkText') }}</a>, {{ $t('mega88.intro.description') }}
        </p>

        <div class="content-block">
          <h2>{{ $t('mega88.comparisonTable.title') }}</h2>
          
          <div class="table-container">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>{{ $t('mega88.comparisonTable.headers.platform') }}</th>
                  <th>{{ $t('mega88.comparisonTable.headers.bestFor') }}</th>
                  <th>{{ $t('mega88.comparisonTable.headers.keyFeatures') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>{{ $t('mega88.comparisonTable.rows.android.platform') }}</strong></td>
                  <td>{{ $t('mega88.comparisonTable.rows.android.bestFor') }}</td>
                  <td>{{ $t('mega88.comparisonTable.rows.android.features') }}</td>
                </tr>
                <tr>
                  <td><strong>{{ $t('mega88.comparisonTable.rows.ios.platform') }}</strong></td>
                  <td>{{ $t('mega88.comparisonTable.rows.ios.bestFor') }}</td>
                  <td>{{ $t('mega88.comparisonTable.rows.ios.features') }}</td>
                </tr>
                <tr>
                  <td><strong>{{ $t('mega88.comparisonTable.rows.pc.platform') }}</strong></td>
                  <td>{{ $t('mega88.comparisonTable.rows.pc.bestFor') }}</td>
                  <td>{{ $t('mega88.comparisonTable.rows.pc.features') }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p>{{ $t('mega88.comparisonTable.note') }}</p>
        </div>

        <div class="content-block">
          <h2>{{ $t('mega88.features.title') }}</h2>
          
          <h3>{{ $t('mega88.features.multiPlatform.title') }}</h3>
          <ul class="dots">
            <li>
              {{ $t('mega88.features.multiPlatform.downloadable') }} 
              <a 
                :href="seoLinks.home()" 
                class="homepage-link"
                @click.prevent="goToHomepage">{{ $t('mega88.features.multiPlatform.winboxLink') }}</a> 
              {{ $t('mega88.features.multiPlatform.apkText') }}
            </li>
            <li>{{ $t('mega88.features.multiPlatform.pcAccess') }}</li>
            <li>{{ $t('mega88.features.multiPlatform.optimised') }}</li>
          </ul>

          <h3>{{ $t('mega88.features.gamesAvailable.title') }}</h3>
          <ul class="dots">
            <li>{{ $t('mega88.features.gamesAvailable.slots') }}</li>
            <li>{{ $t('mega88.features.gamesAvailable.tableGames') }}</li>
            <li>{{ $t('mega88.features.gamesAvailable.fishing') }}</li>
            <li>{{ $t('mega88.features.gamesAvailable.liveGames') }}</li>
          </ul>

          <h3>{{ $t('mega88.features.whyChoose.title') }}</h3>
          <ul class="dots">
            <li>{{ $t('mega88.features.whyChoose.easyInstall') }}</li>
            <li>{{ $t('mega88.features.whyChoose.updates') }}</li>
            <li>{{ $t('mega88.features.whyChoose.testMode') }}</li>
            <li>{{ $t('mega88.features.whyChoose.payment') }}</li>
          </ul>
        </div>

        <div class="content-block">
          <h2>{{ $t('mega88.howToDownload.title') }}</h2>
          
          <h3>{{ $t('mega88.howToDownload.android.title') }}</h3>
          <ol class="numbered-list">
            <li>
              {{ $t('mega88.howToDownload.android.step1Before') }} 
              <a 
                :href="seoLinks.download()" 
                class="homepage-link"
                @click.prevent="goToDownload">{{ $t('mega88.howToDownload.android.step1Link') }}</a> 
              {{ $t('mega88.howToDownload.android.step1After') }}
            </li>
            <li>{{ $t('mega88.howToDownload.android.step2') }}</li>
            <li>{{ $t('mega88.howToDownload.android.step3') }}</li>
          </ol>

          <h3>{{ $t('mega88.howToDownload.ios.title') }}</h3>
          <ol class="numbered-list">
            <li>
              {{ $t('mega88.howToDownload.ios.step1Before') }} 
              <a href="https://www.winbox22.com/download" target="_blank" rel="noopener noreferrer" class="homepage-link">{{ $t('mega88.howToDownload.ios.step1Link') }}</a>
            </li>
            <li>{{ $t('mega88.howToDownload.ios.step2') }}</li>
          </ol>

          <h3>{{ $t('mega88.howToDownload.pc.title') }}</h3>
          <ol class="numbered-list">
            <li>{{ $t('mega88.howToDownload.pc.step1') }}</li>
            <li>{{ $t('mega88.howToDownload.pc.step2') }}</li>
          </ol>
        </div>

        <div class="content-block">
          <h2>{{ $t('mega88.tips.title') }}</h2>
          <ul class="dots">
            <li>{{ $t('mega88.tips.internet') }}</li>
            <li>{{ $t('mega88.tips.demoMode') }}</li>
            <li>{{ $t('mega88.tips.limits') }}</li>
          </ul>
        </div>

        <div class="content-block">
          <h2>{{ $t('mega88.appDetails.title') }}</h2>
          <ul class="dots">
            <li><strong>{{ $t('mega88.appDetails.version.label') }}</strong> {{ $t('mega88.appDetails.version.value') }}</li>
            <li><strong>{{ $t('mega88.appDetails.fileSize.label') }}</strong> {{ $t('mega88.appDetails.fileSize.value') }}</li>
            <li><strong>{{ $t('mega88.appDetails.compatibility.label') }}</strong> {{ $t('mega88.appDetails.compatibility.value') }}</li>
            <li><strong>{{ $t('mega88.appDetails.security.label') }}</strong> {{ $t('mega88.appDetails.security.value') }}</li>
          </ul>
        </div>

        <div class="content-block">
          <h2>{{ $t('mega88.faqs.title') }}</h2>
          
          <h3>{{ $t('mega88.faqs.questions.free.question') }}</h3>
          <p>{{ $t('mega88.faqs.questions.free.answer') }}</p>

          <h3>{{ $t('mega88.faqs.questions.register.question') }}</h3>
          <p>{{ $t('mega88.faqs.questions.register.answer') }}</p>

          <h3>{{ $t('mega88.faqs.questions.safe.question') }}</h3>
          <p>
            {{ $t('mega88.faqs.questions.safe.answerBefore') }} 
            <a 
              :href="seoLinks.home()" 
              class="homepage-link"
              @click.prevent="goToHomepage">{{ $t('mega88.faqs.questions.safe.link') }}</a> 
            {{ $t('mega88.faqs.questions.safe.answerAfter') }}
          </p>

          <h3>{{ $t('mega88.faqs.questions.devices.question') }}</h3>
          <p>{{ $t('mega88.faqs.questions.devices.answer') }}</p>

          <h3>{{ $t('mega88.faqs.questions.deposit.question') }}</h3>
          <p>{{ $t('mega88.faqs.questions.deposit.answer') }}</p>

          <h3>{{ $t('mega88.faqs.questions.help.question') }}</h3>
          <p>
            {{ $t('mega88.faqs.questions.help.answerBefore') }} 
            <a 
              :href="seoLinks.chat()" 
              class="homepage-link"
              @click.prevent="goToChat">{{ $t('mega88.faqs.questions.help.link') }}</a> 
            {{ $t('mega88.faqs.questions.help.answerAfter') }}
          </p>
        </div>

        <div class="content-block">
          <h2>{{ $t('mega88.startPlaying.title') }}</h2>
          <p>{{ $t('mega88.startPlaying.description') }}</p>
          
          <p>
            <strong>{{ $t('mega88.startPlaying.downloadText') }}</strong> 
            <a 
              :href="seoLinks.download()" 
              class="homepage-link"
              @click.prevent="goToDownload">{{ $t('mega88.startPlaying.downloadLink') }}</a> 
            {{ $t('mega88.startPlaying.platforms') }}
          </p>
        </div>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import { useNavigation } from '@/components/utils/navigation.js';
import ThreeColumnContent from '@/components/ThreeColumnContent.vue';
import mega88Banner from '@/assets/mega88-banner.avif';

const {
  goToHomepage,
  goToDownload,
  goToChat,
  goToMega88,
} = useNavigation();

const { seoLinks } = useNavigation();
</script>

<style scoped>
.mega88-tab {
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