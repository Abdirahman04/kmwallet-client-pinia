<script setup lang="ts">
import { defineProps } from "vue";
import { defineEmits } from "vue";
import { ref, computed } from "vue";
import FormInput from "@/components/FormInput.vue";

const props = defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);
const pass = ref<string>("");
const visible = ref<boolean>(false);
const passClass = () => {
  if (visible.value) return "text";
  return "password";
};

const updateModelValue = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  emits("update:modelValue", value);
};
</script>

<template>
  <form-input
    v-model="pass"
    :value="props.modelValue"
    @input="updateModelValue($event)"
    v-bind="$attrs"
    :type="passClass"
  ></form-input>
  <button @click="visible = !visible">See</button>
</template>
