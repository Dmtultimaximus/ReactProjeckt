import { usersAPI } from "../api/api"

const ADD_POST ='ADD-POST'
const UPDATE_NEW_TEXT ='UPDATE-NEW-TEXT'
const SET_USER_PROFILE='SET_USER_PROFILE'  

let initialState = {
    posts: [
        { id: 1, message: 'hi How are you?', likesCount: 1 },
        { id: 2, message: 'it`s my first post!', likesCount: 3 }
    ],
    newPostText: 'it-cama',
    profile: null
}
const profile_reducer =(state = initialState, action)=>{
    switch (action.type){
        case ADD_POST:{
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 5
            }
            return{
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            } ;
        }
        case UPDATE_NEW_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE:{
            
            return {
                ...state,
                profile: action.profile
            };
        }
        default: 
            return state;
    }
}
export const addPostActionCreator =()=>{
    
    return{
        type: ADD_POST,
       
    }
}
export const onPostActionCreator =(text)=>{
    
    return{
        type:UPDATE_NEW_TEXT,
        newText:text
    }
}
export const setUserProfile =(profile)=>{
    
    return{
        type:SET_USER_PROFILE,
        profile
    }
}
export const getUserProfile =(userId)=> (dispatch) =>{

    return usersAPI.getProfile(userId).then(response =>{       
        dispatch(setUserProfile(response.data) )         
     })

}
export default  profile_reducer
