import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import RecomendationCards from '../cards/RecomendationCards';
import ShareIcon from '../images/shareIcon.svg';
import WhiteHeartIcon from '../images/whiteHeartIcon.svg';
import BlackHeartIcon from '../images/blackHeartIcon.svg';
import './FixedButton.css';

function FoodDetails() {
  const [food, setFood] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const { pathname: id } = location;
  const idNumber = id.split('foods/')[1];

  useEffect(() => {
    const fetchById = async () => {
      const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idNumber}`;
      const response = await fetch(url);
      const data = await response.json();
      setFood(data.meals);
    };
    fetchById();
  }, [idNumber]);

  if (food.length === 0) {
    return (<div>Carregando</div>);
  }

  const ingredients = Object.values(Object.fromEntries(Object.entries(food[0])
    .filter(([key]) => key.includes('Ingredient')))).filter((e) => e !== null);

  const measures = Object.values(Object.fromEntries(Object.entries(food[0])
    .filter(([key]) => key.includes('Measure')))).filter((e) => e !== null);

  const totalIngredients = ingredients
    .map((element, index) => (
      measures[index]
        ? element.concat(` - ${measures[index]}`)
        : element
    ));

  const redirectInProgress = () => {
    history.push(`${id}/in-progress`);
  };

  // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`${window.location}`);
    setLinkCopied(true);
  };

  const favoriteRecipe = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div>
      <img
        width={ 360 }
        data-testid="recipe-photo"
        src={ food[0].strMealThumb }
        alt="ilustração da receita"
      />
      <h1 data-testid="recipe-title">
        {food[0].strMeal}
      </h1>
      <p data-testid="recipe-category">{food[0].strCategory}</p>
      {linkCopied ? 'Link copied!'
        : (
          <input
            onClick={ copyToClipboard }
            data-testid="share-btn"
            type="image"
            src={ ShareIcon }
            alt="ícone de compartilhamento"
          />)}
      <input
        onClick={ favoriteRecipe }
        data-testid="favorite-btn"
        type="image"
        src={ isFavorite ? BlackHeartIcon : WhiteHeartIcon }
        alt="ícone de coração para favoritar"
      />
      <h3>Ingredients</h3>
      {totalIngredients.map((element, index) => (
        <div key={ index }>
          <p data-testid={ `${index}-ingredient-name-and-measure` }>{element}</p>
        </div>
      ))}
      <h3>Instructions</h3>
      <p data-testid="instructions">{food[0].strInstructions}</p>
      <h3>Video</h3>
      <p>{food[0].strYoutube}</p>
      <iframe
        data-testid="video"
        src={ `https://www.youtube.com/embed/${food[0].strYoutube.split('v=')[1]}` }
        allow="encrypted-media"
        title="video"
      />
      <RecomendationCards type="food" />
      <Button
        onClick={ redirectInProgress }
        data-testid="start-recipe-btn"
        className="start-recipe-button"
      >
        Start Recipe

      </Button>
    </div>

  );
}

// Explicação para utilização do embed no lugar do watch, tendo que fazer o split para pegar somente o id do vídeo
// https://stackoverflow.com/questions/25661182/embed-youtube-video-refused-to-display-in-a-frame-because-it-set-x-frame-opti
export default FoodDetails;
