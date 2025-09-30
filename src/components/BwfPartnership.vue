<template>
  <ThreeColumnContent>
    <div class="bwf-partnership">
      <!-- Banner Section -->
      <div class="banner-section">
        <img 
          :src="bwfBanner" 
          :alt="$t('bwfPartnership.banner.altText')" 
          class="banner-image"
        />
      </div>

      <!-- Hero Section -->
      <div class="hero-section">
        <div class="hero-content">
          <img 
            :src="heroImage" 
            :alt="$t('bwfPartnership.hero.altText')" 
            class="hero-image"
          />
          <div class="bwf-section">
            <h1>{{ $t('bwfPartnership.hero.title') }}</h1>
            <p>{{ $t('bwfPartnership.hero.content.paragraph1') }}</p>
            <p>{{ $t('bwfPartnership.hero.content.paragraph2') }}</p>
          </div>
        </div>
      </div>

      <!-- BWF About Section -->
      <div class="about-section">
        <h2>{{ $t('bwfPartnership.about.title') }}</h2>
        
        <div class="about-grid">
          <div class="about-item">
            <img 
              :src="overviewIcon" 
              :alt="$t('bwfPartnership.about.overview.altText')" 
              class="about-icon"
            />
            <div class="about-text">
            <h3>{{ $t('bwfPartnership.about.overview.title') }}</h3>
            <p>{{ $t('bwfPartnership.about.overview.content') }}</p>
            </div>
          </div>

          <div class="about-item">
            <img 
              :src="rankingIcon" 
              :alt="$t('bwfPartnership.about.ranking.altText')" 
              class="about-icon"
            />
            <div class="about-text">
            <h3>{{ $t('bwfPartnership.about.ranking.title') }}</h3>
            <p>{{ $t('bwfPartnership.about.ranking.content') }}</p>
            </div>
          </div>

          <div class="about-item">
            <img 
              :src="liveGameIcon" 
              :alt="$t('bwfPartnership.about.liveGame.altText')" 
              class="about-icon"
            />
            <div class="about-text">
            <h3>{{ $t('bwfPartnership.about.liveGame.title') }}</h3>
            <p>{{ $t('bwfPartnership.about.liveGame.content') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Benefits Section -->
      <div class="benefits-section">
        <h2>{{ $t('bwfPartnership.benefits.title') }}</h2>
        
        <div class="benefits-grid">
          <div class="benefit-item">
            <img 
              :src="trustIcon" 
              :alt="$t('bwfPartnership.benefits.trust.altText')" 
              class="benefit-icon"
            />
            <h3>{{ $t('bwfPartnership.benefits.trust.title') }}</h3>
            <p>{{ $t('bwfPartnership.benefits.trust.content') }}</p>
          </div>

          <div class="benefit-item">
            <img 
              :src="experienceIcon" 
              :alt="$t('bwfPartnership.benefits.experience.altText')" 
              class="benefit-icon"
            />
            <h3>{{ $t('bwfPartnership.benefits.experience.title') }}</h3>
            <p>{{ $t('bwfPartnership.benefits.experience.content') }}</p>
          </div>

          <div class="benefit-item">
            <img 
              :src="engagementIcon" 
              :alt="$t('bwfPartnership.benefits.engagement.altText')" 
              class="benefit-icon"
            />
            <h3>{{ $t('bwfPartnership.benefits.engagement.title') }}</h3>
            <p>{{ $t('bwfPartnership.benefits.engagement.content') }}</p>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="features-section">
        <div class="features-grid">
          <div class="feature-item">
            <img 
              :src="registerIcon" 
              :alt="$t('bwfPartnership.features.register.altText')" 
              class="feature-icon"
            />
            <div class="feature-text">
            <h3>{{ $t('bwfPartnership.features.register.title') }}</h3>
            <p>
              <a 
              :href="seoLinks.register()" 
              class="homepage-link"
              @click.prevent="goToRegister">
                {{ $t('bwfPartnership.features.register.linkText') }}
            </a>
              {{ $t('bwfPartnership.features.register.content') }}
            </p>
            </div>
          </div>

          <div class="feature-item">
            <img 
              :src="updatesIcon" 
              :alt="$t('bwfPartnership.features.updates.altText')" 
              class="feature-icon"
            />
            <div class="feature-text">
            <h3>{{ $t('bwfPartnership.features.updates.title') }}</h3>
            <p>{{ $t('bwfPartnership.features.updates.content') }}</p>
            </div>
          </div>

          <div class="feature-item">
            <img 
              :src="performanceIcon" 
              :alt="$t('bwfPartnership.features.performance.altText')" 
              class="feature-icon"
            />
            <div class="feature-text">
            <h3>{{ $t('bwfPartnership.features.performance.title') }}</h3>
            <p>{{ $t('bwfPartnership.features.performance.content') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section">
        <div class="cta-background">
          <h2>{{ $t('bwfPartnership.cta.title') }}</h2>
          <p>
            {{ $t('bwfPartnership.cta.content').replace($t('bwfPartnership.cta.winboxMalaysiaText'), '') }}
            <a 
              :href="seoLinks.home()" 
              class="homepage-link"
              @click.prevent="goToHomepage">
              {{ $t('bwfPartnership.cta.winboxMalaysiaText') }}
          </a>
            {{ $t('bwfPartnership.cta.content').split($t('bwfPartnership.cta.winboxMalaysiaText'))[1] }}
          </p>
          <button 
            @click="goToRegister" 
            class="cta-button"
          >
            {{ $t('bwfPartnership.cta.button') }}
          </button>
        </div>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'
import { useNavigation } from '@/components/utils/navigation'
import bwfBanner from "@/assets/bwf-banner.png";
import heroImage from "@/assets/hero-image.png";
import overviewIcon from "@/assets/overview.png";
import rankingIcon from "@/assets/ranking.png";
import liveGameIcon from "@/assets/live-game.png";
import trustIcon from "@/assets/trust.png";
import experienceIcon from "@/assets/dice.png";
import engagementIcon from "@/assets/star.png";
import registerIcon from "@/assets/register.png";
import updatesIcon from "@/assets/real-time.png";
import performanceIcon from "@/assets/access.png";
import { computed } from 'vue'

const { goToHomepage, goToLogin, goToRegister } = useNavigation()
</script>

<style scoped>
.bwf-partnership {
  margin: 0 auto;
  padding: 20px;
  color: black;
  font-family: Arial, sans-serif;
}

.banner-section {
  width: 100%;
  margin-bottom: 30px;
}

.banner-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.hero-section {
  margin-bottom: 40px;
}

.hero-content {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 20px;
}

.hero-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 8px;
}

.about-section {
  background-color: #F3FAFE;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.benefits-section {
  margin-bottom: 40px;
}

.features-section {
  background-color: #F3FAFE;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.about-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.features-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.benefits-section h3 {
  text-align: center !important;
}

.about-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0 2px 10px rgba(187, 216, 218, 0.3);
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0 2px 10px rgba(187, 216, 218, 0.3);
}

.feature-text {
  flex: 1;
  width: 70%;
}

.about-text {
  flex: 1;
}

.benefit-item {
  text-align: center;
  padding: 25px 20px;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0 2px 10px rgba(187, 216, 218, 0.3);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.about-icon {
  width: 150px;
  height: auto;
  flex-shrink: 0;
  object-fit: contain;
}

.benefit-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto 15px;
  display: block;
  object-fit: contain;
}

.feature-icon {
  width: 100px;
  height: 100px;
  flex-shrink: 0;
  object-fit: contain;
}

.cta-section {
 margin: 40px 0;
 padding: 40px 20px;
 background: linear-gradient(rgba(0, 0, 0, 0.5)), url('@/assets/cta-bg.png');
 background-size: cover;
 background-position: center;
 border-radius: 16px;
 text-align: center;
 color: white;
}

.cta-background h2 {
  color: white;
  margin-bottom: 20px;
}

.cta-background p {
  color: white;
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 1.6;
}

.cta-button {
  background-color: #fff;
  color: black;
  padding: 14px 35px;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.bwf-partnership h1 {
  font-size: 24px;
  margin-bottom: 15px;
  font-weight: 600;
  text-align: left;
  line-height: 1.3;
}

.bwf-partnership p {
  font-size: 14px;
  line-height: 1.6;
  text-align: left;
  margin-bottom: 10px;
}

.bwf-partnership h2 {
  font-size: 20px;
  margin: 15px 0;
  font-weight: bold;
  text-align: left;
  line-height: 1.3;
}

.bwf-partnership h3 {
  font-size: 16px;
  margin: 15px 0;
  font-weight: bold;
  text-align: left;
  line-height: 1.3;
}

.bwf-section {
  margin-bottom: 30px;
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

@media (max-width: 1440px) {
  .hero-content {
    flex-direction: column;
  }

  .hero-content {
    order: 1;
  }

  .hero-image {
    order: 2;
  }
}

@media (max-width: 1024px) {
  .benefits-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
  }
  
  .hero-content {
    flex-direction: column;
    text-align: left;
  }
  
  .about-icon {
    width: 70px;
    height: 70px;
  }
}

/* Mobile Styles */
@media (max-width: 768px) {
  .bwf-partnership {
    padding: 15px;
  }
  
  .banner-section {
    margin-bottom: 20px;
  }
  
  .banner-image {
    border-radius: 8px;
  }
  
  .hero-section {
    margin-bottom: 30px;
  }
  
  .hero-content {
    flex-direction: column;
    text-align: left;
    gap: 15px;
  }
  
  .hero-image {
    max-width: 100%;
    margin-bottom: 15px;
  }
  
  .about-section, .features-section {
    padding: 20px 15px;
    margin-bottom: 25px;
  }
  
  .benefits-section {
    margin-bottom: 30px;
  }
  
  .about-grid, .features-grid {
    gap: 15px;
    margin-top: 15px;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 15px;
  }
  
  .about-item, .feature-item {
    flex-direction: column;
    text-align: center;
    gap: 15px;
    padding: 20px 15px;
  }
  
  .about-text, .feature-text {
    width: 100%;
  }
  
  .about-text h3, .about-text p,
  .feature-text h3, .feature-text p {
    text-align: center;
  }
  
  .benefit-item {
    padding: 20px 15px;
  }
  
  .about-icon {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
  
  .benefit-icon, .feature-icon {
    width: 100px;
    height: 100px;
    margin-bottom: 12px;
    margin: 0 auto;
  }
  
  .cta-section {
    padding: 30px 15px;
    margin: 30px 0;
  }
  
  /* Typography adjustments for mobile */
  .bwf-partnership h1 {
    font-size: 20px;
    margin-bottom: 12px;
    line-height: 1.2;
  }
  
  .bwf-partnership h2 {
    font-size: 18px;
    margin: 12px 0;
    line-height: 1.2;
  }
  
  .bwf-partnership h3 {
    font-size: 16px;
    margin: 10px 0;
    line-height: 1.2;
  }
  
  .bwf-partnership p {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 8px;
  }
  
  .cta-background p {
    font-size: 14px;
    margin-bottom: 25px;
    line-height: 1.5;
  }
  
  .cta-button {
    padding: 12px 30px;
    font-size: 14px;
    width: 100%;
    max-width: 200px;
  }
}

/* Small mobile devices */
@media (max-width: 480px) {
  .bwf-partnership {
    padding: 10px;
  }
  
  .about-section, .features-section {
    padding: 15px 10px;
  }
  
  .about-item, .feature-item, .benefit-item {
    padding: 15px 10px;
  }
  
  .bwf-partnership h1 {
    font-size: 18px;
  }
  
  .bwf-partnership h2 {
    font-size: 16px;
  }
  
  .bwf-partnership h3 {
    font-size: 14px;
  }
  
  .bwf-partnership p {
    font-size: 13px;
  }
  
  .cta-section {
    padding: 20px 10px;
  }
  
  .cta-background p {
    font-size: 13px;
  }
  
  .cta-button {
    padding: 10px 25px;
    font-size: 13px;
  }
}
</style>