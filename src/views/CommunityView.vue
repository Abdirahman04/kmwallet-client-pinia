<template>
  <div class="flex flex-col h-screen">
    <the-nav-bar></the-nav-bar>
    <div class="flex flex-grow">
      <div class="w-1/4 bg-gray-700">
        <h1 class="text-2xl text-white font-bold text-center mt-3">
          Community
        </h1>
      </div>
      <div class="flex flex-col h-full w-full bg-blue-100">
        <div class="flex bg-gray-900 text-white px-4 py-2 h-[10%]">
          <div class="flex items-center mr-7">
            <i class="fa-solid fa-user text-3xl"></i>
          </div>
          <div>
            <h1>{{ user.customerId }}</h1>
            <h3 class="text-right font-serif">
              {{ user.fullName }}
            </h3>
          </div>
        </div>
        <div
          class="flex flex-col-reverse px-6 py-3 max-h-[78%] overflow-y-auto"
        >
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
          <h1>hello</h1>
        </div>
        <div class="px-5 py-3 bg-gray-300 relative bottom-0">
          <div
            class="flex justify-between pl-6 pr-10 py-3 w-5/6 bg-white rounded-lg"
          >
            <input
              type="text"
              class="w-5/6 text-lg font-light font-serif px-2 focus:outline-none"
            />
            <button>
              <i class="fa-solid fa-comment-dots text-2xl text-green-400"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheNavBar from "@/components/TheNavBar.vue";
import { useUserStore } from "@/stores/userStore";

const user = useUserStore();
</script>
