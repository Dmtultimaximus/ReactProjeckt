import React from 'react'
import style from './Dialogs.module.sass'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/dialogItem'
import Message from './Message/message'
import { updateNewMessageBody, addMessage } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'






let mapStateToProps =(state)=>{
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        updateNewMessageBody: (body)=>{
            dispatch( updateNewMessageBody(body) );
        },
        sendMessage: ()=>{
            dispatch(addMessage());
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer