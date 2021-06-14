import React from 'react';

import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import {Link} from 'react-router-dom';

import './index.css';

export default function FavBtn() {
    
    
    return(
        
        <Link to="/favorites" >

            <button className="fav_btn" >
            
                <FavoriteBorder style={{fontSize: 18}} />
            
            </button>
          


        </Link>


        
    )
    
}