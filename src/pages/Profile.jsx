import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function profile() {
  return (
    <>
      <Header pageName="Profile" needRender={ false } />
      <Footer />
    </>
  );
}
