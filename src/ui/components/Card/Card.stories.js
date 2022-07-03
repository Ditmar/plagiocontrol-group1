import React from "react";
import Cards from "./Cards"

export default {
    title: 'CardComponet',
    Comment: Cards,
}

const Template = (args) => <Cards{...args}/>

export const card = Template.bind({card});
Cards.args = {
    bg:false
}