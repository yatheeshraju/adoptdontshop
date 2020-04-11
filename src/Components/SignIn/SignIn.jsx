import React, { Component } from 'react';
import './SignIn.scss';
import {Container,
    TextField,
    } from '@material-ui/core';

export default class SignIn extends Component {
    render() {
        return (
            <div className='signinPage'>
            <Container fixed className='signin'>
            <div>LOGIN </div>
            <TextField id="email" label="Email" variant="outlined" type='email' fullWidth />
            <TextField id="password" label="password" variant="outlined" type='password' fullWidth />
            <button className='btn'>  SIGNIN</button>
            <a href="/register" className='custlink'>Don't have an account ? Register .</a>
            </Container>
            </div>
        )
    }
}
