import React from 'react';


const Navbar = (props) => {

     return (
          <nav className="navbar navbar-inverse">
               <div className="container-fluid">
               <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" id="menuTitle" href="#">Quizz Me</a>
               </div>
               <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                    <li><a href="/highestscore">Highest Scores</a></li>
                    <li><a href="/metrics">Metrics</a></li>
                    </ul>

               </div>
               </div>
          </nav>
     );
}

export default Navbar;
