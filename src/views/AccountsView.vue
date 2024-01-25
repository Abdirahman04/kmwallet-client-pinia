<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow flex-col bg-amber-100">
      <the-sub-nav
        path="dashboard"
        :text="accountStore.accountId"
      ></the-sub-nav>
      <div class="flex flex-grow justify-center items-center">
        <h1>{{ accountStore.accountId }}</h1>
        <h2>{{ accountStore.accountType }}</h2>
        <h2>{{ accountStore.amount }}</h2>
        <button @click="goTo('deposit')">Deposit</button>
        <button @click="goTo('withdraw')">Withdraw</button>
        <button @click="goTo('transfer')">Transfer</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavBar from "@/components/TheNavBar.vue";
import TheSubNav from "@/components/TheSubNav.vue";
import { useAccountStore } from "@/stores/accountStore";
import { useRouter } from "vue-router";

const accountStore = useAccountStore();
const router = useRouter();

function goTo(path: string) {
  router.push({ name: path });
}
</script>
