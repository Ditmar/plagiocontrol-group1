import React from "react";
import { Register } from "./register";

export default {
    title: 'ui/components/register',
    component: Register,
}

const Template = args => <Register  {...args}/>
export const DefaultRegister = Template.bind({});
DefaultButton.args = {
    isloading: true,
    label: 'Sing In',
    errors: false
}
