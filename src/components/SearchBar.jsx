import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import { fetchFoodApi, fetchDrinkApi } from '../services/fetchApi';

function SearchBar({ type }) {
  const { drink, setDrink, food, setFood } = useContext(MyContext);
  const history = useHistory();
  const [searchRadio, setSearchRadio] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    function verifyQuantity() {
      if (food.length === 1) {
        const { idMeal } = food[0];
        history.push(`/foods/${idMeal}`);
      }
      if (drink.length === 1) {
        const { idDrink } = drink[0];
        history.push(`/drinks/${idDrink}`);
      }
    }
    verifyQuantity();
  }, [drink, food, history]);

  async function drinkApi() {
    if (searchRadio === 'ingredient') {
      const data = await fetchDrinkApi('fetchIngredient', searchValue);
      console.log(data);
      setDrink(data.drinks);
    }
    if (searchRadio === 'radioName') {
      const data = await fetchDrinkApi('fetchName', searchValue);
      console.log(data);
      setDrink(data.drinks);
    }
    if (searchRadio === 'firstLetter') {
      if (searchValue.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else {
        const data = await fetchDrinkApi('fetchFirstLetter', searchValue);
        console.log(data);
        setDrink(data.drinks);
      }
    }
  }
  const searchClick = async () => {
    if (type === 'food') {
      if (searchRadio === 'ingredient') {
        const data = await fetchFoodApi('fetchIngredient', searchValue);
        console.log(data.meals);
        setFood(data.meals);
      }
      if (searchRadio === 'radioName') {
        const data = await fetchFoodApi('fetchName', searchValue);
        console.log(data.meals);
        setFood(data.meals);
      }
      if (searchRadio === 'firstLetter') {
        if (searchValue.length > 1) {
          global.alert('Your search must have only 1 (one) character');
        } else {
          const data = await fetchFoodApi('fetchFirstLetter', searchValue);
          console.log(data.meals);
          setFood(data.meals);
        }
      }
    } else {
      drinkApi();
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

SearchBar.propTypes = {
  needRender: PropTypes.bool,
}.isRequired;
