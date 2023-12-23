import React from 'react';
import MainBanner from "./MainBanner";
import TourItems from '../Tour/TourItems';

import Releases from '../Releases/Releases';
import News from '../News/News';




const Home = ( ) => (
  <main className="main">
    <MainBanner />
    <TourItems />
    <Releases />
    <News />
  </main>
)

export default Home;