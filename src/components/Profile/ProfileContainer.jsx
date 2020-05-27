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
class ProfileContainer extends React.Component {  
    componentDidMount(){
        
        let userId=this.props.match.params.userId
        if(!userId){
            userId = 2
        }     
        this.props.getUserProfile(userId)          

    }
    render(){
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <div>
                <Profile {...this.profile} profile={this.props.profile}/>
            </div>
        ) 
    }

}
let mapStateToProps =(state)=>({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let withURLProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps,{ getUserProfile})(withURLProfileContainer) 