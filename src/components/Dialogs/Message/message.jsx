import React from 'react'
import style from './message.module.sass'
import { NavLink } from 'react-router-dom'

const Message = (props) =>{
    return(
        <div className={style.message}>{props.message}</div>
    )
}

export default Message