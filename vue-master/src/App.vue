<template style="width: 100%; height: 100%">
  <div>
    <TopNav />
    <div>
      <main>
        <router-view />
      </main>
    </div>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import TopNav from "./components/nav.vue";
import FooterBar from "./components/footer.vue";
</script>
<style>
@import "@/assets/main.css";
</style>
