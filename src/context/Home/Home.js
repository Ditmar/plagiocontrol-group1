import React from 'react';
import { HomeCard } from '../../ui/components/HomeCard/HomeCard';
import { SidebarComponent } from '../../ui/components/sidebar/SidebarComponent';
export const Home = () => {
  return (
    <div>
      <HomeCard/>
      <SidebarComponent />
    </div>
  );
};
