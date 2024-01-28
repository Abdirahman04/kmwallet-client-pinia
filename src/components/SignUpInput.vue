<template>
  <div class="mt-1">
    <label :for="props.labelFor" class="block text-base font-mono">{{
      props.label
    }}</label>
    <input
      :id="props.labelFor"
      type="text"
      v-bind="$attrs"
      :value="props.modelValue"
      @input="updateModelValue($event)"
      class="w-[86%] text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
      :class="redBorder"
    />
  </div>
  <span class="text-red-600" v-if="props.error1"
    >Please enter your {{ props.error1Msg }}</span
  >
  <span class="text-red-600" v-if="props.error2">{{ props.error2Msg }}</span>
</template>

<script setup lang="ts">
import { computed } from "vue";

// eslint-disable-next-line no-undef
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  labelFor: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  error1: {
    type: Boolean,
    default: false,
  },
  error2: {
    type: Boolean,
    default: false,
  },
  error1Msg: {
    type: String,
    required: true,
  },
  error2Msg: {
    type: String,
    required: true,
  },
});
// eslint-disable-next-line no-undef
const emits = defineEmits(["update:modelValue"]);

const updateModelValue = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  emits("update:modelValue", value);
};

const redBorder = computed(() => {
  if (props.error1 || props.error2) return ["border", "border-red-600"];
  else return ["border"];
});
</script>
