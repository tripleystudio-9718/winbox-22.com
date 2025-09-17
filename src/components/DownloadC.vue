<template>
<div class="download">
  <div class="download-p">
    <h1>{{ $t('download.pageTitle') }}</h1>

    <div class="download-info">
        <div class="info-left">
            <img :src="downloadMobile" alt="Two smartphones displaying the Winbox Malaysia mobile app. One phone shows the secure login screen, while the other shows the app's game lobby filled with various online slot games."/>
        </div>

        <div class="info-right">
            <div class="top-right">
                <div class="top-img">
                    <img :src="wbLogo" alt="winbox official"/>
                </div>
                <div class="top-text">
                    <h2>{{ $t('download.appInfo.name') }}</h2>
                    <p v-html="$t('download.appInfo.details')"></p>
                </div>
            </div>

            <div class="download-qr">
                <div class="download-ios-android">
                    <img :src="downloadQR" alt="winbox download ios"/>
                    <button class="ios-download-btn" @click="goToLogin">
                        <div class="apple-icon">
                        <img :src="iosLogo" alt="Apple" width="20" height="24" />
                        </div>
                        <span class="download-text">{{ $t('download.appInfo.iosDownload') }}</span>
                    </button>
                </div>

                <div class="download-ios-android">
                    <img :src="downloadQR" alt="winbox download android"/>
                    <button class="android-download-btn" @click="goToLogin">
                        <div class="android-icon">
                        <img :src="androidLogo" alt="Apple" width="20" height="24" />
                        </div>
                        <span class="download-text">{{ $t('download.appInfo.androidDownload') }}</span>
                    </button>
                </div>
            </div>

            <div class="info-bottom">
                <p>{{ $t('download.appInfo.notMember') }}</p>
            
                <button class="signup-download-btn" @click="goToRegister">
                    <div class="signup-icon">
                    <img :src="signUp" alt="Apple" width="20" height="24" />
                    </div>
                    <span class="download-text">{{ $t('download.appInfo.signUpHere') }}</span>
                </button>
            </div>
        </div>
    </div>
  </div>

  <div class="download-content" v-if="$i18n.locale === 'zh'">
    <h2>{{ $t('download.title') }}</h2>
    <p>
      {{ $t('download.introBefore') }}<span class="homepage-link" @click="goToHomepage">{{ $t('download.winboxLink') }}</span>{{ $t('download.introAfter') }}
      <br><br>
      <span v-html="$t('download.description')"></span>
    </p>
  </div>

  <div class="download-content" v-else>
    <h2>{{ $t('download.title') }}</h2>
    <p>
      {{ $t('download.intro') }}
      <br><br>
      <span v-html="$t('download.description')"></span>
    </p>
  </div>

  <div class="download-content">
    <h2>{{ $t('download.whyUseApp.title') }}</h2>
    <p>{{ $t('download.whyUseApp.intro') }}</p>
    <p>{{ $t('download.whyUseApp.benefits') }}</p>
    <ul>
      <li>{{ $t('download.whyUseApp.features.faster') }}</li>
      <li>{{ $t('download.whyUseApp.features.oneTap') }}</li>
      <li>{{ $t('download.whyUseApp.features.lessData') }}</li>
      <li>{{ $t('download.whyUseApp.features.smoother') }}</li>
      <li>{{ $t('download.whyUseApp.features.notifications') }}</li>
    </ul>
    <p>{{ $t('download.whyUseApp.conclusion') }}</p>
  </div>

  <div class="download-content instructions-section">
    <h2>{{ $t('download.downloadGuide.title') }}</h2>
    <p v-html="$t('download.downloadGuide.intro')"></p>

    <p><strong>{{ $t('download.downloadGuide.android.title') }}</strong></p>
    <ol>
      <li>
        {{ $t('download.downloadGuide.android.step1Before') }}
        <span class="homepage-link" @click="goToDownload">{{ $t('download.downloadGuide.android.downloadLink') }}</span>
        {{ $t('download.downloadGuide.android.step1After') }}
      </li>
      <li v-html="$t('download.downloadGuide.android.step2')"></li>
      <li>{{ $t('download.downloadGuide.android.step3') }}</li>
      <li>{{ $t('download.downloadGuide.android.step4') }}</li>
      <li>{{ $t('download.downloadGuide.android.step5') }}</li>
    </ol>

    <p><strong>{{ $t('download.downloadGuide.ios.title') }}</strong></p>
    <ol>
      <li>{{ $t('download.downloadGuide.ios.step1') }}</li>
      <li v-html="$t('download.downloadGuide.ios.step2')"></li>
      <li>{{ $t('download.downloadGuide.ios.step3') }}</li>
      <li>{{ $t('download.downloadGuide.ios.step4') }}</li>
      <li>{{ $t('download.downloadGuide.ios.step5') }}</li>
    </ol>

    <p>{{ $t('download.downloadGuide.safety') }}</p>
  </div>

  <div class="download-content">
    <h2>{{ $t('download.safeInstallation.title') }}</h2>
    <p>
      {{ $t('download.safeInstallation.descriptionBefore') }}
      <span class="homepage-link" @click="goToRegister">{{ $t('download.safeInstallation.registerLink') }}</span>
      {{ $t('download.safeInstallation.descriptionAfter') }}
    </p>
  </div>

  <div class="download-content">
    <h2>{{ $t('download.topGames.title') }}</h2>
    <p>{{ $t('download.topGames.intro') }}</p>
    <ul>
      <li>{{ $t('download.topGames.features.slots') }}</li>
      <li>{{ $t('download.topGames.features.liveCasino') }}</li>
      <li>{{ $t('download.topGames.features.sports') }}</li>
      <li>{{ $t('download.topGames.features.banking') }}</li>
      <li>
        {{ $t('download.topGames.features.bonusesBefore') }}
        <span class="homepage-link" @click="goToPromo">{{ $t('download.topGames.promotionLink') }}</span>
        {{ $t('download.topGames.features.bonusesAfter') }}
      </li>
    </ul>
    <p>{{ $t('download.topGames.conclusion') }}</p>
  </div>

  <div class="download-content">
    <h2>{{ $t('download.appBenefits.title') }}</h2>
    <p>
      {{ $t('download.appBenefits.introBefore') }}
      <span class="homepage-link" @click="goToLogin">{{ $t('download.appBenefits.loginWebLink') }}</span>
      {{ $t('download.appBenefits.introAfter') }}
    </p>
    <ul>
      <li>{{ $t('download.appBenefits.features.staysLoggedIn') }}</li>
      <li>{{ $t('download.appBenefits.features.notifications') }}</li>
      <li>{{ $t('download.appBenefits.features.smoother') }}</li>
      <li>{{ $t('download.appBenefits.features.easier') }}</li>
    </ul>
    <p>{{ $t('download.appBenefits.recommendation') }}</p>
  </div>

  <div class="download-content" v-if="$i18n.locale === 'zh'">
    <h2>{{ $t('download.conclusion.title') }}</h2>
    <p>
      <span v-html="$t('download.conclusion.descriptionBefore')"></span>
      <span class="homepage-link" @click="goToHomepage">{{ $t('download.conclusion.winboxLink') }}</span>
      {{ $t('download.conclusion.descriptionAfter') }}
    </p>
  </div>

  <div class="download-content" v-else>
    <h2>{{ $t('download.conclusion.title') }}</h2>
    <p>
      <span v-html="$t('download.conclusion.descriptionBefore')"></span>
      <span class="homepage-link" @click="goToHomepage">{{ $t('download.conclusion.winboxMalaysiaLink') }}</span>
      {{ $t('download.conclusion.descriptionAfter') }}
    </p>
  </div>
