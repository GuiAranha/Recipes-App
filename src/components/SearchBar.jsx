import React, { useState } from 'react';
import fetchApi from '../services/fetchApi';

function SearchBar() {
  const [searchRadio, setSearchRadio] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const searchClick = async () => {
    console.log('cliquei no search meu valor é', searchRadio);
    if (searchRadio === 'ingredient') {
      await fetchApi('fetchIngredient', searchValue);
    }
    if (searchRadio === 'radioName') {
      await fetchApi('fetchName', searchValue);
    }
    if (searchRadio === 'firstLetter') {
      if (searchValue.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        await fetchApi('fetchFirstLetter', searchValue);
      }
    }
  };

  return (
    <div>
      <div>
        <input
          data-testid="search-input"
          type="text"
          placeholder="Buscar"
          value={ searchValue }
          onChange={ ({ target }) => setSearchValue(target.value) }
        />
      </div>
      <div>
        <label htmlFor="ingredient-radio">
          <input
            data-testid="ingredient-search-radio"
            type="radio"
            name="search-radio"
            id="ingredient-radio"
            onChange={ () => setSearchRadio('ingredient') }
          />
          Ingredient
        </label>
        <label htmlFor="name-radio">
          <input
            data-testid="name-search-radio"
            type="radio"
            name="search-radio"
            id="name-radio"
            onChange={ () => setSearchRadio('radioName') }
          />
          Name
        </label>
        <label htmlFor="first-letter-radio">
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            name="search-radio"
            id="first-letter-radio"
            onChange={ () => setSearchRadio('firstLetter') }
          />
          First Letter
        </label>
        <div>
          <button
            data-testid="exec-search-btn"
            type="button"
            onClick={ searchClick }
          >
            Search

          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
