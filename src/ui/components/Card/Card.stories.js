import React from "react";
import {Cards} from "./Cards"

export default {
    title: 'ui/components/CardDocument',
    component: Cards,
}

const Template = (args) => <Cards{...args}/>

export const card = Template.bind({});
card.args = {
    bg:false
}