<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow flex-col bg-slate-100">
      <the-sub-nav path="dashboard" text="Account"></the-sub-nav>
      <div class="flex flex-grow justify-center items-center">
        <div
          class="flex flex-col bg-white px-5 py-2 h-full w-1/2 rounded-md items-center"
        >
          <div class="bg-yellow-400 w-3/4 h-60 rounded-xl px-6 py-8 shadow-lg">
            <div class="flex justify-between">
              <h1 class="text-white text-2xl font-bold">KmWallet card</h1>
              <h1
                class="text-gray-700 text-2xl font-mono font-extrabold tracking-wider"
              >
                VISA
              </h1>
            </div>
            <div>
              <h1 class="mt-14 text-center text-lg tracking-widest font-light">
                {{ accountStore.accountId }}
              </h1>
            </div>
            <div class="flex justify-between mt-4">
              <div class="flex flex-col items-center">
                <h1 class="font-extralight">Holder</h1>
                <h2 class="font-serif">{{ user.fullName }}</h2>
              </div>
              <div class="flex flex-col items-center">
                <h1 class="font-bold">Balance</h1>
                <h2 class="font-mono text-red-600">
                  {{ accountStore.amount }}
                </h2>
              </div>
            </div>
          </div>
          <div class="w-3/4 flex justify-between mt-4 px-8">
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
          <div
            class="w-3/4 px-3 py-2 bg-gray-300 mt-2 rounded-md"
            v-if="accountStore.transactions.length > 0"
          >
            <h1 class="text-center text-lg font-mono font-bold">History</h1>
            <div class="border-b border-gray-500 mb-2"></div>
            <div
              class="px-3 py-1 mt-0.5 bg-gray-800 text-white rounded-md"
              v-for="trans in transactions"
              :key="trans.transactionId"
            >
              <h1>{{ trans.transactionId }}</h1>
              <div class="flex justify-between">
                <h2 class="text-yellow-500">{{ trans.transactionType }}</h2>
                <h2 class="text-red-500 font-mono">
                  {{ user.amount(trans.balance) }}
                </h2>
              </div>
              <div
                class="flex justify-center absolute bottom-2 left-[46%] text-black bg-white rounded-lg px-2 border-2 border-white"
                @click="goToTransactions"
              >
                <h1 class="pointer-events-none">Show more</h1>
              </div>
            </div>
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
import router from "@/router";
import { useAccountStore } from "@/stores/accountStore";
import { useUserStore } from "@/stores/userStore";
import { Transaction } from "@/types/interfaces";
import { reactive, onMounted } from "vue";

const accountStore = useAccountStore();
const user = useUserStore();
const transactions = reactive<Array<Transaction>>([]);

onMounted(() => {
  preview();
  console.log(transactions);
  console.log(accountStore.transactions);
});

function preview() {
  const newArray = accountStore.transactions.filter(
    (trans: Transaction) => trans != null
  );
  transactions.push(...newArray.slice(0, 3));
}

function goToTransactions() {
  router.push({ name: "transactions" });
}
</script>
