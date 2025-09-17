<template>
  <div class="language-switcher-container">
    <!-- Language Switcher Button -->
    <div class="language-button" @click="toggleDropdown">
      <img 
        :src="getCurrentLanguage().flag" 
        :alt="getCurrentLanguage().name + ' flag'"
        class="language-flag"
      />
      <span class="language-code">{{ getCurrentLanguage().code.toUpperCase() }}</span>
      <svg class="dropdown-icon" :class="{ 'open': showDropdown }" width="12" height="8" viewBox="0 0 12 8" fill="none">
        <path d="M1 1L6 6L11 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <!-- Language Dropdown -->
    <div class="language-dropdown" :class="{ 'open': showDropdown }">
      <div 
        v-for="language in languages" 
        :key="language.code"
        class="language-option"
        :class="{ 'active': language.code === currentLocale }"
        @click="changeLanguage(language.code)"
      >
        <img 
          :src="language.flag" 
          :alt="language.name + ' flag'"
          class="language-flag-small"
        />
        <span class="language-name">{{ language.name }}</span>
        <div class="check-mark" v-if="language.code === currentLocale">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M13.334 4L6.4 10.934L2.667 7.2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter, useRoute } from 'vue-router'
import englishFlag from '@/assets/english.png'
import chineseFlag from '@/assets/chinese.png'

const { locale } = useI18n()
const router = useRouter()
const route = useRoute()

const showDropdown = ref(false)

const languages = ref([
  { code: 'en', name: 'English', flag: englishFlag },
  { code: 'zh', name: '中文', flag: chineseFlag }
])

const currentLocale = computed(() => locale.value)

const getCurrentLanguage = () => {
  return languages.value.find(lang => lang.code === currentLocale.value) || languages.value[0]
}

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const closeDropdown = () => {
  showDropdown.value = false
}

const changeLanguage = (langCode) => {
  locale.value = langCode
  localStorage.setItem('selectedLanguage', langCode)
  closeDropdown()
  
  // Update URL with language code
  const currentPath = route.path
  const currentQuery = route.query
  
  // Remove current language prefix if exists
  let cleanPath = currentPath
  if (currentPath.startsWith('/en') || currentPath.startsWith('/zh')) {
    cleanPath = currentPath.substring(3) || '/'
  }
  
  // Add new language prefix (except for English as default)
  let newPath = langCode === 'en' ? cleanPath : `/${langCode}${cleanPath}`
  
  // Navigate to new path
  router.push({
    path: newPath,
    query: currentQuery
  })
}
</script>

<style scoped>
.language-switcher-container {
  position: relative;
}

.language-button {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
  min-width: 70px;
  justify-content: center;
}

.language-button:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-1px);
}

.language-flag {
  width: 16px;
  height: 12px;
  border-radius: 2px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.language-code {
  color: white;
  font-size: 11px;
  font-weight: 700;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.dropdown-icon {
  transition: transform 0.3s ease;
}

.dropdown-icon.open {
  transform: rotate(180deg);
}

/* Language Dropdown */
.language-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  min-width: 160px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  z-index: 1000;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.language-dropdown.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.language-option {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
}

.language-option:last-child {
  border-bottom: none;
}

.language-option:hover {
  background-color: #f8f9fa;
}

.language-option.active {
  background: linear-gradient(135deg, #e3f2fd 0%, #f0f8ff 100%);
  color: #02D0FD;
}

.language-flag-small {
  width: 20px;
  height: 15px;
  border-radius: 3px;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.language-name {
  font-size: 14px;
  font-weight: 500;
  color: #333;
  flex: 1;
}

.language-option.active .language-name {
  color: #02D0FD;
  font-weight: 600;
}

.check-mark {
  color: #02D0FD;
  display: flex;
  align-items: center;
}

/* Mobile Responsive */
@media screen and (max-width: 480px) {
  .language-button {
    padding: 5px 10px;
    min-width: 60px;
  }

  .language-code {
    font-size: 10px;
  }

  .language-flag {
    width: 14px;
    height: 10px;
  }

  .language-dropdown {
    min-width: 140px;
    right: 0;
  }

  .language-option {
    padding: 10px 12px;
  }

  .language-flag-small {
    width: 18px;
    height: 13px;
  }

  .language-name {
    font-size: 13px;
  }
}
</style>