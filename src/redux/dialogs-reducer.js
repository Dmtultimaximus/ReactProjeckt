const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT'
const ADD_NEW_MESSAGE ='ADD-NEW-MESSAGE'

let initialState = {
    people: [
        { id: 1, name: 'dima' },
        { id: 2, name: 'lena' },
    ],
    messageData: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'hiiii' },
        { id: 3, message: 'hiiiiiii' },
    ],
    newMessageText:""
}
const  dialogs_reducer =(state = initialState, action)=>{

    
    switch(action.type){
        case UPDATE_NEW_MESSAGE_TEXT:
            
            return {
                ...state,
                newMessageText: action.body
            }
            
        case  ADD_NEW_MESSAGE:
            let body =state.newMessageText 
            // copyState.newMessageText = ''
            // copyState.messageData.push({id:5, message:body})
            return {
                ...state,
                newMessageText: '',
                messageData:[...state.messageData, {id:6 , message: body}]
            }
        default:
            return state     
    }
}
export const addMessage =()=>{
    
    return{
        type:ADD_NEW_MESSAGE,   
    }
}
export const updateNewMessageBody =(text)=>{
    
    return{
        type:UPDATE_NEW_MESSAGE_TEXT,
        body:text
    }
}
export default  dialogs_reducer
