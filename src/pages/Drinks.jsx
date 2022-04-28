import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/MyContext';

function Drinks() {
  const { filteredDrink, drink } = useContext(MyContext);
  const MAX_RENDER = 12;
  if (drink.length > MAX_RENDER) {
    drink.length = 12;
  }
  return (
    <>
      <Header pageName="Drinks" needRender type="drink" />
      <div>Drinks</div>
      {filteredDrink
      && drink.map((element, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-card-img` }
            src={ element.strDrinkThumb }
            alt="food ilustration"
          />
          <p data-testid={ `${index}-card-name` }>
            {element.strDrink}
          </p>
        </div>
      ))}
    </>
  );
}

export default Drinks;
