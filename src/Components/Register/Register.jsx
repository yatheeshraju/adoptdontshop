import React, { Component } from 'react';
import './Register.scss';
import {Container,
        TextField,
        } from '@material-ui/core';
export default class Register extends Component {
    render() {
        return (
            <div className='registerPage'>
               <Container fixed className='signup'>
               <div>SIGNUP TO START YOUR JOURNEY </div>
               <TextField id="fullName" label="Full Name" variant="outlined" type='text' fullWidth className='sqr'/>
               <TextField id="email" label="Email" variant="outlined" type='email' fullWidth />
               <TextField id="password" label="password" variant="outlined" type='password' fullWidth />
               <TextField id="confirmPassword" label="confirm password" variant="outlined" type='password' fullWidth />
               <button className='btn'>  SIGNUP</button>
               <a href="/signin" className='custlink'>Already have an account ? Login</a>
               </Container>
            </div>
        )
    }
}
