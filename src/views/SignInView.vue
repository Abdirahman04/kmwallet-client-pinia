<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow justify-center items-center">
      <div>
        <h1>Sign in</h1>
        <hr />
        <form-input class="block" v-model="loginForm.email"></form-input>
        <password-form-input v-model="loginForm.password"></password-form-input>
        <hr />
        <button @click="login">Sign in</button>
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
