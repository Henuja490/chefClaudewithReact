import React, { useState } from 'react'

function Section1(props) {

    const ingredientList = props.ingeredient.map((item)=>{
        return <li>{item}</li>
      })
  return (
    <div>
      <section>
          <h2>Ingredients on hand:</h2><br /> 
          <ul>
            {ingredientList}
          </ul>
          {props.ingeredient.length>3 &&<div className='get-recipe'>
            <div >
              <h3>Ready for recipe</h3>
              <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={props.toggleRecipe} className='getRecipe'>Get a recipe</button>
          </div>}
        </section>
    </div>
  )
}

export default Section1;