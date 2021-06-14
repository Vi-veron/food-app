import React from 'react';

import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import {Link} from 'react-router-dom';

import './index.css';

export default function NotificationBtn() {
    
    return(
        
        <Link to="/notifications" >

            <button className="notification_btn" >
            
                <NotificationsNoneIcon style={{fontSize: 18}} />
            
            </button>

        </Link>
        
        )
    
}