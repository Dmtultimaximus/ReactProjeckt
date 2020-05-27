import React from 'react'
import style from './Dialogs.module.sass'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/dialogItem'
import Message from './Message/message'
import { updateNewMessageBody, addMessage } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'




// const DialogsContainer = (props) => {
//     // debugger

//     let state = props.store.getState().dialogsPage
//     let onSendMessage = ()=>{
//         props.store.dispatch(addMessage());
//     }
//     let onNewMessageChange = (body) =>{
//         props.store.dispatch(updateNewMessageBody(body));
//     }
//     return (
//         <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessage} dialogsPage={state}/>
//     )
// }

let mapStateToProps =(state)=>{
    return{
        dialogsPage: state.dialogsPage
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