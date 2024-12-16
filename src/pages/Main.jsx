import React from 'react'
import { useState } from 'react';
import Section1 from './section1';
import Section2 from './section2';
import { getRecipeFromMistral } from '../assets/ai';

function Main() {
  let [ingredients ,setIngredients] = useState([]);
  let [recipeShown , setRecipeShown]= useState("");
  function Submit(event) {
    event.preventDefault();
    const el = event.currentTarget;
    const formData = new FormData(el);
    const ingeredient = formData.get("item");
    setIngredients(prevIngredients => [...prevIngredients,ingeredient]);
    
  }
  async function toggleRecipe() {
    const answer = await getRecipeFromMistral(ingredients)
    setRecipeShown(answer)
  }

  
  return (
    <div className='Main'>
        <form  onSubmit={Submit} className='add_ingredient'>
            <input 
            type='text'
            name='item'
            placeholder='e.g.oregano'
            aria-label='Add ingredient'
            />
            <button >Add Ingredient</button>

        </form><br /><br />
        
        {ingredients.length >0 && <Section1 ingeredient={ingredients} toggleRecipe={toggleRecipe}/>}
        {recipeShown && <Section2 recipe={recipeShown}/>}
        
    </div>
  )
}

export default Main;
