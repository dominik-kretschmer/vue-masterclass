<template>
  <div class="min-h-screen bg-purple-dark flex items-center justify-center text-white px-4 py-8">
    <div>
      <h1 class="text-4xl font-bold mb-4 text-center">Send Your Request</h1>
      <form @submit.prevent="onSubmit" class="grid grid-cols-1 gap-y-6">
        <input v-model="request.name" type="text" placeholder="Your name" class="py-2 px-4 rounded">
        <input v-model="request.email" type="text" placeholder="Your email" class="py-2 px-4 rounded">
        <textarea v-model="request.message" placeholder="Your message" class="py-2 px-4 rounded"></textarea>
        <button type="submit" class="py-2 px-4 bg-white text-purple-dark rounded">Send Request</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Request',
  setup() {
    const request = ref({
      name: '',
      email: '',
      message: '',
    });

    const onSubmit = () => {
      alert(`Request sent: ${JSON.stringify(request.value, null, 2)}`);
    };

    return {
      request,
      onSubmit,
    };
  },
});
</script>

<style scoped>
.bg-purple-dark {
  background-color: #4a148c;
}
</style>