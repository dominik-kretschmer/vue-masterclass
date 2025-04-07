<script setup lang="ts">
import { Home, Inbox, Search, Settings } from "lucide-vue-next";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Games",
    url: "/games",
    icon: Search,
  },
  {
    title: "About",
    url: "/about",
    icon: Settings,
  },
  {
    title: "Anfragen",
    url: "/anfragen",
    icon: Inbox,
  },
];
const { toggleSidebar } = useSidebar();
</script>

<template>
  <Sidebar variant="sidebar" collapsible="icon">
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Menu</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild>
                <a :href="item.url">
                  <component :is="item.icon" />
                  <span>{{ item.title }}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <button @click="toggleSidebar">☰</button>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
</template>
