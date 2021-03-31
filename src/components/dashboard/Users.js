import Axios from '../../Axios'
import React, { Component } from 'react'
import { decryption } from 'helpers/encryption'

export class Users extends Component {

    state={
        users: []
    }

    componentDidMount=async()=> {
        const config = {
            headers:{
                'auth-token': decryption(localStorage.getItem('token')),
               
              }
        }
        const users = await Axios.get('api/user',config)
        this.setState({
            users: users.data
        })
    }

    deleteUserHandler=(id)=>{

    }
    

    render() {
        return (
            <div style={{overflowX:'scroll'}}>
                <table className="table table-striped table-bordered" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Admin</th>
                            {/* <th colSpan="2">Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user => {
                            return (
                                <tr key={user._id}>
                                    <td>{user.first_name + ' ' + user.last_name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.admin?"Yes":"No"}</td>
                                    {/* {
                                        user.admin
                                        ?
                                        <td><button className="btn btn-danger" onClick={this.deleteUserHandler.bind(this,user._id)}>Delete User</button></td>
                                        :null
                                    } */}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users
