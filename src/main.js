// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)

app.use(router)
app.use(i18n)

router.afterEach((to) => {
  const defaultTitle = 'Winbox Malaysia | Trusted Online Casino 2025'
  const defaultDescription = 'Play at Winbox Malaysia for the best online casino experience. Fast payouts, exciting slots, and secure gaming in 2025.'

  // ✅ Update document title
  document.title = to.meta?.title || defaultTitle

  // ✅ Update or create meta description tag
  let meta = document.querySelector('meta[name="description"]')
  if (meta) {
    meta.setAttribute('content', to.meta?.description || defaultDescription)
  } else {
    meta = document.createElement('meta')
    meta.setAttribute('name', 'description')
    meta.setAttribute('content', to.meta?.description || defaultDescription)
    document.head.appendChild(meta)
  }

  // ✅ Send GA4 page view manually (SPA)
  if (typeof gtag === 'function') {
    gtag('config', 'G-XZDLDP56KB', {
      page_path: to.fullPath,
    })
  }
})

app.mount('#app')
