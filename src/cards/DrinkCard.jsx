import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function DrinkCards() {
  const { allDrink } = useContext(MyContext);

  const MAX_RENDER = 12;
  if (allDrink.length > MAX_RENDER) {
    allDrink.length = 12;
  }

  return (
    <div>
      {allDrink.map(({ strDrinkThumb, strDrink }, index) => (
        <div
          key={ index }
          data-testid={ `${index}-recipe-card` }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ strDrinkThumb }
            alt={ `Imagem da receita ${strDrink}` }
          />
          <p
            data-testid={ `${index}-card-name` }
          >
            {strDrink}
          </p>
        </div>

      ))}
    </div>
  );
}

export default DrinkCards;
