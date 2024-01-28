<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow flex-col bg-slate-200">
      <the-sub-nav path="dashboard" text="Profile"></the-sub-nav>
      <div
        class="bg-gray-700 w-1/2 rounded-md shadow-lg text-white px-4 py-4 ml-3"
      >
        <i class="fa-solid fa-id-card-clip text-7xl text-yellow-400"></i>
        <div class="block mt-2">
          <label for="id" :class="labelClasses">Customer ID</label>
          <input
            :class="inputClasses"
            type="text"
            v-model="userInfo.customerId"
          />
        </div>
        <div class="block mt-2">
          <label for="fname" :class="labelClasses">First name</label>
          <input
            :class="inputClasses"
            type="text"
            v-model="userInfo.firstName"
          />
        </div>
        <div class="block mt-2">
          <label for="lname" :class="labelClasses">Last name</label>
          <input
            :class="inputClasses"
            type="text"
            v-model="userInfo.lastName"
          />
        </div>
        <div class="block mt-2">
          <label for="email" :class="labelClasses">Email</label>
          <input :class="inputClasses" type="text" v-model="userInfo.email" />
        </div>
        <div class="block mt-2">
          <label for="phone" :class="labelClasses">Phone number</label>
          <input
            :class="inputClasses"
            type="text"
            v-model="userInfo.phoneNumber"
          />
        </div>
        <div class="block mt-4">
          <button
            class="bg-yellow-500 w-1/3 text-xl font-serif font-bold rounded-lg border-2 border-yellow-500 hover:bg-transparent hover:text-yellow-500"
            @click="updateUser"
          >
            Save
          </button>
          <button
            class="bg-red-600 w-1/3 text-xl font-serif font-bold rounded-lg ml-4 border-2 border-red-600 hover:bg-transparent hover:text-red-600"
            @click="deleteUser"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavBar from "@/components/TheNavBar.vue";
import TheSubNav from "@/components/TheSubNav.vue";
import { reactive } from "vue";
import { UserData } from "@/types/interfaces";
import { useUserStore } from "@/stores/userStore";
import router from "@/router";

const userStore = useUserStore();
const userInfo = reactive<UserData>({
  customerId: userStore.customerId,
  firstName: userStore.firstName,
  lastName: userStore.lastName,
  email: userStore.email,
  phoneNumber: userStore.phoneNumber,
  password: userStore.password,
});

const inputClasses = reactive<Array<string>>(["bg-transparent", "text-white"]);
const labelClasses = reactive<Array<string>>([
  "text-2xl",
  "text-lime-600",
  "block",
  "font-semibold",
  "font-mono",
]);

function updateUser() {
  const id = userInfo.customerId;

  const options = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  };
  const url = `http://127.0.0.1:9090/kmwallet/customer/${id}`;
  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      userStore.updateUser(data);
      router.go(0);
    })
    .catch((error) => {
      console.log(error);
      alert("There was a problem in the account update!");
    });
}
function deleteUser() {
  const id = userInfo.customerId;

  const url = `http://127.0.0.1:9090/kmwallet/customer/${id}`;
  fetch(url)
    .then(() => {
      userStore.deleteUserStore();
      router.push({ name: "home" });
    })
    .catch((error) => {
      console.log(error);
      alert("There was a problem in the account delete!");
    });
}
</script>
