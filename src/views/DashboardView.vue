<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow flex-col bg-gray-200">
      <the-sub-nav path="home" text="Dashboard"></the-sub-nav>
      <h2 class="text-2xl">Welcome, {{ userStore.fullName }}</h2>
      <div class="border-t-2 border-gray-300 my-6 w-1/2"></div>
      <button
        @click="goToProfile"
        class="bg-lime-600 border-2 border-lime-600 px-4 py-1 rounded-md text-white font-semibold hover:bg-transparent hover:text-lime-600 transition-colors duration-300 ease-in-out w-1/6"
      >
        Profile
      </button>
      <div
        v-for="account in userStore.accounts"
        :key="account.accountId"
        class="rounded-md shadow-md w-1/2 mt-3 px-4 py-2 bg-white transition-transform duration-300 transform hover:translate-x-3"
        @click="goToAccount(account)"
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
import { useAccountStore } from "@/stores/accountStore";
import { useRouter } from "vue-router";
import { Account } from "@/types/interfaces";

const userStore = useUserStore();
const accountStore = useAccountStore();
const router = useRouter();

function goToAccount(account: Account) {
  accountStore.setAccountStore(account);
  router.push({ name: "account" });
}

function goToProfile() {
  router.push({ name: "profile" });
}
</script>
