<template>
  <ThreeColumnContent>
    <div class="brand-ambassador">
      <!-- 1. Banner Section -->
      <div class="banner-section">
        <img 
          :src="BABanner" 
          alt="winbox brand ambassador" 
          class="banner-image"
        />
      </div>

      <div class="intro-section">
        <h1>{{ $t('brandAmbassador.h1Text') }}</h1>
        <div class="intro-content">
          <div class="intro-image-container">
            <img 
              :src="mmqBanner" 
              alt="winbox brand ambassador" 
              class="intro-image"
            />
          </div>
          <div class="intro-text">
            <p class="intro-description">{{ $t('brandAmbassador.intro.description') }}</p>
            
            <div class="awards-section">
              <h3 class="awards-title">{{ $t('brandAmbassador.intro.awardsTitle') }} <span style="color: #51AFED;">{{ $t('brandAmbassador.intro.awardsTitle2') }}</span><br>{{ $t('brandAmbassador.intro.awardsTitle3') }}</h3>
              
              <div class="awards-grid">
                <div class="award-item">
                  <div class="award-icon">
                    <img 
                      :src="mmqTrophy1" 
                      alt="125cc Trophy" 
                      class="award-trophy-image"
                    />
                  </div>
                  <div class="award-details">
                    <span class="award-count">{{ $t('brandAmbassador.intro.awards.moto125.count') }}</span>
                    <span class="award-title">{{ $t('brandAmbassador.intro.awards.moto125.title') }}</span>
                  </div>
                </div>
                
                <div class="award-item">
                  <div class="award-icon">
                    <img 
                      :src="mmqTrophy2" 
                      alt="MotoGP Trophy" 
                      class="award-trophy-image"
                    />
                  </div>
                  <div class="award-details">
                    <span class="award-count">{{ $t('brandAmbassador.intro.awards.motogp.count') }}</span>
                    <span class="award-title">{{ $t('brandAmbassador.intro.awards.motogp.title') }}</span>
                  </div>
                </div>
                
                <div class="award-item">
                  <div class="award-icon">
                    <img 
                      :src="mmqTrophy3" 
                      alt="Moto2 Trophy" 
                      class="award-trophy-image"
                    />
                  </div>
                  <div class="award-details">
                    <span class="award-count">{{ $t('brandAmbassador.intro.awards.moto2.count') }}</span>
                    <span class="award-title">{{ $t('brandAmbassador.intro.awards.moto2.title') }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 3. The Winning Formula Section -->
      <div class="winning-formula-section">
        <h2 class="formula-title">{{ $t('brandAmbassador.winningFormula.title') }}</h2>
        <div class="formula-content">
          <div class="formula-image-container">
            <img 
              :src="section3" 
              alt="marc marquez winbox ambassador" 
              class="formula-image"
            />
          </div>
          <div class="formula-text">
            <div class="formula-description">
              <p>{{ $t('brandAmbassador.winningFormula.paragraph1') }}</p>
              <p>{{ $t('brandAmbassador.winningFormula.paragraph2') }}</p>
              <p>{{ $t('brandAmbassador.winningFormula.paragraph3') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 4. Legend in Motion Section -->
      <div class="legend-section">
        <h2 class="legend-title">{{ $t('brandAmbassador.legend.title') }}</h2>
        <div class="legend-text">
          <p>{{ $t('brandAmbassador.legend.paragraph1') }}</p>
          <p>{{ $t('brandAmbassador.legend.paragraph2') }}</p>
          <p>{{ $t('brandAmbassador.legend.paragraph3') }}</p>
          <p>
            {{ $t('brandAmbassador.legend.paragraph4.text') }}
            <a 
            :href="seoLinks.login()" 
            class="homepage-link"
            @click.prevent="goToLogin">
              {{ $t('brandAmbassador.legend.paragraph4.linkText') }}
          </a>
            {{ $t('brandAmbassador.legend.paragraph4.textAfter') }}
          </p>
        </div>

        <div class="legend-image-container">
          <img 
            :src="legendBackgroundImage" 
            alt="Promotional banner for the Winbox Rescue Bonus of up to 58,888. The image features a motorsports racer and a cartoon tiger mascot, with a 'Claim Now' button" 
            class="legend-image"
            @click="goToPromo"
          />
        </div>
      </div>

      <!-- 5. Events Section -->
      <div class="events-section">
        <div class="events-text">
          <h2 class="events-title">{{ $t('brandAmbassador.events.title') }}</h2>
          <div class="events-description">
            <p>{{ $t('brandAmbassador.events.paragraph1') }}</p>
            <p>
              {{ $t('brandAmbassador.events.paragraph2.text') }}
              <a 
                :href="seoLinks.home()" 
                class="homepage-link"
                @click.prevent="goToHomepage">
                {{ $t('brandAmbassador.events.paragraph2.linkText') }}
            </a>
              {{ $t('brandAmbassador.events.paragraph2.textAfter') }}
            </p>
          </div>
          
          <!-- Social Media Links -->
          <div class="social-media">
            <h3 class="social-title">{{ $t('brandAmbassador.social.title') }}</h3>
            <div class="social-links">
                <a 
                href="https://www.facebook.com/marcmarquez1993/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link facebook"
                :aria-label="$t('brandAmbassador.social.facebook')"
                >
                <img :src="facebook" alt="Marc Marquez winbox ambassador" class="social-icon" />
                </a>
                <a 
                href="https://x.com/marcmarquez93?ref_src=twfw" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link twitter"
                :aria-label="$t('brandAmbassador.social.twitter')"
                >
                <img :src="twitter"  alt="Marc Marquez winbox ambassador" class="social-icon" />
                </a>
                <a 
                href="https://www.instagram.com/marcmarquez93/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-link instagram"
                :aria-label="$t('brandAmbassador.social.instagram')"
                >
                <img :src="instagram" alt="Marc Marquez winbox ambassador" class="social-icon" />
                </a>
            </div>
            </div>
        </div>
      </div>
    </div>
  </ThreeColumnContent>
</template>

<script setup>
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'
import { useNavigation } from '@/components/utils/navigation'
import BABanner from "@/assets/ba.png"
import mmqBanner from "@/assets/mmq-banner.png"
import section3 from "@/assets/section3.webp"
import mmqTrophy1 from "@/assets/mmq-trophy-1.png"
import mmqTrophy2 from "@/assets/mmq-trophy-2.png"
import mmqTrophy3 from "@/assets/mmq-trophy-3.png"
import twitter from "@/assets/twitter.png"
import instagram from "@/assets/instagram.png"
import facebook from "@/assets/facebook.png"
import legendBackgroundImage from "@/assets/legend-bg.png"
import { computed } from 'vue'

const { goToHomepage, goToLogin, goToRegister, goToPromo } = useNavigation()
const { seoLinks, routerLinks, getLocalizedPath } = useNavigation()
</script>

<style scoped>
.brand-ambassador {
  margin: 0 auto;
  color: black;
  font-family: Arial, sans-serif;
  padding: 20px 10px;
}

/* Heading Styles - Consistent with About Page */
.brand-ambassador h2 {
  font-size: 18px;
  margin: 15px 0;
  font-weight: bold;
}

.brand-ambassador h3 {
  font-size: 16px;
  margin: 15px 0;
  font-weight: bold;
}

.brand-ambassador p {
  font-size: 14px;
  line-height: 1.6;
}

/* Banner Section */
.banner-section {
  width: 100%;
  margin-bottom: 40px;
}

.banner-image {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

/* Introduction Section - Updated */
.intro-section {
  margin-bottom: 50px;
}

.intro-section h1{
  font-size: 22px;
  text-align: center;
}

.intro-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.intro-image-container {
  width: 100%;
}

.intro-image {
  width: 90%;
  height: auto;
  border-radius: 12px;
}

.intro-description {
  font-size: 16px;
  line-height: 1.6;
  font-weight: 500;
  margin-bottom: 30px;
  text-align: center;
}

/* Awards Section - Desktop Larger Trophies */
.awards-section {
  margin-top: 30px;
}

.awards-title {
  font-size: 18px !important;
  font-weight: bold !important;
  margin-bottom: 25px !important;
  color: #1a1a1a !important;
  text-align: center;
}

.awards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 20px;
  justify-items: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.award-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 220px;
}

.award-icon {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.award-trophy-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.award-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.award-count {
  font-size: 20px;
  font-weight: bold;
  color: #1a1a1a;
}

.award-title {
  font-size: 14px;
  color: #666;
  font-weight: 500;
}

.formula-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  margin: 0 auto;
}

.formula-image-container {
  width: 100%;
}

.formula-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.15);
}

.formula-title {
  font-size: 18px;
  margin: 15px 0;
  font-weight: bold;
  text-align: center;
}

.formula-description p {
  font-size: 12px;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
}

.legend-section {
  padding: 15px 0;
}

.legend-text {
  text-align: left;
}

.legend-text p {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.legend-image-container {
  width: 100%;
  margin-top: 20px;
}

.legend-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.winbox-link {
  color: #ffd700;
  text-decoration: underline;
  font-weight: bold;
}

.winbox-link:hover {
  color: #ffed4a;
}



/* Events Section */
.events-section {
  margin-bottom: 50px;
}

.events-title {
  font-size: 18px !important;
  font-weight: bold !important;
  margin: 15px 0 !important;
}

.events-description p {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.winbox-malaysia-link {
  color: #007bff;
  text-decoration: underline;
  font-weight: bold;
}

.winbox-malaysia-link:hover {
  color: #0056b3;
}

/* Social Media Section */
.social-media {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px solid #eee;
}

.social-title {
  font-size: 16px !important;
  font-weight: bold !important;
  margin: 15px 0 !important;
}

.social-links {
  display: flex;
  gap: 15px;
  justify-content: flex-start;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.social-icon {
  width: 50px;
  height: 50px;
}

.homepage-link {
    color: #02D1FD;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.2s ease;
}

/* Responsive Design - Mobile */
@media (max-width: 768px) {
  .banner-section {
    margin-bottom: 30px;
  }
  
  .banner-image {
    max-height: 250px;
  }
  
  .intro-content, 
  .formula-content {
    grid-template-columns: 1fr;
    gap: 25px;
    text-align: center;
  }
  
  .intro-image {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .intro-description {
    font-size: 14px;
    margin-bottom: 25px;
  }
  
  .awards-section {
    margin-top: 25px;
  }
  
  .awards-title {
    font-size: 16px !important;
    margin-bottom: 20px !important;
  }
  
  .awards-grid {
    gap: 15px;
    max-width: 100%;
    justify-items: center;
    margin: 0 auto;
  }
  
  .award-item {
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 120px;
  }
  
  .award-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    flex-shrink: 0;
  }
  
  .award-details {
    flex: 1;
  }
  
  .award-count {
    font-size: 16px;
  }
  
  .award-title {
    font-size: 11px;
  }
  
  .formula-title {
    font-size: 16px !important;
  }
  
  .formula-description p {
    font-size: 14px;
    text-align: left;
    line-height: 1.6;
  }
  
  .legend-title {
    font-size: 18px !important;
    text-align: center !important;
  }
  
  .legend-text {
    text-align: left;
  }
  
  .legend-image {
    border-radius: 8px;
  }

  .events-title {
    font-size: 16px !important;
    text-align: left;
  }
  
  .events-description {
    text-align: left;
  }
  
  .social-media {
    margin-top: 30px;
    padding-top: 25px;
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
    gap: 20px;
  }
  
  .social-icon {
    width: 45px;
    height: 45px;
  }
}
</style>