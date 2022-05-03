import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function FoodIngredients() {
  return (
    <>
      <Header pageName="Explore Ingredients" needRender={ false } />
      <div> Estou na Explore Foods Ingredients</div>
      <Footer />
    </>
  );
}

export default FoodIngredients;
