import React, { useRef } from 'react'
import './Menu.css'
import { Link } from 'react-router-dom'
export const Menu = ({show,MenuClicking}) => {
    console.log(show)
    const Menu = useRef()
    const handHover = (e)=>{
        Menu.current.setAttribute('data-test-id',e.target.innerText)
        Menu.current.classList.add('hover');
    }
    const handLeave= ()=>{
        Menu.current.setAttribute('data-test-id',"")
        Menu.current.classList.remove('hover');

    }
    const HandlClick = ()=>{
        MenuClicking()
    }
  return (
    <div className={`MenuHeader ${show ? "MenuShow":""}`}>

        <div id="Menu" ref={Menu} data-test-id="">
                <div className='container'>
                    <div className='MenuClass'>
                        <div className='MenuHeaderLogo'>
                        </div>
                        <div className='closeButton'>
                            <div onClick={MenuClicking}>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="" onClick={()=>HandlClick()} onMouseOver={handHover} onMouseLeave={handLeave}>home</Link></li>
                                <li><Link to="/about" onClick={()=>HandlClick()} onMouseOver={handHover} onMouseLeave={handLeave} data-test-id="">About</Link></li>
                                <li><Link to="/Portfolio" onClick={()=>HandlClick()} onMouseOver={handHover} onMouseLeave={handLeave}>portfolio</Link></li>
                                <li><Link to="/Contact" onClick={()=>HandlClick()} onMouseOver={handHover} onMouseLeave={handLeave}>contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </div>
    </div>
  )
}
