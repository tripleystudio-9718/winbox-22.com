<!-- src/App.vue -->
<script setup>
  import { ref, onMounted, watch } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  import { useNavigation } from '@/components/utils/navigation.js';
  import stickyBar from "@/components/stickyBar.vue";
  import loading from "@/components/Loading.vue";
  import popup from "@/components/Popup.vue";
  import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
  import home_nav from "@/assets/home-nav.gif";
  import home_active_nav from "@/assets/home-active-nav.gif";
  import history_nav from "@/assets/history-nav.gif";
  import promo_nav from "@/assets/promo-nav.gif";
  import promo_active_nav from "@/assets/promo-active-nav.gif";
  import chat_nav from "@/assets/chat-nav.gif";
  import chat_active_nav from "@/assets/chat-active-nav.gif";
  import settings_nav from "@/assets/settings-nav.gif";
  import logoImage from "@/assets/winbox_logo.png";
  import whatsapps_side_stickers from "@/assets/whatsapps-side-stickers.png";
  import telegram_side_stickers from "@/assets/telegram-side-stickers.gif";
  import save_links from "@/assets/save-links.png";
  
  const router = useRouter();
  const route = useRoute();
  const { t } = useI18n();
  const { goToRegister, routerLinks } = useNavigation();
  
  // Sidebar state
  const isSidebarOpen = ref(false);
  const isFollowDropdownOpen = ref(false);
  
  // Dropdown states
  const isBrandDropdownOpen = ref(false);
  const isHelpDropdownOpen = ref(false);
  
  // Popup state
  const showPopup = ref(false);
  
  // Social media links
  const socialMediaLinks = ref([
    {
      name: 'Facebook',
      isRegister: true,
      url: '/register'
    },
    {
      name: 'Instagram',
      isRegister: true,
      url: '/register'
    },
    {
      name: 'WhatsApp',
      isRegister: false,
      url: 'https://wa.me/yournumberhere'
    },
    {
      name: 'Telegram',
      isRegister: false,
      url: 'https://t.me/wbvvipangpau'
    }
  ]);
  
  // Toggle sidebar
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };
  
  // Close sidebar
  const closeSidebar = () => {
    isSidebarOpen.value = false;
  };
  
  // Toggle follow dropdown
  const toggleFollowDropdown = () => {
    isFollowDropdownOpen.value = !isFollowDropdownOpen.value;
  };
  
  // Toggle brand dropdown
  const toggleBrandDropdown = () => {
    isBrandDropdownOpen.value = !isBrandDropdownOpen.value;
  };
  
  // Toggle help dropdown
  const toggleHelpDropdown = () => {
    isHelpDropdownOpen.value = !isHelpDropdownOpen.value;
  };
  
  // Handle social media clicks
  const handleSocialClick = (link) => {
    if (link.isRegister) {
      goToRegister();
      closeSidebar();
    } else {
      window.open(link.url, '_blank');
    }
  };

  // Navigate to register using the localized navigation
  const navigateToRegister = () => {
    goToRegister();
  };
  
  // Watch sidebar state to close dropdowns when sidebar closes
  watch(isSidebarOpen, (newValue) => {
    if (!newValue) {
      isBrandDropdownOpen.value = false;
      isHelpDropdownOpen.value = false;
      isFollowDropdownOpen.value = false;
    }
  });
  
  // Reset scroll position on route change
  watch(
    () => route.path,
    () => {
      // Close sidebar on route change
      closeSidebar();
      
      // Get the main content element
      const mainContent = document.querySelector('main');
      
      // Reset scroll position to top
      if (mainContent) {
        mainContent.scrollTo({
          top: 0,
          behavior: 'instant'
        });
      }
    }
  );
  
  // Check if it's the homepage and show popup
  onMounted(() => {
    const isHomepage = window.location.pathname === '/';
    const popupShown = localStorage.getItem('popupShown');
  
    if (isHomepage && !popupShown) {
      showPopup.value = true;
    }
  });
  
  // Close popup
  const handleClosePopup = () => {
    showPopup.value = false;
    localStorage.setItem('popupShown', 'true');
  };
  
