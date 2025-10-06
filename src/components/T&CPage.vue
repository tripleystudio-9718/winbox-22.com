<template>
  <ThreeColumnContent>
    <div class="terms-c">
      <h1>{{ $t('termsConditions.title') }}</h1>

      <p v-html="$t('termsConditions.effectiveDate')"></p>
      <br />
      <p>
        {{ $t('termsConditions.introBefore') }}
        <a 
          :href="seoLinks.home()" 
          class="homepage-link"
          @click.prevent="goToHomepage"
          >{{ $t('termsConditions.websiteLink') }}</a>
        {{ $t('termsConditions.introAfter') }}
      </p>

      <br />
      <div class="terms-section">
        <h2>{{ $t('termsConditions.sections.eligibility.title') }}</h2>
        <p>{{ $t('termsConditions.sections.eligibility.description') }}</p>
      </div>

      <div class="terms-section">
        <h2>{{ $t('termsConditions.sections.accountRegistration.title') }}</h2>
        <p>{{ $t('termsConditions.sections.accountRegistration.intro') }}</p>
        <ul>
          <li>{{ $t('termsConditions.sections.accountRegistration.items.accurate') }}</li>
          <li>{{ $t('termsConditions.sections.accountRegistration.items.safeguard') }}</li>
          <li>{{ $t('termsConditions.sections.accountRegistration.items.impersonate') }}</li>
        </ul>
      </div>

      <div class="terms-section">
        <h2>{{ $t('termsConditions.sections.responsibleGambling.title') }}</h2>
        <p>{{ $t('termsConditions.sections.responsibleGambling.description') }}</p>
      </div>

      <div class="terms-section">
        <h2>{{ $t('termsConditions.sections.depositsWithdrawals.title') }}</h2>
        <ul>
          <li>{{ $t('termsConditions.sections.depositsWithdrawals.items.verification') }}</li>
          <li>{{ $t('termsConditions.sections.depositsWithdrawals.items.rightToDelay') }}</li>
        </ul>
      </div>

      <div class="terms-section">
        <h2>{{ $t('termsConditions.sections.bonusesPromotions.title') }}</h2>
        <p>{{ $t('termsConditions.sections.bonusesPromotions.description') }}</p>
      </div>

      <div class="terms-section">
        <h2>{{ $t('termsConditions.sections.prohibitedConduct.title') }}</h2>
        <p>{{ $t('termsConditions.sections.prohibitedConduct.intro') }}</p>
        <ul>
          <li>{{ $t('termsConditions.sections.prohibitedConduct.items.fraud') }}</li>
          <li>{{ $t('termsConditions.sections.prohibitedConduct.items.bots') }}</li>
          <li>{{ $t('termsConditions.sections.prohibitedConduct.items.disrupt') }}</li>
        </ul>
      </div>

      <div class="terms-section">
        <h2>{{ $t('termsConditions.sections.intellectualProperty.title') }}</h2>
        <p>{{ $t('termsConditions.sections.intellectualProperty.description') }}</p>
      </div>

      <div class="terms-section">
        <h2>{{ $t('termsConditions.sections.limitationLiability.title') }}</h2>
        <p>{{ $t('termsConditions.sections.limitationLiability.description') }}</p>
      </div>

      <div class="terms-section">
        <h2>{{ $t('termsConditions.sections.accountTermination.title') }}</h2>
        <p>{{ $t('termsConditions.sections.accountTermination.description') }}</p>
      </div>

      <div class="terms-section">
        <h2>{{ $t('termsConditions.sections.changesToTerms.title') }}</h2>
        <p>{{ $t('termsConditions.sections.changesToTerms.description') }}</p>
      </div>

      <div class="terms-section">
        <h2>{{ $t('termsConditions.sections.governingLaw.title') }}</h2>
        <p>{{ $t('termsConditions.sections.governingLaw.description') }}</p>
      </div>

      <div class="terms-section">
        <h2>{{ $t('termsConditions.sections.contact.title') }}</h2>
        <p>
          <span v-html="$t('termsConditions.sections.contact.descriptionBefore')"></span>
          <a 
          :href="seoLinks.chat()" 
          class="homepage-link"
          @click.prevent="goToChat"
          >{{ $t('termsConditions.sections.contact.supportLink') }}</a>
          {{ $t('termsConditions.sections.contact.descriptionAfter') }}
        </p>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'
import { useNavigation } from '@/components/utils/navigation'

const { goToHomepage, goToLogin, goToRegister, goToChat } = useNavigation()
const { seoLinks, routerLinks, getLocalizedPath } = useNavigation()
</script>

<style scoped>
.terms-c {
  margin: 0 auto;
  padding: 20px 10px;
  color: black;
  font-family: Rubik, Arial, sans-serif;
  background: white;
  border-radius: 8px;
}

.terms-c p {
  font-size: 14px;
  line-height: 1.6;
}

.terms-c h1 {
  font-size: 22px;
  margin-bottom: 30px;
  font-weight: bold ;
  text-align: left;
}

.terms-section {
  margin-bottom: 30px;
}

.terms-section h2 {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 500;
}

.terms-section p {
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: 300;
}

.terms-section ul {
  list-style-type: disc;
  padding-left: 20px;
  margin-bottom: 15px;
}

.terms-section li {
  line-height: 1.6;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 300;
}

.terms-footer {
  margin-top: 40px;
  text-align: center;
  font-size: 14px;
}

.terms-c a {
  color: #02D0FD;
  text-decoration: none;
}

.terms-c a:hover {
  text-decoration: underline;
}

.homepage-link {
    color: #02D1FD;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
}
</style>