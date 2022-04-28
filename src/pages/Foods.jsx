import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/MyContext';

function Foods() {
  const { filteredFood, food } = useContext(MyContext);
  console.log(filteredFood);
  return (
    <>
      <Header pageName="Foods" needRender type="food" />
      <div> Foods </div>
      {filteredFood
      && food.map((element, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <img
            data-testid={ `${index}-card-img` }
            src={ element.strMealThumb }
            alt="food ilustration"
          />
          <p data-testid={ `${index}-card-name` }>
            {element.strMeal}
          </p>
        </div>
      ))}
    </>
  );
}

export default Foods;
