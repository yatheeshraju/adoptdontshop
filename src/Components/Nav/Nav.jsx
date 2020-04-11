import React, { Component } from 'react';
import './Nav.scss';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
export default class Nav extends Component {
    render() {
        return (
            <div className='nav'>
                <button className='add'><AddBoxOutlinedIcon fontSize='large'/></button>
                <span className='logo'>Adopt Dont Shop</span>
                <button className='message'><AccountBoxOutlinedIcon fontSize='large'/></button>
            </div>
        )
    }
}
