<script setup lang="ts">
import { useRouter } from "vue-router";
// eslint-disable-next-line no-undef
const props = defineProps({
  path: {
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
  <div class="group relative">
    <button
      class="px-5 py-1 bg-black text-white rounded-md shadow-md border-2 border-black hover:bg-transparent hover:text-black transition-all duration-300"
      @click="goToTransaction"
    >
      <div
        class="absolute bottom-6 left-0 right-0 hidden group-hover:block text-gray-900 py-2 text-center transition-all duration-300"
      >
        {{ props.path }}
      </div>
      <slot />
    </button>
  </div>
</template>
