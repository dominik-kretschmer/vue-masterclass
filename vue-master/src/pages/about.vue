<template>
  <div class="min-h-screen bg-purple-dark flex items-center justify-center text-white px-4 py-8">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">About Us</h1>
      <p class="text-lg mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      <p class="text-lg mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
      <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
});
</script>

<style scoped>
.bg-purple-dark {
  background-color: #4a148c;
}
</style>