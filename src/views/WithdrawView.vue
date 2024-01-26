<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow flex-col bg-purple-100">
      <the-sub-nav path="account" text="Withdraw"></the-sub-nav>
      <div class="flex flex-grow justify-center items-center">
        <div>
          <h1>How much do you want to withdraw?</h1>
          <form-input v-model="balance"></form-input>
          <button @click="withdraw">Withdraw</button>
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

function withdraw() {
  const body = {
    accountId: accountStore.accountId,
    transactionType: "withdraw",
    balance: balance.value,
  };
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
  const url = `http://127.0.0.1:9090/kmwallet/transaction/withdraw/${accountStore.accountId}`;
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      userStore.addTransaction(accountStore.accountId, data);
      accountStore.addTransaction(data);
      accountStore.transaction("minus", balance.value);
      userStore.changeBalance(accountStore.accountId, balance.value, "sub");
      router.push({ name: "account" });
    })
    .catch((error) => {
      console.log(error);
      alert("There was a problem in the transaction!");
    });
}
</script>
