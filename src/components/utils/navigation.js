// src/utils/navigation.js
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

export function useNavigation() {
  const router = useRouter()
  const { locale } = useI18n()

  // Helper function to create localized path
  const getLocalizedPath = (path) => {
    // If current language is Chinese, add /zh prefix
    if (locale.value === 'zh') {
      return path === '/' ? '/zh' : `/zh${path}`
    }
    // For English, return original path
    return path
  }

  // Navigation functions with automatic language prefixing
  const goToHomepage = () => {
    router.push(getLocalizedPath('/'))
  }

  const goToRegister = () => {
    router.push(getLocalizedPath('/winbox-register'))
  }

  const goToLogin = () => {
    router.push(getLocalizedPath('/winbox-login-web'))
  }

  const goToPromo = () => {
    router.push(getLocalizedPath('/winbox-promotion'))
  }

  const goToDownload = () => {
    router.push(getLocalizedPath('/download'))
  }

  const goToChat = () => {
    router.push(getLocalizedPath('/chat'))
  }

  const goToAbout = () => {
    router.push(getLocalizedPath('/about'))
  }

  const goToBwfPartnership = () => {
    router.push(getLocalizedPath('/bwf-winbox-partnership'))
  }

  const goToBrandAmbassador = () => {
    router.push(getLocalizedPath('/brand-ambassador'))
  }

  const goToResponsibleGaming = () => {
    router.push(getLocalizedPath('/responsible-gaming'))
  }

  const goToAmandaLim = () => {
    router.push(getLocalizedPath('/amanda-lim'))
  }

  const goToMichealOng = () => {
    router.push(getLocalizedPath('/micheal-ong'))
  }

  const goToPrivacyPolicy = () => {
    router.push(getLocalizedPath('/privacy-policy'))
  }

  const goToTermsAndCondition = () => {
    router.push(getLocalizedPath('/terms-and-condition'))
  }

  const goToContactUs = () => {
    router.push(getLocalizedPath('/contact-us'))
  }

  const goToBlog = () => {
    router.push(getLocalizedPath('/blog'))
  }

  const goToPost = () => {
    router.push(getLocalizedPath('/post'))
  }

  // Slot game navigation
  const goToAcewin = () => {
    router.push(getLocalizedPath('/acewin'))
  }

  const goToJili = () => {
    router.push(getLocalizedPath('/jili'))
  }

  const goToSpadeGaming = () => {
    router.push(getLocalizedPath('/spadegaming'))
  }

  const goToPlaytech = () => {
    router.push(getLocalizedPath('/playtech'))
  }

  const goToPragmaticPlay = () => {
    router.push(getLocalizedPath('/pragmatic-play'))
  }

  const goToAskmeslot = () => {
    router.push(getLocalizedPath('/askmeslot'))
  }

  const goToMicroslot = () => {
    router.push(getLocalizedPath('/microslot'))
  }

  const goToMonkeyking = () => {
    router.push(getLocalizedPath('/monkeyking'))
  }

    const goToSlots = () => {
    router.push(getLocalizedPath('/slot'))
  }

  const goToSportsBetting = () => {
    router.push(getLocalizedPath('/sports-betting'))
  }

  // Generic navigation function
  const navigateTo = (path) => {
    router.push(getLocalizedPath(path))
  }

  // External links
  const openExternalLink = (url) => {
    window.open(url, '_blank')
  }

  // Router-link paths for template usage
  const routerLinks = {
    home: () => getLocalizedPath('/'),
    register: () => getLocalizedPath('/winbox-register'),
    login: () => getLocalizedPath('/winbox-login-web'),
    promo: () => getLocalizedPath('/winbox-promotion'),
    download: () => getLocalizedPath('/download'),
    chat: () => getLocalizedPath('/chat'),
    about: () => getLocalizedPath('/about'),
    bwfPartnership: () => getLocalizedPath('/bwf-winbox-partnership'),
    brandAmbassador: () => getLocalizedPath('/brand-ambassador'),
    responsibleGaming: () => getLocalizedPath('/responsible-gaming'),
    amandaLim: () => getLocalizedPath('/amanda-lim'),
    michealOng: () => getLocalizedPath('/micheal-ong'),
    privacyPolicy: () => getLocalizedPath('/privacy-policy'),
    termsAndCondition: () => getLocalizedPath('/terms-and-condition'),
    contactUs: () => getLocalizedPath('/contact-us'),
    blog: () => getLocalizedPath('/blog'),
    post: () => getLocalizedPath('/post'),
    // Slot games
    acewin: () => getLocalizedPath('/acewin'),
    jili: () => getLocalizedPath('/jili'),
    spadegaming: () => getLocalizedPath('/spadegaming'),
    playtech: () => getLocalizedPath('/playtech'),
    pragmaticPlay: () => getLocalizedPath('/pragmatic-play'),
    askmeslot: () => getLocalizedPath('/askmeslot'),
    microslot: () => getLocalizedPath('/microslot'),
    monkeyking: () => getLocalizedPath('/monkeyking'),
    slot: () => getLocalizedPath('/slot'),
    sportsBetting: () => getLocalizedPath('/sports-betting'),
  }

  return {
    // Core navigation functions
    goToHomepage,
    goToRegister,
    goToLogin,
    goToPromo,
    goToDownload,
    goToChat,
    goToAbout,
    goToBwfPartnership,
    goToResponsibleGaming,
    goToBrandAmbassador,
    goToAmandaLim,
    goToMichealOng,
    goToPrivacyPolicy,
    goToTermsAndCondition,
    goToContactUs,
    goToBlog,
    goToPost,
    
    // Slot games
    goToAcewin,
    goToJili,
    goToSpadeGaming,
    goToPlaytech,
    goToPragmaticPlay,
    goToAskmeslot,
    goToMicroslot,
    goToMonkeyking,
    goToSlots,
    goToSportsBetting,
    
    // Utility functions
    navigateTo,
    openExternalLink,
    getLocalizedPath,
    
    // Router-link paths for templates
    routerLinks
  }
}