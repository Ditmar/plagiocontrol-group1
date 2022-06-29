import React from "react";
import { Button } from "./buttonRegister";
export default {
    title: 'ui/components/buttonRegister',
    component: Button,
    argTypes: { handleClick: {action: 'handleClick'}}
}

const Template = args => <Button  {...args}/>
export const DefaultButton = Template.bind({});
DefaultButton.args = {
    label: 'Sing In',
    backgroundColor: '#3751FF',
    isShadow: true,
}

