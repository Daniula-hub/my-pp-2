import React from 'react';
import { useSelector } from "react-redux";
import './styles/main.css';

const Navbar = (props) => {
     const { user_redux } = useSelector((store) => store.auth);

     const handleLogOut = () => {
          {
               window.location = 'http://localhost:3000/logout'
          }
     }

     return (
          <>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                         <a className="navbar-brand" href="#">Trivia Me</a>
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         <div className="collapse navbar-collapse" id="navbarNavDropdown">
                              <ul className="navbar-nav">
                                   {user_redux && user_redux.user_name ? (
                                        <li className="nav-item">
                                             <a className="nav-link active" aria-current="/game" href="/game">Game</a>
                                        </li>
                                   ) : null}
                                   <li className="nav-item">
                                        <a className="nav-link" href="/highestscores">Highest Scores</a>
                                   </li>
                                   <li className="nav-item">
                                        <a className="nav-link" href="/metrics">Metrics</a>
                                   </li>
                              </ul>
                              <ul className="navbar-nav ms-auto">
                                   {user_redux && user_redux.user_name ? (
                                        <>
                                             <img src={user_redux.profile_pic} id="profile_pic"/> 
                                             <li className="nav-item">
                                                  <p className="nav-link" disabled>{user_redux.user_name}</p>
                                             </li>
                                             <li className="nav-item">
                                                  <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#logoutmodal">LogOut</a>
                                             </li>
                                        </>
                                   ) : (
                                        <li className="nav-item">
                                             <a className="nav-link" href="/login">LogIn</a>
                                        </li>
                                   )}
                              </ul>
                         </div>
                    </div>
               </nav>
               {user_redux && user_redux.user_name ? (
                    <div className="modal fade" id="logoutmodal" tabIndex="-1">
                         <div className="modal-dialog">
                         <div className="modal-content bg-dark">
                              <div className="modal-header">
                                   <h5 className="modal-title text-light">Trivia Me</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div className="modal-body text-light">
                                   <p>Are you sure you want to LogOut?</p>
                              </div>
                              <div className="modal-footer">
                                   <button type="button" className="btn btn-success" data-bs-dismiss="modal">Cancel</button>
                                   <button type="button" className="btn btn-danger" onClick={handleLogOut}>LogOut</button>
                              </div>
                         </div>
                         </div>
                    </div>
               ): null}
          </>
     );
};

export default Navbar;