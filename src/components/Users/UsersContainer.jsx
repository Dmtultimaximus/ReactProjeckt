import React from 'react'
import * as axios from 'axios' 
import { connect } from 'react-redux'
import Users from './Users'
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,toggleIsFetching, toggleFollowingProgress,getUsers } from '../../redux/users-reducer'
import preloader from './../../assets/images/Spinner-1s-200px.svg'
import Preloader from '../common/preloader/preloader'
import { usersAPI } from '../../api/api'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/AuthRedirect'


class UsersAPIComponent extends React.Component {

    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)

        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data =>{
            
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })
    }
    onPageChanged =(pageNumber)=>{
        
        this.props.getUsers(pageNumber, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data =>{
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        // })
    }
    render(){
        
        return (<>
            {this.props.isFetching ? <Preloader/>:null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                isFetching={this.props.isFetching}
                followProgress={this.props.followProgress}
                
                />
        </>
        )
   
    }
}

let mapStateToProps = (state)=>{
    
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followProgress: state.usersPage.followProgress
    }
}


export default  compose(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
}),
    withAuthRedirect
)(UsersAPIComponent)
// export default connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     toggleFollowingProgress,
//     getUsers
// })(UsersAPIComponent);