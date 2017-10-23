import React, {Component} from 'react'
import './dashboard.css'
import Header from '../header/header'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Dashboard extends Component{
    constructor(){
        super()

        this.state = {
            allListings: []
        }
    }

componentWillMount(){
    axios.get('http://localhost:7070/api/listings')
    .then(response =>{
        console.log(response)
        this.setState({
            allListings: response.data
        })
    })
}

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
                        <div>
                          {this.state.allListings.map((listing) => {
                              return <div>
                                <p>{listing.property_name}</p>
                              </div>
                          })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}