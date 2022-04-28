import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function FoodDetails() {
  const { food } = useContext(MyContext);

  return (
    <div>
      <h1>
        {food[0].strMeal}
      </h1>
      <img src={ food[0].strMealThumb } alt="ilustração da receita" />
      <div>Estou no FoodDetails</div>
    </div>

  );
}

export default FoodDetails;
