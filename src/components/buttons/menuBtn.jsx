import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Menu from '@material-ui/core/Menu';

import MenuItem from '@material-ui/core/MenuItem';

import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';

import InfoIcon from '@material-ui/icons/Info';

import HomeIcon from '@material-ui/icons/Home';

import PersonIcon from '@material-ui/icons/Person';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import List from '@material-ui/icons/List';

import './index.css';

import {Link} from 'react-router-dom';




const StyledMenu = withStyles({
    
  paper: {
      
    border: '1px solid #d3d4d5',
    
  },
  
})((props) => (
  
  <Menu
    elevation={0}
    
    getContentAnchorEl={null}
    
    anchorOrigin={{
    
      vertical: 'bottom',
      
      horizontal: 'center',
      
    }}
    
    transformOrigin={{
    
      vertical: 'top',
      
      horizontal: 'center',
      
    }}
    
    {...props}
    
  />
));

const StyledMenuItem = withStyles((theme) => ({
    
  root: {
      
    '&:focus': {
        
      backgroundColor: theme.palette.primary.light,
      
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          
        color: theme.palette.common.white,
        
      },
      
    },
  },
  
}))(MenuItem);


export default function MenuBtn() {
    
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
      
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = () => {
      
    setAnchorEl(null);
    
  };
  
    const menuStyle = {
        
        textDecoration: 'none',
        
        color: '#111',
        
    };

  return (
      <div>
      
      <button
        className="menu_btn"
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        onClick={handleClick}
      >
      
        <List />
        
      </button>
      
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      
        <Link style={menuStyle} to="/profile">
        
        <StyledMenuItem>
        
          <ListItemIcon>
          
            <PersonIcon fontSize="small" />
            
          </ListItemIcon>
          
          <ListItemText primary="Profile" />
          
        </StyledMenuItem>
        
        </Link>
    
              
        <Link style={menuStyle} to="/orders">
        
        <StyledMenuItem>
        
          <ListItemIcon>
          
            <ShoppingCartIcon fontSize="small" />
            
          </ListItemIcon>
          
          <ListItemText primary="Orders" />
          
        </StyledMenuItem>
        
        </Link>
    
        
        <Link style={menuStyle} to="/about">
        
            <StyledMenuItem>
    
              <ListItemIcon>
              
                <InfoIcon fontSize="small" />
                
              </ListItemIcon>
              
              <ListItemText primary="About" />
    
            </StyledMenuItem>
        
        </Link>
        
        
        <Link style={menuStyle} to="/home">
      
       <StyledMenuItem>
       
          <ListItemIcon>
          
            <HomeIcon fontSize="small" />
            
          </ListItemIcon>
          
          <ListItemText primary="Home" />
          
        </StyledMenuItem>
        
        </Link>
        
        
        <Link style={menuStyle} to="/signup">
        
            <StyledMenuItem>
              
              <ListItemText primary="Signup" />
    
            </StyledMenuItem>
        
        </Link>
        
        
        <Link style={menuStyle} to="/signIn">
        
            <StyledMenuItem>

              <ListItemText primary="SignIn" />
    
            </StyledMenuItem>
        
        </Link>
        
      </StyledMenu>
      
    </div>
    
  );
}
