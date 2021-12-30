import React from 'react';


const Navbar = (props) => {

     return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <div className="container-fluid">
               <a className="navbar-brand" href="#">Trivia Me</a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                         <li className="nav-item">
                              <a className="nav-link active" aria-current="page" href="/game">Game</a>
                         </li>
                         <li className="nav-item">
                              <a className="nav-link" href="/highestscores">Highest Scores</a>
                         </li>
                         <li className="nav-item">
                              <a className="nav-link" href="metrics">Metrics</a>
                         </li>
                    </ul>
               </div>
               </div>
          </nav>
     );
}

export default Navbar;