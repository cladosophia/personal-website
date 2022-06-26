import React from 'react';

import AppHero from '../components/home/hero';
import AppAbout from '../components/home/about';
import AppResume from '../components/home/resume';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppAbout/>
      <AppResume/>
    </div>
  );
}

export default AppHome;