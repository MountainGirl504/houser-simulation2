import React, { Component } from 'react'
import Header from '../header/header'
import './steps.css'
import {connect} from 'react-redux'
import {savePropertyName, saveDescription } from '../../ducks/reducer'
import {Link} from 'react-router-dom'


class Step1 extends Component {
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

                <div>STEP 1
                  <p>Property Name</p>
                  <input type='text' value={this.props.property_name}
                    onChange={(e) => this.props.savePropertyName(e.target.value)}/>
                  <p>Property Decsription</p>
                  <input type='text' value={this.props.property_description}
                    onChange = {(e) => this.props.saveDescription(e.target.value)}/>
                  <Link to='/step2'><button type='' className='dash-btn dash-add'>Next Step</button></Link>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {property_name, property_description} = state;
  return {
      property_name,
      property_description
  }
}
export default connect (mapStateToProps, {savePropertyName, saveDescription})(Step1)