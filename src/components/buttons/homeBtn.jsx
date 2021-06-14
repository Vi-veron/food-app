import React from 'react';

import Home from '@material-ui/icons/Home';

import {Link} from 'react-router-dom';

import './index.css';

export default function HomeBtn() {
    
    return(
        
        <Link to="/home" >

            <button className="home_btn" >
            
                <Home style={{fontSize: 18}} />
            
            </button>

        </Link>
        
        )
    
}