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
  <fieldset
    class="sol-text-field"
    :class="{ 'sol-text-field--focused': focused }"
  >
    <legend
      class="sol-text-field__legend"
      :class="{ 'sol-text-field__legend--hidden': !focused && !model }"
    >
      {{ label }}
    </legend>
    <label
      class="sol-text-field__label"
      :class="{
        'sol-text-field__label--up': focused || model,
        'sol-text-field__label--focused': focused,
      }"
      >{{ label }}</label
    >
    <textarea
      ref="textarea"
      v-if="multiline"
      v-model="model"
      class="sol-text-field__input"
      @focus="focused = true"
      @blur="focused = false"
      @input="input = model"
    ></textarea>
    <input
      v-else
      v-model="model"
      class="sol-text-field__input"
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
