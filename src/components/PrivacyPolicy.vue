<template>
  <ThreeColumnContent>
    <div class="privacy-p">
      <h1>{{ $t('privacyPolicy.title') }}</h1>

      <p v-html="$t('privacyPolicy.effectiveDate')"></p>
      <br>
      <p>
        {{ $t('privacyPolicy.introBefore') }}
        <span class="homepage-link" @click="goToHomepage">{{ $t('privacyPolicy.websiteLink') }}</span>
        {{ $t('privacyPolicy.introAfter') }}
      </p>

      <br>
      <div class="policy-section">
        <h2>{{ $t('privacyPolicy.sections.introduction.title') }}</h2>
        <ul>
          <li v-html="$t('privacyPolicy.sections.introduction.personalInfo')"></li>
          <li v-html="$t('privacyPolicy.sections.introduction.technicalInfo')"></li>
          <li v-html="$t('privacyPolicy.sections.introduction.cookies')"></li>
        </ul>
      </div>
      
      <div class="policy-section">
        <h2>{{ $t('privacyPolicy.sections.howWeUse.title') }}</h2>
        <p>{{ $t('privacyPolicy.sections.howWeUse.intro') }}</p>
        <ul>
          <li>{{ $t('privacyPolicy.sections.howWeUse.items.accounts') }}</li>
          <li>{{ $t('privacyPolicy.sections.howWeUse.items.transactions') }}</li>
          <li>{{ $t('privacyPolicy.sections.howWeUse.items.fraud') }}</li>
          <li>{{ $t('privacyPolicy.sections.howWeUse.items.improvement') }}</li>
          <li>{{ $t('privacyPolicy.sections.howWeUse.items.communications') }}</li>
        </ul>
      </div>
      
      <div class="policy-section">
        <h2>{{ $t('privacyPolicy.sections.sharing.title') }}</h2>
        <p>{{ $t('privacyPolicy.sections.sharing.intro') }}</p>
        <ul>
          <li>{{ $t('privacyPolicy.sections.sharing.items.providers') }}</li>
          <li>{{ $t('privacyPolicy.sections.sharing.items.legal') }}</li>
        </ul>
      </div>
      
      <div class="policy-section">
        <h2>{{ $t('privacyPolicy.sections.dataSecurity.title') }}</h2>
        <p>{{ $t('privacyPolicy.sections.dataSecurity.description') }}</p>
      </div>
      
      <div class="policy-section">
        <h2>{{ $t('privacyPolicy.sections.yourRights.title') }}</h2>
        <p>{{ $t('privacyPolicy.sections.yourRights.intro') }}</p>
        <ul>
          <li>{{ $t('privacyPolicy.sections.yourRights.items.access') }}</li>
          <li>{{ $t('privacyPolicy.sections.yourRights.items.correction') }}</li>
          <li>{{ $t('privacyPolicy.sections.yourRights.items.optOut') }}</li>
        </ul>
      </div>
      
      <div class="policy-section">
        <h2>{{ $t('privacyPolicy.sections.cookies.title') }}</h2>
        <p>{{ $t('privacyPolicy.sections.cookies.description') }}</p>
      </div>
      
      <div class="policy-section">
        <h2>{{ $t('privacyPolicy.sections.thirdPartyLinks.title') }}</h2>
        <p>{{ $t('privacyPolicy.sections.thirdPartyLinks.description') }}</p>
      </div>
      
      <div class="policy-section">
        <h2>{{ $t('privacyPolicy.sections.changes.title') }}</h2>
        <p>{{ $t('privacyPolicy.sections.changes.description') }}</p>
      </div>
      
      <div class="policy-section">
        <h2>{{ $t('privacyPolicy.sections.contact.title') }}</h2>
        <p>
          <span v-html="$t('privacyPolicy.sections.contact.descriptionBefore')"></span>
          <span class="homepage-link" @click="goToChat">{{ $t('privacyPolicy.sections.contact.supportLink') }}</span>
          {{ $t('privacyPolicy.sections.contact.descriptionAfter') }}
        </p>
      </div>
    </div>
  </ThreeColumnContent>
</template> 

<script setup>
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'
import { useNavigation } from '@/components/utils/navigation'

const { goToHomepage, goToLogin, goToRegister, goToChat } = useNavigation()
</script>

<style scoped>
.privacy-p {
    margin: 0 auto;
    padding: 20px 10px;
    color: black;
    font-family: Rubik, Arial, sans-serif;
}

.privacy-p p {
    font-size: 14px;
}

.privacy-p h1 {
    font-size: 22px;
    margin-bottom: 30px;
    font-weight: 600;
    text-align: left;
}

.policy-section {
    margin-bottom: 30px;
}

.policy-section h2 {
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: 500;
}

.policy-section p {
    line-height: 1.6;
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 300;
}

.policy-section ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-bottom: 15px;
}

.policy-section li {
    line-height: 1.6;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 300;
}

.policy-footer {
    margin-top: 40px;
    text-align: center;
    font-size: 14px;
}

.homepage-link {
    color: #02D1FD;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
}
</style>