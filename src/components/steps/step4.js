import React, {Component} from 'react'
import Header from '../header/header'
import './steps.css'
import {connect} from 'react-redux'
import {save_mortgage, save_loan} from '../../ducks/reducer'
import {Link} from 'react-router-dom'

class Step4 extends Component {
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
  
                  <div>STEP 4
                    <p>Loan Amount</p>
                    <input type='text' value={this.props.loan_amount}
                        onChange ={(e) => this.props.save_loan(e.target.value)}/>
                    <p>Monthly Mortgage</p>
                    <input type='text' value={this.props.monthly_mortgage}
                        onChange ={(e) => this.props.save_mortgage(e.target.value)}/>
                    <Link to='/step3'><button type='' className='dash-btn dash-add'>Previous Step</button></Link>
                    <Link to='/step5'><button type='' className='dash-btn dash-add'>Next Step</button></Link>
                  </div>
              </div>
          </div>
        </div>
        )
    }
}

function mapStateToProps (state) {
    const {loan_amount, monthly_mortgage} = state;
    return{
        loan_amount, monthly_mortgage
    }
}
export default connect (mapStateToProps, {save_loan, save_mortgage})(Step4)