</script>

<template>
  <loading />
  <div v-if="showPopup">
    <popup @close="handleClosePopup" />
  </div>
  <div class="app-container">
    <div class="floating-tips">
      <a href="https://tinyurl.com/seowblivechat" target="_blank" style="cursor: pointer;">
        <img :src="whatsapps_side_stickers" class="whatsapps" alt="whatsapps" />
      </a>
      <a href="https://t.me/wbvvipangpau" target="_blank">
        <img :src="telegram_side_stickers" class="telegram" alt="telegram" />
      </a>
    </div>

    <div class="floating-bsg">
      <a @click="navigateToRegister" style="cursor: pointer;">
        <img :src="save_links" alt="telegram" />
      </a>
    </div>

    <stickyBar />

    <div class="top-header">
      <header>
        <div 
          class="sidebar-overlay" 
          :class="{ 'active': isSidebarOpen }"
          @click="closeSidebar"
        >
          <div class="sidebar" :class="{ 'open': isSidebarOpen }" @click.stop>
            <div class="sidebar-header">
              <router-link :to="routerLinks.home()" @click="closeSidebar" class="menu-item">
                <img src="@/assets/winbox_logo.png" alt="WINBOX Logo" class="sidebar-logo">
              </router-link>
            </div>
            <nav class="sidebar-nav">
              <div class="sidebar-content">
                <ul>
                  <!-- Login & Register -->
                  <li>
                    <router-link :to="routerLinks.login()" class="menu-item" @click="closeSidebar">
                      <span>{{ $t('navigation.login') }}</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="routerLinks.register()" class="menu-item" @click="closeSidebar">
                      <span>{{ $t('navigation.register') }}</span>
                    </router-link>
                  </li>

                  <!-- Main Navigation -->
                  <li>
                    <router-link :to="routerLinks.home()" class="menu-item" @click="closeSidebar">
                      <span>{{ $t('navigation.home') }}</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="routerLinks.promo()" class="menu-item" @click="closeSidebar">
                      <span>{{ $t('navigation.promo') }}</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="routerLinks.download()" class="menu-item" @click="closeSidebar">
                      <span>{{ $t('navigation.download') }}</span>
                    </router-link>
                  </li>

                  <!-- Gaming Categories -->
                  <li>
                    <router-link :to="routerLinks.slot()" class="menu-item" @click="closeSidebar">
                      <span>{{ $t('navigation.slots') }}</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="routerLinks.liveCasino()" class="menu-item" @click="closeSidebar">
                      <span>{{ $t('navigation.liveCasino') }}</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="routerLinks.lottery()" class="menu-item" @click="closeSidebar">
                      <span>{{ $t('navigation.lottery') }}</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="routerLinks.sportsBetting()" class="menu-item" @click="closeSidebar">
                      <span>{{ $t('navigation.sport') }}</span>
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="routerLinks.horsing()" class="menu-item" @click="closeSidebar">
                      <span>{{ $t('navigation.horsing') }}</span>
                    </router-link>
                  </li>

                  <!-- Brand & Info Dropdown -->
                  <li class="dropdown-item">
                    <div class="dropdown-header" @click="toggleBrandDropdown">
                      <span class="dropdown-text">{{ $t('navigation.brandInfo') }}</span>
                      <span class="dropdown-arrow" :class="{ 'open': isBrandDropdownOpen }">
                        <svg class="dropdown-icon" width="16" height="16" viewBox="0 0 16 16">
                          <path d="M4 6l4 4 4-4" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                    </div>
                    <div class="sub-dropdown" :class="{ 'open': isBrandDropdownOpen }">
                      <router-link :to="routerLinks.brandAmbassador()" class="sub-link" @click="closeSidebar">
                        <span class="sub-name">{{ $t('navigation.ourAmbassadors') }}</span>
                      </router-link>
                      <router-link :to="routerLinks.bwfPartnership()" class="sub-link" @click="closeSidebar">
                        <span class="sub-name">{{ $t('navigation.bwfPartnership') }}</span>
                      </router-link>
                      <router-link :to="routerLinks.about()" class="sub-link" @click="closeSidebar">
                        <span class="sub-name">{{ $t('navigation.aboutUs') }}</span>
                      </router-link>
                      <router-link :to="routerLinks.blog()" class="sub-link" @click="closeSidebar">
                        <span class="sub-name">{{ $t('navigation.blog') }}</span>
                      </router-link>
                    </div>
                  </li>

                  <!-- Help & Legal Dropdown -->
                  <li class="dropdown-item">
                    <div class="dropdown-header" @click="toggleHelpDropdown">
                      <span class="dropdown-text">{{ $t('navigation.helpLegal') }}</span>
                      <span class="dropdown-arrow" :class="{ 'open': isHelpDropdownOpen }">
                        <svg class="dropdown-icon" width="16" height="16" viewBox="0 0 16 16">
                          <path d="M4 6l4 4 4-4" stroke="white" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </span>
                    </div>
                    <div class="sub-dropdown" :class="{ 'open': isHelpDropdownOpen }">
                      <router-link :to="routerLinks.contactUs()" class="sub-link" @click="closeSidebar">
                        <span class="sub-name">{{ $t('navigation.contactUs') }}</span>
                      </router-link>
                      <router-link :to="routerLinks.responsibleGaming()" class="sub-link" @click="closeSidebar">
                        <span class="sub-name">{{ $t('navigation.responsibleGaming') }}</span>
                      </router-link>
                      <router-link :to="routerLinks.privacyPolicy()" class="sub-link" @click="closeSidebar">
                        <span class="sub-name">{{ $t('navigation.privacyPolicy') }}</span>
                      </router-link>
                      <router-link :to="routerLinks.termsAndCondition()" class="sub-link" @click="closeSidebar">
                        <span class="sub-name">{{ $t('navigation.termsAndCondition') }}</span>
                      </router-link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div>
          <div class="heading">
            <!-- Hamburger menu button -->
            <div class="hamburger-menu" @click="toggleSidebar">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
            <div class="logo-center">
              <router-link :to="routerLinks.home()">
                <img :src="logoImage" alt="Logo" />
              </router-link>
            </div>
            
            <!-- Language Switcher Component -->
            <div class="language-switcher-wrapper">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      <div class="marquee-text">
        <marquee>
          {{ $t('common.marqueeText') }}
        </marquee>
      </div>
    </div>

    <main>
      <router-view />
    </main>

    <footer>
      <nav>
        <ul>
          <li>
            <router-link :to="routerLinks.home()" custom v-slot="{ isActive, navigate }">
              <a
                @click="navigate"
                class="nav-link"
                :class="{ active: isActive }"
              >
                <img
                  v-if="isActive"
                  :src="home_active_nav"
                  alt="Home"
                  class="nav-icon"
                />
                <img v-else :src="home_nav" alt="Home" class="nav-icon" />
              </a>
            </router-link>
          </li>
          <li>
            <router-link :to="routerLinks.register()" custom v-slot="{ isActive, navigate }">
              <a
                @click="navigate"
                class="nav-link"
                :class="{ active: isActive }"
              >
                <img :src="history_nav" alt="history" class="nav-icon" />
              </a>
            </router-link>
          </li>
          <li>
            <router-link :to="routerLinks.promo()" custom v-slot="{ isActive, navigate }">
              <a
                @click="navigate"
                class="nav-link"
                :class="{ active: isActive }"
              >
                <div class="nav-icon-container">
                  <img
                    v-if="isActive"
                    :src="promo_active_nav"
                    alt="promo"
                    class="nav-icon"
                  />
                  <img v-else :src="promo_nav" alt="promo" class="nav-icon" />
                  <span class="notification-badge">1</span>
                </div>
              </a>
            </router-link>
          </li>
          <li>
            <router-link :to="routerLinks.chat()" custom v-slot="{ isActive, navigate }">
              <a
                @click="navigate"
                class="nav-link"
                :class="{ active: isActive }"
              >
                <div class="nav-icon-container">
                  <img
                    v-if="isActive"
                    :src="chat_active_nav"
                    alt="chat"
                    class="nav-icon"
                  />
                  <img v-else :src="chat_nav" alt="chat" class="nav-icon" />
                  <span class="notification-badge">1</span>
                </div>
              </a>
            </router-link>
          </li>
          <li>
            <router-link :to="routerLinks.register()" custom v-slot="{ isActive, navigate }">
              <a
                @click="navigate"
                class="nav-link"
                :class="{ active: isActive }"
              >
                <img :src="settings_nav" alt="Setting" class="nav-icon" />
              </a>
            </router-link>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<style>
