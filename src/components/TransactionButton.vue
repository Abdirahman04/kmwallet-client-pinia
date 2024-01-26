<script setup lang="ts">
import { useRouter } from "vue-router";
// eslint-disable-next-line no-undef
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const router = useRouter();

function goToTransaction() {
  router.push({ name: props.path });
}
</script>

<template>
  <button
    class="px-5 py-1 bg-black text-white rounded-md shadow-md border-2 border-black hover:bg-transparent hover:text-black"
    @click="goToTransaction"
  >
    {{ props.title }}
  </button>
</template>
