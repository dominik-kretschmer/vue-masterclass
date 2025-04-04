<script setup lang="ts">
import { ref, onMounted } from "vue";
import { supabase } from "@/lib/supabaseClient.ts";

const games = ref([]);

onMounted(async () => {
  const { data } = await supabase.from("games").select();
  games.value = (data || []).map((game) => ({
    ...game,
    slug: game.titel.toLowerCase().replace(/\s+/g, ""),
  }));
});
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 py-12">
    <h2 class="text-4xl font-bold text-purple-400 mb-12 text-center">
      🎮 Spiele entdecken
    </h2>
    <div class="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      <RouterLink
        v-for="game in games"
        :key="game.slug"
        :to="'/games/' + game.slug"
        class="bg-zinc-800 hover:bg-zinc-700 rounded-2xl overflow-hidden shadow-xl transition group"
      >
        <img
          :src="`/${game.titel.replace(/\s+/g, '')}.png`"
          :alt="game.titel"
          class="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
        />
        <div class="p-6">
          <h3 class="text-2xl font-semibold text-purple-300 mb-2">
            {{ game.titel }}
          </h3>
          <p class="text-purple-100 text-sm leading-relaxed">
            {{ game.description }}
          </p>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
