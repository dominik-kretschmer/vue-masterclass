<script setup lang="ts">
import {Home, Inbox, Search } from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent, SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel, SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
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
    icon: Inbox,
  },
  {
    title: "anfragen",
    url: "/anfragen",
    icon: Inbox,
  },
];
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
                  <span>{{item.title}}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>