import React from 'react';
import './Home.scss';
import Nav from '../Nav/Nav';
import PostItem from '../PostItem/PostItem';

export default function Home() {
  
    return (
        <div className='home' >
            <Nav/>
            <div className='spacer'></div>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            
            
        </div>
    )
}
