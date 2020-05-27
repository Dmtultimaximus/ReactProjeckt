import React from 'react'
import style from './Dialogs.module.sass'
import { NavLink } from 'react-router-dom'
import DialogItem from './DialogItem/dialogItem'
import Message from './Message/message'
import { updateNewMessageBody, addMessage } from '../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux'





let mapStateToProps =(state)=>{
    return{
        dialogsPage: state.dialogsPage,
        
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

// compose(
//     connect(mapStateToProps,mapDispatchToProps),
//     withAuthRedirect
// )(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs) 

// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)