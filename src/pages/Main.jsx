import React from 'react'
import { useState } from 'react';

function Main() {
  let [ingredients ,setIngredients] = useState([]);
  let [recipeShown , setRecipeShown]= useState(false);
  function Submit(event) {
    event.preventDefault();
    const el = event.currentTarget;
    const formData = new FormData(el);
    const ingeredient = formData.get("item");
    setIngredients(prevIngredients => [...prevIngredients,ingeredient]);
    
  }
  function toggeleRecipeShown() {
    setRecipeShown(true);
  }

  const ingredientList = ingredients.map((item)=>{
    return <li>{item}</li>
  })
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
        {ingredientList.length >0 && <section>
          <h2>Ingredients on hand:</h2><br /> 
          <ul>
            {ingredientList}
          </ul>
          {ingredientList.length>3 &&<div className='get-recipe'>
            <div>
              <h3>Ready for recipe</h3>
              <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={toggeleRecipeShown}>Get a recipe</button>
          </div>}
        </section>}
        {recipeShown && <section>
          Hi from AI
        </section>}
        
    </div>
  )
}

export default Main;
