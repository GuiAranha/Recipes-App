import React, { useContext, useEffect, useState } from 'react';
import FoodCards from '../cards/FoodCards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/MyContext';
import { fetchFoodApi } from '../services/fetchApi';

function FoodNationalities() {
  const { setAllFood } = useContext(MyContext);
  const [nationalities, setNationalities] = useState([]);

  useEffect(() => {
    async function fetchNationalities() {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list%27');
      const { meals } = await response.json();
      setNationalities(meals);
    }
    fetchNationalities();
  }, []);

  const fetchAllFood = async () => {
    const data = await fetchFoodApi('fetchName', '');
    setAllFood(data.meals);
  };

  async function fetchFilterByNationalities(area) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await response.json();
    setAllFood(data.meals);
  }

  function filterNationality(e) {
    if (e.target.value !== 'all') {
      fetchFilterByNationalities(e.target.value);
    } else {
      fetchAllFood();
    }
  }

  return (
    <>
      <Header pageName="Explore Nationalities" needRender />
      <select
        data-testid="explore-by-nationality-dropdown"
        name="nationalities"
        id="nationalities"
        onChange={ filterNationality }
      >
        <option
          key="all"
          data-testid={ `${'all'}-option` }
          value="all"
        >
          All
        </option>
        {nationalities.map((nationality, i) => (
          <option
            key={ i }
            data-testid={ `${nationality.strArea}-option` }
            value={ nationality.strArea }
          >
            {nationality.strArea}
          </option>
        ))}
      </select>
      <FoodCards />
      <Footer />
    </>
  );
}

export default FoodNationalities;
