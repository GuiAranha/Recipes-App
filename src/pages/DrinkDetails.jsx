import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function DrinkDetails() {
  const { drink } = useContext(MyContext);
  if (drink.length === 0) {
    return (<div>Não existe detalhe</div>);
  }
  return (
    <div>
      <h1>
        {drink[0].strDrink}
      </h1>
      <img src={ drink[0].strDrinkThumb } alt="Ilustração receita bebida" />
      <div>Estou no DrinkDetails</div>
    </div>

  );
}

export default DrinkDetails;
