import React from 'react';
import { HomeCard } from './HomeCard';

export default{
    tittle: 'ui/components/HomeCard',
    component: HomeCard,
}
 const Template = (args) => <HomeCard {...args} />;

 export const homeCard = Template.bind({});
  
 homeCard.args ={
     
     documentPages:'',
     reviewedPages:'',
     copyPagesDetected:''
     
 };