import React from 'react';

import './App.css';

import Home from './components/home/index.jsx';

import About from './components/screens/about/index.jsx';

import Orders from './components/screens/orders/index.jsx';

import Profile from './components/screens/profile/index.jsx';

import SignUp from './components/screens/signUp/index.jsx';

import SignIn from './components/screens/signIn/index.jsx';

import Search from './components/screens/search/index.jsx';

import Cart from './components/screens/cart/index.jsx';

import MyFavorites from './components/screens/myFavorites/index.jsx';

import Notifications from './components/screens/notifications/index.jsx';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';




function App() {
    
  return (
      
    <div className="App">
    
        <Router>
        
            <Switch>
            
                <Route path="/" exact component={Home} /> 
                
                <Route path="/about" component={About} />
                
                <Route path="/orders" component={Orders} />
                                
                <Route path="/profile" component={Profile} />
                
                <Route path="/signIn" component={SignIn} />
                                
                <Route path="/signUp" component={SignUp} />
                
                <Route path="/search" component={Search} />
                
                <Route path="/cart" component={Cart} />
                
                <Route path="/notifications" component={Notifications} />
                
                <Route path="/favorites" component={MyFavorites} />
                
                <Route path="/home" component={Home} />
                
            </Switch>
            
        </Router>
                
      
    </div>
  );
}

export default App;
