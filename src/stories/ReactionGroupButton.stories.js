import React from "react";

import { ComponentStory } from "@storybook/react";

import ReactionGroupButton from "./ReactionGroupButton";

export default {
  title: "Components/ReactionGroupButton",
  component: ReactionGroupButton,
};

const Template = (args) => <ReactionGroupButton {...args} />;

export const ManyButton = Template.bind({});
ManyButton.args = {
  buttons: [
    {
      isActive: true,
      label: "버튼A",
      count: 0,
    },
    {
      isActive: false,
      label: "버튼B",
      count: 1,
    },
    {
      isActive: false,
      label: "버튼C",
      count: 2,
    },
  ],
};
