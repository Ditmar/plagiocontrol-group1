import React from "react";
import {Sidebar} from "./Sidebar";
export default {
  title: "./Sidebar",
  component: Sidebar,
  //argTypes: { handleClick: {action: 'handleClick'}}
};

const Template = (args) => <Sidebar {...args} />;
export const DefaultButton = Template.bind({});
