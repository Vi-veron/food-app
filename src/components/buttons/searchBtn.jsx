import React from 'react';

import Search from '@material-ui/icons/Search';

import {Link} from 'react-router-dom';

import './index.css';

export default function SearchBtn() {
    
    return(
        
        <Link to="/search" >

            <button className="search_btn" >
            
                <Search style={{fontSize: 20}}/>
            
            </button>

        </Link>
        
        )
    
}