import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FoodCards() {
  const { allFood } = useContext(MyContext);

  const MAX_RENDER = 12;
  if (allFood.length > MAX_RENDER) {
    allFood.length = 12;
  }

  return (
    <div>
      {allFood.map(({ strMealThumb, strMeal }, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ strMealThumb }
            alt={ `Imagem da receita ${strMeal}` }
          />
          <p
            data-testid={ `${index}-card-name` }
          >
            {strMeal}
          </p>
        </div>

      ))}
    </div>
  );
}

export default FoodCards;
