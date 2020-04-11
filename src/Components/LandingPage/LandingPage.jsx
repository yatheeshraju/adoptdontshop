import React, { Component } from 'react';
import './LandingPage.scss';

export default class LandingPage extends Component {

    handleClick=()=>{
        this.props.history.push("/register");
    }
    render() {
        return (
            <div className='landing_page'>
              <div>ADOPT DONT SHOP</div>
              <button className='btn' onClick={this.handleClick}>Get Started</button>
            </div>
        )
    }
}
