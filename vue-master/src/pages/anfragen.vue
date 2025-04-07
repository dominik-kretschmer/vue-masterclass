<script setup lang="ts">
import {useForm} from "vee-validate";
import {toTypedSchema} from "@vee-validate/zod";
import * as z from "zod";

import {Button} from "@/components/ui/button";
import {FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {supabase} from "@/lib/supabaseClient.ts";

const formSchema = toTypedSchema(
    z.object({
      email: z.string().email(),
      anfrage: z.string().min(1),
    }),
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit(async (values) => {

  await supabase
      .from('inquires')
      .insert([
        {email: values.email, anfrage: values.anfrage},
      ])
      .select()
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
          <FormMessage/>
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
          <FormMessage/>
        </FormItem>
      </FormField>

      <Button
          type="submit"
          class="w-full bg-gradient-to-br from-purple-500 to-blue-600 hover:bg-purple-700 text-white font-semibold"
      >
        Senden
      </Button>
    </form>
  </div>
</template>
