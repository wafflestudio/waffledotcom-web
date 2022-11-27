import Home from "../pages";
import { Story, Meta } from "@storybook/react";

const meta: Meta<typeof Home> = {
  title: "Home",
  component: Home,
  argTypes: {},
};

export default meta;

const Template: Story<typeof Home> = () => <Home />;

export const Default = Template.bind({});
