<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useHighscores } from "@/composables/useHighscores.ts";

const { getTopScores } = useHighscores();
const scores = ref<{ playerName: string; score: string }[]>([]);

onMounted(async () => {
  scores.value = await getTopScores();
});
</script>

<template>
  <div
    class="max-w-3xl mx-auto mt-10 p-6 bg-zinc-900 rounded-xl shadow-lg text-white"
  >
    <h1 class="text-3xl md:text-4xl font-bold text-purple-400 mb-6 text-center">
      🏆 FlappyBird Highscores
    </h1>
    <ul class="space-y-4">
      <li
        v-for="(entry, i) in scores"
        :key="i"
        class="flex items-center justify-between bg-zinc-800 rounded-lg px-5 py-4 hover:bg-zinc-700 transition"
      >
        <span class="text-yellow-300 font-bold w-10">#{{ i + 1 }}</span>
        <span class="flex-1 text-left text-lg text-purple-100">{{
          entry.playerName
        }}</span>
        <span class="text-green-400 font-mono">{{ entry.score }}</span>
      </li>
    </ul>
  </div>
</template>
