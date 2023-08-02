import React, {useState}from 'react'
import * as FaIcons from "react-icons/fa6";
import * as AiIcons from "react-icons/ai";
import './Navbar.css'

import { Link } from 'react-router-dom';

import { SidebarData } from './sidebarData';

import {IconContext} from 'react-icons'

function Navbar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
    <div className='navsidebar'>
        <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
        </Link>
    </div>

    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                    <AiIcons.AiOutlineClose />
                </Link>

            </li>

            {SidebarData.map((item, index) =>
            {
                return (
                    <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icons}
                            <p className='nav-title'>{item.title}</p>
                        </Link>
                    </li>
                )
            })}


        </ul>









    </nav>
    </IconContext.Provider>

    </>
  )
}

export default Navbar