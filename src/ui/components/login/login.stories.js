import React from "react";
import { storiesOf } from "@storybook/react";
//import { action } from "@storybook/addon-actions";
import { Login } from "./login";

const data = {
    isLoading: true,
    label: "Enviar", 
    errors: false
}
storiesOf('Login', module)
.add('default', () => <Login {...data} isLoading={false}/>)
.add('isLoading', () => <Login {...data} />)
.add('IsFormErrors', () =>  <Login {...data} isLoading={false} errors={true} />)