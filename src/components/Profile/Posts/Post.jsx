import React from 'react';
import style from "./Post.module.sass"
import OtherPost from './OtherPosts/OtherPost';



const Post = (props) =>{  
    
    let postElement = props.posts.map( el => <OtherPost message={el.message} like={el.likesCount} />)
    let newPostEl = React.createRef(    );
    let onAddPost = ()=>{  
        props.addPost();   
        // props.dispatch(addPostActionCreator())
    }
    let onPostChange =()=>{
        let text = newPostEl.current.value    
        props.updateNewPostText(text)
        // let action = onPostActionCreator(text)      
        // props.dispatch(action)
    }
    return <div>
        my-posts
            <div>
             <textarea ref={newPostEl} onChange={onPostChange} value={props.newPost}  />
            </div>
            <div>
                <button onClick={onAddPost}>add post</button>
            </div>
        <div className="posts">
            {postElement}
        </div>
    </div>
}

export default Post