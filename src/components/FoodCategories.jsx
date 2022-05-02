import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import MyContext from '../context/MyContext';

function FoodCategories() {
  const { foodCategories, setAllFood } = useContext(MyContext);
  const MAX_RENDER = 5;
  if (foodCategories.length > MAX_RENDER) {
    foodCategories.length = 5;
  }

  const applyCategoryFilter = async (category) => {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    const data = await fetch(url);
    const { meals } = await data.json();
    setAllFood(meals);
  };

  return (
    <div>

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
