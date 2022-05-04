import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function DrinkDetails() {
  const [drink, setDrink] = useState('');
  const location = useLocation();
  const { pathname: id } = location;
  const idNumber = id.split('drinks/')[1];

  useEffect(() => {
    const fetchById = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idNumber}`;
      const response = await fetch(url);
      const data = await response.json();
      setDrink(data.drinks);
    };
    fetchById();
  }, [idNumber]);

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
