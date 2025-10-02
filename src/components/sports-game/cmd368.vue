<template>
<ThreeColumnContent>
  <div class="cmd368-tab">
    <div class="content-section">
      <h1>{{ $t('cmd368.title') }}</h1>
      
      <p>{{ $t('cmd368.intro.description1') }} <a 
          :href="seoLinks.cmd368()" 
          class="homepage-link"
          @click.prevent="goToCmd368">{{ $t('cmd368.intro.linkText') }}</a> {{ $t('cmd368.intro.description2') }}</p>
      <p>{{ $t('cmd368.intro.description3') }}</p>

      <div class="content-block">
        <h2>{{ $t('cmd368.comparison.title') }}</h2>
        
        <div class="table-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>{{ $t('cmd368.comparison.table.headers.feature') }}</th>
                <th>{{ $t('cmd368.comparison.table.headers.cmd368') }}</th>
                <th>{{ $t('cmd368.comparison.table.headers.others') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('cmd368.comparison.table.rows.sportsBetting.feature') }}</strong></td>
                <td>{{ $t('cmd368.comparison.table.rows.sportsBetting.cmd368') }}</td>
                <td>{{ $t('cmd368.comparison.table.rows.sportsBetting.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('cmd368.comparison.table.rows.liveCasino.feature') }}</strong></td>
                <td>{{ $t('cmd368.comparison.table.rows.liveCasino.cmd368') }}</td>
                <td>{{ $t('cmd368.comparison.table.rows.liveCasino.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('cmd368.comparison.table.rows.poker.feature') }}</strong></td>
                <td>{{ $t('cmd368.comparison.table.rows.poker.cmd368') }}</td>
                <td>{{ $t('cmd368.comparison.table.rows.poker.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('cmd368.comparison.table.rows.deposits.feature') }}</strong></td>
                <td>{{ $t('cmd368.comparison.table.rows.deposits.cmd368') }}</td>
                <td>{{ $t('cmd368.comparison.table.rows.deposits.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('cmd368.comparison.table.rows.mobile.feature') }}</strong></td>
                <td>{{ $t('cmd368.comparison.table.rows.mobile.cmd368') }}</td>
                <td>{{ $t('cmd368.comparison.table.rows.mobile.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('cmd368.comparison.table.rows.support.feature') }}</strong></td>
                <td>{{ $t('cmd368.comparison.table.rows.support.cmd368') }}</td>
                <td>{{ $t('cmd368.comparison.table.rows.support.others') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('cmd368.comparison.table.rows.localized.feature') }}</strong></td>
                <td>{{ $t('cmd368.comparison.table.rows.localized.cmd368') }}</td>
                <td>{{ $t('cmd368.comparison.table.rows.localized.others') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p><em>{{ $t('cmd368.comparison.note') }}</em></p>
      </div>

      <div class="content-block">
        <h2>{{ $t('cmd368.sportsBetting.title') }}</h2>
        <p>{{ $t('cmd368.sportsBetting.description1') }}</p>
        <p>{{ $t('cmd368.sportsBetting.description2') }}</p>
        <p>{{ $t('cmd368.sportsBetting.description3') }}</p>
        <p>{{ $t('cmd368.sportsBetting.description4') }}</p>
        <p>{{ $t('cmd368.sportsBetting.description5') }}</p>
        <p><em>{{ $t('cmd368.sportsBetting.useCase') }}</em></p>
      </div>

      <div class="content-block">
        <h2>{{ $t('cmd368.casino.title') }}</h2>
        <p>{{ $t('cmd368.casino.description1') }}</p>
        <p>{{ $t('cmd368.casino.description2') }}</p>
        
        <p>{{ $t('cmd368.casino.library.title') }}</p>
        <ul class="dots">
          <li>{{ $t('cmd368.casino.library.baccarat') }}</li>
          <li>{{ $t('cmd368.casino.library.roulette') }}</li>
          <li>{{ $t('cmd368.casino.library.sicBo') }}</li>
          <li>{{ $t('cmd368.casino.library.gameShows') }}</li>
        </ul>
        
        <p>{{ $t('cmd368.casino.description3') }}</p>
        <p><em>{{ $t('cmd368.casino.bonus') }}</em></p>
      </div>

      <div class="content-block">
        <h2>{{ $t('cmd368.poker.title') }}</h2>
        <p>{{ $t('cmd368.poker.description1') }}</p>
        <p>{{ $t('cmd368.poker.description2') }}</p>
        
        <p>{{ $t('cmd368.poker.features.title') }}</p>
        <ul class="dots">
          <li><strong>{{ $t('cmd368.poker.features.tcoins.title') }}</strong> {{ $t('cmd368.poker.features.tcoins.description') }}</li>
          <li><strong>{{ $t('cmd368.poker.features.privateTables.title') }}</strong> {{ $t('cmd368.poker.features.privateTables.description') }}</li>
          <li><strong>{{ $t('cmd368.poker.features.multiCurrency.title') }}</strong> {{ $t('cmd368.poker.features.multiCurrency.description') }}</li>
          <li><strong>{{ $t('cmd368.poker.features.cashback.title') }}</strong> {{ $t('cmd368.poker.features.cashback.description') }}</li>
        </ul>
        
        <p>{{ $t('cmd368.poker.description3') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('cmd368.whyWinbox.title') }}</h2>
        <p>{{ $t('cmd368.whyWinbox.description1') }}</p>
        
        <p>{{ $t('cmd368.whyWinbox.optimization.title') }}</p>
        <ul class="dots">
          <li>{{ $t('cmd368.whyWinbox.optimization.deposit') }}</li>
          <li>{{ $t('cmd368.whyWinbox.optimization.support') }}</li>
          <li>{{ $t('cmd368.whyWinbox.optimization.mobile') }}</li>
          <li>{{ $t('cmd368.whyWinbox.optimization.promotions') }}</li>
        </ul>
        
        <p>{{ $t('cmd368.whyWinbox.description2') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('cmd368.faqs.title') }}</h2>
        
        <h3>{{ $t('cmd368.faqs.questions.whatIs.question') }}</h3>
        <p>{{ $t('cmd368.faqs.questions.whatIs.answer') }}</p>

        <h3>{{ $t('cmd368.faqs.questions.legal.question') }}</h3>
        <p>{{ $t('cmd368.faqs.questions.legal.answer') }}</p>

        <h3>{{ $t('cmd368.faqs.questions.deposit.question') }}</h3>
        <p>{{ $t('cmd368.faqs.questions.deposit.answer') }}</p>

        <h3>{{ $t('cmd368.faqs.questions.mobile.question') }}</h3>
        <p>{{ $t('cmd368.faqs.questions.mobile.answer') }}</p>

        <h3>{{ $t('cmd368.faqs.questions.support.question') }}</h3>
        <p>{{ $t('cmd368.faqs.questions.support.answer') }}</p>

        <h3>{{ $t('cmd368.faqs.questions.bonuses.question') }}</h3>
        <p>{{ $t('cmd368.faqs.questions.bonuses.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('cmd368.conclusion.title') }}</h2>
        <p>{{ $t('cmd368.conclusion.description') }}</p>
        <p>{{ $t('cmd368.conclusion.ready') }} <a 
          :href="seoLinks.login()" 
          class="homepage-link"
          @click.prevent="goToLogin">{{ $t('cmd368.conclusion.loginText') }}</a> {{ $t('cmd368.conclusion.or') }} <a 
          :href="seoLinks.register()" 
          class="homepage-link"
          @click.prevent="goToRegister">{{ $t('cmd368.conclusion.registerText') }}</a> {{ $t('cmd368.conclusion.now') }}</p>
      </div>
    </div>
  </div>
</ThreeColumnContent>
</template>

<script setup>
import { useNavigation } from '@/components/utils/navigation';
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'

const {
  goToRegister,
  goToHomepage,
  goToLogin,
  goToCmd368,
} = useNavigation();

const { seoLinks, routerLinks, getLocalizedPath } = useNavigation()

</script>

<style scoped>
.cmd368-tab {
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