import React from "react";
import { Register } from "./Register";
export default {
    title: 'Register',
    component: Register
}

const Template = args => <Register  {...args}/>
export const DefaultRegister = Template.bind({});
DefaultButton.args = {
    isloading: true,
    label: 'Sing In',
    errors: false
}