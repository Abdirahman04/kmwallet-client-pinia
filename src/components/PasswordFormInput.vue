<script setup lang="ts">
import { defineProps } from "vue";
import { defineEmits } from "vue";
import { ref, computed } from "vue";
import FormInput from "@/components/FormInput.vue";

const props = defineProps(["modelValue"]);
const emits = defineEmits(["update:modelValue"]);
const pass = ref<string>("");
const visible = ref<boolean>(false);
const passClass = computed(() => {
  if (visible.value) return "text";
  else return "password";
});
const eyeClass = computed(() => {
  if (visible.value) return "fa-eye";
  else return "fa-eye-slash";
});

const updateModelValue = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  emits("update:modelValue", value);
};

function toggleVisibility() {
  visible.value = !visible.value;
}
</script>

<template>
  <form-input
    v-model="pass"
    :value="props.modelValue"
    @input="updateModelValue($event)"
    v-bind="$attrs"
    :type="passClass"
  ></form-input>
  <button @click="toggleVisibility">
    <i class="fa-solid" :class="eyeClass"></i>
  </button>
</template>
