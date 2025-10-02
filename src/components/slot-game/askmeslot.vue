<template>
    <div class="askmeslot">
      <div class="game-grid">
        <div v-for="game in askmeslotGames" :key="game.id" class="game-card" @click="navigateToRegister">
          <div class="game-image">
            <img :src="game.image" :alt="`winbox ask me slot`" @error="handleImageError">
          </div>
          <div class="game-button">
            <button v-html="$t('common.Play')"></button>
          </div>
        </div>
      </div>

      <div class="content-section">
        <h1>{{ $t('askMeSlot.title') }}</h1>
        
        <p>{{ $t('askMeSlot.subtitle') }}</p>
        
        <p><a 
          :href="seoLinks.askmeslot()" 
          class="homepage-link"
          @click.prevent="goToAskmeSlot"
          >{{ $t('askMeSlot.linkText') }}</a> {{ $t('askMeSlot.description') }}</p>
        
        <p>{{ $t('askMeSlot.callToAction') }}</p>

        <div class="content-block">
          <h2>{{ $t('askMeSlot.whyWorks.title') }}</h2>
          
          <div class="feature-table">
            <div class="table-header">
              <div class="feature-col">{{ $t('askMeSlot.whyWorks.tableHeader.feature') }}</div>
              <div class="why-col">{{ $t('askMeSlot.whyWorks.tableHeader.why') }}</div>
            </div>
            <div class="table-row">
              <div class="feature-col">{{ $t('askMeSlot.whyWorks.features.instantPlay.name') }}</div>
              <div class="why-col">{{ $t('askMeSlot.whyWorks.features.instantPlay.description') }}</div>
            </div>
            <div class="table-row">
              <div class="feature-col">{{ $t('askMeSlot.whyWorks.features.freeDemo.name') }}</div>
              <div class="why-col">{{ $t('askMeSlot.whyWorks.features.freeDemo.description') }}</div>
            </div>
            <div class="table-row">
              <div class="feature-col">{{ $t('askMeSlot.whyWorks.features.localPayments.name') }}</div>
              <div class="why-col">{{ $t('askMeSlot.whyWorks.features.localPayments.description') }}</div>
            </div>
            <div class="table-row">
              <div class="feature-col">{{ $t('askMeSlot.whyWorks.features.bahasaSupport.name') }}</div>
              <div class="why-col">{{ $t('askMeSlot.whyWorks.features.bahasaSupport.description') }}</div>
            </div>
            <div class="table-row">
              <div class="feature-col">{{ $t('askMeSlot.whyWorks.features.lowData.name') }}</div>
              <div class="why-col">{{ $t('askMeSlot.whyWorks.features.lowData.description') }}</div>
            </div>
            <div class="table-row">
              <div class="feature-col">{{ $t('askMeSlot.whyWorks.features.licensed.name') }}</div>
              <div class="why-col">{{ $t('askMeSlot.whyWorks.features.licensed.description') }}</div>
            </div>
          </div>
        </div>

        <div class="content-block">
          <h2>{{ $t('askMeSlot.providers.title') }}</h2>
          <p>{{ $t('askMeSlot.providers.subtitle') }}</p>

          <h3>{{ $t('askMeSlot.providers.jili.title') }}</h3>
          <p>{{ $t('askMeSlot.providers.jili.description') }}<br>
          {{ $t('askMeSlot.providers.jili.topPicks') }}<br>
          {{ $t('askMeSlot.providers.jili.details') }}</p>

          <h3>{{ $t('askMeSlot.providers.habanero.title') }}</h3>
          <p>{{ $t('askMeSlot.providers.habanero.description') }}<br>
          {{ $t('askMeSlot.providers.habanero.topPicks') }}<br>
          {{ $t('askMeSlot.providers.habanero.details') }}</p>

          <h3>{{ $t('askMeSlot.providers.cq9.title') }}</h3>
          <p>{{ $t('askMeSlot.providers.cq9.description') }}<br>
          {{ $t('askMeSlot.providers.cq9.topPicks') }}<br>
          {{ $t('askMeSlot.providers.cq9.details') }}</p>

          <h3>{{ $t('askMeSlot.providers.joker.title') }}</h3>
          <p>{{ $t('askMeSlot.providers.joker.description') }}<br>
          {{ $t('askMeSlot.providers.joker.topPicks') }}<br>
          {{ $t('askMeSlot.providers.joker.details') }}</p>

          <h3>{{ $t('askMeSlot.providers.pgSoft.title') }}</h3>
          <p>{{ $t('askMeSlot.providers.pgSoft.description') }}<br>
          {{ $t('askMeSlot.providers.pgSoft.topPicks') }}<br>
          {{ $t('askMeSlot.providers.pgSoft.details') }}</p>
        </div>

        <div class="content-block">
          <h2>{{ $t('askMeSlot.howToStart.title') }}</h2>
          <ol>
            <li>{{ $t('askMeSlot.howToStart.steps.step1.before') }}
              <a 
          :href="seoLinks.home()" 
          class="homepage-link"
          @click.prevent="goToHomepage"
          >{{ $t('askMeSlot.howToStart.steps.step1.link') }}</a>{{ $t('askMeSlot.howToStart.steps.step1.after') }}</li>
            <li>{{ $t('askMeSlot.howToStart.steps.step2') }}</li>
            <li>{{ $t('askMeSlot.howToStart.steps.step3') }}</li>
            <li>{{ $t('askMeSlot.howToStart.steps.step4') }}</li>
          </ol>
          <p>{{ $t('askMeSlot.howToStart.processing') }}</p>
        </div>

        <div class="content-block">
          <h2>{{ $t('askMeSlot.safety.title') }}</h2>
          <ul class="dots">
            <li>{{ $t('askMeSlot.safety.points.0') }}</li>
            <li>{{ $t('askMeSlot.safety.points.1') }}</li>
            <li>{{ $t('askMeSlot.safety.points.2') }}</li>
            <li>{{ $t('askMeSlot.safety.points.3') }}</li>
          </ul>
          <p>{{ $t('askMeSlot.safety.conclusion') }}</p>
        </div>

        <div class="content-block">
          <h2>{{ $t('askMeSlot.compatibility.title') }}</h2>
          <p>{{ $t('askMeSlot.compatibility.intro') }}</p>
          <ul class="dots">
            <li>{{ $t('askMeSlot.compatibility.devices.0') }}</li>
            <li>{{ $t('askMeSlot.compatibility.devices.1') }}</li>
            <li>{{ $t('askMeSlot.compatibility.devices.2') }}</li>
            <li>{{ $t('askMeSlot.compatibility.devices.3') }}</li>
          </ul>
          <p>{{ $t('askMeSlot.compatibility.conclusion') }}</p>
        </div>

        <div class="content-block">
          <h2>{{ $t('askMeSlot.support.title') }}</h2>
          <p>{{ $t('askMeSlot.support.description') }}</p>
          <p>{{ $t('askMeSlot.support.promise') }}</p>
          <p>"{{ $t('askMeSlot.support.testimonial') }}"</p>
        </div>

        <div class="content-block">
          <h2>{{ $t('askMeSlot.cta.title') }}</h2>
          <p>{{ $t('askMeSlot.cta.description') }}</p>
          <p><a 
          :href="seoLinks.login()" 
          class="homepage-link"
          @click.prevent="goToLogin"
          >{{ $t('askMeSlot.cta.loginButton') }}</a> {{ $t('askMeSlot.cta.now') }}</p>
          <p>{{ $t('askMeSlot.cta.disclaimer') }}</p>
        </div>

        <div class="content-block">
          <h2>{{ $t('askMeSlot.trusted.title') }}</h2>
          <p>{{ $t('askMeSlot.trusted.featured') }}</p>
        </div>

        <div class="content-block">
          <h2>{{ $t('askMeSlot.faqs.title') }}</h2>
          
          <h3>{{ $t('askMeSlot.faqs.questions.whatIs.question') }}</h3>
          <p>{{ $t('askMeSlot.faqs.questions.whatIs.answer') }}</p>

          <h3>{{ $t('askMeSlot.faqs.questions.playFree.question') }}</h3>
          <p>{{ $t('askMeSlot.faqs.questions.playFree.answer') }}</p>

          <h3>{{ $t('askMeSlot.faqs.questions.needApp.question') }}</h3>
          <p>{{ $t('askMeSlot.faqs.questions.needApp.answer') }}</p>

          <h3>{{ $t('askMeSlot.faqs.questions.safety.question') }}</h3>
          <p>{{ $t('askMeSlot.faqs.questions.safety.answer') }}</p>

          <h3>{{ $t('askMeSlot.faqs.questions.payments.question') }}</h3>
          <p>{{ $t('askMeSlot.faqs.questions.payments.answer') }}</p>

          <h3>{{ $t('askMeSlot.faqs.questions.fairness.question') }}</h3>
          <p>{{ $t('askMeSlot.faqs.questions.fairness.answer') }}</p>

          <h3>{{ $t('askMeSlot.faqs.questions.realMoney.question') }}</h3>
          <p>{{ $t('askMeSlot.faqs.questions.realMoney.answer') }}</p>

          <h3>{{ $t('askMeSlot.faqs.questions.noApp.question') }}</h3>
          <p>{{ $t('askMeSlot.faqs.questions.noApp.answer') }}</p>

          <h3>{{ $t('askMeSlot.faqs.questions.bahasaService.question') }}</h3>
          <p>{{ $t('askMeSlot.faqs.questions.bahasaService.answer') }}</p>

          <h3>{{ $t('askMeSlot.faqs.questions.verification.question') }}</h3>
          <p>{{ $t('askMeSlot.faqs.questions.verification.answer') }}</p>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNavigation } from '@/components/utils/navigation';
