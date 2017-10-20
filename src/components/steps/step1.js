import React, { Component } from 'react'
import Header from '../header/header'
import './steps.css'


export default class Step1 extends Component {
  render() {
    return (
      <div>
          <Header/>
        <div className='center' >
            <div className='MainContainer' >
                <div className='step-header'>
                    <h2>Add new listing</h2>
                    <button>Cancel</button>
                </div>



            </div>
        </div>
      </div>
    )
  }
}