/* Reset styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  min-height: 100vh;
  width: 100%;
  overflow: hidden !important;
  font-family: "Montserrat", sans-serif;
}

/* Container styles */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden !important;
}

img {
  cursor: pointer;
}

.top-header {
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
}

/* Header styles */
header {
  z-index: 2;
  background-color: #fff;
  padding: 0 15px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #02D0FD;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  visibility: visible;
}

.heading {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 5px;
  position: relative;
}

.marquee-text {
  color: black;
  font-family: "Montserrat", sans-serif;
  background-color: #20BCED;
  border-bottom: 1px solid black;
  font-size: 11px;
}

.marquee-text marquee {
  margin-top: 5px;
}

.logo-center img {
  width: 120px;
  height: auto;
}

/* Language Switcher Wrapper */
.language-switcher-wrapper {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
}

/* Main content styles */
main {
  top: 70px;
  bottom: 70px;
  left: 0;
  right: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background-image: url("@/assets/background-img.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
}

main::-webkit-scrollbar {
  display: none !important;
}

/* Footer styles */
footer {
  position: sticky;
  bottom: 0;
  z-index: 10;
  width: 100%;
  background-color: #02D0FD;
  color: white;
  text-align: center;
  height: 50px;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 1);
}

footer ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer li {
  display: inline-block;
  margin: 0 10px;
  width: 20%;
  cursor: pointer;
}

