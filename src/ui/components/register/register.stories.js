import React from "react";
import { Registers } from "./register";

export default {
    title: 'ui/components/register',
    component: Registers,
}

const Template = args => <Registers  {...args}/>
export const DefaultRegister = Template.bind({});
DefaultButton.args = {
    isloading: true,
    label: 'Sing In',
    errors: false
}
