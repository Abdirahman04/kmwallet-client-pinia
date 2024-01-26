<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow flex-col bg-amber-100">
      <the-sub-nav
        path="dashboard"
        :text="accountStore.accountId"
      ></the-sub-nav>
      <div class="flex flex-grow justify-center items-center">
        <div class="flex flex-col">
          <h1>{{ accountStore.accountId }}</h1>
          <h2>{{ accountStore.accountType }}</h2>
          <h2>{{ accountStore.amount }}</h2>
          <div>
            <transaction-button
              path="deposit"
              title="Deposit"
            ></transaction-button>
            <transaction-button
              path="withdraw"
              title="Withdraw"
            ></transaction-button>
            <transaction-button
              path="transfer"
              title="Transfer"
            ></transaction-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavBar from "@/components/TheNavBar.vue";
import TheSubNav from "@/components/TheSubNav.vue";
import TransactionButton from "@/components/TransactionButton.vue";
import { useAccountStore } from "@/stores/accountStore";

const accountStore = useAccountStore();
</script>
