<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = toTypedSchema(
  z.object({
    username: z.string().min(2).max(50),
  }),
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>

<template>
  <div
    class="max-w-xl mx-auto mt-10 p-6 bg-zinc-900 rounded-xl shadow-lg text-white"
  >
    <h1 class="text-3xl font-bold text-purple-400 mb-6 text-center">
      📩 Anfrage senden
    </h1>
    <form @submit="onSubmit" class="space-y-6">
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel class="text-purple-200">Email</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="z. B. max@example.com"
              v-bind="componentField"
              class="bg-zinc-800 text-white border border-zinc-700 focus:border-purple-500"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="anfrage">
        <FormItem>
          <FormLabel class="text-purple-200">Anfrage</FormLabel>
          <FormControl>
            <Input
              type="text"
              placeholder="Deine Nachricht"
              v-bind="componentField"
              class="bg-zinc-800 text-white border border-zinc-700 focus:border-purple-500"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <Button
        type="submit"
        class="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold"
      >
        Senden
      </Button>
    </form>
  </div>
</template>
