import React, {Component} from 'react'
import './dashboard.css'
import Header from '../header/header'
import { Link } from 'react-router-dom'




export default class Dashboard extends Component{


    render(){
        return(
            <div>
                <Header />
                <div className='center' >
                    <div className='MainContainer'>
                        <div>
                            <Link to='/step1' >
                            <button type='' className='dash-btn dash-add'>Add new property</button>
                            </Link>
                        </div>
                        <div className='dash-filter' >
                            <h4>List properties with "desired rent" less than: $</h4>
                            <input type='number' className='' placeholder='0' />
                            <button type='' className='dash-btn'>Filter</button>
                            <button type='' className='dash-btn2'>Reset</button>
                        </div> 
                    </div>
                </div>
            </div>
        )
    }
}