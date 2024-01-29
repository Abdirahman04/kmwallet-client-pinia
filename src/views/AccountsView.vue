<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow flex-col bg-slate-100">
      <the-sub-nav path="dashboard" text="Account"></the-sub-nav>
      <div class="flex flex-grow justify-center items-center">
        <div class="flex flex-col">
          <h1>{{ accountStore.accountId }}</h1>
          <h2>{{ accountStore.accountType }}</h2>
          <h2>{{ accountStore.amount }}</h2>
          <div>
            <transaction-button path="deposit"
              ><i class="fa-solid fa-arrows-down-to-line"></i
            ></transaction-button>
            <transaction-button path="withdraw">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
            </transaction-button>
            <transaction-button path="transfer">
              <i class="fa-solid fa-money-bill-transfer"></i>
            </transaction-button>
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
