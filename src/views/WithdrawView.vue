<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow flex-col bg-red-100">
      <the-sub-nav path="account" text="Withdraw"></the-sub-nav>
      <div class="flex flex-grow justify-center items-center">
        <div>
          <h1>How much do you want to withdraw?</h1>
          <form-input v-model="balance"></form-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormInput from "@/components/FormInput.vue";
import TheNavBar from "@/components/TheNavBar.vue";
import TheSubNav from "@/components/TheSubNav.vue";
import { ref } from "vue";

const balance = ref<string>("");
</script>
