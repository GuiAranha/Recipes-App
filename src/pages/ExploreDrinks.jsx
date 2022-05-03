import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreDrinks() {
  return (
    <div>
      <Header pageName="Explore Drinks" needRender={ false } />
      <div> Estou na Explore Drinks</div>
      <Footer />
    </div>
  );
}

export default ExploreDrinks;
