import { createRouter, createWebHistory } from 'vue-router'

// Main pages
import HomePage from '@/components/HomePage.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Chat from '@/components/Chat.vue'
import Promo from '@/components/Promo.vue'
import acewin from '@/components/slot-game/acewin.vue'
import jili from '@/components/slot-game/jili.vue'
import spadegaming from '@/components/slot-game/spadegaming.vue'
import playtech from '@/components/slot-game/playtech.vue'
import pragmatic_play from '@/components/slot-game/pragmatic-play.vue'
import askmeslot from '@/components/slot-game/askmeslot.vue'
import microslot from '@/components/slot-game/microslot.vue'
import monkeyking from '@/components/slot-game/monkeyking.vue'
import PrivacyPolicy from '@/components/PrivacyPolicy.vue'
import TAndC from '@/components/T&CPage.vue'
import Download from '@/components/Download.vue'
import About from '@/components/About.vue'
import BwfPartnership from '@/components/BwfPartnership.vue'
import Blog from '@/components/Blog.vue'
import Post from '@/components/PostPage.vue'
import ResponsibleGaming from '@/components/ResponsibleGaming.vue'
import AmandaLim from '@/components/AmandaLim.vue'
import MichealOng from '@/components/MichealOng.vue'
import ContactUs from '@/components/ContactUs.vue'
import BrandAmbassador from '@/components/brandAmbassador.vue'
import SlotsTab from "@/components/tabs/SlotTab.vue"
import SportsTab from '@/components/tabs/sportsTab.vue'
import LiveCasinoTab from '@/components/tabs/LiveCasinoTab.vue'  
import LotteryTab from '@/components/tabs/LotteryTab.vue'
import HorseRacingTab from '@/components/tabs/HorsingTab.vue'

const NotFoundPage = {
  template: '<div style="text-align:center;margin-top:50px"><h1>404 - Page Not Found</h1></div>'
}

// Your domain - updated to match sitemap
const DOMAIN = 'https://www.winbox22.com'
const DEFAULT_IMAGE = 'https://www.winbox22.com/assets/winbox_logo-DAaVgAO3.png'
const SITE_NAME = 'Official Winbox Malaysia'
const TWITTER_SITE = '@WinboxMY'

// Helper function to set canonical URL
function setCanonicalUrl(url) {
  // Remove existing canonical link if it exists
  const existingCanonical = document.querySelector('link[rel="canonical"]')
  if (existingCanonical) {
    existingCanonical.remove()
  }
  
  // Create and append new canonical link
  const canonical = document.createElement('link')
  canonical.rel = 'canonical'
  canonical.href = url
  document.head.appendChild(canonical)
}

// Helper function to set meta tags
function setMetaTag(property, content, isName = false) {
  const attribute = isName ? 'name' : 'property'
  let existingTag = document.querySelector(`meta[${attribute}="${property}"]`)
  
  if (existingTag) {
    existingTag.content = content
  } else {
    const metaTag = document.createElement('meta')
    metaTag.setAttribute(attribute, property)
    metaTag.content = content
    document.head.appendChild(metaTag)
  }
}

// Helper function to set Open Graph and Twitter Card meta tags
function setOpenGraphAndTwitterTags(meta, route) {
  const title = meta.title || 'Winbox Malaysia'
  const description = meta.description || 'Malaysia\'s most trusted online casino'
  const image = meta.image || DEFAULT_IMAGE
  const url = meta.canonical || `${DOMAIN}${route.path}`
  
  // Open Graph Meta Tags
  setMetaTag('og:title', title)
  setMetaTag('og:description', description)
  setMetaTag('og:image', image)
  setMetaTag('og:url', url)
  setMetaTag('og:site_name', SITE_NAME)
  setMetaTag('og:type', 'website')
  setMetaTag('og:locale', 'en_MY')
  
  // Twitter Card Meta Tags
  setMetaTag('twitter:card', 'summary_large_image', true)
  setMetaTag('twitter:site', TWITTER_SITE, true)
  setMetaTag('twitter:title', title, true)
  setMetaTag('twitter:description', description, true)
  setMetaTag('twitter:image', image, true)
}

