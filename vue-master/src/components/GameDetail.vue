<script setup lang="ts">
import {RouterLink, useRoute} from 'vue-router'

const props = defineProps<{
  title: string
  description: string
}>()

const route = useRoute()
</script>

<template>
  <section class="min-h-screen bg-zinc-900 text-white">
    <div class="w-full px-4 pt-6">
      <img
          :src="`/${title}.png`"
          alt="Titelbild"
          class="w-full h-64 md:h-96 object-cover object-center rounded-xl border border-zinc-700 shadow-lg"
      />
    </div>
    <div class="max-w-4xl mx-auto px-6 py-10">
      <h2 class="text-4xl font-bold text-purple-400 mb-4">{{ title }}</h2>
      <p class="text-purple-100 text-lg leading-relaxed mb-8">
        {{ description }}
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <RouterLink
            :to="`${route.path.replace(/\/$/, '')}/download`"
            class="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition"
        >
          📥 Jetzt herunterladen
        </RouterLink>
        <RouterLink
            :to="`${route.path.replace(/\/$/, '')}/highscore`"
            class="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition"
        >
          🏆 Highscores anzeigen
        </RouterLink>
      </div>
    </div>
  </section>
</template>