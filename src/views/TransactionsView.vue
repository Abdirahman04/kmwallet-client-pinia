<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-col flex-grow bg-slate-200">
      <the-sub-nav path="account" text="Transactions"></the-sub-nav>
      <div class="flex flex-col flex-grow pl-10 pt-5">
        <div
          v-for="trans in transactions()"
          :key="trans.transactionId"
          class="px-3 py-2 bg-slate-600 text-white rounded-md mt-1 w-1/2"
        >
          <h1>{{ trans.transactionId }}</h1>
          <div class="flex justify-between">
            <h1>{{ trans.transactionType }}</h1>
            <h1>{{ amount(trans.balance) }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavBar from "@/components/TheNavBar.vue";
import TheSubNav from "@/components/TheSubNav.vue";
import { useAccountStore } from "@/stores/accountStore";
import { useUserStore } from "@/stores/userStore";
import { Transaction } from "@/types/interfaces";

const account = useAccountStore();
const { amount } = useUserStore();

function transactions(): Transaction[] {
  return account.transactions.filter((trans) => trans != null);
}
</script>