</div>
</template>

<script setup>
import { useNavigation } from '@/components/utils/navigation'
import downloadMobile from "@/assets/download-mobile.png";
import downloadQR from "@/assets/download_qr.png";
import wbLogo from "@/assets/wb-logo.png";
import iosLogo from "@/assets/apple-logo.svg";
import androidLogo from "@/assets/android-logo.svg";
import signUp from "@/assets/sign-up.svg";

// Navigation
const { goToLogin, goToRegister, goToHomepage, goToPromo } = useNavigation();
</script>

<style scoped>
.download {
    padding: 10px;
    font-family: Arial, sans-serif;
}

.download-p {
  width: 100%;
  background-image: url("@/assets/download-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  padding-top: 40px;
}

.download-p h1 {
    text-align: center;
    width: 50%;
    margin: 0 auto;
    color: white;
}

.download-info {
    display: flex;
    justify-content: center;
    align-items: center;
}

.info-left {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.info-left img {
    width: 80%;
    height: auto;
}

.info-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
}

.top-right {
   display: flex;
   justify-content: center;
   align-items: center; 
   gap: 15px;
}

.top-text h2{
    font-size: 20px;
}

.top-text p {
    font-size: 12px;
    font-weight: 100 !important;
    color: #242627;
}

.download-qr {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.download-ios-android {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.ios-download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #2d2d2d;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 160px;
  height: 40px;
}

.ios-download-btn:hover {
  background-color: #404040;
  transform: translateY(-1px);
}

.ios-download-btn:active {
  transform: translateY(0);
}

.android-download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #99CC00;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 160px;
  height: 40px;
}

.android-download-btn:hover {
  background-color: #99CC00;
  transform: translateY(-1px);
}

.android-download-btn:active {
  transform: translateY(0);
}

.signup-download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #02D1FD;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 160px;
  height: 40px;
}

