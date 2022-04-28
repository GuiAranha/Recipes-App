import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Explore() {
  return (
    <div>
      <Header pageName="Explore" needRender={ false } />
      <div>Estou na página Explore</div>
      <Footer />
    </div>
  );
}

export default Explore;
