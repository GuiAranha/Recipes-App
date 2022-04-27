import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Foods() {
  return (
    <>
      <Header pageName="Foods" needRender type="food" />
      <div>Estou no foods</div>
      <Footer />
    </>
  );
}

export default Foods;
