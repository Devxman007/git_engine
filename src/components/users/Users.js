import React, { Component } from 'react';
import axios from 'axios';

/*  I'M AWSOME */
export class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
   
    getUsers = () =>{
        axios.get('https://api.github.com/users').then(response => {
            this.setState({
                users:response.data
            })
        })
    }

    componentDidMount()
    {
        this.getUsers();
    }

    render() {
        return (
            <div>
                <div className="row">
                    {this.state.users.map(user => (


                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src={user.avatar_url} alt="" />
                                    <div className="card-body">
                                        <h4 className="card-title">{user.login}</h4>
                                        <p className="card-text">
                                            <a href={user.html_url} className="btn btn-success mr-2">Show more</a>
                                            <a href={user.repos_url} className="btn btn-warning">repositories</a>
                                        </p>
                                    </div>
                                    
                                    </div>

                            </div>
                            ))}
            </div>
            </div>
          
        )
    }
}

export default Users
