import React, {Component} from 'react'
import Header from '../header/header'
import './steps.css'
import {connect} from 'react-redux'
import {save_address, save_city, save_state, save_zip} from '../../ducks/reducer'
import {Link} from 'react-router-dom'

class Step2 extends Component {
    render(){
        return(
            <div>
            <Header/>
          <div className='center' >
              <div className='MainContainer' >
                  <div className='step-header'>
                      <h2>Add new listing</h2>
                      <button>Cancel</button>
                  </div>
  
                  <div>STEP 2
                    <p>Address</p>
                    <input type='text' value={this.props.address}
                        onChange={(e)=> this.props.save_address(e.target.value)}/>
                    <p>City</p>
                    <input type='text' value={this.props.city}
                        onChange ={(e) => this.props.save_city(e.target.value)}/>
                    <p>State</p>
                    <input type='text' value={this.props.state}
                        onChange = {(e) => this.props.save_state(e.target.value)}/>
                    <p>Zip</p>
                    <input type='text' value={this.props.zip}
                        onChange ={(e) => this.props.save_zip(e.target.value)}/>
                    <Link to='/step1'><button type='' className='dash-btn dash-add'>Previous Step</button></Link>
                    <Link to='/step3'><button type='' className='dash-btn dash-add'>Next Step</button></Link>
                  </div>
              </div>
          </div>
        </div>
        )
    }
}

function mapStateToProps (State) {
    
    const {address, city, state, zip} = State;
    console.log(state)
    return {
        address, city, state, zip
    }
}
export default connect (mapStateToProps, {save_address, save_city, save_state, save_zip})(Step2)