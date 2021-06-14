import React from 'react';

import './index.css';

import MenuBtn from '../buttons/menuBtn';

import LocationOn from '@material-ui/icons/LocationOn';

import deliveryImage from '../imgs/deliveryImage.png';

import {products} from '../../data/data.js';


import FoodMenu from './foodMenu';

import GetApp from '@material-ui/icons/GetApp';

import HomeBtn from '../buttons/homeBtn';

import FavBtn from '../buttons/favBtn';

import SearchBtn from '../buttons/searchBtn';

import NotificationBtn from '../buttons/notificationBtn';

import CartBtn from '../buttons/cartBtn';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "#F5FEFF",
        fontFamily: "Arial, Helvetica, sans-serif",
        position: "relative",
    },
    navBar: {
      backgroundColor: '#F5FEFF',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'space-around',
    },
    footer: {
       backgroundColor: '#F5FEFF',
       width: '100vw',
       display: 'flex',
       justifyContent: 'space-around',
    },
}));


function Home() {
    
const classes = useStyles();
 
  return (
     
    <div className={classes.container}>
    
        <div className={classes.navBar}>
            
                <MenuBtn />
                
                <h1 className="location" ><LocationOn className="location_icon" />Lagos, Nigeria</h1>
                <p className="emoji" >🧒</p>
      
        </div>
        
        
        <div className="notification_card" >
        
            <p className="notification_text" >Food Delivered in Less
                <span style={{color: '#FF4234'}} > Time
                </span>

                <button className="order_btn" >Order Now
                </button>
            </p>
        
            <img src={deliveryImage} alt="deliveryImg" className="delivery_img" />
        
        </div>
        
        <div className="categories">
        
            <h2>Categories</h2>
        
            <div className="scrolling-wrapper" >
       
                 <button className="category_btn active" ><span style={{paddingRight: 10}} >🍔</span>Snacks</button>
            
                 <button className="category_btn" ><span style={{paddingRight: 10}}>🍹</span>Smoothies</button>
                
                 <button className="category_btn" ><span style={{paddingRight: 10}}>🍝</span>Main Course</button>
                
                 <button className="category_btn" ><span style={{paddingRight: 10}}>🍰</span>Desserts</button>
                
                 <button className="category_btn" ><span style={{paddingRight: 10}}>🍾</span>Wines</button>
            
            </div>
        
        </div>
        
        <div className="popular" >
    
            <h3>Popular Now </h3>
            
             <p className="view" >View All <GetApp style={{ color: "#ECBE3F", fontSize: 12 }} /></p>
             
        </div>   
       
         <div className="card_scroll" style={{ display: "flex", overflowX: "scroll", whiteSpace: "nowrap", overflowY: "hidden" }}>
       
            {products.filter( product => product.category.includes("Snacks")).map(filteredData => (
               
                <FoodMenu
                
                       key={filteredData.id}
                       title={filteredData.title}
                       image={filteredData.url}
                       description={filteredData.description}
                       price={filteredData.price}
                       subTitle={filteredData.subTitle}
                />
                
            ))}
            
        </div>
        <div>

            <footer className={classes.footer} >
            
                <HomeBtn />
                <FavBtn />
                <SearchBtn />
                <NotificationBtn />
                <CartBtn />
                
            </footer>

        </div>
        
     
    </div>
  );
}

export default Home;
