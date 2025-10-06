<template>
  <ThreeColumnContent>
    <div class="michael-ong">
      <!-- Banner Image -->
      
      <h1>{{ $t('michaelOng.title') }}</h1>
      <div class="banner-image">
        <img :src="michaelOngBanner" alt="winbox content director photo" class="banner-img">
      </div>

      <div class="michael-ong-section">
        <p v-html="$t('michaelOng.intro.paragraph1')"></p>
        <p v-html="$t('michaelOng.intro.paragraph2')"></p>
      </div>

      <div class="michael-ong-section">
        <p v-html="$t('michaelOng.experience.paragraph1')"></p>
        <p>
          {{ $t('michaelOng.experience.paragraph2Before') }}
          <a 
          :href="seoLinks.blog()" 
          class="homepage-link"
          @click.prevent="goToBlog">{{ $t('michaelOng.experience.blogLink') }}</a>
          <span v-html="$t('michaelOng.experience.paragraph2After')"></span>
        </p>
        <p>
          {{ $t('michaelOng.experience.paragraph3Before') }}
          <a 
          :href="seoLinks.amandaLim()" 
          class="homepage-link"
          @click.prevent="goToAmandaLim">{{ $t('michaelOng.experience.amandaLimLink') }}</a>
          {{ $t('michaelOng.experience.paragraph3After') }}
        </p>
      </div>

      <div class="michael-ong-section">
        <h2>{{ $t('michaelOng.leadershipPhilosophy.title') }}</h2>
        <p>
          {{ $t('michaelOng.leadershipPhilosophy.descriptionBefore') }}
          <a 
          :href="seoLinks.responsibleGaming()" 
          class="homepage-link"
          @click.prevent="goToResponsibleGaming">{{ $t('michaelOng.leadershipPhilosophy.responsibleGamingLink') }}</a>
          {{ $t('michaelOng.leadershipPhilosophy.descriptionAfter') }}
        </p>
      </div>

      <div class="michael-ong-section">
        <h2>{{ $t('michaelOng.keyAchievements.title') }}</h2>
        <p v-html="$t('michaelOng.keyAchievements.description')"></p>
      </div>

      <div class="michael-ong-section">
        <h2>{{ $t('michaelOng.experienceSkills.title') }}</h2>
        <p>{{ $t('michaelOng.experienceSkills.paragraph1') }}</p>
      </div>

      <div class="michael-ong-section">
        <p>{{ $t('michaelOng.experienceSkills.paragraph2') }}</p>
        <p>{{ $t('michaelOng.experienceSkills.effortsIntro') }}</p>
        <ul>
          <li v-html="$t('michaelOng.experienceSkills.efforts.gameGuide')"></li>
          <li v-html="$t('michaelOng.experienceSkills.efforts.localization')"></li>
          <li v-html="$t('michaelOng.experienceSkills.efforts.storytelling')"></li>
          <li v-html="$t('michaelOng.experienceSkills.efforts.collaboration')"></li>
        </ul>
        <p>{{ $t('michaelOng.experienceSkills.conclusion') }}</p>
      </div>

      <div class="michael-ong-section">
        <h2>{{ $t('michaelOng.teamAchievements.title') }}</h2>
        <p>{{ $t('michaelOng.teamAchievements.description') }}</p>
      </div>

      <div class="michael-ong-section">
        <h2>{{ $t('michaelOng.futureVision.title') }}</h2>
        <p v-html="$t('michaelOng.futureVision.paragraph1')"></p>
        <p>
          {{ $t('michaelOng.futureVision.paragraph2Before') }}
          <a 
          :href="seoLinks.about()" 
          class="homepage-link"
          @click.prevent="goToAbout">{{ $t('michaelOng.futureVision.aboutUsLink') }}</a>
          {{ $t('michaelOng.futureVision.paragraph2After') }}
        </p>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'
import { useNavigation } from '@/components/utils/navigation'
import michaelOngBanner from "@/assets/micheal-ong.jpg";

const { goToBlog, goToAmandaLim, goToAbout, goToResponsibleGaming } = useNavigation()

const { seoLinks, routerLinks, getLocalizedPath } = useNavigation()
</script>

<style scoped>
.michael-ong {
  margin: 0 auto;
  padding: 20px 10px;
  color: black;
  font-family: Arial, sans-serif;
}

.michael-ong h1 {
  font-size: 22px;
  margin-bottom: 30px;
  font-weight: 600;
  text-align: left;
}

.banner-image {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.michael-ong p {
  font-size: 14px;
  line-height: 1.6;
}

.michael-ong h2 {
  font-size: 18px;
  margin: 15px 0;
  font-weight: bold;
}

.michael-ong h3 {
  font-size: 16px;
  margin: 15px 0;
  font-weight: bold;
}

.michael-ong-section {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.michael-ong ul {
  padding-left: 30px;
  font-size: 14px;
}

.michael-ong li {
  margin-bottom: 5px;
}

.homepage-link {
    color: #02D1FD;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
}

@media screen and (max-width: 768px){
  .banner-image img {
    width: 100%;
  }
}
</style>

