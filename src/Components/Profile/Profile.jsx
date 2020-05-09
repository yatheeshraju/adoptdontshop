import React, { Component } from 'react';
import './Profile.scss';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Settings from '@material-ui/icons/Settings';

export default class Profile extends Component {
    handleBack=()=>{
            this.props.history.push("/home");
    }
    handleSettings=()=>{
        this.props.history.push("/settings");
    }
    render() {
        var scrwidth=window.innerWidth;
        if(scrwidth>700){
            scrwidth=500
        }
        return (
            <div >
                <div className='profile_nav'>
                <button className='back' onClick={this.handleBack}><ArrowBack fontSize='large'/></button>
                <span className='profile_name'>user name</span>
                <button className='settings' onClick={this.handleSettings}><Settings fontSize='large'/></button>
                </div>
                <div className="spacer"></div>
                <div>
                <img src="https://source.unsplash.com/400x200/?banner" alt="postedby" width={scrwidth}/>
                </div>
                <div className='main_content'>
                <img src="https://source.unsplash.com/80x80/?logo" alt="postedby"/>
                <span>user name</span>
                <button className='edit'>Edit</button>
                </div>
            </div>
        )
    }
}