.nav-link img {
  width: 60px;
  height: auto;
}

footer a {
  color: white;
  text-decoration: none;
}

/* Floating elements */
.floating-tips {
  width: 44px;
  position: fixed;
  bottom: 358px;
  right: 0px;
  z-index: 1000;
  animation: movemove 30s infinite;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}

@keyframes movemove {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-180px);
  }
  100% {
    transform: translateY(0);
  }
}

.whatsapp-link {
  position: relative;
  right: 9px;
  display: block;
}

.whatsapps {
  width: 35px;
  display: block;
}

.telegram {
  width: 44px;
  display: block;
}

.floating-bsg {
  position: fixed;
  width: 25px;
  bottom: 245px;
  z-index: 1000;
  right: 0px;
}

.floating-sqg {
  position: fixed;
  width: 25px;
  bottom: 133px;
  z-index: 1000;
  right: 0px;
}

.floating-bsg img,
.floating-sqg img {
  width: 25px;
}

.nav-icon-container {
  position: relative;
  display: inline-block;
}

.notification-badge {
  position: absolute;
  top: 5px;
  right: -7px;
  background-color: #FF6700;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
}

/* Hamburger menu styles */
.hamburger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
}

.bar {
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 3px;
  transition: all 0.3s ease;
}

/* Enhanced Sidebar Styles */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s, opacity 0.3s;
}

.sidebar-overlay.active {
  visibility: visible;
  opacity: 1;
}

