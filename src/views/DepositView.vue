<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow flex-col bg-purple-100">
      <the-sub-nav path="account" text="Deposit"></the-sub-nav>
      <div class="flex flex-grow justify-center items-center">
        <div class="flex flex-col bg-blue-300 px-4 py-4 rounded-md">
          <h1>How much do you want to deposit?</h1>
          <form-input v-model="balance"></form-input>
          <button
            @click="deposit"
            class="bg-black text-white rounded-sm mt-2 py-1"
          >
            Deposit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavBar from "@/components/TheNavBar.vue";
import TheSubNav from "@/components/TheSubNav.vue";
import FormInput from "@/components/FormInput.vue";
import { useUserStore } from "@/stores/userStore";
import { useAccountStore } from "@/stores/accountStore";
import { ref } from "vue";
import router from "@/router";

const balance = ref<number>(0);
const userStore = useUserStore();
const accountStore = useAccountStore();

function deposit() {
  const body = {
    accountId: accountStore.accountId,
    transactionType: "deposit",
    balance: balance.value,
  };
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const url = `http://127.0.0.1:9090/kmwallet/transaction/deposit/${accountStore.accountId}`;
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      userStore.addTransaction(accountStore.accountId, data);
      userStore.changeBalance(accountStore.accountId, balance.value, "sum");
      accountStore.addTransaction(data);
      accountStore.transaction("plus", balance.value);
      router.push({ name: "account" });
    })
    .catch((error) => {
      console.log(error);
      alert("There was a problem in the transaction!");
    });
}
</script>
