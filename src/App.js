import React from 'react';
import routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App(){
  return (
    <>
    <Navbar />
    <Login />
    <Home />
    <Router>
   
 
    {routes}
  
    </Router>
    </>
  )
};

export default App;