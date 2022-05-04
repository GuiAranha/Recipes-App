import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function FoodDetails() {
  const [food, setFood] = useState('');
  const location = useLocation();
  const { pathname: id } = location;
  const idNumber = id.split('foods/')[1];

  useEffect(() => {
    const fetchById = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idNumber}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setFood(data.meals);
    };
    fetchById();
  }, [idNumber]);

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
