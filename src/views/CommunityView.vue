<template>
  <div class="flex flex-col h-screen">
    <!--The Nav Bar-->
    <the-nav-bar></the-nav-bar>
    <!--Main-->
    <div class="flex flex-grow">
      <!--Side Bar-->
      <div class="w-1/4 bg-gray-700">
        <h1 class="text-2xl text-white font-bold text-center mt-3">
          Community
        </h1>
      </div>
      <!--Chat area-->
      <div class="flex flex-col h-full w-full bg-blue-100">
        <!--user info-->
        <div class="flex-none flex bg-gray-900 text-white px-4 py-2">
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
        <!--chats-->
        <div class="flex-1 flex flex-col-reverse px-6 py-3 overflow-auto">
          <div
            class="bg-gray-600 text-white w-1/2 rounded-e-xl shadow-md mt-1 px-4 py-1"
            v-for="msg in messages"
            :key="msg.id"
          >
            <div class="tracking-wide text-red-400 font-semibold">
              {{ msg.customerId }}
            </div>
            <div>{{ msg.message }}</div>
            <h5 class="text-right text-sm text-amber-300">
              {{ new Date(...msg.timestamp).toLocaleString() }}
            </h5>
          </div>
        </div>
        <div class="flex-none px-5 py-3 bg-gray-300 relative bottom-0">
          <div
            class="flex justify-between pl-6 pr-10 py-3 w-5/6 bg-white rounded-lg"
          >
            <input
              type="text"
              class="w-5/6 text-lg font-light font-serif px-2 focus:outline-none"
              v-model="newMessage.message"
            />
            <button @click="sendMessage">
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
import { Community, ApiOptions } from "@/types/interfaces";
import { reactive, onMounted } from "vue";

const user = useUserStore();

const messages = reactive<Array<Community>>([]);
const url = "http://127.0.0.1:9090/kmwallet/community";

function getMessages() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      messages.push(...data);
      messages.reverse();
    })
    .catch((err) => {
      console.log("Error getting messages", err);
    });
}

onMounted(() => {
  getMessages();
});

interface NewMessage {
  message: string;
  timestamp: string;
  customerId: string;
}

const newMessage = reactive<NewMessage>({
  message: "",
  timestamp: new Date().toISOString(),
  customerId: user.customerId,
});

function sendMessage() {
  const options: ApiOptions = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMessage),
  };

  if (newMessage.message !== "") {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        messages.unshift(data);
        newMessage.message = "";
      })
      .catch((err) => {
        console.log("Error sending message", err);
      });
  }
}
</script>
