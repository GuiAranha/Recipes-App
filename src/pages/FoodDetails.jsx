import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FoodDetails() {
  const { food } = useContext(MyContext);
  if (food.length === 0) {
    return (<div>Não existe detalhe</div>);
  }
  return (
    <div>
      <img src={ food[0].strMealThumb } alt="ilustração da receita" />
      <p>
        {food[0].strMeal}
      </p>
      <div>Estou no FoodDetails</div>
    </div>

  );
}

export default FoodDetails;
