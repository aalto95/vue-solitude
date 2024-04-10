import TextField from "./TextField.vue";
import { StoryObj, Meta } from "@storybook/vue3";
import { html } from "code-tag";
import { ref } from "vue";

export default {
  title: "Components/TextField",
  component: TextField,
  args: {
    label: "Гиперболически-длинный текст",
    disabled: false,
    multiline: false,
  },
  argTypes: {},
} as Meta<typeof TextField>;

export const Default: StoryObj<typeof TextField> = {
  render: (args) => ({
    components: { TextField },
    setup() {
      const value = ref("");

      function handleInput(newValue: string) {
        value.value = newValue;
      }

      return { args, value, handleInput };
    },
    template: html`<form>
      <TextField
        v-bind="args"
        :value="input"
        @input="e => handleInput(e.target.value)"
      />
    </form>`,
  }),
};

export const TwoWayBinding: StoryObj<typeof TextField> = {
  render: (args) => ({
    components: { TextField },
    setup() {
      const value = ref("");

      return { args, value };
    },
    template: html`<TextField v-bind="args" v-model="value" />`,
  }),
};

export const Disabled: StoryObj<typeof TextField> = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    components: { TextField },
    setup() {
      return { args };
    },
    template: html`<TextField v-bind="args" />`,
  }),
};
