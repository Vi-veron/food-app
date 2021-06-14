import React from 'react';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {Link} from 'react-router-dom';

import './index.css';

export default function CartBtn() {
    
    return(
        
        <Link to="/cart" >

            <button className="cart_btn" >
            
                <ShoppingCartIcon style={{fontSize: 18}} />
            
            </button>

        </Link>
        
        )
    
}