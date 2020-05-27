import React from 'react';
import Post from './Post'
import { addPostActionCreator, onPostActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';


// const PostContainer = (props) =>{  
//     debugger
//     let state = props.store.getState()
//     let addPost = ()=>{  
//         // props.addPost();   
//         props.store.dispatch(addPostActionCreator())
//     }
//     let onPostChange =(text)=>{
//         let action = onPostActionCreator(text)      
//         props.store.dispatch(action)
//     }
//     return (
//         <Post updateNewPostText={onPostChange} addPost ={addPost} posts={state.profilePage.posts} newPost={state.profilePage.newPostText}/>
//     )
// }

let mapStateToProps =(state)=>{
    return{
        posts: state.profilePage.posts,
        newPost:state.profilePage.newPostText
    }
}
let mapDispatchToProps =(dispatch)=>{
    return{
        updateNewPostText: (text)=>{
            let action = onPostActionCreator(text)      
            dispatch(action)
        },
        addPost: ()=>{
            dispatch(addPostActionCreator());
        }
    }
}

const PostContainer = connect(mapStateToProps,mapDispatchToProps)(Post);
export default PostContainer