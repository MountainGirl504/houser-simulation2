import React, {Component} from 'react'
import Header from '../header/header'
import './steps.css'
import {connect} from 'react-redux'
import {desired_rent} from '../../ducks/reducer'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Step5 extends Component {
    

saveListing(){
    axios.post('http://localhost:7070/api/listings/', {
        property_name: this.props.property_name
        , property_description: this.props.property_description
        , address: this.props.address
        , city: this.props.city
        , state: this.props.state
        , zip: this.props.zip
        , img_url: this.props.img_url
        , loan_amount: this.props.loan_amount
        , monthly_mortgage: this.props.monthly_mortgage
        , desired_rent: this.props.desired_rent
    })
    .then(res => {
        console.log(res)
        this.setState({
            listing: res.data
        })
    })
}

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
                    <Link to='/dashboard'><button type='' className='dash-btn dash-add'
                        onClick = {() => this.saveListing()}>Complete</button></Link>
                  </div>
              </div>
          </div>
        </div>
        )
    }
}

function mapStateToProps (State) {
    const {rent, property_name
    , property_description
    , address
    , city
    , state
    , zip
    , img_url
    , loan_amount
    , monthly_mortgage
    , desired_rent} = State;
    
    return {
        rent
        , property_name
        , property_description
        , address
        , city
        , state
        , zip
        , img_url
        , loan_amount
        , monthly_mortgage
        , desired_rent
    }
}
export default connect (mapStateToProps, {desired_rent})(Step5)