import React from 'react';
import style from "./Profile.module.sass"

import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostContainer from './Posts/PostContainer';
import Profile from './Profile';
import * as axios from 'axios' 
import { connect } from 'react-redux';
import {setUserProfile, getUserProfile} from './../../redux/profile-reducer'
import { withRouter, Redirect } from 'react-router-dom';
import { usersAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { compose } from 'redux';
class ProfileContainer extends React.Component {  
    componentDidMount(){
        
        let userId=this.props.match.params.userId
        if(!userId){
            userId = 8
        }     
        this.props.getUserProfile(userId)          

    }
    render(){
        
        return (
            <div>
                <Profile {...this.profile} profile={this.props.profile}/>
            </div>
        ) 
    }
}
let mapStateToProps =(state)=>({
    profile: state.profilePage.profile,
    
})

// compose(
//     connect(mapStateToProps,{ getUserProfile}),
//     withRouter,
//     withAuthRedirect
// )(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer) 



// let withURLProfileContainer = withRouter(AuthRedirectComponent)

export default compose(
    connect(mapStateToProps,{ getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)