import React, { Component } from 'react';
import headerLogo from '../../assets/header_logo.png';
import './header.css';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
        <div className='header-container' >
            <div className='header-container2' >
                <div className='yep' >
                    <Link to='/dashboard'><img src={headerLogo} alt='Header Logo' /></Link>
                    <h1 className='header-font' >
                        <span className='header-span'>Houser</span> Dashboard
                    </h1>
                </div>
                <div>
                    <Link to='/' className='logout' >
                        <h1>Logout</h1>
                    </Link>
                </div>
            </div> 
        </div>
        )
    }
}
