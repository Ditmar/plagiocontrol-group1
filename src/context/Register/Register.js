import React from "react";
import { Registers } from "../../ui/components/register/register";
export const Register = () => {
    const props = {
        label : 'Sing In'
    }
    return (
        <div>
        <Registers {...props} />
        </div>
    )
}
