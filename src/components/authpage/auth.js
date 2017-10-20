import React, {Component} from 'react'
import './auth.css'
import logo from '../../assets/auth_logo.png'
import { Link } from 'react-router-dom'




export default class Auth extends Component{


    render(){
        return(
            <div className='MainContainer' >
                <div>
                    <img src={logo} alt="logo"/>
                </div>
                <div>
                    <h5>Username</h5>
                    <input/>
                    <h5>Password</h5>
                    <input/>
                </div>
                <div>
                    <Link to='/dashborad'> 
                        <button className="button1" >Login</button>
                    </Link>
                    <Link to='/dashborad'> 
                        <button className="button2" >Register</button>
                    </Link>
                </div>
            </div>
        )
    }
}