// Helper function to add/remove schema.org structured data
function setSchemaOrg(isHomepage) {
  // Remove existing schema if it exists
  const existingSchema = document.querySelector('script[type="application/ld+json"]')
  if (existingSchema) {
    existingSchema.remove()
  }
  
  // Only add schema.org for homepage
  if (isHomepage) {
    const schemaScript = document.createElement('script')
    schemaScript.type = 'application/ld+json'
    schemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "Winbox22",
          "url": "https://www.winbox22.com",
          "logo": "https://www.winbox22.com/assets/winbox_logo-DAaVgAO3.png",
          "sameAs": [
            "https://www.facebook.com/winbox22",
            "https://www.instagram.com/winbox22",
            "https://x.com/winboxmalaysi"
          ]
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://www.winbox22.com/",
          "name": "Winbox Malaysia | Online Casino Malaysia Games & Rewards",
          "brand": "Winbox Malaysia",
          "description": "Looking for a fun and reliable place to play online? Winbox Malaysia also known as Winbox MY has everything you need. This trusted Winbox Online Casino brings you top games like JILI Slots, Lion King Slots, and Lucky365, perfect for slot lovers chasing big wins. Into sports betting or checking your luck with 4D results? Winbox has that too. Whether you're playing from your phone or desktop, the experience is smooth, secure, and packed with excitement. Thousands of Malaysians trust Winbox casino every day not just for the games, but for fast payouts, great support, and non-stop entertainment.",
          "url": "https://www.winbox22.com",
          "mainEntityOfPage": "https://www.winbox22.com/",
          "image": "https://www.winbox22.com/assets/winbox_logo-DAaVgAO3.png",
          "priceRange": "$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "1, Menara Prestige, Jalan Pinang, Kuala Lumpur, 50450 Kuala Lumpur, Federal Territory of Kuala Lumpur",
            "addressLocality": "Kuala Lumpur",
            "postalCode": "50450",
            "addressRegion": "Federal Territory of Kuala Lumpur",
            "addressCountry": "MY"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "sameAs": [
            "https://www.facebook.com/winbox22",
            "https://www.instagram.com/winbox22",
            "https://x.com/winboxmalaysi",
            "https://www.pinterest.com/winboxmalaysiacasino/",
            "https://www.tumblr.com/winboxmalaysiacasino",
            "https://www.youtube.com/channel/UCOi30puEmT0UvrFFWDQAHbA",
            "https://gravatar.com/creationrad65567b19ff",
            "https://www.reddit.com/user/winboxmalaysiacasino/",
            "https://disqus.com/by/winboxmalaysiacasino/about/",
            "https://www.twitch.tv/winboxmalaysiacasino",
            "https://wakelet.com/@winboxmalaysiacasino",
            "https://www.instapaper.com/p/16584651",
            "https://pixabay.com/users/51235527/",
            "https://connect.garmin.com/modern/profile/3100f16d-f02c-41f6-8788-80b99c3d5691",
            "https://leetcode.com/u/bIxgwJCiIc/",
            "https://www.notebook.ai/@winboxmalaysiacasino",
            "https://myanimelist.net/profile/winboxmalaysiaca",
            "https://tooter.in/winboxmalaysiacasino",
            "https://www.walkscore.com/people/220219372799/winbox-malaysia-casino",
            "https://issuu.com/winboxmalaysiacasino",
            "https://www.metooo.it/u/winboxmalaysiacasino",
            "https://www.multichain.com/qa/user/winboxmalaysiacasino",
            "https://www.dotafire.com/profile/winboxmalaysiacasino-185197?profilepage",
            "https://www.producthunt.com/@winboxmalaysiacasino",
            "https://uccle.monopinion.belgium.be/profiles/winboxmalaysiacasino/activity",
            "https://gitlab.com/winboxmalaysiacasino",
            "https://500px.com/p/winboxmalaysiacasino?view=photos",
            "https://heylink.me/winboxmalaysiacasino/",
            "https://linkin.bio/winboxmalaysiacasino/",
            "https://www.magcloud.com/user/winboxmalaysiacasino",
            "https://lit.link/en/winboxmalaysiacasino",
            "https://fliphtml5.com/homepage/fculf/winbox-malaysia-casino/",
            "https://about.me/winboxmalaysiacasino",
            "https://sites.google.com/view/winboxmalaysiacasino/trang-ch%E1%BB%A7",
            "https://winboxmalaysiacasino.blogspot.com/2025/07/winbox-malaysia-casino.html",
            "https://www.quora.com/profile/Winbox-Malaysia-Casino",
            "https://we-xpats.com/vi/member/52544/",
            "https://pubhtml5.com/homepage/tmhkn/preview",
            "https://profile.hatena.ne.jp/winboxmalaysiacasino/profile",
            "https://evently.pl/profile/winbox-malaysia-casino",
            "https://gitee.com/trangiaminh",
            "https://www.rossoneriblog.com/author/winboxmalaysiacasino/",
            "https://www.behance.net/winboxcasino6",
            "https://bio.site/winboxmalaysiacasino",
            "https://edabit.com/user/r5234zo6gD7q8kg9P",
            "https://files.fm/trangiaminh2881/info",
            "https://www.elephantjournal.com/profile/trangiaminh2881/",
            "https://wykop.pl/ludzie/winboxmalaysiacasino",
            "https://ask.embedded-wizard.de/user/winboxmalaysiacasino",
            "https://vocal.media/authors/winbox-malaysia-casino",
            "https://forum.index.hu/User/UserDescription?u=2113562",
            "https://manga-no.com/@winboxmalaysi/profile"
          ]
        },
        {
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How do I make my first deposit at Winbox?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "After logging in, go to \"Wallet\" and choose your method. Winbox supports e-wallets, bank transfers, and more. Your balance should update within minutes."
              }
            },
            {
              "@type": "Question",
              "name": "What are the most popular games on Winbox right now?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Games like 918Kiss, LionKing, Lucky365 and Live Baccarat are trending now among Malaysian users."
              }
            },
            {
              "@type": "Question",
              "name": "Can I play multiple games at once on Winbox?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! The Winbox app allows multi-game use. Switch between slots, sports, or live dealers seamlessly."
              }
            },
            {
              "@type": "Question",
              "name": "What should I do if a game crashes or doesn't load?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Restart the app and check your internet. If issues remain, Winbox Malaysia support is available via chat or WhatsApp 24/7."
              }
            },
            {
              "@type": "Question",
              "name": "Are there any loyalty or VIP rewards on Winbox Malaysia?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. VIPs enjoy cashback, priority withdrawals, and exclusive promotions."
              }
            },
            {
              "@type": "Question",
              "name": "Can I change my username or password later?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Usernames are permanent, but you can change your password anytime from account settings for added security."
              }
            }
          ]
        },
        {
          "@type": "ItemList",
          "name": "Winbox Promotions",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "item": {
                "@type": "Offer",
                "name": "100% Match bonus for new players",
                "url": "https://www.winbox22.com/winbox-promotion",
                "itemOffered": {
                  "@type": "Service",
                  "name": "New Player Bonus"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 2,
              "item": {
                "@type": "Offer",
                "name": "Daily scratch and win up to RM2888",
                "url": "https://www.winbox22.com/winbox-promotion",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Daily Scratch & Win"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 3,
              "item": {
                "@type": "Offer",
                "name": "1.5x turnover for slots every 7th, 17th and 27th of the month",
                "url": "https://www.winbox22.com/winbox-promotion",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Slots Turnover Bonus"
                }
              }
            },
            {
              "@type": "ListItem",
              "position": 4,
              "item": {
                "@type": "Offer",
                "name": "Monthly rescue bonus up to RM58888",
                "url": "https://www.winbox22.com/winbox-promotion",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Monthly Rescue Bonus"
                }
              }
            }
          ]
        }
      ]
    })
    document.head.appendChild(schemaScript)
  }
}

