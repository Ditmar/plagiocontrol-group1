import React from 'react';
import { UploadControl } from './uploadControl';
export default {
    title: 'ui/components/uploadControl',
    component: UploadControl,
}

const Template = args => <UploadControl  {...args}/>
export const primaryUploadControl = Template.bind({});