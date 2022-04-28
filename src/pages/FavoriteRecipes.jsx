import React from 'react';
import Header from '../components/Header';

function FavoriteRecipes() {
  return (
    <>
      <Header pageName="Favorite Recipes" needRender={ false } />
      <span>Estou em Receitas Favoritas</span>
    </>
  );
}

export default FavoriteRecipes;
