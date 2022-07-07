import React from "react";
import { SidebarComponent } from "./SidebarComponent";
export default {
  title: "./SidebarComponent",
  component: SidebarComponent,
};

const Template = (args) => <SidebarComponent {...args} />;
export const DefaultButton = Template.bind({});
