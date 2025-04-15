import React from "react";
import { Sidebar } from "./sidebar";

export default {
  title: "UI/Sidebar",
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {};
