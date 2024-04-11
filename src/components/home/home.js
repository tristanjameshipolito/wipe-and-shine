import React from 'react';
import HomeBanner from './home-banner/home-banner';
import HomeContent from './homecontent';
import Footer from '../footer/footer';

function Homepage() {
    return (
     <div>
      <HomeBanner />
      <HomeContent />
      <Footer />
     </div>
    );
  }
  
  export default Homepage;
  