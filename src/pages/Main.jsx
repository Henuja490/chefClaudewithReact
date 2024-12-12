import React from 'react'

function Main() {
  return (
    <div className='Main'>
        <form className='add_ingredient'>
            <input 
            type='text'
            placeholder='e.g.oregano'
            aria-label='Add ingredient'
            />
            <button>Add Ingredient</button>

        </form>
     
    </div>
  )
}

export default Main;