.signup-download-btn:hover {
  background-color: #02D1FD;
  transform: translateY(-1px);
}

.signup-download-btn:active {
  transform: translateY(0);
}

.apple-icon, .android-icon, .signup-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.download-text {
  white-space: nowrap;
}

.info-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.info-bottom p{
    font-size: 15px;
}

.download {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
}

.download-p {
  width: 100%;
  height:90vh;
  background-image: url("@/assets/download-bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
    justify-content: top;
  align-items: center;
  gap: 40px;
  padding-top: 40px;
}

.download-p h1 {
    text-align: center;
    width: 50%;
    margin: 0 auto;
    color: white;
}

.download-info {
    display: flex;
    justify-content: center;
    align-items: center;
}

.info-left {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.info-left img {
    width: 80%;
    height: auto;
}

.info-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
}

.top-right {
   display: flex;
   justify-content: center;
   align-items: center; 
   gap: 15px;
}

.top-text h2{
    font-size: 20px;
}

.top-text p {
    font-size: 12px;
    font-weight: 100 !important;
    color: #242627;
}

.download-qr {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.download-ios-android {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.ios-download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #2d2d2d;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 160px;
  height: 40px;
}

.ios-download-btn:hover {
  background-color: #404040;
  transform: translateY(-1px);
}

.ios-download-btn:active {
  transform: translateY(0);
}

.android-download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #99CC00;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 160px;
  height: 40px;
}

.android-download-btn:hover {
  background-color: #99CC00;
  transform: translateY(-1px);
}

.android-download-btn:active {
  transform: translateY(0);
}

.signup-download-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #02D1FD;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 160px;
  height: 40px;
}

.signup-download-btn:hover {
  background-color: #02D1FD;
  transform: translateY(-1px);
}

.signup-download-btn:active {
  transform: translateY(0);
}

.apple-icon, .android-icon, .signup-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.download-text {
  white-space: nowrap;
}

.info-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.info-bottom p{
    font-size: 15px;
}

.download-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 75%;
    margin: 0 auto;
    gap: 20px;
}

.download-content h2 {
    font-size: 30px;
}

.download-content p {
    font-size: 14px;
    color: #3A3A3A;
    line-height: 1.6;
}

.instructions-section {
    text-align: left;
}

.instructions-section p {
    text-align: left;
}

.instructions-section ol {
    text-align: left;
    padding-left: 20px;
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

ol li {
    font-size: 14px;
    color: #3A3A3A;
}

ul li {
    font-size: 14px;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
    .download {
        padding: 0;
    }
    .download-p {
        height: auto;
        padding: 20px 10px;
    }
    
    .download-p h1 {
        width: 90%;
        font-size: 22px;
    }
    
    .download-info {
        flex-direction: column;
        gap: 30px;
    }
    
    .info-left, .info-right {
        width: 100%;
    }
    
    .info-left img {
        width: 90%;
        max-width: 300px;
    }
    
    .top-right {
        text-align: center;
        gap: 10px;
    }
    
    .download-qr {
        gap: 20px;
    }
    
    .download-content {
        width: 100%;
        text-align: left;
    }
    
    .download-content h2 {
        font-size: 18px;
        text-align: left !important;
    }

    .download-content p {
        font-size: 14px;
        text-align: left;
    }

    .info-bottom p {
        text-align: left;
    }
}
</style>