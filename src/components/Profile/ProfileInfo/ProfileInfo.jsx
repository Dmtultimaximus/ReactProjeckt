import React from 'react';
import style from "./ProfileInfo.module.sass"
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) =>{  
    
    if (!props.profile){
        return <Preloader/>
    }
    
    return(
        <div>
            
            <div>
                <img src={props.profile.photos.large}/>
                avatars+description
                <ProfileStatus status='hello world!!!'/>
            </div>
        </div>  
    ) 
}

export default ProfileInfo