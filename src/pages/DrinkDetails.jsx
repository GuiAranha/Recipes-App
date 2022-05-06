import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import RecomendationCards from '../cards/RecomendationCards';
import ShareAndFavDrink from '../components/ShareAndFavDrink';
import './FixedButton.css';

function DrinkDetails() {
  const [drink, setDrink] = useState('');
  const location = useLocation();
  const history = useHistory();
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
  // filtro para selecionar somente as keys com valor igual a Ingredient
  // https://masteringjs.io/tutorials/fundamentals/filter-key#:~:text=JavaScript%20objects%20don't%20have,()%20function%20as%20shown%20below.
  const ingredients = Object.values(Object.fromEntries(Object.entries(drink[0])
    .filter(([key]) => key.includes('Ingredient')))).filter((e) => e !== null);

  const measures = Object.values(Object.fromEntries(Object.entries(drink[0])
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

  return (
    <div>
      <img
        width={ 360 }
        data-testid="recipe-photo"
        src={ drink[0].strDrinkThumb }
        alt="Ilustração receita bebida"
      />
      <h1 data-testid="recipe-title">
        {drink[0].strDrink}
      </h1>
      <p data-testid="recipe-category">{drink[0].strAlcoholic}</p>
      <ShareAndFavDrink actualFood={ drink } />
      <h3>Ingredients</h3>
      {totalIngredients.map((element, index) => (
        <div key={ index }>
          <p data-testid={ `${index}-ingredient-name-and-measure` }>{element}</p>
        </div>
      ))}
      <h3>Instructions</h3>
      <p data-testid="instructions">{drink[0].strInstructions}</p>
      <RecomendationCards type="drink" />
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

export default DrinkDetails;
