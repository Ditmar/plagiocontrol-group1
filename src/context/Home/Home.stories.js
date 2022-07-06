import React from 'react';
import Home from './Home';

export default{
    tittle: 'Home',
    component: Home,
}
 const Template = (args) => <Home {...args} />;

 export const home = Template.bind({});
  
 home.args ={
     
     documentPages:'',
     reviewedPages:'',
     copyPagesDetected:''
     
 };