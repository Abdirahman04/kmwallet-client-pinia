<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow flex-col">
      <h1>Dashboard</h1>
      <button @click="logout">Logout</button>
      <h2>{{ userStore.fullName }}</h2>
      <div>{{ userStore.accounts }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavBar from "@/components/TheNavBar.vue";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
function logout() {
  userStore.deleteUserStore();
  router.push({ name: "home" });
}
</script>