import button_frame from '@/assets/main-button.png';

const { goToRegister, goToHomepage, goToLogin } = useNavigation();

const { seoLinks, routerLinks, getLocalizedPath } = useNavigation()

const handleImageError = (event) => {
  event.target.src = button_frame;
  console.error(`Failed to load image: ${event.target.alt}`);
};

const askmeslotGames = ref([]);

const getImageUrl = (name) => {
  try {
    return new URL(`/src/assets/askmeslot-img/${name}.png`, import.meta.url).href;
  } catch (error) {
    console.error(`Error loading image ${name}:`, error);
    return button_frame;
  }
};

onMounted(() => {
  askmeslotGames.value = Array.from({ length: 75 }, (_, i) => {
    const gameNumber = i + 1;
    return {
      id: `askmeslot${gameNumber}`,
      name: `AskMeSlot Game ${gameNumber}`,
      image: getImageUrl(`askmeslot${gameNumber}`)
    };
  });
});

const navigateToRegister = () => {
  goToRegister();
};
</script>

<style scoped>
.askmeslot {
  color: white;
  min-height: 100vh;
}

.game-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  padding: 15px;
}

.game-card {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

.game-image {
  position: relative;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 10px;
}

.game-image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
  border-radius: 12px;
  margin: 0;
  padding: 0;
}

