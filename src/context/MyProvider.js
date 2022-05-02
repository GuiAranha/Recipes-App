import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import { fetchFoodApi, fetchDrinkApi } from '../services/fetchApi';

function Provider({ children }) {
  const [food, setFood] = useState([]);
  const [drink, setDrink] = useState([]);
  const [filteredFood, setFilteredFood] = useState(false);
  const [filteredDrink, setFilteredDrink] = useState(false);
  const [allFood, setAllFood] = useState([]);
  const [allDrink, setAllDrink] = useState([]);
  const [globalRender, setGlobalRender] = useState(true);

  const value = {
    food,
    setFood,
    drink,
    setDrink,
    filteredFood,
    setFilteredFood,
    filteredDrink,
    setFilteredDrink,
    allFood,
    setAllFood,
    allDrink,
    setAllDrink,
    globalRender,
    setGlobalRender,
  };

  useEffect(() => {
    const fetchAllFood = async () => {
      const data = await fetchFoodApi('fetchName', '');
      setAllFood(data.meals);
    };
    fetchAllFood();
  }, []);

  useEffect(() => {
    const fetchAllDrink = async () => {
      const data = await fetchDrinkApi('fetchName', '');
      setAllDrink(data.drinks);
    };
    fetchAllDrink();
  }, []);

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
