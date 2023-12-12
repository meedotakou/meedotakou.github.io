import React, { useEffect, useState } from 'react'
import { Menu } from './Menu'
import './Header.css'
export const Header = () => {
  const [showMenu,SetShwoMenu] = useState(false)

    const MenuShowButton = ()=>{
        SetShwoMenu(!showMenu)
      }
useEffect(()=>{
  console.log('tetsing bto')
})
  return (
    <header id="header">
          <nav className='container'>
            <ul>
                <li></li>
                <li>
                    <button className='navMenuButton' 
                            onClick={MenuShowButton}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </li>
            </ul>
          </nav>
        <Menu show={showMenu} MenuClicking={MenuShowButton} />
  </header>
  )
}
