<template>
  <div class="min-h-screen bg-gray-950 text-white flex flex-col">
    <TopNav />
    <main class="flex-1 flex items-center justify-center p-6">
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import TopNav from './components/nav.vue'
import FooterBar from './components/footer.vue'
</script>
