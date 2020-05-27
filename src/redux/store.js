import profile_reducer from "./profile-reducer"
import dialogs_reducer from "./dialogs-reducer"
import sidebar_reducer from "./sidebar-reducer"



const ADD_POST ='ADD-POST'
const UPDATE_NEW_TEXT ='UPDATE-NEW-TEXT'
const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT'
const ADD_NEW_MESSAGE ='ADD-NEW-MESSAGE'
let store ={
    _state : {

        profilePage :{
            posts: [
                { id: 1, message: 'hi How are you?', likesCount: 1 },
                { id: 2, message: 'it`s my first post!', likesCount: 3 }
            ],
            newPostText: 'it-cama'
        },
    
        dialogsPage :{
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
    },
    _callsubscriber (){
        console.log("state is changed")
    },
    subscribe (observer) {
        this._callsubscriber = observer
    },
    getState(){
        return this._state
    },
    addPost (){
        
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 5
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callsubscriber(this._state);
    },
    updateNewText (newText){

        this._state.profilePage.newPostText = newText
        this._callsubscriber(this._state);
    },
    dispatch(action){
        this._state.profilePage = profile_reducer(this._state.profilePage, action);
        
        this._state.dialogsPage = dialogs_reducer(this._state.dialogsPage, action);
        // this._state.sidebar = sidebar_reducer(this._state.sidebar, action);
        
        this._callsubscriber(this._state)
    },
}




// let rerenderDOM =() =>{
//     console.log("state is changed")
// }
// let state = {

//     profilePage :{
//         posts: [
//             { id: 1, message: 'hi How are you?', likesCount: 1 },
//             { id: 2, message: 'it`s my first post!', likesCount: 3 }
//         ],
//         newPostText: 'it-cama'
//     },

//     dialogsPage :{
//         people: [
//             { id: 1, name: 'dima' },
//             { id: 2, name: 'lena' },
//         ],
//         messageData: [
//             { id: 1, message: 'hi' },
//             { id: 2, message: 'hiiii' },
//             { id: 3, message: 'hiiiiiii' },
//         ]
//     }
// }

// export const  addPost =()=>{
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 5
//     }
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     rerenderDOM(state);
// }

// export const  updateNewText =(newText)=>{

//     state.profilePage.newPostText = newText
//     rerenderDOM(state);
// }


// export const subscribe=(observer)=>{
//     rerenderDOM = observer
// } 
export default store
window.store = store;

  
  
   
   