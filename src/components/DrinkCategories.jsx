import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import MyContext from '../context/MyContext';

function DrinkCategories() {
  const { drinkCategories } = useContext(MyContext);
  const MAX_RENDER = 5;
  if (drinkCategories.length > MAX_RENDER) {
    drinkCategories.length = 5;
  }

  return (
    <div>

      {drinkCategories.map(({ strCategory }, index) => (
        <div key={ index }>
          <Button
            data-testid={ `${strCategory}-category-filter` }
            type="button"
          >
            {strCategory}

          </Button>
        </div>
      ))}
    </div>
  );
}

export default DrinkCategories;
