import React, {Component} from 'react'
import Header from '../header/header'
import './steps.css'
import {connect} from 'react-redux'
import {save_image} from '../../ducks/reducer'
import {Link} from 'react-router-dom'

class Step3 extends Component {
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
                  <div>STEP 3
                    <div className='img_box'>
                        <img src={this.props.img_url} alt='Preview img'/>
                            <p>Image URL</p>
                            <input type='text' value={this.props.img_url}
                                onChange ={(e) => this.props.save_image(e.target.value)}/>
                    </div>
                  </div>
                    <Link to='/step2'><button type='' className='dash-btn dash-add'>Previous Step</button></Link>
                    <Link to='/step4'><button type='' className='dash-btn dash-add'>Next Step</button></Link>
                 
              </div>
          </div>
        </div>
        )
    }
}

function mapStateToProps (state) {
    const {img_url} = state;
    return{
        img_url
    }
}
export default connect (mapStateToProps, {save_image})(Step3)