.sidebar {
  position: fixed;
  top: 0;
  left: -300px;
  width: 280px;
  height: 100vh;
  max-height: 100vh;
  background-color: #02D0FD;
  background-position: center;
  background-size: 100% 100%;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.3);
  transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1001;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.sidebar.open {
  left: 0;
}

/* Sidebar header improvements */
.sidebar-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 20px 20px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  backdrop-filter: blur(10px);
  flex-shrink: 0;
}

.sidebar-logo {
  height: auto;
  width: 60%;
  filter: drop-shadow(0 3px 6px rgba(0, 0, 0, 0.15));
  transition: transform 0.3s ease;
}

.sidebar-logo:hover {
  transform: scale(1.05);
}

/* Sidebar navigation improvements */
.sidebar-nav {
  flex: 1;
  display: flex;
  padding: 15px 0 20px 0;
  position: relative;
  overflow-y: auto;
  min-height: 0;
}

.sidebar-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: min-content;
}

.sidebar-nav ul {
  list-style: none;
  padding: 0 20px 20px 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.sidebar-nav li {
  width: 100%;
  text-align: left;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.3s ease;
}

.sidebar.open .sidebar-nav li {
  animation: slideInFade 0.4s ease forwards;
}

.sidebar.open .sidebar-nav li:nth-child(1) { animation-delay: 0.1s; }
.sidebar.open .sidebar-nav li:nth-child(2) { animation-delay: 0.15s; }
.sidebar.open .sidebar-nav li:nth-child(3) { animation-delay: 0.2s; }
.sidebar.open .sidebar-nav li:nth-child(4) { animation-delay: 0.25s; }
.sidebar.open .sidebar-nav li:nth-child(5) { animation-delay: 0.3s; }
.sidebar.open .sidebar-nav li:nth-child(6) { animation-delay: 0.35s; }
.sidebar.open .sidebar-nav li:nth-child(7) { animation-delay: 0.4s; }
.sidebar.open .sidebar-nav li:nth-child(8) { animation-delay: 0.45s; }
.sidebar.open .sidebar-nav li:nth-child(9) { animation-delay: 0.5s; }
.sidebar.open .sidebar-nav li:nth-child(10) { animation-delay: 0.55s; }
.sidebar.open .sidebar-nav li:nth-child(11) { animation-delay: 0.6s; }
.sidebar.open .sidebar-nav li:nth-child(12) { animation-delay: 0.65s; }
.sidebar.open .sidebar-nav li:nth-child(13) { animation-delay: 0.7s; }
.sidebar.open .sidebar-nav li:nth-child(14) { animation-delay: 0.75s; }
.sidebar.open .sidebar-nav li:nth-child(15) { animation-delay: 0.8s; }
.sidebar.open .sidebar-nav li:nth-child(16) { animation-delay: 0.85s; }
.sidebar.open .sidebar-nav li:nth-child(17) { animation-delay: 0.9s; }

@keyframes slideInFade {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Enhanced menu item styling */
.sidebar-nav a, 
.sidebar-nav .menu-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 20px;
  color: white;
  text-decoration: none;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 2px;
  background: transparent;
  overflow: hidden;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Subtle hover effect */
.sidebar-nav a:hover,
.sidebar-nav .menu-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(8px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
}

/* Active state with beautiful curved background */
.sidebar-nav a.router-link-active,
.sidebar-nav .menu-item.active {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.25) 0%, 
    rgba(255, 255, 255, 0.18) 50%, 
    rgba(255, 255, 255, 0.12) 100%
  );
  color: #ffffff;
  font-weight: 700;
  transform: translateX(12px);
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  border-left: 5px solid rgba(255, 255, 255, 0.9);
  border-radius: 0 25px 25px 0;
  position: relative;
  backdrop-filter: blur(15px);
}

