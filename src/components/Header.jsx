import React from 'react';
import profileIcon from '../images/profileIcon.svg';
import seartchIcon from '../images/searchIcon.svg';

function Header() {
  return (
    <header>

      <img
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="figura usuário"
      />
      <h1
        data-testid="page-title"
      >
        Foods
      </h1>
      <img
        data-testid="search-top-btn"
        src={ seartchIcon }
        alt="botão para pesquisar"
      />

    </header>
  );
}

export default Header;
