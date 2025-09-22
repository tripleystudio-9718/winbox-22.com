<template>
<ThreeColumnContent>
  <div class="maxbet-tab">
    <div class="content-section">
     <h1>{{ $t('maxbet.title') }}</h1>
      <img :src="maxbetBanner" alt="winbox maxbet banner" class="banner-img">
      
      <p>{{ $t('maxbet.subtitle') }}</p>

      <div class="content-block">
        <h2>{{ $t('maxbet.whyWinbox.title') }}</h2>
        <p>{{ $t('maxbet.whyWinbox.description1') }}</p>
        <p>{{ $t('maxbet.whyWinbox.description2') }}</p>
        <p>{{ $t('maxbet.whyWinbox.description3') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('maxbet.whatToBet.title') }}</h2>
        
        <h3>{{ $t('maxbet.whatToBet.sports.title') }}</h3>
        <p>{{ $t('maxbet.whatToBet.sports.description') }}</p>
        <ul class="dots">
          <li>{{ $t('maxbet.whatToBet.sports.football') }}</li>
          <li>{{ $t('maxbet.whatToBet.sports.basketball') }}</li>
          <li>{{ $t('maxbet.whatToBet.sports.others') }}</li>
          <li>{{ $t('maxbet.whatToBet.sports.liveInPlay') }}</li>
        </ul>

        <h3>{{ $t('maxbet.whatToBet.esports.title') }}</h3>
        <p>{{ $t('maxbet.whatToBet.esports.description') }}</p>
        <ul class="dots">
          <li>{{ $t('maxbet.whatToBet.esports.cs2') }}</li>
          <li>{{ $t('maxbet.whatToBet.esports.dota2') }}</li>
          <li>{{ $t('maxbet.whatToBet.esports.lol') }}</li>
          <li>{{ $t('maxbet.whatToBet.esports.valorant') }}</li>
          <li>{{ $t('maxbet.whatToBet.esports.fifa') }}</li>
          <li>{{ $t('maxbet.whatToBet.esports.starcraft') }}</li>
        </ul>
        <p>{{ $t('maxbet.whatToBet.esports.tournaments') }}</p>

        <h3>{{ $t('maxbet.whatToBet.virtual.title') }}</h3>
        <p>{{ $t('maxbet.whatToBet.virtual.description') }}</p>
        <ul class="dots">
          <li>{{ $t('maxbet.whatToBet.virtual.soccer') }}</li>
          <li>{{ $t('maxbet.whatToBet.virtual.tennis') }}</li>
          <li>{{ $t('maxbet.whatToBet.virtual.horse') }}</li>
          <li>{{ $t('maxbet.whatToBet.virtual.basketball') }}</li>
        </ul>
        <p>{{ $t('maxbet.whatToBet.virtual.note') }}</p>

        <h3>{{ $t('maxbet.whatToBet.keno.title') }}</h3>
        <p>{{ $t('maxbet.whatToBet.keno.description') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('maxbet.howToStart.title') }}</h2>
        
        <ol class="numbered-list">
          <li>{{ $t('maxbet.howToStart.steps.step1') }} <span class="homepage-link" @click="goToHomepage">{{ $t('maxbet.howToStart.steps.step1Link') }}</span></li>
          <li>{{ $t('maxbet.howToStart.steps.step2') }}</li>
          <li>{{ $t('maxbet.howToStart.steps.step3') }}</li>
          <li>{{ $t('maxbet.howToStart.steps.step4') }}</li>
          <li>{{ $t('maxbet.howToStart.steps.step5') }}</li>
          <li>{{ $t('maxbet.howToStart.steps.step6') }}</li>
        </ol>
        
        <ul class="dots">
          <li>{{ $t('maxbet.howToStart.benefits.noApp') }}</li>
          <li>{{ $t('maxbet.howToStart.benefits.noPaperwork') }}</li>
          <li>{{ $t('maxbet.howToStart.benefits.noFees') }}</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>{{ $t('maxbet.bonuses.title') }}</h2>
        
        <div class="table-container">
          <table class="bonuses-table">
            <thead>
              <tr>
                <th>{{ $t('maxbet.bonuses.table.headers.bonus') }}</th>
                <th>{{ $t('maxbet.bonuses.table.headers.details') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('maxbet.bonuses.table.rows.welcome.bonus') }}</strong></td>
                <td>{{ $t('maxbet.bonuses.table.rows.welcome.details') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('maxbet.bonuses.table.rows.daily.bonus') }}</strong></td>
                <td>{{ $t('maxbet.bonuses.table.rows.daily.details') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('maxbet.bonuses.table.rows.useAnywhere.bonus') }}</strong></td>
                <td>{{ $t('maxbet.bonuses.table.rows.useAnywhere.details') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>{{ $t('maxbet.bonuses.note') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('maxbet.deposits.title') }}</h2>
        
        <div class="table-container">
          <table class="deposits-table">
            <thead>
              <tr>
                <th>{{ $t('maxbet.deposits.table.headers.method') }}</th>
                <th>{{ $t('maxbet.deposits.table.headers.minimum') }}</th>
                <th>{{ $t('maxbet.deposits.table.headers.processing') }}</th>
                <th>{{ $t('maxbet.deposits.table.headers.notes') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{{ $t('maxbet.deposits.table.rows.bankTransfer.method') }}</strong></td>
                <td>{{ $t('maxbet.deposits.table.rows.bankTransfer.minimum') }}</td>
                <td>{{ $t('maxbet.deposits.table.rows.bankTransfer.processing') }}</td>
                <td>{{ $t('maxbet.deposits.table.rows.bankTransfer.notes') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('maxbet.deposits.table.rows.instantTopUp.method') }}</strong></td>
                <td>{{ $t('maxbet.deposits.table.rows.instantTopUp.minimum') }}</td>
                <td>{{ $t('maxbet.deposits.table.rows.instantTopUp.processing') }}</td>
                <td>{{ $t('maxbet.deposits.table.rows.instantTopUp.notes') }}</td>
              </tr>
              <tr>
                <td><strong>{{ $t('maxbet.deposits.table.rows.withdrawals.method') }}</strong></td>
                <td>{{ $t('maxbet.deposits.table.rows.withdrawals.minimum') }}</td>
                <td>{{ $t('maxbet.deposits.table.rows.withdrawals.processing') }}</td>
                <td>{{ $t('maxbet.deposits.table.rows.withdrawals.notes') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p>{{ $t('maxbet.deposits.tagline') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('maxbet.security.title') }}</h2>
        
        <ul class="dots">
          <li><strong>{{ $t('maxbet.security.features.ssl.title') }}</strong> {{ $t('maxbet.security.features.ssl.description') }}</li>
          <li><strong>{{ $t('maxbet.security.features.licensed.title') }}</strong> {{ $t('maxbet.security.features.licensed.description') }}</li>
          <li><strong>{{ $t('maxbet.security.features.privacy.title') }}</strong> {{ $t('maxbet.security.features.privacy.description') }}</li>
          <li><strong>{{ $t('maxbet.security.features.support.title') }}</strong> {{ $t('maxbet.security.features.support.description') }}</li>
        </ul>
        
        <p><em>{{ $t('maxbet.security.testimonial') }}</em></p>
      </div>

      <div class="content-block">
        <h2>{{ $t('maxbet.whyChoose.title') }}</h2>
        
        <ul class="dots">
          <li>{{ $t('maxbet.whyChoose.features.markets') }}</li>
          <li>{{ $t('maxbet.whyChoose.features.odds') }}</li>
          <li>{{ $t('maxbet.whyChoose.features.noLag') }}</li>
          <li>{{ $t('maxbet.whyChoose.features.interface') }}</li>
          <li>{{ $t('maxbet.whyChoose.features.fairPlay') }}</li>
        </ul>
      </div>

      <div class="content-block">
        <h2>{{ $t('maxbet.responsibleGambling.title') }}</h2>
        <p>{{ $t('maxbet.responsibleGambling.description') }}</p>
        
        <ul class="dots">
          <li>{{ $t('maxbet.responsibleGambling.features.selfExclusion') }}</li>
          <li>{{ $t('maxbet.responsibleGambling.features.depositLimits') }}</li>
          <li>{{ $t('maxbet.responsibleGambling.features.realityChecks') }}</li>
          <li>{{ $t('maxbet.responsibleGambling.features.helplines') }}</li>
        </ul>
        
        <p>{{ $t('maxbet.responsibleGambling.reminder') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('maxbet.faqs.title') }}</h2>
        
        <h3>{{ $t('maxbet.faqs.questions.whatIs.question') }}</h3>
        <p>{{ $t('maxbet.faqs.questions.whatIs.answer') }}</p>

        <h3>{{ $t('maxbet.faqs.questions.mobile.question') }}</h3>
        <p>{{ $t('maxbet.faqs.questions.mobile.answer') }}</p>

        <h3>{{ $t('maxbet.faqs.questions.legal.question') }}</h3>
        <p>{{ $t('maxbet.faqs.questions.legal.answer') }}</p>

        <h3>{{ $t('maxbet.faqs.questions.deposit.question') }}</h3>
        <p>{{ $t('maxbet.faqs.questions.deposit.answer') }}</p>

        <h3>{{ $t('maxbet.faqs.questions.withdrawals.question') }}</h3>
        <p>{{ $t('maxbet.faqs.questions.withdrawals.answer') }}</p>

        <h3>{{ $t('maxbet.faqs.questions.verification.question') }}</h3>
        <p>{{ $t('maxbet.faqs.questions.verification.answer') }}</p>

        <h3>{{ $t('maxbet.faqs.questions.sports.question') }}</h3>
        <p>{{ $t('maxbet.faqs.questions.sports.answer') }}</p>

        <h3>{{ $t('maxbet.faqs.questions.existingBonuses.question') }}</h3>
        <p>{{ $t('maxbet.faqs.questions.existingBonuses.answer') }}</p>

        <h3>{{ $t('maxbet.faqs.questions.localLeagues.question') }}</h3>
        <p>{{ $t('maxbet.faqs.questions.localLeagues.answer') }}</p>

        <h3>{{ $t('maxbet.faqs.questions.whyWinbox.question') }}</h3>
        <p>{{ $t('maxbet.faqs.questions.whyWinbox.answer') }}</p>

        <h3>{{ $t('maxbet.faqs.questions.rigged.question') }}</h3>
        <p>{{ $t('maxbet.faqs.questions.rigged.answer') }}</p>

        <h3>{{ $t('maxbet.faqs.questions.support.question') }}</h3>
        <p>{{ $t('maxbet.faqs.questions.support.answer') }}</p>
      </div>

      <div class="content-block">
        <h2>{{ $t('maxbet.conclusion.title') }}</h2>
        <p>{{ $t('maxbet.conclusion.description1') }}</p>
        <p>{{ $t('maxbet.conclusion.description2') }}</p>
        <p>{{ $t('maxbet.conclusion.description3') }} <span class="homepage-link" @click="goToHomepage">{{ $t('maxbet.conclusion.linkText') }}</span>{{ $t('maxbet.conclusion.description4') }}</p>
        <p>{{ $t('maxbet.conclusion.offer') }} <span class="homepage-link" @click="goToRegister">{{ $t('maxbet.conclusion.registerText') }}</span> {{ $t('maxbet.conclusion.here') }}</p>
      </div>
    </div>
  </div>
</ThreeColumnContent>
</template>

<script setup>
import { useNavigation } from '@/components/utils/navigation';
import maxbetBanner from "@/assets/maxbet-banner.png";
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'

const {
  goToRegister,
  goToHomepage,
  goToLogin,
} = useNavigation();
</script>

<style scoped>
.maxbet-tab {
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

.bonuses-table, .deposits-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.bonuses-table th, .deposits-table th {
  background-color: #02D1FD;
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: bold;
}

.bonuses-table td, .deposits-table td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
}

.bonuses-table tr:nth-child(even), .deposits-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.bonuses-table tr:hover, .deposits-table tr:hover {
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

  .bonuses-table, .deposits-table {
    min-width: 500px;
  }
}
</style>