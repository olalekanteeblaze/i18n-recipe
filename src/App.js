import React from 'react';
import './App.css';
import config from './config';
import RecipeCard from './RecipeCard';
import './i18n';
import { useTranslation } from 'react-i18next';

function App() {
  const { i18n } = useTranslation('translations')
  const recipes = [
    {
      name: 'sandwich.name',
      instructions: ['sandwich.instructions.0', 'sandwich.instructions.1'],
      ingredients: ['sandwich.ingredients.0', 'sandwich.ingredients.1', 'sandwich.ingredients.2',  'sandwich.ingredients.3'],
      imageUrl: config[0].imageUrl
    },
    {
      name: 'pizza.name',
      instructions: ['pizza.instructions.0', 'pizza.instructions.1', 'pizza.instructions.2'],
      ingredients: ['pizza.ingredients.0', 'pizza.ingredients.1', 'pizza.ingredients.2'],
      imageUrl: config[1].imageUrl
    }
  ]
  const changeLanguage = (e) => {
    console.log(e.target.value)
    i18n.changeLanguage(e.target.value, (err) => console.log(err))
  }
  return (
    <div className="App">
          <div className={"radio-group"}>
            <input 
              type="radio" 
              name="language" 
              value="en" 
              id="en" 
              onChange={changeLanguage}
            />
            <label htmlFor="en">English</label>
            <input 
              type="radio" 
              name="language" 
              value="es" 
              onChange={changeLanguage}
              id="es"
            />
            <label htmlFor="es">Spanish</label>
          </div>
          {recipes.map(recipe => (
            <RecipeCard recipe={recipe} />
          ))}    
    </div>
  );
}

export default App;
