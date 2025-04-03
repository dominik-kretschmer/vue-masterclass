<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import {SidebarProvider, SidebarTrigger} from '@/components/ui/sidebar'
</script>
<style>
@import "@/assets/main.css";
</style>
<template style="width: 100%; height: 100%">

  <div>
    <SidebarProvider>
      <AppSidebar/>
      <main>
        <sidebar-trigger/>
        <div class="content pl-32 pr-8 pt-8">
          <RouterView/>
        </div>

      </main>
    </SidebarProvider>
  </div>
</template>


