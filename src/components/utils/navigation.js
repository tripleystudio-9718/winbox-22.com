// src/utils/navigation.js
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import PrettyGaming from '../live-casino-game/prettyGaming.vue'
import Lucky365Championship from '../promo/lucky365Championship.vue'
import WelcomeBonus from '../promo/welcomeBonus.vue'
import RescueBonus from '../promo/rescueBonus.vue'

// Site URL constant
const SITE_URL = 'https://winbox22.com'

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

  // Helper function to create full URL
  const getFullUrl = (path) => {
    return `${SITE_URL}${getLocalizedPath(path)}`
  }

  // Navigation functions with automatic language prefixing
  const goToHomepage = () => {
    router.push(getLocalizedPath('/'))
  }

  const goToRegister = () => {
    router.push(getLocalizedPath('/winbox-register'))
  }

  const goToLogin = () => {
    router.push(getLocalizedPath('/winbox-login'))
  }

  const goToPromo = () => {
    router.push(getLocalizedPath('/winbox-promotion'))
  }

  const goToLucky365Championship = () => {
    router.push(getLocalizedPath('/lucky365championship'))
  }

  const goToWelcomeBonus = () => {
    router.push(getLocalizedPath('/welcome-bonus'))
  }

  const goToRescueBonus = () => {
    router.push(getLocalizedPath('/rescue-bonus'))
  }

  const goToScratchAndWin = () => {
    router.push(getLocalizedPath('/scratch-and-win'))
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

  const goToLucky365 = () => {
    router.push(getLocalizedPath('/lucky365'))
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

  const goToMaxbet = () => {
    router.push(getLocalizedPath('/maxbet'))
  }

  const goToSexy = () => {
    router.push(getLocalizedPath('/sexy-live-casino'))
  }

  const goToAsiaGaming = () => {
    router.push(getLocalizedPath('/asia-gaming'))
  }

  const goToBigGaming = () => {
    router.push(getLocalizedPath('/big-gaming'))
  }

  const goToDbGaming = () => {
    router.push(getLocalizedPath('/db-gaming'))
  }

  const goToPrettyGaming = () => {
    router.push(getLocalizedPath('/pretty-gaming'))
  }

  const goToCmd368 = () => {
    router.push(getLocalizedPath('/cmd368'))
  }

  const goToNineWickets = () => {
    router.push(getLocalizedPath('/9wickets'))
  }

  const goToBti = () => {
    router.push(getLocalizedPath('/bti'))
  }

  const goToEvolution = () => {
    router.push(getLocalizedPath('/evolution'))
  }

  const goToHotRoad = () => {
    router.push(getLocalizedPath('/hotroad'))
  }

  const goToEzugi = () => {
    router.push(getLocalizedPath('/ezugi'))
  }

  const goToSv388 = () => {
    router.push(getLocalizedPath('/sv388'))
  }

  const goToEkor = () => {
    router.push(getLocalizedPath('/ekor'))
  }

  const goToRcb988 = () => {
    router.push(getLocalizedPath('/rcb988'))
  }

  const goToSlots = () => {
    router.push(getLocalizedPath('/slot'))
  }

  const goToSportsBetting = () => {
    router.push(getLocalizedPath('/sports-betting'))
  }

  const goToLiveCasino = () => {
    router.push(getLocalizedPath('/live-casino'))
  }

  const goToLottery = () => {
    router.push(getLocalizedPath('/ekor-lottery'))
  }

  const goToHorse = () => {
    router.push(getLocalizedPath('/horse-racing-rcb988'))
  }

  // Generic navigation function
  const navigateTo = (path) => {
    router.push(getLocalizedPath(path))
  }

  // External links
  const openExternalLink = (url) => {
    window.open(url, '_blank')
  }

  // Router-link paths for template usage (relative paths)
  const routerLinks = {
    home: () => getLocalizedPath('/'),
    register: () => getLocalizedPath('/winbox-register'),
    login: () => getLocalizedPath('/winbox-login'),
    promo: () => getLocalizedPath('/winbox-promotion'),
    lucky365Championship: () => getLocalizedPath('/lucky365championship'),
    welcomeBonus: () => getLocalizedPath('/welcome-bonus'),
    rescueBonus: () => getLocalizedPath('/rescue-bonus'),
    scratchAndWin: () => getLocalizedPath('/scratch-and-win'),
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
    lucky365: () => getLocalizedPath('/lucky365'),
    jili: () => getLocalizedPath('/jili'),
    spadegaming: () => getLocalizedPath('/spadegaming'),
    playtech: () => getLocalizedPath('/playtech'),
    pragmaticPlay: () => getLocalizedPath('/pragmatic-play'),
    askmeslot: () => getLocalizedPath('/askmeslot'),
    microslot: () => getLocalizedPath('/microslot'),
    monkeyking: () => getLocalizedPath('/monkeyking'),
    slot: () => getLocalizedPath('/slot'),
    sportsBetting: () => getLocalizedPath('/sports-betting'),
    liveCasino: () => getLocalizedPath('/live-casino'),
    lottery: () => getLocalizedPath('/ekor-lottery'),
    horsing: () => getLocalizedPath('/horse-racing-rcb988'),
    maxbet: () => getLocalizedPath('/maxbet'),
    sexy: () => getLocalizedPath('/sexy-live-casino'),
    asiaGaming: () => getLocalizedPath('/asia-gaming'),
    bigGaming: () => getLocalizedPath('/big-gaming'),
    dbGaming: () => getLocalizedPath('/db-gaming'),
    PrettyGaming: () => getLocalizedPath('/pretty-gaming'),
    cmd368: () => getLocalizedPath('/cmd368'),
    wickets: () => getLocalizedPath('/9wickets'),
    bti: () => getLocalizedPath('/bti'),
    evolution: () => getLocalizedPath('/evolution'),
    hotRoad: () => getLocalizedPath('/hotroad'),
    ezugi: () => getLocalizedPath('/ezugi'),
    sv388: () => getLocalizedPath('/sv388'),
    ekor: () => getLocalizedPath('/ekor'),
    rcb988: () => getLocalizedPath('/rcb988'),
  }

  // Full URL links for SEO (absolute URLs)
  const seoLinks = {
    home: () => getFullUrl('/'),
    register: () => getFullUrl('/winbox-register'),
    login: () => getFullUrl('/winbox-login'),
    promo: () => getFullUrl('/winbox-promotion'),
    lucky365Championship: () => getFullUrl('/lucky365championship'),
    welcomeBonus: () => getFullUrl('/welcome-bonus'),
    rescueBonus: () => getFullUrl('/rescue-bonus'),
    scratchAndWin: () => getFullUrl('/scratch-and-win'),
    download: () => getFullUrl('/download'),
    chat: () => getFullUrl('/chat'),
    about: () => getFullUrl('/about'),
    bwfPartnership: () => getFullUrl('/bwf-winbox-partnership'),
    brandAmbassador: () => getFullUrl('/brand-ambassador'),
    responsibleGaming: () => getFullUrl('/responsible-gaming'),
    amandaLim: () => getFullUrl('/amanda-lim'),
    michealOng: () => getFullUrl('/micheal-ong'),
    privacyPolicy: () => getFullUrl('/privacy-policy'),
    termsAndCondition: () => getFullUrl('/terms-and-condition'),
    contactUs: () => getFullUrl('/contact-us'),
    blog: () => getFullUrl('/blog'),
    post: () => getFullUrl('/post'),
    // Slot games
    acewin: () => getFullUrl('/acewin'),
    lucky365: () => getFullUrl('/lucky365'),
    jili: () => getFullUrl('/jili'),
    spadegaming: () => getFullUrl('/spadegaming'),
    playtech: () => getFullUrl('/playtech'),
    pragmaticPlay: () => getFullUrl('/pragmatic-play'),
    askmeslot: () => getFullUrl('/askmeslot'),
    microslot: () => getFullUrl('/microslot'),
    monkeyking: () => getFullUrl('/monkeyking'),
    slot: () => getFullUrl('/slot'),
    sportsBetting: () => getFullUrl('/sports-betting'),
    liveCasino: () => getFullUrl('/live-casino'),
    lottery: () => getFullUrl('/ekor-lottery'),
    horsing: () => getFullUrl('/horse-racing-rcb988'),
    maxbet: () => getFullUrl('/maxbet'),
    sexy: () => getFullUrl('/sexy-live-casino'),
    asiaGaming: () => getFullUrl('/asia-gaming'),
    bigGaming: () => getFullUrl('/big-gaming'),
    dbGaming: () => getFullUrl('/db-gaming'),
    prettyGaming: () => getFullUrl('/pretty-gaming'),
    cmd368: () => getFullUrl('/cmd368'),
    wickets: () => getFullUrl('/9wickets'),
    bti: () => getFullUrl('/bti'),
    evolution: () => getFullUrl('/evolution'),
    hotRoad: () => getFullUrl('/hotroad'),
    ezugi: () => getFullUrl('/ezugi'),
    sv388: () => getFullUrl('/sv388'),
    ekor: () => getFullUrl('/ekor'),
    rcb988: () => getFullUrl('/rcb988'),
  }

  return {
    // Core navigation functions
    goToHomepage,
    goToRegister,
    goToLogin,
    goToPromo,
    goToLucky365Championship,
    goToWelcomeBonus,
    goToRescueBonus,
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
    goToLucky365,
    goToJili,
    goToSpadeGaming,
    goToPlaytech,
    goToPragmaticPlay,
    goToAskmeslot,
    goToMicroslot,
    goToMonkeyking,
    goToSlots,
    goToSportsBetting,
    goToLiveCasino,
    goToLottery,
    goToHorse,
    goToMaxbet,
    goToSexy,
    goToCmd368,
    goToNineWickets,
    goToBti,
    goToEvolution,
    goToHotRoad,
    goToEzugi,
    goToSv388,
    goToEkor,
    goToRcb988,
    goToAsiaGaming,
    goToBigGaming,
    goToDbGaming,
    goToPrettyGaming,
    
    // Utility functions
    navigateTo,
    openExternalLink,
    getLocalizedPath,
    getFullUrl,
    
    // Router-link paths for templates (relative)
    routerLinks,
    
    // SEO-friendly links with full URLs
    seoLinks,
    
    // Site URL constant
    SITE_URL
  }
}