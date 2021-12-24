import React from 'react';
import routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';

function App(){
  return (
    <>
    <Navbar />
    <Router>
      {routes}
    </Router>
    </>
  )
};

export default App;