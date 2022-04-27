import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Drinks() {
  return (
    <>
      <Header pageName="Drinks" needRender type="drink" />
      <span>Estou em bebidas</span>
      <Footer />
    </>
  );
}

export default Drinks;
