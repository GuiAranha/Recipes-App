import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import MyContext from '../context/MyContext';

function FoodCategories() {
  const { foodCategories } = useContext(MyContext);
  const MAX_RENDER = 5;
  if (foodCategories.length > MAX_RENDER) {
    foodCategories.length = 5;
  }

  return (
    <div>

      {foodCategories.map(({ strCategory }, index) => (
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

export default FoodCategories;
