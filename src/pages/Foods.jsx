import React, { useContext } from 'react';
import Header from '../components/Header';
import MyContext from '../context/MyContext';
import Footer from '../components/Footer';

function Foods() {
  const { filteredFood, food } = useContext(MyContext);
  if (food === null) {
    return (
      <div>
        <Header pageName="Foods" needRender type="food" />
        <div>Receita não encontrada</div>
      </div>
    );
  }

  const MAX_RENDER = 12;
  if (food.length > MAX_RENDER) {
    food.length = 12;
  }
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

      <div>Estou no foods</div>
      
      <Footer />
    </>
  );
}

export default Foods;
