
<template>
  <ThreeColumnContent>
    <div class="amanda-lim">
      <h1>{{ $t('amandaLim.title') }}</h1>
      
      <div class="amanda-lim-section">
        <h2>{{ $t('amandaLim.founder.title') }}</h2>
        <p v-html="$t('amandaLim.founder.description')"></p>
      </div>

      <div class="amanda-lim-section">
        <h2>{{ $t('amandaLim.education.title') }}</h2>
        <p>
          {{ $t('amandaLim.education.descriptionBefore') }}
          <a class="homepage-link" href="https://nus.edu.sg/">{{ $t('amandaLim.education.nusLink') }}</a>
          {{ $t('amandaLim.education.descriptionAfter') }}
        </p>
      </div>

      <div class="amanda-lim-section">
        <h2>{{ $t('amandaLim.leadership.title') }}</h2>
        <p>{{ $t('amandaLim.leadership.intro') }}</p>
        <ul class="dots">
          <li>{{ $t('amandaLim.leadership.responsibilities.expansion') }}</li>
          <li>{{ $t('amandaLim.leadership.responsibilities.innovation') }}</li>
          <li>{{ $t('amandaLim.leadership.responsibilities.compliance') }}</li>
          <li>{{ $t('amandaLim.leadership.responsibilities.partnerships') }}</li>
        </ul>
        <p>
          {{ $t('amandaLim.leadership.collaborationBefore') }}
          <span class="homepage-link" @click="goToMichealOng">{{ $t('amandaLim.leadership.michaelOngLink') }}</span>
          {{ $t('amandaLim.leadership.collaborationAfter') }}
        </p>
      </div>

      <div class="amanda-lim-section">
        <h2>{{ $t('amandaLim.birthOfWinbox.title') }}</h2>
        <p>{{ $t('amandaLim.birthOfWinbox.description') }}</p>
      </div>

      <div class="amanda-lim-section">
        <h2>{{ $t('amandaLim.adversitySuccess.title') }}</h2>
        <p>{{ $t('amandaLim.adversitySuccess.description') }}</p>
      </div>

      <div class="amanda-lim-section">
        <h2>{{ $t('amandaLim.futureVisions.title') }}</h2>
        <p>
          {{ $t('amandaLim.futureVisions.descriptionBefore') }}
          <span class="homepage-link" @click="goToHomepage">{{ $t('amandaLim.futureVisions.winboxLink') }}</span>
          <span v-html="$t('amandaLim.futureVisions.descriptionAfter')"></span>
        </p>
      </div>

      <div class="amanda-lim-section">
        <h2>{{ $t('amandaLim.leadershipStyle.title') }}</h2>
        <p>{{ $t('amandaLim.leadershipStyle.description') }}</p>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'
import { useNavigation } from '@/components/utils/navigation'

const { goToHomepage, goToLogin, goToRegister, goToMichealOng } = useNavigation()
</script>

<style scoped>
.amanda-lim {
    margin: 0 auto;
    padding: 20px 10px;
    color: black;
    font-family: Arial, sans-serif;
}

.amanda-lim h1 {
    font-size: 22px;
    margin-bottom: 30px;
    font-weight: 600;
    text-align: left;
}

.amanda-lim p {
    font-size: 14px;
    line-height: 1.6;
}

.amanda-lim h2 {
    font-size: 18px;
    margin: 15px 0;
    font-weight: bold;
}

.amanda-lim h3 {
    font-size: 16px;
    margin: 15px 0;
    font-weight: bold;
}

.amanda-lim-section {
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

.homepage-link:hover {
    color: #0298c7;
    text-decoration: underline;
}

@media (max-width: 768px) {
  .amanda-lim h1 {
    text-align: left;
}
}
</style>
