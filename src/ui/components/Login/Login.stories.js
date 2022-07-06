import React from "react";
//import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";

import { Login } from "./Login";
export default {
    title: "ui/components/Login",
    component:Login
}
const Template = (args) => <Login {...args}/>
export  const logue= Template.bind({}); 
logue.args = {
    isLoading: true,
    label: "Primo", 
    errors: false
}
