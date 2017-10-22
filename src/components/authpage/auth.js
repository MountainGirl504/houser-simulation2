import React, {Component} from 'react'
import './auth.css'
import logo from '../../assets/auth_logo.png'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'


export default class Auth extends Component{
    constructor(){
        super()

        this.state = {
            username: '',
            password: '',
            userInput: '',
            error: '',
            loggedIn: false,
            user: {}
        }

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this)
    }
    handleUsername(val){
        console.log(val)
        this.setState({
            username: val
        })
    }

    handlePassword(val){
        this.setState({
            password: val
        })
    }

    login(){
        axios.post('http://localhost:7070/api/users/login', {username: this.state.username, password: this.state.password})
        .then(response => {
            if(response.data.success) {    
               this.setState({
                   loggedIn: true
               })
            } else {
                this.setState({
                    error: response.data.error
                })
            }
        })
    }

    register(){                 //aka create user on the back-end
        axios.post('http://localhost:7070/api/users', {username: this.state.username, password: this.state.password})
        .then (response => {
            this.setState({
                user: response.data.user,
                loggedIn: true
            })
        })
    }

    render(){
        if (this.state.loggedIn) {
            console.log('redirecting')
            return (
                <Redirect to={'/dashboard'} />
            )
        }
        return(
            <div className='center' >
                <div className='MainContainer' >
                    <div>
                        <img className='auth-img' src={logo} alt="logo"/>
                    </div>
                    <div>
                        <h5 className='auth-h5' >Username</h5>
                        <input className='auth-input' 
                            onChange={(e) => this.handleUsername(e.target.value)}/>
                        <h5 className='auth-h5' >Password</h5>
                        <input className='auth-input' 
                            onChange={(e) => this.handlePassword(e.target.value)}/>
                    </div>
                    <div>
                        <button className="button1" 
                            onClick = {this.login} >Login</button>
                        <button className="button2"
                            onClick = {this.register} >Register</button>
                        <p>{this.state.error}</p>
                    </div>
                </div>
            </div>
        )
    }
}