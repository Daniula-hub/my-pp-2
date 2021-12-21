import React from 'react';
import routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App(){
  return (
    <>
    <Navbar />
    <Login />
    <Router>
   
 
    {routes}
  
    </Router>
    </>
  )
};

export default App;