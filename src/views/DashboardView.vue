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
        class="rounded-md shadow-md w-1/2 mt-3 px-4 py-2 bg-gradient-to-tr from-white to-amber-100 transition-transform duration-300 transform hover:translate-x-3"
        @click="goToAccount(account)"
      >
        <div class="flex justify-between">
          <span class="text-lime-900">{{ account.accountId }}</span>
          <button @click.stop="deleteAccount(account.accountId)">
            <i class="fa-solid fa-trash text-xl text-red-600"></i>
          </button>
        </div>
        <h3>{{ account.accountType }}</h3>
        <h3 class="text-red-700 font-mono">
          {{ userStore.amount(account.balance) }}
        </h3>
      </div>
      <div
        class="rounded-md shadow-md w-1/2 mt-3 px-4 py-2 bg-gradient-to-tr from-white to-amber-100 transition-transform duration-300 transform hover:translate-x-3 h-20 flex items-center justify-between"
        @click="changeFormVisibility"
      >
        <i class="fa-solid text-xl" :class="addAccountForm.sign"></i>
        <h2 class="text-xl font-serif text-red-600">Add account</h2>
      </div>
      <div
        v-if="addAccountForm.isFormVisible"
        class="bg-white px-6 py-5 rounded-md shadow-xl fixed top-44 right-28"
      >
        <h1 class="text-center font-mono text-2xl">Add account</h1>
        <label for="accountType" class="block mt-4">Enter account type: </label>
        <input
          type="text"
          class="block mt-1 border px-2"
          v-model="newAccountData.accountType"
        />
        <button
          class="w-full bg-blue-700 text-white py-1 rounded-lg hover:rounded-xl mt-3 font-bold"
          @click="addNewAccount"
        >
          Add
        </button>
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
import { Account, AddAccount, NewAccount } from "@/types/interfaces";
import { reactive } from "vue";

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

const addAccountForm = reactive<AddAccount>({
  isFormVisible: false,
  sign: "fa-plus",
});

function changeFormVisibility() {
  if (addAccountForm.isFormVisible) addAccountForm.sign = "fa-plus";
  else addAccountForm.sign = "fa-minus";

  addAccountForm.isFormVisible = !addAccountForm.isFormVisible;
}

const newAccountData = reactive<NewAccount>({
  customerId: userStore.customerId,
  accountType: "",
});

function addNewAccount() {
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAccountData),
  };
  const url = "http://127.0.0.1:9090/kmwallet/account";
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      userStore.addAccount(data);
      changeFormVisibility();
    })
    .catch((error) => {
      console.log(error);
      alert("There was a problem in the account creation!");
    });
}

function deleteAccount(id: string) {
  const ans = confirm("Are you sure you want to delete this account?");

  if (ans) {
    const options = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = `http://127.0.0.1:9090/kmwallet/account/${id}`;
    fetch(url, options)
      .then(() => {
        userStore.deleteAccount(id);
        router.go(0);
      })
      .catch((error) => {
        console.log(error);
        alert("There was a problem in the account creation!");
      });
  }
}
</script>
