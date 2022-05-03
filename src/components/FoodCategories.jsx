import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import MyContext from '../context/MyContext';
import { fetchFoodApi } from '../services/fetchApi';

function FoodCategories() {
  const { foodCategories, setAllFood } = useContext(MyContext);
  const [toggle, setToggle] = useState(true);
  const MAX_RENDER = 5;
  if (foodCategories.length > MAX_RENDER) {
    foodCategories.length = 5;
  }

  const selectAllFood = async () => {
    const data = await fetchFoodApi('fetchName', '');
    setAllFood(data.meals);
  };

  const applyCategoryFilter = async (category) => {
    if (toggle) {
      const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
      const data = await fetch(url);
      const { meals } = await data.json();
      setAllFood(meals);
    } else {
      selectAllFood();
    }
    setToggle(!toggle);
  };

  return (
    <div>
      <Button
        data-testid="All-category-filter"
        type="button"
        onClick={ selectAllFood }
      >
        All

      </Button>
      {foodCategories.map(({ strCategory }, index) => (
        <div key={ index }>
          <Button
            data-testid={ `${strCategory}-category-filter` }
            type="button"
            onClick={ () => applyCategoryFilter(strCategory) }
          >
            {strCategory}

          </Button>
        </div>
      ))}
    </div>
  );
}

export default FoodCategories;