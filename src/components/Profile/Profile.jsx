import React from 'react';
import style from "./Profile.module.sass"

import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostContainer from './Posts/PostContainer';
const Profile = (props) =>{  
    
    
    return(
        <div>
            <ProfileInfo profile={props.profile} />
            <PostContainer store={props.store} />
        </div>  
    ) 
}

export default Profile