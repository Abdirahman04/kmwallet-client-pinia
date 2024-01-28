<script setup lang="ts">
import { defineProps } from "vue";
import { defineEmits } from "vue";

const props = defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);

const updateModelValue = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  emits("update:modelValue", value);
};
</script>

<template>
  <input
    :value="props.modelValue"
    @input="updateModelValue($event)"
    v-bind="$attrs"
  />
</template>
