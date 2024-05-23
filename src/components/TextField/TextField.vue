<script lang="ts">
export default {
  name: "sol-text-field",
};
</script>

<script setup lang="ts">
import { ref, defineModel } from "vue";
import { useTextareaAutosize } from "@vueuse/core";

export interface TextFieldProps {
  label: string;
  disabled: boolean;
  multiline: boolean;
}

const props = withDefaults(defineProps<TextFieldProps>(), {
  label: "",
  disabled: false,
  multiline: false,
});

const focused = ref(false);

const model = defineModel<string>({ default: "" });

const { textarea, input } = useTextareaAutosize();
</script>

<template>
  <fieldset class="fieldset" :class="{ 'fieldset--focused': focused }">
    <legend class="legend" :class="{ 'legend--hidden': !focused && !model }">
      {{ label }}
    </legend>
    <label
      class="label"
      :class="{ 'label--up': focused || model, 'label--focused': focused }"
      >{{ label }}</label
    >
    <textarea
      ref="textarea"
      v-if="multiline"
      v-model="model"
      class="input"
      @focus="focused = true"
      @blur="focused = false"
      @input="input = model"
    ></textarea>
    <input
      v-else
      v-model="model"
      class="input"
      type="text"
      :disabled="disabled"
      @focus="focused = true"
      @blur="focused = false"
    />
  </fieldset>
</template>

<style lang="scss">
@import "./TextField.scss";
</style>