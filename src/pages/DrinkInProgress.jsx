import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import ShareIcon from '../images/shareIcon.svg';
import WhiteHeartIcon from '../images/whiteHeartIcon.svg';
import BlackHeartIcon from '../images/blackHeartIcon.svg';
import './FixedButton.css';
import './FoodInProgess.css';

function DrinkInProgress() {
  const [drink, setDrink] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [enableButton, setEnableButton] = useState(true);
  const location = useLocation();
  const history = useHistory();
  const { pathname: id } = location;
  const idNumber = id.split('drinks/')[1].split('/')[0];

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
    return (<div>Carregando</div>);
  }

  const ingredients = Object.values(Object.fromEntries(Object.entries(drink[0])
    .filter(([key]) => key.includes('Ingredient')))).filter((e) => e !== null)
    .filter((ingredient) => ingredient.length > 0);

  const measures = Object.values(Object.fromEntries(Object.entries(drink[0])
    .filter(([key]) => key.includes('Measure')))).filter((e) => e !== null);
  // console.log(ingredients);
  const totalIngredients = ingredients
    .map((element, index) => (
      measures[index]
        ? element.concat(` - ${measures[index]}`)
        : element
    ));

  const redirectDoneRecipes = () => {
    history.push('/done-recipes');
  };

  // https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`${window.location}`.split('/in-progress')[0]);
    setLinkCopied(true);
  };

  const favoriteRecipe = () => {
    setIsFavorite(!isFavorite);
  };

  const verifyFinishButton = () => {
    const checked = document.querySelectorAll('input[type=checkbox]:checked').length;
    const allCheckbox = document.querySelectorAll('input[type=checkbox]').length;
    if (checked === allCheckbox) {
      setEnableButton(false);
    } else {
      setEnableButton(true);
    }
  };

  return (
    <div>
      <img
        width={ 360 }
        data-testid="recipe-photo"
        src={ drink[0].strDrinkThumb }
        alt="ilustração da receita"
      />
      <h1 data-testid="recipe-title">
        {drink[0].strDrink}
      </h1>
      <p data-testid="recipe-category">{drink[0].strCategory}</p>
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
        <div key={ index } data-testid={ `${index}-ingredient-step` }>
          <input
            onChange={ verifyFinishButton }
            type="checkbox"
            name={ element }
          />
          <label htmlFor={ element }>
            { element }
          </label>
        </div>
      ))}
      <h3>Instructions</h3>
      <p data-testid="instructions">{drink[0].strInstructions}</p>
      <Button
        disabled={ enableButton }
        onClick={ redirectDoneRecipes }
        data-testid="finish-recipe-btn"
        className="finish-recipe-button"
      >
        Finish Recipe

      </Button>
    </div>

  );
}

export default DrinkInProgress;
