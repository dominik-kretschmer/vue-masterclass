<script setup lang="ts">
import {onMounted, ref} from "vue"
import {useHighscores} from "@/composables/useHighscores"

const { getTopScores } = useHighscores()
const scores = ref<{ playerName: string; score: string }[]>([])

onMounted(async () => {
  scores.value = await getTopScores()
})
</script>

<template>
  <div class="highscore-wrapper">
    <h1 class="highscore-title">🏆 FlappyBird Highscores</h1>
    <ul class="highscore-list">
      <li v-for="(entry, i) in scores" :key="i" class="highscore-item">
        <span class="highscore-rank">#{{ i + 1 }}</span>
        <span class="highscore-name">{{ entry.playerName }}</span>
        <span class="highscore-score">{{ entry.score }}</span>
      </li>
    </ul>
  </div>
</template>

