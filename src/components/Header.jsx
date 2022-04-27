import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import seartchIcon from '../images/searchIcon.svg';

function Header({ pageName, needRender }) {
  const history = useHistory();
  const [activateSearch, setActivateSearch] = useState(false);

  const profileRedirect = () => {
    history.push('/profile');
  };

  return (
    <header>
      <input
        type="image"
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="icone de perfil"
        onClick={ profileRedirect }
      />

      <h1
        data-testid="page-title"
      >
        { pageName }
      </h1>
      { needRender
      && <input
        type="image"
        data-testid="search-top-btn"
        src={ seartchIcon }
        alt="botão para pesquisar"
        onClick={ () => setActivateSearch(!activateSearch) }
      />}
      {activateSearch
      && <input
        data-testid="search-input"
        type="text"
        placeholder="Buscar"
      />}

    </header>
  );
}

export default Header;

Header.propTypes = {
  needRender: PropTypes.bool,
}.isRequired;
