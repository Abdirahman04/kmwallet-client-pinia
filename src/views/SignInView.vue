<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow justify-center items-center bg-slate-300">
      <div class="md:m-0 m-1 w-96 md:p-6 p-7 shadow-lg bg-white rounded-md">
        <h1 class="text-3xl block text-center font-semibold">
          <i class="fa-solid fa-user"></i>
          Login
        </h1>
        <hr class="mt-3" />
        <div class="mt-3">
          <label for="email" class="block text-base mb-2 font-mono"
            >Email address</label
          >
          <form-input
            placeholder="Enter email..."
            class="border w-[86%] text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            v-model="loginForm.email"
          ></form-input>
        </div>
        <div class="mt-3">
          <label for="pass" class="block text-base mb-2 font-mono"
            >Password</label
          >
          <password-form-input
            class="border w-[86%] text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
            v-model="loginForm.password"
            placeholder="Enter password..."
          ></password-form-input>
        </div>
        <div class="mt-3 flex justify-between items-center">
          <div>
            <input type="checkbox" />
            <label>Remember me</label>
          </div>
          <div>
            <a href="#" class="text-indigo-800 font-semibold"
              >Forgot password?</a
            >
          </div>
        </div>
        <div class="mt-5">
          <button
            class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded hover:bg-transparent hover:text-indigo-700 font-semibold"
            @click="login"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import TheNavBar from "@/components/TheNavBar.vue";
import FormInput from "@/components/FormInput.vue";
import PasswordFormInput from "@/components/PasswordFormInput.vue";
import { useUserStore } from "@/stores/userStore";
import { useRouter } from "vue-router";

interface LoginData {
  email: string;
  password: string;
}

const router = useRouter();
const userStore = useUserStore();
const loginForm = reactive<LoginData>({
  email: "",
  password: "",
});

function login() {
  fetch(`http://127.0.0.1:9090/kmwallet/customer/email/${loginForm.email}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.password == loginForm.password) {
        userStore.setUserStore(data);
        router.push({ name: "dashboard" });
      } else alert("Incorrect password!");
    })
    .catch((error) => console.log(error));
}
</script>
