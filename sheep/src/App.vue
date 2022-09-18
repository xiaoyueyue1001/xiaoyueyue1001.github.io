<template>
  <router-view />
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { setRem } from "@/utils/index";
onMounted(() => {
  setRem();
  window.addEventListener("resize", setRem);
});
</script>

<style lang="scss">
#app {
  font-size: 0.3rem;
  width: 100vw;
  height: 100vh;
}
</style>
