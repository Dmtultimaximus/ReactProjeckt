import React from 'react'
import style from './Users.module.sass'
import { followAC } from '../../redux/users-reducer'
import * as axios from 'axios' 
import userPhoto from '../../assets/images/user.png'
import Users from './Users'
// class UsersAPIComponent extends React.Component {

//     componentDidMount(){
        
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response =>{
//             debugger
//             this.props.setUsers(response.data.items)
//             this.props.setTotalUsersCount(response.data.totalCount)
//         })
//     }
//     onPageChanged =(pageNumber)=>{
//         debugger
//         this.props.setCurrentPage(pageNumber)
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>{
            
//             this.props.setUsers(response.data.items)
//         })
//     }
//     render(){

//         return <Users totalUsersCount={this.props.totalUsersCount} 
//                         pageSize={this.props.pageSize} 
//                         currentPage={this.props.currentPage}
//                         onPageChanged={this.onPageChanged}
//                         users={this.props.users}/>
        
        
//     }
// }

// export default UsersAPIComponent
