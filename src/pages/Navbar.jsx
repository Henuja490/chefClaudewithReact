import React from 'react'
import Logo from '../assets/chef-claude-icon.png'
function Navbar() {
  return (
    <div className='navbar'>
      <img src={Logo} alt="chefClaudeLogo"  />
      <h1>Chef Claude</h1>
    </div>
  )
}

export default Navbar
