import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function DrinkIngredients() {
  return (
    <>
      <Header pageName="Explore Ingredients" needRender={ false } />
      <span>Estou em Ingredintes de bebidas</span>
      <Footer />
    </>
  );
}

export default DrinkIngredients;
