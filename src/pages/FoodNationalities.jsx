import React, { useContext, useEffect, useState } from 'react';
import FoodCards from '../cards/FoodCards';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MyContext from '../context/MyContext';

function FoodNationalities() {
  const { allFood, setAllFood } = useContext(MyContext);
  const [nationalities, setNationalities] = useState([]);
  const [beforeFilterArea, setbeforeFilterArea] = useState(['a', 'b']);

  useEffect(() => {
    async function fetchNationalities() {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list%27');
      const { meals } = await response.json();
      setNationalities(meals);
    }
    fetchNationalities();
  }, []);

  useEffect(() => {
    setbeforeFilterArea(allFood); // precisa armazenar o allFood do inicio
    console.log(allFood);
    console.log(beforeFilterArea);
  }, []);

  async function fetchFilterByNationalities(area) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await response.json();
    setAllFood(data.meals);
  }

  function filterNationality(e) {
    if (e.target !== 'all') {
      fetchFilterByNationalities(e.target.value);
    } else {
      setAllFood(beforeFilterArea);// precisa ser o mesmo array do inicio.
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
