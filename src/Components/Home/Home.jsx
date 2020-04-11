import React from 'react';
import './Home.scss';
import PostItem from '../PostItem/PostItem';
import { Component } from 'react';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';

export default class Home extends Component{
    handleClick=()=>{
        this.props.history.push("/profile");
    }
    render(){
    return (
        <div className='home' >
            <div className='nav'>
                <button className='add'><AddBoxOutlinedIcon fontSize='large'/></button>
                <span className='logo'>Adopt Dont Shop</span>
                <button className='profile' onClick={this.handleClick}><AccountBoxOutlinedIcon fontSize='large'/></button>
            </div>
            <div className='spacer'></div>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            
            
        </div>
    )
    }
}
