import React from 'react';
import style from "./OtherPost.module.sass"

const OtherPost = (props) =>{  
    return <div className={style.item}>
        <img src="https://avatars.mds.yandex.net/get-pdb/1221543/47d841c6-883b-4344-8253-47e649514cce/s1200?webp=false"/>
            <span>{props.message}</span>
        <div>
           <span>like {props.like}</span> 
        </div>
        
        
    </div>
}

export default OtherPost