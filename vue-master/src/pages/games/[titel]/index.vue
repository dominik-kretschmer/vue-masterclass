<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { supabase } from "@/lib/supabaseClient.ts";
import HighscorePanel from "@/components/highscore.vue";
import InstallPanel from "@/components/install.vue";

type Panel = "install" | "highscore";

const panel = ref<Panel | null>(null);
const game = ref(null);
const route = useRoute();
const imageUrl = ref("");

onMounted(async () => {
  const slug = route.fullPath.split("/").pop() || "";
  const title = getTitleFromSlug(slug);
  const { data } = await supabase.from("games").select().eq("titel", title);

  game.value = data?.[0] ?? null;
  imageUrl.value = game.value?.titel?.replace(/\s+/g, "") + ".png";
});

const togglePanel = (type: Panel) =>
  (panel.value = panel.value === type ? null : type);

const getTitleFromSlug = (slug: string) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
</script>
<template>
  <section v-if="game" class="max-w-4xl mx-auto px-6 py-12">
    <h1 class="text-4xl font-bold text-purple-400 mb-6">
      {{ game.titel }}
    </h1>
    <img
      v-if="imageUrl"
      :src="`/${imageUrl}`"
      alt="Titelbild"
      class="rounded-2xl shadow-lg w-full max-h-96 object-cover mb-8"
    />

    <p class="text-purple-100 text-lg leading-relaxed mb-8">
      {{ game.description }}
    </p>
    <div class="flex gap-4 mb-6">
      <button
        @click="togglePanel('install')"
        :class="[
          'px-6 py-3 font-semibold rounded-2xl transition',
          panel === 'install'
            ? 'bg-purple-700 text-white'
            : 'bg-zinc-800 hover:bg-zinc-700 text-white',
        ]"
      >
        🔽 Download
      </button>

      <button
        @click="togglePanel('highscore')"
        :class="[
          'px-6 py-3 font-semibold rounded-2xl transition',
          panel === 'highscore'
            ? 'bg-purple-700 text-white'
            : 'bg-zinc-800 hover:bg-zinc-700 text-white',
        ]"
      >
        🏆 Highscore
      </button>
    </div>

    <Transition name="fade-slide">
      <component
        :is="
          panel === 'install'
            ? InstallPanel
            : panel === 'highscore'
              ? HighscorePanel
              : null
        "
      />
    </Transition>
  </section>
</template>
