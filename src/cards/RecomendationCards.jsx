import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function RecomendationCards({ type }) {
  let recomendation = [];
  const { allFood, allDrink } = useContext(MyContext);
  const MAX_LENGTH = 6;

  if (allFood.length > MAX_LENGTH || allDrink.length > MAX_LENGTH) {
    allFood.length = 6;
    allDrink.length = 6;
  }

  if (type === 'drink') {
    recomendation = allDrink;
  } else {
    recomendation = allFood;
  }

  return (
    <>
      {recomendation.map(({ strCategory }, index) => (
        <div
          data-testid={ `${index}-recomendation-card` }
          key={ index }
        >
          {strCategory}

        </div>

      ))}

    </>
  );
}

export default RecomendationCards;

RecomendationCards.propTypes = {
  type: PropTypes.string,
}.isRequired;
