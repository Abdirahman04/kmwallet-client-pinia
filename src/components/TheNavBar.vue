<script setup lang="ts">
import { reactive, computed, ComputedRef } from "vue";
import { useUserStore } from "@/stores/userStore";

const user = useUserStore();

interface Link {
  id: number;
  path: {
    name: string;
  };
  title: string;
}

const loginLinks: Link[] = reactive([
  { id: 4, path: { name: "community" }, title: "Community" },
  { id: 5, path: { name: "dashboard" }, title: "Dashboard" },
]);

const defaultLinks: Link[] = reactive([
  { id: 1, path: { name: "home" }, title: "Home" },
  { id: 2, path: { name: "signup" }, title: "Signup" },
  { id: 3, path: { name: "signin" }, title: "Signin" },
]);

const links: ComputedRef<Link[]> = computed(() => {
  if (user.isSet) return [...defaultLinks, ...loginLinks];
  else return defaultLinks;
});
</script>

<template>
  <header>
    <nav class="bg-gray-800 p-4">
      <div class="container mx-auto flex items-center justify-between">
        <div class="text-white text-lg font-bold font-mono">KMWALLET</div>
        <div class="space-x-10">
          <router-link
            v-for="link in links"
            :key="link.id"
            :to="link.path"
            class="text-white"
            >{{ link.title }}
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>
