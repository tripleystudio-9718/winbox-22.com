<template>
<ThreeColumnContent>
  <div class="ezugi-tab">
    <div class="content-section">
      <h1>{{ $t('ezugi.title') }}</h1>
      
      <p>{{ $t('ezugi.intro.description1') }} 
        <a 
          :href="seoLinks.ezugi()" 
          class="homepage-link"
          @click.prevent="goToEzugi"
          >{{ $t('ezugi.intro.linkText') }}</a> {{ $t('ezugi.intro.description2') }}</p>
      <p>{{ $t('ezugi.intro.description3') }}<br>{{ $t('ezugi.intro.description4') }}</p>
      <p>{{ $t('ezugi.intro.description5') }}</p>
      <p>{{ $t('ezugi.intro.description6') }}<br>{{ $t('ezugi.intro.description7') }}</p>

      <div class="content-block">
        <h2>{{ $t('ezugi.roulette.title') }}</h2>
        <p>{{ $t('ezugi.roulette.description1') }}</p>
        <p>{{ $t('ezugi.roulette.description2') }}<br>{{ $t('ezugi.roulette.description3') }}</p>
        <p>{{ $t('ezugi.roulette.description4') }}</p>
        <p>{{ $t('ezugi.roulette.description5') }}</p>
        <p>{{ $t('ezugi.roulette.description6') }}</p>
        <p><strong>{{ $t('ezugi.roulette.description7') }}</strong> {{ $t('ezugi.roulette.description8') }}</p>
        
        <div class="testimonial">
          <p><em>{{ $t('ezugi.roulette.testimonial') }}</em></p>
        </div>
      </div>

      <div class="content-block">
        <h2>{{ $t('ezugi.baccarat.title') }}</h2>
        <p>{{ $t('ezugi.baccarat.description1') }}</p>
        
        <h3>{{ $t('ezugi.baccarat.subtitle') }}</h3>
        <ul class="dots">
          <li><strong>{{ $t('ezugi.baccarat.versions.standard.title') }}</strong> --- {{ $t('ezugi.baccarat.versions.standard.description') }}</li>
          <li><strong>{{ $t('ezugi.baccarat.versions.speed.title') }}</strong> --- {{ $t('ezugi.baccarat.versions.speed.description') }}</li>
          <li><strong>{{ $t('ezugi.baccarat.versions.squeeze.title') }}</strong> --- {{ $t('ezugi.baccarat.versions.squeeze.description') }}</li>
        </ul>
        
        <p>{{ $t('ezugi.baccarat.description2') }}</p>
        <p>{{ $t('ezugi.baccarat.description3') }}</p>
        <p>{{ $t('ezugi.baccarat.description4') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('ezugi.moreGames.title') }}</h2>
        <p>{{ $t('ezugi.moreGames.subtitle') }}</p>
        <p>{{ $t('ezugi.moreGames.description') }}</p>
        
        <ul class="dots">
          <li><strong>{{ $t('ezugi.moreGames.games.blackjack.title') }}</strong> --- {{ $t('ezugi.moreGames.games.blackjack.description') }}</li>
          <li><strong>{{ $t('ezugi.moreGames.games.dreamCatcher.title') }}</strong> --- {{ $t('ezugi.moreGames.games.dreamCatcher.description') }}</li>
          <li><strong>{{ $t('ezugi.moreGames.games.sicBo.title') }}</strong> --- {{ $t('ezugi.moreGames.games.sicBo.description') }}</li>
          <li><strong>{{ $t('ezugi.moreGames.games.dragonTiger.title') }}</strong> --- {{ $t('ezugi.moreGames.games.dragonTiger.description') }}</li>
        </ul>
        
        <p>{{ $t('ezugi.moreGames.conclusion1') }}</p>
        <p>{{ $t('ezugi.moreGames.conclusion2') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('ezugi.whyDifferent.title') }}</h2>
        <p>{{ $t('ezugi.whyDifferent.description1') }}<br>{{ $t('ezugi.whyDifferent.description2') }}</p>
        <p>{{ $t('ezugi.whyDifferent.description3') }}</p>
        
        <div class="table-container">
          <table class="features-table">
            <thead>
              <tr>
                <th>{{ $t('ezugi.whyDifferent.comparison.headers.others') }}</th>
                <th>{{ $t('ezugi.whyDifferent.comparison.headers.us') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ $t('ezugi.whyDifferent.comparison.rows.partnership.others') }}</td>
                <td><strong>{{ $t('ezugi.whyDifferent.comparison.rows.partnership.us') }}</strong></td>
              </tr>
              <tr>
                <td>{{ $t('ezugi.whyDifferent.comparison.rows.streams.others') }}</td>
                <td><strong>{{ $t('ezugi.whyDifferent.comparison.rows.streams.us') }}</strong></td>
              </tr>
              <tr>
                <td>{{ $t('ezugi.whyDifferent.comparison.rows.support.others') }}</td>
                <td><strong>{{ $t('ezugi.whyDifferent.comparison.rows.support.us') }}</strong></td>
              </tr>
              <tr>
                <td>{{ $t('ezugi.whyDifferent.comparison.rows.payments.others') }}</td>
                <td><strong>{{ $t('ezugi.whyDifferent.comparison.rows.payments.us') }}</strong></td>
              </tr>
              <tr>
                <td>{{ $t('ezugi.whyDifferent.comparison.rows.fees.others') }}</td>
                <td><strong>{{ $t('ezugi.whyDifferent.comparison.rows.fees.us') }}</strong></td>
              </tr>
              <tr>
                <td>{{ $t('ezugi.whyDifferent.comparison.rows.withdrawals.others') }}</td>
                <td><strong>{{ $t('ezugi.whyDifferent.comparison.rows.withdrawals.us') }}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>{{ $t('ezugi.whyDifferent.conclusion1') }}<br>{{ $t('ezugi.whyDifferent.conclusion2') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('ezugi.howToStart.title') }}</h2>
        
        <ol class="numbered-list">
          <li>{{ $t('ezugi.howToStart.steps.step1') }}</li>
          <li>{{ $t('ezugi.howToStart.steps.step2') }}</li>
          <li>{{ $t('ezugi.howToStart.steps.step3') }}</li>
          <li>{{ $t('ezugi.howToStart.steps.step4') }}</li>
          <li>{{ $t('ezugi.howToStart.steps.step5') }}</li>
        </ol>
        
        <p>{{ $t('ezugi.howToStart.note1') }}<br>{{ $t('ezugi.howToStart.note2') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('ezugi.faqs.title') }}</h2>
        
        <h3>{{ $t('ezugi.faqs.questions.whatIs.question') }}</h3>
        <p>{{ $t('ezugi.faqs.questions.whatIs.answer') }}</p>

        <h3>{{ $t('ezugi.faqs.questions.legal.question') }}</h3>
        <p>{{ $t('ezugi.faqs.questions.legal.answer') }}</p>

        <h3>{{ $t('ezugi.faqs.questions.mobile.question') }}</h3>
        <p>{{ $t('ezugi.faqs.questions.mobile.answer') }}</p>

        <h3>{{ $t('ezugi.faqs.questions.download.question') }}</h3>
        <p>{{ $t('ezugi.faqs.questions.download.answer') }}</p>

        <h3>{{ $t('ezugi.faqs.questions.realDealers.question') }}</h3>
        <p>{{ $t('ezugi.faqs.questions.realDealers.answer') }}</p>

        <h3>{{ $t('ezugi.faqs.questions.deposit.question') }}</h3>
        <p>{{ $t('ezugi.faqs.questions.deposit.answer') }}</p>

        <h3>{{ $t('ezugi.faqs.questions.withdrawals.question') }}</h3>
        <p>{{ $t('ezugi.faqs.questions.withdrawals.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('ezugi.conclusion.title') }}</h2>
        <p>{{ $t('ezugi.conclusion.description1') }} {{ $t('ezugi.conclusion.description2') }}<br>{{ $t('ezugi.conclusion.description3') }}</p>
        <p>👉 <a 
          :href="seoLinks.login()" 
          class="homepage-link"
          @click.prevent="goToLogin"
          >{{ $t('ezugi.conclusion.loginButton') }}</a> {{ $t('ezugi.conclusion.description4') }}</p>
        <p><em>{{ $t('ezugi.conclusion.tagline') }}</em></p>
      </div>
    </div>
  </div>
</ThreeColumnContent>
</template>

<script setup>
import { useNavigation } from '@/components/utils/navigation';
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'

const { seoLinks, routerLinks, getLocalizedPath } = useNavigation()

const {
  goToRegister,
  goToHomepage,
  goToLogin,
  goToEzugi,
} = useNavigation();
</script>

<style scoped>
.ezugi-tab {
  color: white;
}

img {
    width: 100%;
}

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

.features-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.features-table th {
  background-color: #02D1FD;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
}

.features-table td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
}

.features-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.features-table tr:hover {
  background-color: #e8f4f8;
}

.testimonial {
  background-color: #f0f8ff;
  border-left: 4px solid #02D1FD;
  padding: 15px;
  margin: 15px 0;
  border-radius: 4px;
}

.testimonial p {
  margin: 0;
  color: #333;
  font-style: italic;
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

  .features-table {
    min-width: 500px;
  }
}
</style>