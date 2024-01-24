<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow flex-col bg-gray-200">
      <the-sub-nav path="home" text="Dashboard"></the-sub-nav>
      <h2>{{ userStore.fullName }}</h2>
      <div
        v-for="account in userStore.accounts"
        :key="account.accountId"
        class="rounded-md shadow-md w-1/2 mt-3 px-4 py-2 bg-white"
        @click="goToAccount"
      >
        <h2 class="text-lime-900">{{ account.accountId }}</h2>
        <h3>{{ account.accountType }}</h3>
        <h3 class="text-red-700">{{ userStore.amount(account.balance) }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavBar from "@/components/TheNavBar.vue";
import TheSubNav from "@/components/TheSubNav.vue";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

function goToAccount() {
  router.push({ name: "account" });
}
</script>
