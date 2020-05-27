import React from 'react';
import style from "./Header.module.sass"
import { NavLink } from 'react-router-dom';

const Header = (props) =>{  
    return <header className={style.head}>
        <img src='https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png' />
        <div className={style.loginBlock}>
            {props.isAuth? props.login : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header