/* Active state curved background effect - top curve */
.sidebar-nav a.router-link-active::before,
.sidebar-nav .menu-item.active::before {
  content: '';
  position: absolute;
  left: -20px;
  top: -12px;
  width: 20px;
  height: 12px;
  background: transparent;
  border-bottom-right-radius: 12px;
  box-shadow: 0 6px 0 0 rgba(255, 255, 255, 0.18);
}

/* Active state curved background effect - bottom curve */
.sidebar-nav a.router-link-active::after,
.sidebar-nav .menu-item.active::after {
  content: '';
  position: absolute;
  left: -20px;
  bottom: -12px;
  width: 20px;
  height: 12px;
  background: transparent;
  border-top-right-radius: 12px;
  box-shadow: 0 -6px 0 0 rgba(255, 255, 255, 0.18);
}

/* Icon styling */
.menu-icon {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  object-fit: contain;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
}

/* Text styling */
.sidebar-nav a span,
.sidebar-nav .menu-item span {
  flex: 1;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}

/* Hover effects for icons and text */
.sidebar-nav a:hover .menu-icon,
.sidebar-nav a:hover span,
.sidebar-nav .menu-item:hover .menu-icon,
.sidebar-nav .menu-item:hover span {
  transform: translateX(4px);
}

/* Active state for icons and text */
.sidebar-nav a.router-link-active .menu-icon,
.sidebar-nav a.router-link-active span,
.sidebar-nav .menu-item.active .menu-icon,
.sidebar-nav .menu-item.active span {
  transform: translateX(0);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

/* Dropdown styles */
.dropdown-item {
  width: 100%;
}

.dropdown-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 20px;
  position: relative;
  transition: all 0.25s ease-out;
  margin-bottom: 2px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  background: transparent;
  will-change: transform, background;
}

.dropdown-header:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(8px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
}

.dropdown-text {
  flex: 1;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  user-select: none;
}

.dropdown-arrow {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-out;
  margin-left: 12px;
}

.dropdown-arrow.open {
  transform: rotate(180deg);
}

.dropdown-icon {
  display: block;
}

/* Smooth Dropdown Animation */
.sub-dropdown {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out,
              opacity 0.35s ease-in-out,
              margin-top 0.3s ease-in-out,
              padding 0.3s ease-in-out;
  margin-left: 20px;
  width: calc(100% - 20px);
  background: rgba(255, 255, 255, 0.08);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  opacity: 0;
  margin-top: 0;
  padding: 0;
  will-change: max-height, opacity;
}

.sub-dropdown.open {
  max-height: 500px;
  padding: 12px 0;
  margin-top: 6px;
  margin-bottom: 10px;
  opacity: 1;
}

/* Sub-link Styling */
.sub-link {
  display: flex;
  align-items: center;
  padding: 11px 20px;
  color: rgba(255, 255, 255, 0.9) !important;
  text-decoration: none !important;
  margin: 3px 10px;
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.2s ease-out;
  font-size: 13px;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(-8px);
  will-change: transform, background, opacity;
}

/* Staggered fade-in animation */
.sub-dropdown.open .sub-link {
  animation: subLinkFadeIn 0.4s ease-out forwards;
}

.sub-dropdown.open .sub-link:nth-child(1) { animation-delay: 0.1s; }
.sub-dropdown.open .sub-link:nth-child(2) { animation-delay: 0.16s; }
.sub-dropdown.open .sub-link:nth-child(3) { animation-delay: 0.22s; }
.sub-dropdown.open .sub-link:nth-child(4) { animation-delay: 0.28s; }
.sub-dropdown.open .sub-link:nth-child(5) { animation-delay: 0.34s; }