// Base routes with canonical URLs
const baseRoutes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      title: 'Winbox Malaysia | No.1 Trusted Online Casino | Winbox22.com',
      description: 'Winbox Malaysia, your most trusted local gambling site. Play slots, live casino,  4D & sports betting. Fast Deposit, Fast Withdraw & 24/7 Support.',
      titleZh: '赢宝马来西亚 | No.1 受信赖的线上赌场 | Winbox22.com',
      descriptionZh: '赢宝马来西亚，您最值得信赖的本地博彩网站。畅玩老虎机、真人娱乐场、4D 彩票和体育博彩。快速存款，极速提款，全天候 24/7 客服支持。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/`
    }
  },
  {
    path: '/winbox-login-web',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Winbox Login Web |  Play Instantly via Secure H5 Winbox Portal',
      description: 'Our Winbox login web offers secure & mobile-friendly H5 access. Instantly play slots, live casino, sports betting, and claim daily bonuses easily.',
      titleZh: '赢宝登入网页版 | 通过安全的 H5 Winbox 门户即刻畅玩',
      descriptionZh: '我们的赢宝登入网页版提供安全且适配移动设备的 H5访问。即刻畅玩老虎机、真人娱乐场、体育博彩，并轻松领取每日奖励。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/winbox-login-web`
    }
  },
  {
    path: '/winbox-register',
    name: 'Register',
    component: Register,
    meta: {
      title: 'Winbox Register Guide: Quick Sign Up & Free Credits Await',
      description: 'Winbox register is fast, free & mobile-friendly. Sign up in seconds to access slots, live casino & claim daily promotions with no IC needed.',
      titleZh: '赢宝注册指南：快速注册，免费积分等你领取',
      descriptionZh: '赢宝注册快速、免费且适配移动设备。几秒钟内完成注册，无需身份证即可畅玩老虎机、真人娱乐场，并领取每日优惠。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/winbox-register`
    }
  },
  {
    path: '/winbox-promotion',
    name: 'Promo',
    component: Promo,
    meta: {
      title: 'Winbox Promotion | Free Credit & Daily Bonus',
      description: 'Discover the latest Winbox Promotion and enjoy exclusive rewards made for Malaysian players. Join now and start your winning journey today.',
      titleZh: '赢宝优惠活动｜免费彩金与每日奖金',
      descriptionZh: '了解最新的赢宝优惠活动，尽享专为马来西亚玩家打造的独家奖励。立即加入，开启您的赢钱之旅！',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/winbox-promotion`
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
    meta: {
      title: 'Live Chat Support | Winbox Malaysia 24/7 Customer Service',
      description: 'Need help with your Winbox account? Connect instantly with our 24/7 live chat support. Get fast, friendly assistance from Winbox Malaysia\'s customer service team.',
      titleZh: '在线客服支持 | Winbox马来西亚24/7客户服务',
      descriptionZh: '需要Winbox账户帮助？立即连接我们的24/7在线客服支持。获得来自Winbox马来西亚客户服务团队的快速、友好协助。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/chat`
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Winbox | Malaysia\'s Trusted Online Casino Platform',
      description: 'Discover Winbox, a trusted online casino in Malaysia. Learn about our mission, values, and commitment to delivering a safe, fair, and fun gaming experience.',
      titleZh: '关于Winbox | 马来西亚信赖的网上赌场平台',
      descriptionZh: '发现Winbox，马来西亚值得信赖的网上赌场。了解我们的使命、价值观，以及致力于提供安全、公平和有趣游戏体验的承诺。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/about`
    }
  },
  {
    path: '/bwf-winbox-partnership',
    name: 'BwfPartnership',
    component: BwfPartnership,
    meta: {
      title: 'Winbox & BWF Partnership | Exclusive Badminton Bets & Updates',
      description: 'Discover the Winbox & BWF partnership offering exclusive badminton bets, real-time updates, and exciting promotions. Stay connected to the sport and elevate your gaming experience today!',
      titleZh: 'Winbox与BWF合作伙伴关系 | 独家羽毛球投注和更新',
      descriptionZh: '发现Winbox与BWF合作伙伴关系，提供独家羽毛球投注、实时更新和精彩促销。今天就与运动保持联系，提升您的游戏体验！',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/bwf-winbox-partnership`
    }
  },
  {
    path: '/brand-ambassador',
    name: 'BrandAmbassador',
    component: BrandAmbassador,
    meta: {
      title: 'Marc Marquez Winbox Official Brand Ambassador',
      description: 'Marc Márquez joins Winbox as Brand Ambassador for 2024/25. Ride into exclusive events, promotions, and high-octane gaming action.',
      titleZh: 'Marc Marquez Winbox官方品牌大使',
      descriptionZh: '马克·马尔克斯 (Marc Márquez) 加入 Winbox，担任 2024/25 年度品牌大使。畅享独家活动、促销活动和精彩刺激的游戏体验。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/brand-ambassador`
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'Winbox Blog | Updates, Promotions & Casino Insights',
      description: 'Stay informed with latest Winbox promotions, insights, and iGaming news. Read expert articles, game reviews, and industry updates from Malaysia\'s trusted online casino.',
      titleZh: 'Winbox博客 | 更新、促销和赌场见解',
      descriptionZh: '了解最新的Winbox促销、见解和iGaming新闻。阅读来自马来西亚值得信赖的网上赌场的专家文章、游戏评论和行业更新。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/blog`
    }
  },
  {
    path: '/blog/:slug',
    name: 'Post',
    component: Post,
    props: true,
    meta: {
      title: 'Post Details | Winbox Blog Article',
      description: 'Read full articles and updates posted on Winbox blog. Get detailed insights on casino games, promotions, and gaming strategies from our expert team.',
      titleZh: '文章详情 | Winbox博客文章',
      descriptionZh: '阅读发布在Winbox博客上的完整文章和更新。从我们的专家团队获取关于赌场游戏、促销和游戏策略的详细见解。',
      image: DEFAULT_IMAGE,
      canonical: (route) => `${DOMAIN}/post/${route.params.slug}` // Dynamic canonical for posts
    }
  },
  {
    path: '/responsible-gaming',
    name: 'ResponsibleGaming',
    component: ResponsibleGaming,
    meta: {
      title: 'Responsible Gambling | Winbox22.com',
      description: 'Winbox online casino promotes responsible gambling by offering tools and resources to help players stay in control and enjoy a safe gaming experience.',
      titleZh: '负责任博彩 | Winbox22.com',
      descriptionZh: 'Winbox网上赌场通过提供工具和资源来促进负责任博彩，帮助玩家保持控制并享受安全的游戏体验。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/responsible-gaming`
    }
  },
  {
    path: '/amanda-lim',
    name: 'AmandaLim',
    component: AmandaLim,
    meta: {
      title: 'Amanda Lim – Industry Expert Behind Winbox Malaysia Casino',
      description: 'Meet Amanda Lim, the industry expert and visionary leader behind Winbox Malaysia. Learn about her expertise in online gaming and commitment to player satisfaction.',
      titleZh: 'Amanda Lim – Winbox马来西亚赌场背后的行业专家',
      descriptionZh: '认识Amanda Lim，Winbox马来西亚背后的行业专家和有远见的领导者。了解她在网上游戏方面的专业知识和对玩家满意度的承诺。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/amanda-lim`
    }
  },
  {
    path: '/michael-ong',
    name: 'MichealOng',
    component: MichealOng,
    meta: {
      title: 'Michael Ong | Expert Content Strategist | Winbox Gaming',
      description: 'Michael Ong leads Winbox\'s content and author team, crafting expert, trusted iGaming content to educate and engage online casino players in Southeast Asia.',
      titleZh: 'Michael Ong | 专业内容策略师 | Winbox游戏',
      descriptionZh: 'Michael Ong领导Winbox的内容和作者团队，制作专业、值得信赖的iGaming内容，以教育和吸引东南亚的网上赌场玩家。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/michael-ong`
    }
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs,
    meta: {
      title: 'Contact Winbox | Reach Our Support Team Easily',
      description: 'Need help or have a question? Contact Winbox Casino\'s support team through our Contact Us page for fast and friendly assistance.',
      titleZh: '联系Winbox | 轻松联系我们的支持团队',
      descriptionZh: '需要帮助或有问题？通过我们的联系我们页面联系Winbox赌场的支持团队，获得快速友好的协助。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/contact-us`
    }
  },
  {
    path: '/acewin',
    name: 'Acewin',
    component: acewin,
    meta: {
      title: 'Acewin Slots | Premium Gaming Experience',
      description: 'Experience premium Acewin slot games with exciting features and big wins.',
      titleZh: 'Acewin老虎机 | 优质游戏体验',
      descriptionZh: '体验具有令人兴奋功能和丰厚奖金的优质Acewin老虎机游戏。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/acewin`
    }
  },
  {
    path: '/jili',
    name: 'Jili',
    component: jili,
    meta: {
      title: 'Jili Slots | Asian-Themed Casino Games',
      description: 'Play Jili slot games with authentic Asian themes and exciting bonuses.',
      titleZh: 'Jili老虎机 | 亚洲主题赌场游戏',
      descriptionZh: '玩具有正宗亚洲主题和令人兴奋奖金的Jili老虎机游戏。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/jili`
    }
  },
  {
    path: '/spadegaming',
    name: 'Spadegaming',
    component: spadegaming,
    meta: {
      title: 'Spadegaming Slots | Innovative Casino Gaming',
      description: 'Discover innovative Spadegaming slot games with cutting-edge graphics.',
      titleZh: 'Spadegaming老虎机 | 创新赌场游戏',
      descriptionZh: '发现具有尖端图形的创新Spadegaming老虎机游戏。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/spadegaming`
    }
  },
  {
    path: '/playtech',
    name: 'Playtech',
    component: playtech,
    meta: {
      title: 'Playtech Slots | World-Class Gaming Software',
      description: 'Experience world-class Playtech slot games with exceptional quality.',
      titleZh: 'Playtech老虎机 | 世界级游戏软件',
      descriptionZh: '体验具有卓越品质的世界级Playtech老虎机游戏。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/playtech`
    }
  },
  {
    path: '/pragmatic-play',
    name: 'PragmaticPlay',
    component: pragmatic_play,
    meta: {
      title: 'Pragmatic Play Demo Malaysia | Free Slots & Live Casino 2025',
      description: 'Play Pragmatic Play slots like Gates of Olympus & Sweet Bonanza in free demo. No deposit needed. Real money play with Touch ‘n Go, fast withdrawals at Winbox.',
      titleZh: 'Pragmatic Play试玩马来西亚 | 免费老虎机 & 真人娱乐场 2025',
      descriptionZh: '试玩Pragmatic Play老虎机，如《奥林匹斯之门》和《甜蜜嘉年华》，无需存款。支持Touch ‘n Go，Winbox快速提款，真实资金畅玩。',

      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/pragmatic-play`
    }
  },
  {
    path: '/askmeslot',
    name: 'Askmeslot',
    component: askmeslot,
    meta: {
      title: 'Ask Me Slot: Play Free Demo & Real Money Slots – No Download',
      description: 'Play top slot games from Ask Me Slot. Try free demos instantly — no download, no registration. Deposit via Touch ‘n Go, DuitNow. 24/7 Bahasa Malaysia support.',
      titleZh: 'Ask Me Slot：免费试玩与真钱老虎机 – 无需下载',
      descriptionZh: '畅玩 Ask Me Slot 热门老虎机游戏。立即免费试玩 — 无需下载，无需注册。支持 Touch ‘n Go、DuitNow 存款，24/7 马来语客服。',

      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/askmeslot`
    }
  },
  {
    path: '/microslot',
    name: 'Microslot',
    component: microslot,
    meta: {
      title: 'Microslot Games | Compact Gaming Fun',
      description: 'Experience compact and exciting Microslot games with big winning potential.',
      titleZh: 'Microslot游戏 | 紧凑游戏乐趣',
      descriptionZh: '体验紧凑而令人兴奋的Microslot游戏，具有巨大的获胜潜力。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/microslot`
    }
  },
  {
    path: '/monkeyking',
    name: 'Monkeyking',
    component: monkeyking,
    meta: {
      title: 'Monkey King Slots | Legendary Adventure Games',
      description: 'Join the legendary Monkey King adventure in exciting slot games.',
      titleZh: '美猴王老虎机 | 传奇冒险游戏',
      descriptionZh: '在令人兴奋的老虎机游戏中加入传奇的美猴王冒险。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/monkeyking`
    }
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy,
    meta: {
      title: 'Privacy Policy | Winbox Malaysia',
      description: 'Read how Winbox Malaysia handles and protects your personal data, account information, and activity.',
      titleZh: '隐私政策 | Winbox马来西亚',
      descriptionZh: '了解Winbox马来西亚如何处理和保护您的个人数据、账户信息和活动。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/privacy-policy`
    }
  },
  {
    path: '/terms-and-condition',
    name: 'TAndC',
    component: TAndC,
    meta: {
      title: 'Terms & Conditions | Winbox Casino Malaysia',
      description: 'Review the terms and conditions that apply to your use of Winbox services, games, and bonuses.',
      titleZh: '条款和条件 | Winbox马来西亚赌场',
      descriptionZh: '查看适用于您使用Winbox服务、游戏和奖金的条款和条件。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/terms-and-condition`
    }
  },
  {
    path: '/download',
    name: 'Download',
    component: Download,
    meta: {
      title: 'Official Winbox Download APK & iOS Mobile App (New Version)',
      description: 'Get the Official Winbox download APK for Android or iOS App here. Enjoy real money slots, live casino & sports betting with app payouts. Try now!',
      titleZh: '官方赢宝下载与 iOS 移动应用程序（新版）',
      descriptionZh: '在此获取赢宝下载适用于安卓或 iOS 的应用程序。尽享真钱老虎机、真人娱乐场和体育博彩，支持应用内取款。立即体验！',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/download`
    }
  },
  {
  path: '/slot',
  name: 'Slot',
  component: HomePage,
  meta: {
    title: 'Winbox Slot Games | Play for High Jackpots in Malaysia!',
    description: 'Play the best online slot games in Malaysia at Winbox. Spin for huge jackpots on games from Pragmatic Play, JILI, and more. Get your 100% Welcome Bonus now!',
    titleZh: 'Winbox老虎机游戏 | 在马来西亚玩高额累积奖金!',
    descriptionZh: '在Winbox畅玩马来西亚最佳在线老虎机游戏。在Pragmatic Play、JILI等游戏中旋转赢取巨额累积奖金。立即获得100%欢迎奖金！',
    image: DEFAULT_IMAGE,
    canonical: `${DOMAIN}/slot`
  }
},
{
  path: '/sports-betting',
  name: 'SportsBetting',
  component: HomePage,
  meta: {
    title: 'Winbox Sports Betting | Football & Live Sports Betting Online',
    description: 'Experience premier sports betting in Malaysia with Winbox. Get the best live odds on football from top providers like Maxbet & CMD368. Bet securely and win big!',
    titleZh: 'Winbox体育博彩 | 足球和现场体育博彩在线',
    descriptionZh: '与Winbox一起体验马来西亚顶级体育博彩。从Maxbet和CMD368等顶级供应商获得足球最佳实时赔率。安全投注，赢取大奖！',
    image: DEFAULT_IMAGE,
    canonical: `${DOMAIN}/sports-betting`
  }
},
{
  path: '/live-casino',
  name: 'LiveCasino',
  component: HomePage,
  meta: {
    title: 'Live Casino Malaysia | HD Baccarat & Roulette | Winbox',
    description: 'Join Winbox Malaysia for the Live Casino. Play Baccarat, Roulette & more with professional dealers in stunning HD. Secure platform. Play Live Now!',
    titleZh: '马来西亚真人娱乐场 | 高清百家乐和轮盘 | Winbox',
    descriptionZh: '加入Winbox马来西亚的真人娱乐场。与专业荷官在高清画质中玩百家乐、轮盘等游戏。安全平台。立即开始真人游戏！',
    image: DEFAULT_IMAGE,
    canonical: `${DOMAIN}/live-casino`
  }
},
{
  path: '/ekor-lottery',
  name: 'EkorLottery',
  component: HomePage,
  meta: {
    title: 'Winbox 4D Lottery| Play EKOR & Online Mobile Toto Betting',
    description: 'Play 4D online in Malaysia with Winbox! Bet on EKOR, Toto & lottery draws. Win big, and enjoy fast payouts. Trusted & licensed. Join now, try your luck!',
    titleZh: 'Winbox 4D彩票 | 玩EKOR和在线手机多多博彩',
    descriptionZh: '与Winbox一起在马来西亚在线玩4D！投注EKOR、多多和彩票开奖。赢取大奖，享受快速支付。值得信赖且获得许可。立即加入，试试运气！',
    image: DEFAULT_IMAGE,
    canonical: `${DOMAIN}/ekor-lottery`
  }
},
{
  path: '/horse-racing-rcb988',
  name: 'HorseRacingRcb988',
  component: HomePage,
  meta: {
    title: 'RCB988 Horse Betting Malaysia | Online Race Betting & Odds',
    description: 'Bet on live horse races with RCB988 at Winbox – Malaysia\'s top online horse betting. Get best odds, Win/Place/Show bets, fast payouts. Join win big!',
    titleZh: 'RCB988马来西亚赛马博彩 | 在线赛马博彩和赔率',
    descriptionZh: '在Winbox与RCB988一起投注现场赛马 - 马来西亚顶级在线赛马博彩。获得最佳赔率、胜/位/示投注、快速支付。加入赢取大奖！',
    image: DEFAULT_IMAGE,
    canonical: `${DOMAIN}/horse-racing-rcb988`
  }
}
]

// Generate Chinese routes with canonical URLs pointing to English versions (SEO best practice)
const chineseRoutes = baseRoutes.map(route => {
  const zhName = route.name ? `${route.name}_zh` : undefined
  return {
    ...route,
    path: `/zh${route.path === '/' ? '' : route.path}`,
    name: zhName,
    meta: route.meta ? {
      title: route.meta.titleZh || `${route.meta.title} | 中文版`,
      description: route.meta.descriptionZh || `${route.meta.description} - 中文版本`,
      image: route.meta.image || DEFAULT_IMAGE,
      // Chinese pages canonical should point to English version for SEO
      canonical: typeof route.meta.canonical === 'function' 
        ? route.meta.canonical 
        : route.meta.canonical || `${DOMAIN}${route.path}`
    } : undefined
  }
})

// Final routes with redirects for old URLs
const routes = [
  ...baseRoutes,
  ...chineseRoutes,
  
  // Redirects for URL changes (from image requirements)
  {
    path: '/winbox-download-apk',
    redirect: '/download'
  },
  {
    path: '/winbox-download-apk/',
    redirect: '/download'
  },
  {
    path: '/contact',
    redirect: '/contact-us'
  },
  {
    path: '/contact/',
    redirect: '/contact-us'
  },
  
  // Chinese redirects (from image requirements)
  {
    path: '/zh/winbox-download-apk',
    redirect: '/zh/download'
  },
  {
    path: '/zh/winbox-download-apk/',
    redirect: '/zh/download'
  },
  {
    path: '/zh/contact',
    redirect: '/zh/contact-us'
  },
  {
    path: '/zh/contact/',
    redirect: '/zh/contact-us'
  },
  
  // Redirects for corrected spelling
  {
    path: '/micheal-ong',
    redirect: '/michael-ong'
  },
  {
    path: '/zh/micheal-ong',
    redirect: '/zh/michael-ong'
  },
  
  // 404 catch-all route (must be last)
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundPage,
    meta: {
      title: '404 - Page Not Found',
      description: 'This page does not exist.',
      titleZh: '404 - 页面未找到',
      descriptionZh: '此页面不存在。',
      image: DEFAULT_IMAGE,
      canonical: `${DOMAIN}/`
    }
  }
]

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Set document title, canonical URL, Open Graph, Twitter Cards, and schema.org dynamically
router.afterEach((to) => {
  // Set document title
  if (to.meta?.title) {
    document.title = to.meta.title
  }
  
  // Set canonical URL
  if (to.meta?.canonical) {
    let canonicalUrl
    
    // Handle dynamic canonical URLs (like for blog posts)
    if (typeof to.meta.canonical === 'function') {
      canonicalUrl = to.meta.canonical(to)
    } else {
      canonicalUrl = to.meta.canonical
    }
    
    setCanonicalUrl(canonicalUrl)
  }
  
  // Set Open Graph and Twitter Card meta tags for all pages
  if (to.meta) {
    setOpenGraphAndTwitterTags(to.meta, to)
  }
  
  // Set schema.org structured data only for homepage
  const isHomepage = to.name === 'Home' || to.name === 'Home_zh'
  setSchemaOrg(isHomepage)
})

export default router