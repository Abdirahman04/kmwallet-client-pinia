<template>
  <div class="flex justify-between px-12 py-3">
    <button
      class="bg-yellow-600 border-2 border-yellow-600 px-4 py-1 rounded-md text-white font-semibold hover:bg-transparent hover:text-yellow-600 transition-colors duration-300 ease-in-out"
      @click="back"
    >
      Back
    </button>
    <h1 class="text-4xl font-bold font-mono text-lime-800">{{ props.text }}</h1>
    <button
      class="bg-red-600 border-2 border-red-600 px-4 py-1 rounded-md text-white font-semibold hover:bg-transparent hover:text-red-600 transition-colors duration-300 ease-in-out"
      @click="logout"
    >
      Logout
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import { defineProps } from "vue";

const router = useRouter();
const userStore = useUserStore();
const props = defineProps<{ text: string; path: string }>();

function logout() {
  userStore.deleteUserStore();
  router.push({ name: "home" });
}

function back() {
  router.push({ name: props.path });
}
</script>
