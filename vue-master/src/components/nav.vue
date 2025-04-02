<template>
  <nav class="sticky-top">
    <div>
      <button @click="goHome">⬅ Home</button>
      <h1>Extrem gute Spiele</h1>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
const goHome = () => router.push("/");
</script>
