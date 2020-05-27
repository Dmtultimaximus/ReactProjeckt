import React from 'react';
import style from "./ProfileInfo.module.sass"
import Preloader from '../../common/preloader/preloader';

const ProfileInfo = (props) =>{  
    
    if (!props.profile){
        return <Preloader/>
    }
    
    return(
        <div>
            <img src='https://res.zhidao91.com/wp-content/uploads/2015/08/image-feature.jpg' />
            <div>
                <img src={props.profile.photos.large}/>
                avatars+description
            </div>
        </div>  
    ) 
}

export default ProfileInfo