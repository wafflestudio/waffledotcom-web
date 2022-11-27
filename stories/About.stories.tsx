import About from "../components/About/About";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const meta: ComponentMeta<typeof About> = {
  component: About,
  title: "About",
};

export default meta;

export const Default: ComponentStory<typeof About> = () => <About />;