.game-button {
  width: 100%;
  padding: 0;
  margin: 0;
}

.game-button button {
  width: 100%;
  background-image: url("@/assets/main-button.png");
  background-size: 100% 100%;
  background-color: transparent;
  background-position: center top;
  background-repeat: no-repeat;
  color: white;
  border: none;
  padding: 8px 0;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 20px;
}

.game-button button:hover {
  opacity: 0.8;
  transition: opacity 0.2s;
}

.content-section {
  width: 70%;
  margin: 0 auto;
  padding: 20px 10px;
  color: black;
  font-family: Arial, sans-serif;
}

.content-section h1 {
  font-size: 32px;
  margin-bottom: 30px;
  font-weight: 600;
  text-align: left;
}

.content-section p, li {
  font-size: 14px;
  line-height: 1.6;
}

.content-section h2 {
  font-size: 22px;
  margin: 15px 0;
  font-weight: bold;
}

.content-section h3 {
  font-size: 16px;
  margin: 15px 0;
  font-weight: bold;
}

.content-block {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.feature-table {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: #f5f5f5;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 1px solid #eee;
}

.table-row:last-child {
  border-bottom: none;
}

.feature-col, .why-col {
  padding: 12px 15px;
  font-size: 14px;
  line-height: 1.6;
}

.feature-col {
  font-weight: bold;
  border-right: 1px solid #eee;
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

@media screen and (min-width: 469px) and (max-width: 768px) {
  .game-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    padding: 5px;
  }
  
  .table-header, .table-row {
    grid-template-columns: 1fr 1fr;
  }
  
  .feature-col {
    border-right: none;
    border-bottom: 1px solid #eee;
  }

  .content-section {
    width: 100%;
    padding: 20px 10px;
  }

  .content-section h1{
    font-size: 22px;
  }

  .content-section h2{
    font-size: 18px;
  }

  .content-section h3{
    font-size: 16px;
  }
}

@media screen and (max-width: 468px) {
  .game-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
    padding: 5px;
  }
  
  .game-card {
    border-radius: 6px;
  }
  
  .table-header, .table-row {
    grid-template-columns: 1fr 1fr;
  }
  
  .feature-col {
    border-right: none;
    border-bottom: 1px solid #eee;
  }

  .content-section {
    width: 100%;
    padding: 20px 10px;
  }

  .content-section h1{
    font-size: 22px;
  }

  .content-section h2{
    font-size: 18px;
  }

  .content-section h3{
    font-size: 16px;
  }
}
</style>