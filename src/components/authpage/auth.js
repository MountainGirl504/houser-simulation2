import React, {Component} from 'react'
import './auth.css'
import logo from '../../assets/auth_logo.png'
import { Link } from 'react-router-dom'




export default class Auth extends Component{


    render(){
        return(
            <div className='center' >
                <div className='MainContainer' >
                    <div>
                        <img className='auth-img' src={logo} alt="logo"/>
                    </div>
                    <div>
                        <h5 className='auth-h5' >Username</h5>
                        <input className='auth-input' />
                        <h5 className='auth-h5' >Password</h5>
                        <input className='auth-input' />
                    </div>
                    <div>
                        <Link to='/dashboard'> 
                            <button className="button1" >Login</button>
                        </Link>
                        <Link to='/dashboard'> 
                            <button className="button2" >Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}