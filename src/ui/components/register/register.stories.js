import React from "react";
import { storiesOf } from "@storybook/react";

import { Register } from "./register";

const data = {
    isLoading: true,
    label: "Sing In", 
    errors: false
}
storiesOf('register', module)
.add('default', () => <Register {...data} isLoading={false}/>)
.add('isLoading', () => <Register {...data} />)
.add('IsFormErrors', () =>  <Register {...data} isLoading={false} errors={true} />)