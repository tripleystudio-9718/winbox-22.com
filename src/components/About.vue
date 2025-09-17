<template>
  <ThreeColumnContent>
    <div class="about">
      <div class="banner-image">
        <img :src="aboutUsBanner" alt="about winbox" class="banner-img">
      </div>
      <h1>{{ $t('about.title') }}</h1>
      
      <div class="about-section">
        <p>{{ $t('about.intro.paragraph1') }}</p>
        <p>{{ $t('about.intro.paragraph2') }}</p>
        <p>{{ $t('about.intro.paragraph3') }}</p>
      </div>

      <!-- Mission and Vision Cards -->
      <div class="mission-vision-section">
        <div class="card-container">
          <div class="mission-vision-card">
            <h2>{{ $t('about.vision.title') }}</h2>
            <p v-html="$t('about.vision.description')"></p>
          </div>
          
          <div class="mission-vision-card">
            <h2>{{ $t('about.mission.title') }}</h2>
            <p v-html="$t('about.mission.description')"></p>
          </div>
        </div>
      </div>

      <div class="about-section">
        <h2>{{ $t('about.coreValues.title') }}</h2>
        <p v-html="$t('about.coreValues.paragraph1')"></p>
        <p v-html="$t('about.coreValues.paragraph2')"></p>
      
        <h2>{{ $t('about.philosophy.title') }}</h2>
        <p v-html="$t('about.philosophy.paragraph1')"></p>
        <p v-html="$t('about.philosophy.paragraph2')"></p>
      </div>

      <div class="about-section">
        <h2>{{ $t('about.achievements.title') }}</h2>
        <p>{{ $t('about.achievements.paragraph1') }}</p>
        <p v-html="$t('about.achievements.paragraph2')"></p>
        <p>
          <span v-html="$t('about.achievements.paragraph3Before')"></span>
          <span class="homepage-link" @click="goToResponsibleGaming">{{ $t('about.achievements.responsibleGamingLink') }}</span>
          {{ $t('about.achievements.paragraph3After') }}
        </p>
        <p>{{ $t('about.achievements.paragraph4') }}</p>
        <p v-html="$t('about.achievements.paragraph5')"></p>
      </div>

      <div class="about-section">
        <h2>{{ $t('about.security.title') }}</h2>
        <h3>{{ $t('about.security.licensing.title') }}</h3>
        <p>{{ $t('about.security.licensing.description') }}</p>
      
        <h3>{{ $t('about.security.certifications.title') }}</h3>
        <p>{{ $t('about.security.certifications.description') }}</p>
      
        <h3>{{ $t('about.security.securitySystems.title') }}</h3>
        <p>{{ $t('about.security.securitySystems.description') }}</p>
      </div>

      <div class="about-section">
        <h2>{{ $t('about.leadership.title') }}</h2>
        <p>{{ $t('about.leadership.intro') }}</p>
      
        <h3>{{ $t('about.leadership.amanda.title') }}</h3>
        <p>
          {{ $t('about.leadership.amanda.descriptionBefore') }}
          <span class="homepage-link" @click="goToAmandaLim">{{ $t('about.leadership.amanda.amandaLimLink') }}</span>
          {{ $t('about.leadership.amanda.descriptionAfter') }}
        </p>
        <p v-html="$t('about.leadership.amanda.experience')"></p>
        <br>
        <p v-html="$t('about.leadership.amanda.strengths')"></p>
        <br>
        <p v-html="$t('about.leadership.amanda.leadership')"></p>
        <br>
        
        <h3>{{ $t('about.leadership.michael.title') }}</h3>
        <p>{{ $t('about.leadership.michael.description') }}</p>
        <p>
          <span v-html="$t('about.leadership.michael.teamRoleBefore')"></span>
          <span class="homepage-link" @click="goToBlog">{{ $t('about.leadership.michael.blogLink') }}</span>
          <span v-html="$t('about.leadership.michael.teamRoleAfter')"></span>
        </p>
        <br>
        <p v-html="$t('about.leadership.michael.leadershipStyle')"></p>
        <br>
        <p v-html="$t('about.leadership.michael.achievements')"></p>
      </div>

      <div class="about-section">
        <h2>{{ $t('about.gettingStarted.title') }}</h2>
        <p>{{ $t('about.gettingStarted.paragraph1') }}</p>
        <p>{{ $t('about.gettingStarted.paragraph2') }}</p>
        <p>
          {{ $t('about.gettingStarted.paragraph3Before') }}
          <span class="homepage-link" @click="goToLogin">{{ $t('about.gettingStarted.winboxLoginLink') }}</span>
          {{ $t('about.gettingStarted.paragraph3After') }}
        </p>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'
import { useNavigation } from '@/components/utils/navigation'
import aboutUsBanner from "@/assets/about-banner.png";

const { goToHomepage, goToLogin, goToRegister, goToAmandaLim, goToResponsibleGaming, goToBlog } = useNavigation()
</script>

<style scoped>
.about {
    margin: 0 auto;
    padding: 20px 10px;
    color: black;
    font-family: Arial, sans-serif;
}

.banner-image {
  margin: 0 auto 20px;
  display: flex;
  justify-content: center;
}

.banner-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.about h1 {
    font-size: 24px;
    margin-bottom: 30px;
    font-weight: 600;
    text-align: left;
    line-height: 1.3;
}

.about p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 15px;
    text-align: justify;
}

.about h2 {
    font-size: 20px;
    margin: 20px 0 15px;
    font-weight: bold;
    color: #333;
}

.about h3 {
    font-size: 18px;
    margin: 20px 0 15px;
    font-weight: bold;
    color: #444;
}

.about-section {
    margin-bottom: 40px;
}

/* Mission and Vision Cards Styling */
.mission-vision-section {
    margin: 40px 0;
}

.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.mission-vision-card {
    background: #ffffff;
    border-radius: 12px;
    padding: 30px 25px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #f0f0f0;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.mission-vision-card h2 {
    font-size: 18px;
    margin: 15px 0;
    font-weight: bold;
}

.mission-vision-card p {
    font-size: 14px;
    line-height: 1.6;
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

/* Responsive Design */
@media (max-width: 1024px) {
    .card-container {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 18px;
    }
    
    .mission-vision-card {
        padding: 25px 20px;
    }
}

@media (max-width: 768px) {
    .about {
        padding: 15px 8px;
    }
    
    .about h1 {
        font-size: 20px;
        margin-bottom: 25px;
        text-align: left;
    }
    
    .about h2 {
        font-size: 18px;
        margin: 18px 0 12px;
    }
    
    .about h3 {
        font-size: 16px;
        margin: 15px 0 12px;
    }
    
    .about p {
        font-size: 14px;
        margin-bottom: 12px;
    }
    
    .about-section {
        margin-bottom: 30px;
    }
    
    .mission-vision-section {
        margin: 30px 0;
    }
    
    .card-container {
        grid-template-columns: 1fr;
        gap: 15px;
        margin: 15px 0;
    }
    
    .mission-vision-card {
        padding: 20px 18px;
    }
    
    .mission-vision-card h2 {
        margin-bottom: 15px;
        text-align: center;
    }
    
    .mission-vision-card p {
        line-height: 1.6;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .about {
        padding: 12px 6px;
    }
    
    .about h1 {
        font-size: 18px;
        margin-bottom: 20px;
    }
    
    .mission-vision-card {
        padding: 18px 15px;
    }
  
}
</style>