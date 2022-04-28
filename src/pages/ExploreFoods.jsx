import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function ExploreFoods() {
  return (
    <div>
      <Header pageName="Explore Foods" needRender={ false } />
      <div> Estou na Explore Foods</div>
      <Footer />
    </div>
  );
}

export default ExploreFoods;
