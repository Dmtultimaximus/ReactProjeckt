import React from 'react';
import style from "./Navbar.module.sass"
import { NavLink } from 'react-router-dom';

const Navbar = () =>{  
    return <nav className={style.nav}>
        <ul>
            <li className={style.item}><NavLink to='/profile' activeClassName={style.active}>Profile</NavLink></li>
            <li className={style.item}><NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink></li>
            <li className={style.item}><NavLink to='/users' activeClassName={style.active}>Users</NavLink></li>
            <li className={style.item}><a>Music</a></li>
            <li className={style.item}><a>Settings</a></li>
        </ul>
    </nav>
}

export default Navbar