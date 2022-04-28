import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';

function Provider({ children }) {
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const [filteredFood, setFilteredFood] = useState(false);
  const [filteredDrink, setFilteredDrink] = useState(false);

  const value = {
    food,
    setFood,
    drink,
    setDrink,
    filteredFood,
    setFilteredFood,
    filteredDrink,
    setFilteredDrink,
  };

  return (
    <MyContext.Provider value={ value }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default Provider;
