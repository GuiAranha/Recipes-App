import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import MyContext from '../context/MyContext';

function DrinkCategories() {
  const { drinkCategories, setAllDrink } = useContext(MyContext);
  const MAX_RENDER = 5;
  if (drinkCategories.length > MAX_RENDER) {
    drinkCategories.length = 5;
  }

  const applyCategoryFilter = async (category) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
    const data = await fetch(url);
    const { drinks } = await data.json();
    setAllDrink(drinks);
  };

  return (
    <div>

      {drinkCategories.map(({ strCategory }, index) => (
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

export default DrinkCategories;
