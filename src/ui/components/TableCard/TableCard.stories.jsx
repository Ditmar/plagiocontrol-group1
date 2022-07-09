import React from "react";
import TableCard from "./TableCard";

    export default{
        title:"ui/components/TableCard/TableCard",
        component: TableCard,
        parameters: {
            layout: 'fullscreen',
        },
    }
    const Template = (args) => <TableCard {...args} />;

    export const LoggedOut = Template.bind({});