<template>
  <div ref="iframeWrapper" class="iframe-wrapper">
    <iframe
      ref="iframe"
      src="https://www.winbox.cloud/wb-login.html"
      frameborder="0"
    ></iframe>
  </div>

  <div class="login-text">
    <h1>{{ $t('login.title') }}</h1>
    <p>{{ $t('login.intro') }}</p>
    <p>
      {{ $t('login.officialPageBefore') }}
      <span class="homepage-link" @click="goToLogin">{{ $t('login.winboxLoginWeb') }}</span>
      {{ $t('login.officialPageAfter') }}
    </p>
  </div>

  <div class="login-text">
    <h2>{{ $t('login.whatIsH5.title') }}</h2>
    <p v-html="$t('login.whatIsH5.description')"></p>
    <p>{{ $t('login.whatIsH5.fullAccess') }}</p>
  </div>

  <div class="login-text">
    <h2>{{ $t('login.howToLogin.title') }}</h2>
    <p v-html="$t('login.howToLogin.intro')"></p>
    
    <h3>{{ $t('login.howToLogin.step1.title') }}</h3>
    <ul>
      <li>{{ $t('login.howToLogin.step1.browser') }}</li>
      <li>
        {{ $t('login.howToLogin.step1.typeBefore') }}
        <span class="homepage-link" @click="goToLogin">{{ $t('login.howToLogin.step1.loginUrl') }}</span>
        {{ $t('login.howToLogin.step1.typeAfter') }}
      </li>
      <li>{{ $t('login.howToLogin.step1.security') }}</li>
    </ul>

    <h3>{{ $t('login.howToLogin.step2.title') }}</h3>
    <p v-html="$t('login.howToLogin.step2.intro')"></p>
    
    <h4>{{ $t('login.howToLogin.step2.username.title') }}</h4>
    <ul>
      <li>{{ $t('login.howToLogin.step2.username.description') }}</li>
      <li v-html="$t('login.howToLogin.step2.username.example')"></li>
    </ul>

    <h4>{{ $t('login.howToLogin.step2.password.title') }}</h4>
    <ul>
      <li>{{ $t('login.howToLogin.step2.password.enter') }}</li>
      <li>{{ $t('login.howToLogin.step2.password.strongPassword') }}
        <ul>
          <li v-html="$t('login.howToLogin.step2.password.characters')"></li>
          <li v-html="$t('login.howToLogin.step2.password.include')"></li>
          <li v-html="$t('login.howToLogin.step2.password.avoid')"></li>
        </ul>
      </li>
    </ul>
    <p v-html="$t('login.howToLogin.step2.securityReminder')"></p>

    <h3>{{ $t('login.howToLogin.step3.title') }}</h3>
    <ul>
      <li v-html="$t('login.howToLogin.step3.trusted')"></li>
      <li>{{ $t('login.howToLogin.step3.keeps') }}</li>
      <li v-html="$t('login.howToLogin.step3.dont')"></li>
    </ul>

    <h3>{{ $t('login.howToLogin.step4.title') }}</h3>
    <ul>
      <li v-html="$t('login.howToLogin.step4.click')"></li>
      <li>{{ $t('login.howToLogin.step4.wait') }}</li>
    </ul>
    <p>
      {{ $t('login.howToLogin.thatsItBefore') }}
      <span class="homepage-link" @click="goToDownload">{{ $t('login.howToLogin.downloadLink') }}</span>
      {{ $t('login.howToLogin.thatsItAfter') }}
    </p>
  </div>

  <div class="login-text">
    <h2>{{ $t('login.playAnywhere.title') }}</h2>
    <p>{{ $t('login.playAnywhere.intro') }}</p>
    <ul>
      <li v-html="$t('login.playAnywhere.mobile')"></li>
      <li>{{ $t('login.playAnywhere.online') }}</li>
      <li>{{ $t('login.playAnywhere.bigger') }}</li>
    </ul>
    <p>{{ $t('login.playAnywhere.wherever') }}</p>
  </div>

  <div class="login-text">
    <h2>{{ $t('login.cantLogin.title') }}</h2>
    <p>{{ $t('login.cantLogin.intro') }}</p>
    <ul>
      <li>{{ $t('login.cantLogin.mobile') }}</li>
      <li>{{ $t('login.cantLogin.forgot') }}</li>
      <li>{{ $t('login.cantLogin.stuck') }}</li>
      <li>{{ $t('login.cantLogin.technical1') }}</li>
      <li>{{ $t('login.cantLogin.technical2') }}</li>
    </ul>
    <p>
      {{ $t('login.cantLogin.smoothBefore') }}
      <span class="homepage-link" @click="goToRegister">{{ $t('login.cantLogin.registerLink') }}</span>
      {{ $t('login.cantLogin.smoothAfter') }}
    </p>
  </div>

  <div class="login-text">
    <h2>{{ $t('login.whyChoose.title') }}</h2>
    <p>{{ $t('login.whyChoose.intro') }}</p>
    <ul>
      <li>{{ $t('login.whyChoose.slots') }}</li>
      <li>{{ $t('login.whyChoose.live') }}</li>
      <li>{{ $t('login.whyChoose.sports') }}</li>
      <li>
        {{ $t('login.whyChoose.dailyBefore') }}
        <span class="homepage-link" @click="goToPromo">{{ $t('login.whyChoose.promotionLink') }}</span>
        {{ $t('login.whyChoose.dailyAfter') }}
      </li>
      <li>{{ $t('login.whyChoose.fast') }}</li>
    </ul>
    <p>{{ $t('login.whyChoose.thousands') }}</p>
  </div>

  <div class="login-text">
    <h2>{{ $t('login.startWinning.title') }}</h2>
    <p>
      {{ $t('login.startWinning.withBefore') }}
      <span class="homepage-link" @click="goToHomepage">{{ $t('login.startWinning.winboxMalaysia') }}</span>
      {{ $t('login.startWinning.withAfter') }}
    </p>
  </div>

  <br>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { useNavigation } from '@/components/utils/navigation';

const { goToLogin, goToPromo, goToHomepage, goToDownload, goToRegister } = useNavigation();

const iframeWrapper = ref(null);

const resizeIframe = () => {
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  const headerHeight = header?.offsetHeight || 0;
  const footerHeight = footer?.offsetHeight || 0;
  const windowHeight = window.visualViewport?.height || window.innerHeight;

  const availableHeight = windowHeight - headerHeight - footerHeight;

  if (iframeWrapper.value) {
    iframeWrapper.value.style.height = availableHeight + "px";
  }
};

onMounted(() => {
  resizeIframe();
  window.addEventListener("resize", resizeIframe);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeIframe);
});
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

.iframe-wrapper {
  width: 100%;
  overflow: hidden;
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.login-text {
    padding-top: 40px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 70%;
}

ol {
  padding-left: 20px;
}

ul {
  padding-left: 20px;
}

ol li {
    font-size: 14px;
    color: #3A3A3A;
}

.login-text p {
  font-size: 14px;
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

@media (max-width: 480px) {
  iframe {
    transform: scale(0.8);
    transform-origin: top left;
    width: 125%;
    height: 125%;
  }
}

@media (max-width: 768px) {
  .login-text {
    width: 100%;
    padding: 20px 10px;
  }
  .login-text h1,
  .login-text h2 {
    font-size: 22px;
  }

  .login-text p,
  .login-text ol li,
  .login-text ul li {
    font-size: 14px;
  }
}

</style>
