<template>
  <nav class="w-full bg-dark-purple text-white shadow-lg py-4 px-6 fixed top-0 z-50 transition-all duration-500">
    <div class="flex justify-between items-center">
      <button
          @click="goHome"
          class="text-white font-medium text-lg hover:text-pale-purple transition-colors duration-500"
      >
        ⬅ Home
      </button>
      <h1 class="text-2xl md:text-4xl font-bold text-white tracking-wider">
        Extrem gute Spiele
      </h1>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => router.push('/')
</script>

<style scoped>
.bg-dark-purple {
  background-color: #4a148c;
}

</style>