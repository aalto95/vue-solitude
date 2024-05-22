import SolButton from "./Button.vue";
import { StoryObj, Meta } from "@storybook/vue3";
import { html } from "code-tag";

export default {
  title: "Components/Button",
  component: SolButton,
  args: {
    fill: false,
    warning: false,
    loading: false,
    variant: "primary",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "outline"],
    },
  },
} as Meta<typeof SolButton>;

interface PropsOverride {
  disabled?: boolean;
}

export const Default: StoryObj<typeof SolButton> = {
  render: (args) => ({
    components: { SolButton },
    setup() {
      return { args };
    },
    template: html`
      <sol-button v-bind="args">Кнопка</sol-slider>
    `,
  }),
};

export const WithIcons: StoryObj<typeof SolButton> = {
  args: {
    iconSource: {
      left: "./icons/cap.svg",
      right: "./icons/download.svg",
    },
  },
  render: (args) => ({
    components: { SolButton },
    setup() {
      return { args };
    },
    template: html`
      <sol-button v-bind="args">Кнопка</sol-slider>
    `,
  }),
};

export const Disabled: StoryObj<typeof SolButton> = {
  render: (args) => ({
    components: { SolButton },
    setup() {
      return { args };
    },
    template: html`
      <sol-button v-bind="args" disabled>Кнопка</sol-slider>
    `,
  }),
};
