<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow justify-center items-center">
      <div>
        <h1>Sign in</h1>
        <hr />
        <form-input v-model="loginForm.email"></form-input>
        <form-input v-model="loginForm.password"></form-input>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import TheNavBar from "@/components/TheNavBar.vue";
import FormInput from "@/components/FormInput.vue";

const loginForm = reactive({
  email: "",
  password: "",
});
</script>
