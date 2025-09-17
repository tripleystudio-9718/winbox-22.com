<template>
    <div class="tab-navigation" :class="{ mobile: isMobile }">
      <!-- Mobile Carousel with Arrows -->
      <div v-if="isMobile" class="tab-carousel">
        <!-- Left Navigation Arrow -->
        <div
          class="nav-arrow left-arrow"
          @click="scrollTabs('left')"
          :class="{ disabled: isAtStart }"
        >
          <span>&#10094;</span>
        </div>
  
        <!-- Tab Header Container -->
        <div class="tab-header-container">
          <div class="tab-header" ref="tabHeader">
            <div
              v-for="tab in tabs"
              :key="tab.id"
              class="tab-item"
              :class="{ active: activeTab === tab.id }"
              @click="setActiveTab(tab.id)"
            >
              <img
                :src="activeTab === tab.id ? tab.activeIcon : tab.icon"
                :alt="tab.name"
              />
            </div>
          </div>
        </div>
  
        <!-- Right Navigation Arrow -->
        <div
          class="nav-arrow right-arrow"
          @click="scrollTabs('right')"
          :class="{ disabled: isAtEnd }"
        >
          <span>&#10095;</span>
        </div>
      </div>
  
      <!-- Desktop Full Tab Header -->
      <div v-else class="desktop-tab-header">
        <div
          v-for="tab in tabs"
          :key="tab.id"
          class="tab-item"
          :class="{ active: activeTab === tab.id }"
          @click="setActiveTab(tab.id)"
        >
          <img
            :src="activeTab === tab.id ? tab.activeIcon : tab.icon"
            :alt="tab.name"
          />
          <span>{{ tab.name }}</span>
        </div>
      </div>
  
      <div class="tab-content">
        <component :is="currentTabComponent" />
      </div>
    </div>
  </template>
  
  <script setup>
  import {
    ref,
    computed,
    defineAsyncComponent,
    onMounted,
    onUnmounted,
    nextTick,
  } from "vue";
  
  // Mobile detection
  const windowWidth = ref(window.innerWidth);
  const isMobile = computed(() => windowWidth.value <= 468);
  const tabHeader = ref(null);
  const visibleTabsCount = 4; // Show 4 tabs at a time on mobile
  const isAtStart = ref(true);
  const isAtEnd = ref(false);
  
  // Handle window resize for responsive behavior
  const handleResize = () => {
    windowWidth.value = window.innerWidth;
    nextTick(() => {
      if (isMobile.value && tabHeader.value) {
        updateScrollArrows();
      }
    });
  };
  
  // Import tab icons (keep the same imports for now, you would replace these with your new icons)
  import slotIcon from "@/assets/slot-icon.png";
  import slotActiveIcon from "@/assets/slot-active-icon.png";
  import sportsIcon from "@/assets/sports-icon.png"; 
  import sportsActiveIcon from "@/assets/sports-active-icon.png";
  import liveCasinoIcon from "@/assets/live-casino-icon.png";
  import liveCasinoActiveIcon from "@/assets/live-casino-active-icon.png";
  import lotteryIcon from "@/assets/lottery-icon.png";
  import lotteryActiveIcon from "@/assets/lottery-active-icon.png";
  import horseIcon from "@/assets/horsing-icon.png"; // Will need to replace with horse racing icon
  import horseActiveIcon from "@/assets/horsing-active-icon.png"; // Will need to replace with active horse racing icon
  
  // Define tabs with their icons (updated to your new categories)
  const tabs = [
    {
      id: "slots",
      name: "SLOTS",
      icon: slotIcon,
      activeIcon: slotActiveIcon,
      component: defineAsyncComponent(() =>
        import("@/components/tabs/SlotTab.vue")
      ),
    },
    {
      id: "sports",
      name: "SPORTS",
      icon: sportsIcon,
      activeIcon: sportsActiveIcon,
      component: defineAsyncComponent(() =>
        import("@/components/tabs/sportsTab.vue")
      ),
    },
    {
      id: "livecasino",
      name: "LIVE CASINO",
      icon: liveCasinoIcon,
      activeIcon: liveCasinoActiveIcon,
      component: defineAsyncComponent(() =>
        import("@/components/tabs/LiveCasinoTab.vue")
      ),
    },
    {
      id: "lottery",
      name: "LOTTERY",
      icon: lotteryIcon,
      activeIcon: lotteryActiveIcon,
      component: defineAsyncComponent(() =>
        import("@/components/tabs/LotteryTab.vue")
      ),
    },
    {
      id: "horse",
      name: "HORSE RACING",
      icon: horseIcon,
      activeIcon: horseActiveIcon,
      component: defineAsyncComponent(() =>
        import("@/components/tabs/HorsingTab.vue") // You'll likely want to create a HorseRacingTab.vue
      ),
    },
  ];
  
  // Active tab state
  const activeTab = ref("slots"); // Default active tab
  
  // Update the scroll arrows state
  const updateScrollArrows = () => {
    if (!tabHeader.value) return;
  
    const { scrollLeft, scrollWidth, clientWidth } = tabHeader.value;
    isAtStart.value = scrollLeft <= 0;
    isAtEnd.value = scrollLeft + clientWidth >= scrollWidth - 5; // 5px tolerance
  };
  
  // Scroll the tabs left or right
  const scrollTabs = (direction) => {
    if (!tabHeader.value) return;
  
    const tabWidth = tabHeader.value.clientWidth / visibleTabsCount;
    const scrollAmount = tabWidth * (direction === "left" ? -1 : 1);
  
    tabHeader.value.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  
    // Update the arrows after scrolling
    setTimeout(() => {
      updateScrollArrows();
    }, 300); // After the scroll animation completes
  };
  
  // Function to change active tab
  const setActiveTab = (tabId) => {
    activeTab.value = tabId;
  
    // Scroll to the selected tab if on mobile
    if (isMobile.value) {
      nextTick(() => {
        if (tabHeader.value) {
          const tabItems = Array.from(tabHeader.value.children);
          const selectedTabIndex = tabs.findIndex((tab) => tab.id === tabId);
  
          if (selectedTabIndex >= 0) {
            const selectedTab = tabItems[selectedTabIndex];
            const tabWidth = tabHeader.value.clientWidth / visibleTabsCount;
  
            // Calculate which "page" the tab is on
            const page = Math.floor(selectedTabIndex / visibleTabsCount);
            const scrollPosition = page * (tabWidth * visibleTabsCount);
  
            tabHeader.value.scrollTo({
              left: scrollPosition,
              behavior: "smooth",
            });
  
            setTimeout(() => {
              updateScrollArrows();
            }, 300);
          }
        }
      });
    }
  };
  
  // Compute the current component to display
  const currentTabComponent = computed(() => {
    const tab = tabs.find((t) => t.id === activeTab.value);
    return tab ? tab.component : null;
  });
  
  // Add scroll event listener to update arrows
  const handleScroll = () => {
    updateScrollArrows();
  };
  
  // Lifecycle hooks
  onMounted(() => {
    window.addEventListener("resize", handleResize);
  
    if (isMobile.value && tabHeader.value) {
      tabHeader.value.addEventListener("scroll", handleScroll);
  
      // Initial update of arrows
      nextTick(() => {
        updateScrollArrows();
      });
    }
  });
  
  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  
    if (tabHeader.value) {
      tabHeader.value.removeEventListener("scroll", handleScroll);
    }
  });
  </script>
  
  <style scoped>
  .tab-navigation {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
    padding: 10px;
  }
  
  /* Desktop Full Tab Header */
  .desktop-tab-header {
    display: flex;
    padding: 5px;
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: visible;
  }
  
  .desktop-tab-header .tab-item {
    width: 15%; /* Adjusted for 5 tabs instead of 7 */
    padding: 8px;
    flex-shrink: 0;
  }
  
  /* Mobile Carousel */
  .tab-carousel {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
  }
  
  .tab-header-container {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .tab-header {
    display: flex;
    padding: 5px;
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Hide scrollbar Firefox */
    -ms-overflow-style: none; /* Hide scrollbar IE/Edge */
  }
  
  /* Hide scrollbar WebKit browsers */
  .tab-header::-webkit-scrollbar {
    display: none;
  }
  
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 8px;
    border-radius: 8px;
    transition: all 0.3s ease;
    text-align: center;
  }
  
  /* Mobile specific tab item */
  .tab-carousel .tab-item {
    flex: 0 0 calc(100% / 4); /* Exactly 4 tabs visible */
    max-width: calc(100% / 4);
  }
  
  .tab-item.active {
    background: rgba(255, 255, 255, 0.1);
  }
  
  .tab-item img {
    width: 100%;
    max-width: 120px;
    margin-bottom: 5px;
  }
  
  .tab-item span {
    font-size: 11px;
    color: #fff;
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
  }
  
  .nav-arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 50%;
    cursor: pointer;
    position: absolute;
    z-index: 10;
    transition: all 0.3s ease;
  }
  
  .nav-arrow.left-arrow {
    left: 0;
  }
  
  .nav-arrow.right-arrow {
    right: 0;
  }
  
  .nav-arrow.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .nav-arrow:not(.disabled):hover {
    background: rgba(0, 0, 0, 0.7);
  }
  
  .tab-content {
    padding: 0px;
    min-height: 300px;
  }
  
  /* Mobile styles */
  @media screen and (max-width: 468px) {
    .tab-navigation {
      min-height: auto;
      padding: 5px;
    }
  
    .tab-item {
      padding: 5px;
    }
  
    .tab-item img {
      max-width: 80px;
    }
  
    .tab-content {
      padding: 0;
      min-height: auto;
    }
  
    .nav-arrow {
      width: 25px;
      height: 25px;
    }
  }
  </style>