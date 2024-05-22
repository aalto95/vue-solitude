<script lang="ts">
export default {
  name: "sol-button",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

export interface ButtonProps {
  fill?: boolean;
  warning?: boolean;
  loading?: boolean;
  variant?: "primary" | "secondary" | "outline";
  iconSource?: {
    left?: string;
    right?: string;
  };
}

const props = withDefaults(defineProps<ButtonProps>(), {
  fill: false,
  warning: false,
  loading: false,
  variant: "primary",
  iconSource: () => ({
    left: "",
    right: "",
  }),
});

const buttonClass = computed(() => "sol-button-" + props.variant);
</script>

<template>
  <button
    class="sol-button"
    :class="[
      buttonClass,
      {
        'sol-button--fill': fill,
        'sol-button--warning': warning,
        'sol-button--loading': loading,
      },
    ]"
  >
    <div
      class="sol-button__content"
      :class="{ 'sol-button__content--invisible': loading }"
    >
      <img v-if="iconSource.left" :src="iconSource.left" alt="left-icon" />
      <span class="sol-button__text">
        <slot />
      </span>
      <img v-if="iconSource.right" :src="iconSource.right" alt="right-icon" />
    </div>
    <span class="sol-button__loader" v-if="loading"></span>
  </button>
</template>

<style lang="scss" scoped>
@import "./Button.scss";
</style>
