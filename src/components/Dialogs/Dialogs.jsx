import React from 'react'
import style from './Dialogs.module.sass'
import { NavLink, Redirect } from 'react-router-dom'
import DialogItem from './DialogItem/dialogItem'
import Message from './Message/message'
import { updateNewMessageBody, addMessage } from '../../redux/dialogs-reducer'




const Dialogs = (props) => {

    let state = props.dialogsPage
    let dialogsElement = state.people.map( el => <DialogItem name={el.name} id={el.id}/>);
    let newMessageBody = state.newMessageText;
    let messageElement = state.messageData.map( el => <Message message={el.message}/>);
    let onSendMessage = ()=>{
        props.sendMessage()
    }
    let onNewMessageChange = (event) =>{
        let body = event.target.value;
        props.updateNewMessageBody(body)
        
    }

    if(!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs_item}>
                {dialogsElement}
            </div>
            <div className={style.messages}>
                <div>{messageElement}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody} onChange={onNewMessageChange} ></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessage}>send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs