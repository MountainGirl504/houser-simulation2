import React, {Component} from 'react'
import Header from '../header/header'
import './steps.css'
import {connect} from 'react-redux'
import {desired_rent} from '../../ducks/reducer'
import {Link} from 'react-router-dom'

class Step5 extends Component {
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
  
                  <div>STEP 5
                    <p>Recommended rent is: </p>
                    <p>Desired Rent</p>
                    <input type='text' value={this.props.rent}
                        onChange ={(e) => this.props.desired_rent(e.target.value)}/>
                    <Link to='/step4'><button type='' className='dash-btn dash-add'>Previous Step</button></Link>
                    <Link to='/step5'><button type='' className='dash-btn dash-add'>Complete</button></Link>
                  </div>
              </div>
          </div>
        </div>
        )
    }
}

function mapStateToProps (state) {
    const {rent} = state;
    return{
        rent
    }
}
export default connect (mapStateToProps, {desired_rent})(Step5)