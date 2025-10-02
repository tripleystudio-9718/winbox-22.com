<template>
  <ThreeColumnContent>
  <div class="contactus">
    <div class="banner-image">
        <img :src="contactUsBanner" alt="winbox support" class="banner-img">
      </div>
    <h1>{{ $t('contactUs.title') }}</h1>
    <div class="contactus-section">
    <h2>{{ $t('contactUs.section.heading') }}</h2>
    <p>{{ $t('contactUs.section.description') }}</p>
    <p>{{ $t('contactUs.section.contactMethodsIntro') }}</p>
    <ul class="dots">
        <li>{{ $t('contactUs.section.contactMethods.0.label') }}: {{ $t('contactUs.section.contactMethods.0.value') }}</li>
        <li><a 
          :href="seoLinks.chat()" 
          class="homepage-link"
          @click.prevent="goToChat">{{ $t('contactUs.section.contactMethods.1.label') }}</a> {{ $t('contactUs.section.contactMethods.1.value') }}</li>
    </ul>

    <p>{{ $t('contactUs.section.website.label') }}: <a 
          :href="seoLinks.home()" 
          class="homepage-link"
          @click.prevent="goToHomepage">{{ $t('contactUs.section.website.url') }}</a></p>

    <p>{{ $t('contactUs.section.aboutUsText') }} <a 
          :href="seoLinks.about()" 
          class="homepage-link"
          @click.prevent="goToAbout">{{ $t('contactUs.section.aboutUsLink.label') }}</a> page.</p>
</div>
  </div>
  </ThreeColumnContent>
</template>

<script setup>
import ThreeColumnContent from '@/components/ThreeColumnContent.vue'
import { useNavigation } from '@/components/utils/navigation'
import contactUsBanner from "@/assets/contact-us-banner.png";

const { goToHomepage, goToLogin, goToRegister, goToChat, goToAbout } = useNavigation()

const { seoLinks, routerLinks, getLocalizedPath } = useNavigation()
</script>

<style scoped>
.contactus {
    margin: 0 auto;
    padding: 20px 10px;
    color: black;
    font-family: Arial, sans-serif;
}

.banner-image img{
    width: 100%;
    height: auto;
    margin-bottom: 20px;
}

.contactus h1 {
    font-size: 22px;
    margin-bottom: 30px;
    font-weight: 600;
    text-align: left;
}

.contactus p {
    font-size: 14px;
    line-height: 1.6;
}

.contactus h2 {
    font-size: 18px;
    margin: 15px 0;
    font-weight: bold;
}

.contactus h3 {
    font-size: 16px;
    margin: 15px 0;
    font-weight: bold;
}

.contactus-section {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px ;
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
</style>
