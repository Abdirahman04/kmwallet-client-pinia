<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow">
      <h1>Sign in</h1>
      <h2>{{ ans }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheNavBar from "@/components/TheNavBar.vue";

const ans = ref<string>("");
</script>
