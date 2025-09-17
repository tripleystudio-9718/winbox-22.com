<template>
  <div class="iframe-container">
    <iframe
      :src="iframeUrl"
      class="full-screen-iframe"
      :title="title"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Props for the iframe
const props = defineProps({
  iframeUrl: {
    type: String,
    required: true,
    default: "https://direct.lc.chat/17425320/4",
  },
  title: {
    type: String,
    default: "Full Screen Iframe",
  },
});
</script>

<style scoped>
.iframe-container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.full-screen-iframe {
  width: 100%;
  height: 100%;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/* Ensure the component itself takes full width */
:deep(body),
:deep(html) {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
