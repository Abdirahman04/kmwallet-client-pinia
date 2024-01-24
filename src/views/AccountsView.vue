<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <the-sub-nav path="dashboard" text="Account"></the-sub-nav>
  </div>
</template>

<script setup lang="ts">
import TheNavBar from "@/components/TheNavBar.vue";
import TheSubNav from "@/components/TheSubNav.vue";
</script>
