<template>
  <ThreeColumnContent>
    <div class="responsible-gaming">
      <div class="banner-image">
        <img :src="responsibleGamblingBanner" alt="responsible gaming" class="banner-img">
      </div>
      <h1>{{ $t('responsibleGaming.title') }}</h1>
      <div class="responsible-gaming-section">
        <p>{{ $t('responsibleGaming.intro') }}</p>
        <p>{{ $t('responsibleGaming.ageRestrictions') }}</p>
        
        <h3><span style="font-weight: bold;">{{ $t('responsibleGaming.sections.ageRestriction.title') }}</span></h3>
        <p v-html="$t('responsibleGaming.sections.ageRestriction.description')"></p>

        <h3><span style="font-weight: bold;">{{ $t('responsibleGaming.sections.gamcare.title') }}</span></h3>
        <p v-html="$t('responsibleGaming.sections.gamcare.description')"></p>

        <h3><span style="font-weight: bold;">{{ $t('responsibleGaming.sections.beGambleAware.title') }}</span></h3>
        <p v-html="$t('responsibleGaming.sections.beGambleAware.description')"></p>
        <p>{{ $t('responsibleGaming.sections.beGambleAware.disclaimer') }}</p>
      </div>

      <div class="responsible-gaming-section">
        <h2>{{ $t('responsibleGaming.measures.title') }}</h2>
        <h3 style="color: #5A5A5A;">{{ $t('responsibleGaming.measures.playerControl.title') }}</h3>
        <p>{{ $t('responsibleGaming.measures.playerControl.intro') }}</p>
        <ul class="dots">
          <li v-html="$t('responsibleGaming.measures.playerControl.depositLimits')"></li>
          <li v-html="$t('responsibleGaming.measures.playerControl.lossLimits')"></li>
          <li v-html="$t('responsibleGaming.measures.playerControl.betLimits')"></li>
          <li v-html="$t('responsibleGaming.measures.playerControl.sessionLimits')"></li>
        </ul>

        <h3 style="color: #5A5A5A;">{{ $t('responsibleGaming.measures.limitSetting.title') }}</h3>
        <p>{{ $t('responsibleGaming.measures.limitSetting.instructions') }}</p>
        
        <p style="font-weight: bold;">{{ $t('responsibleGaming.measures.selfExclusion.title') }}</p>
        <p>{{ $t('responsibleGaming.measures.selfExclusion.intro') }}</p>
        <ul class="dots">
          <li v-html="$t('responsibleGaming.measures.selfExclusion.temporary.title')"></li>
          <p>{{ $t('responsibleGaming.measures.selfExclusion.temporary.description') }}</p>
          <br>
          <li v-html="$t('responsibleGaming.measures.selfExclusion.permanent.title')"></li>
          <p>{{ $t('responsibleGaming.measures.selfExclusion.permanent.description') }}</p>
        </ul>

        <h3 style="color: #5A5A5A;">{{ $t('responsibleGaming.measures.howToApply.title') }}</h3>
        <p>
          {{ $t('responsibleGaming.measures.howToApply.descriptionBefore') }}
          <span class="homepage-link" @click="goToChat">{{ $t('responsibleGaming.measures.howToApply.customerSupportLink') }}</span>
          {{ $t('responsibleGaming.measures.howToApply.descriptionAfter') }}
        </p>
      </div>

      <div class="responsible-gaming-section">
        <h2>{{ $t('responsibleGaming.supportEducation.title') }}</h2>
        <p>{{ $t('responsibleGaming.supportEducation.intro') }}</p>
        <p>
          {{ $t('responsibleGaming.supportEducation.acknowledgeBefore') }}<span class="homepage-link" @click="goToTermsAndCondition">{{ $t('responsibleGaming.supportEducation.termsLink') }}</span>{{ $t('responsibleGaming.supportEducation.acknowledgeMiddle') }}<span class="homepage-link" @click="goToPrivacyPolicy">{{ $t('responsibleGaming.supportEducation.privacyLink') }}</span>{{ $t('responsibleGaming.supportEducation.acknowledgeAfter') }}
        </p>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'
import { useNavigation } from '@/components/utils/navigation'
import responsibleGamblingBanner from "@/assets/responsible-gambling-banner.png";

const { goToChat, goToPrivacyPolicy, goToTermsAndCondition } = useNavigation()
</script>

<style scoped>
.responsible-gaming {
    margin: 0 auto;
    padding: 20px 10px;
    color: black;
    font-family: Arial, sans-serif;
}

.banner-image img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.responsible-gaming h1 {
    font-size: 22px;
    margin-bottom: 30px;
    font-weight: 600;
    text-align: left;
}

.responsible-gaming p {
    font-size: 14px;
    line-height: 1.6;
}

.responsible-gaming h2 {
    font-size: 18px;
    margin: 15px 0;
    font-weight: bold;
}

.responsible-gaming h3 {
    font-size: 16px;
    margin: 15px 0;
    font-weight: bold;
}

.responsible-gaming-section {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.dots {
    padding-left: 30px;
    font-size: 14px;
}

.dots li {
    margin-bottom: 5px;
}

.homepage-link {
    color: #02D1FD;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
}

.banner-image {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

@media (max-width: 768px) {
  .responsible-gaming h1 {
    text-align: left;
}
}
</style>
