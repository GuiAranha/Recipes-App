import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import RecomendationCards from '../cards/RecomendationCards';
import ShareIcon from '../images/shareIcon.svg';
import WhiteHeartIcon from '../images/whiteHeartIcon.svg';

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
      <img
        data-testid="recipe-photo"
        src={ drink[0].strDrinkThumb }
        alt="Ilustração receita bebida"
      />
      <h1 data-testid="recipe-title">
        {drink[0].strDrink}
      </h1>
      <p data-testid="recipe-category">{drink[0].strAlcoholic}</p>
      <input
        data-testid="share-btn"
        type="image"
        src={ ShareIcon }
        alt="ícone de compartilhamento"
      />
      <input
        data-testid="favorite-btn"
        type="image"
        src={ WhiteHeartIcon }
        alt="ícone de coração para favoritar"
      />
      <h3>Instructions</h3>
      <p data-testid="instructions">{drink[0].strInstructions}</p>
      <RecomendationCards type="drink" />
      <Button data-testid="start-recipe-btn">Start Recipe</Button>
    </div>

  );
}

export default DrinkDetails;
