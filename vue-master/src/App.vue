<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue";
import {
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<style>
@import "@/assets/main.css";
</style>

<template class="overflow-x-hidden">
  <div class="min-h-screen w-screen bg-gradient-to-br from-white-500 to-gray-600 text-white text-center py-24 text-white">
    <AppHeader class="fixed top-0 right-0 z-50 text-center w-full" />
    <div class="flex pt-20 pb-20 h-full overflow-y-auto">
      <SidebarProvider>
        <AppSidebar class="z-99" />
        <main class="flex-1 flex flex-col">
          <div class="flex-1 pl-10  ">
            <RouterView />
          </div>
        </main>
      </SidebarProvider>
    </div>
    <AppFooter class="fixed bottom-0 right-0 z-50 text-center w-full" />
  </div>
</template>