@keyframes subLinkFadeIn {
  0% {
    opacity: 0;
    transform: translateY(-8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.sub-link:hover {
  background: rgba(255, 255, 255, 0.18);
  color: white !important;
  transform: translateX(6px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.sub-link.router-link-active {
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.25) 0%, 
    rgba(255, 255, 255, 0.15) 100%
  );
  color: white !important;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.sub-name {
  font-size: 13px;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* Scrollbar styling for sidebar */
.sidebar::-webkit-scrollbar {
  width: 4px;
}

.sidebar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin: 10px 0;
}

.sidebar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  transition: background 0.3s ease;
}

.sidebar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.6);
}

.sidebar-nav::-webkit-scrollbar {
  width: 4px;
}

.sidebar-nav::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.sidebar-nav::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  transition: background 0.3s ease;
}

.sidebar-nav::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.6);
}

.sidebar-nav ul::before {
  content: '';
  display: block;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    rgba(255, 255, 255, 0.3) 20%, 
    rgba(255, 255, 255, 0.1) 80%, 
    transparent 100%
  );
  margin: 0 0 15px 0;
}

.sidebar-nav li:last-child {
  margin-bottom: 20px;
}

ol {
  padding-left: 20px;
}

/* Responsive Design */
@media screen and (min-width: 469px) and (max-width: 768px) {
  header {
    background-image: none !important;
    background: none !important;
    background-color: #02D0FD !important;
    margin: 76px 0;
  }

  .logo-center img {
    height: 46px;
    width: auto;
  }

  footer {
    margin-bottom: 55px;
  }

  .notification-badge {
    width: 18px;
    height: 18px;
    font-size: 10px;
    top: 50px;
    right: 0;
  }
}

@media screen and (max-width: 480px) {
  header {
    background-image: none !important;
    background: none !important;
    background-color: #02D0FD !important;
  }

  .logo-center img {
    height: 30px;
    width: auto;
  }

  .language-switcher-wrapper {
    right: 8px;
  }

  .floating-tips {
    bottom: 300px;
    animation: movemove 10s infinite;
  }

  .floating-bsg {
    bottom: 150px;
  }

  @keyframes movemove {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0);
    }
  }

  main {
    padding-top: 80px;
    padding-bottom: 130px;
  }

  .top-header {
    position: fixed;
    height: 70px;
  }

  footer {
    position: fixed;
  }

  .sidebar {
    width: 270px;
    left: -290px;
    height: 100vh;
    height: 100dvh;
    max-height: none;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .sidebar-header {
    padding: 20px 15px 15px 15px;
    flex-shrink: 0;
  }

  .sidebar-logo {
    width: 55%;
  }

  .sidebar-nav {
    flex: 1;
    padding: 10px 0 15px 0;
    overflow-y: auto;
    min-height: 0;
  }

  .sidebar-nav ul {
    padding: 0 15px 15px 15px;
    gap: 2px;
  }
  
  .sidebar-nav a, 
  .sidebar-nav .menu-item {
    padding: 10px 15px;
    font-size: 13px;
    margin-bottom: 1px;
  }
  
  .dropdown-header {
    padding: 10px 15px;
    font-size: 13px;
  }
  
  .menu-icon {
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }

  .sidebar-content {
    min-height: calc(100vh - 80px);
    padding-bottom: 20px;
  }

  .sidebar::-webkit-scrollbar {
    width: 3px;
  }

  .sidebar-nav::-webkit-scrollbar {
    width: 3px;
  }

  .sub-dropdown {
    margin-left: 15px;
    width: calc(100% - 15px);
  }

  .sub-link {
    padding: 9px 15px;
    font-size: 12px;
    margin: 2px 8px;
  }
}

@media screen and (max-width: 375px) {
  .sidebar {
    width: 260px;
    left: -280px;
  }

  .sidebar-nav a, 
  .sidebar-nav .menu-item {
    padding: 8px 12px;
    font-size: 12px;
  }

  .sidebar-header {
    padding: 15px 12px 12px 12px;
  }

  .menu-icon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
}

@media screen and (max-width: 768px) and (orientation: landscape) {
  .sidebar {
    height: 100vh;
    overflow-y: auto;
  }

  .sidebar-nav {
    max-height: calc(100vh - 100px);
  }
}
</style>