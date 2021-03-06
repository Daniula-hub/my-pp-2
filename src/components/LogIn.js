import React from 'react';
import axios from "axios";
import { setUser } from "../redux/authReducer";
import { useState } from "react";
import { connect } from "react-redux";
import './styles/Login.css';

const Login = (props) => {
     const [userName, setUserName] = useState("");
     const [password, setPassword] = useState("");

     const handleLogin = () => {
          axios
            .get(`/auth/login?userName=${userName}&password=${password}`)
            .then((res) => {
               props.setUser({ user_id: res.data.user_id,
                    user_name: res.data.user_name,
                    profile_pic: res.data.profile_pic,
                    highest_score: res.data.highest_score
               });
              props.history.push("/game");
            })
            .catch((err) => console.log(err));
     };
        
     const handleRegister = () => {
          {
               window.location = '/register'
          }
     };

     return (
          <div className='container-fluid'>
               <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                         <form>
                              <div className="row">
                                   <div className="form-group col-lg-6">
                                        <label htmlFor="inputUserName">User Name</label>
                                        <input type="text" className="form-control" id="inputUserName" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} />
                                   </div>
                                   <div className="form-group col-lg-6">
                                        <label htmlFor="inputPassword4">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                   </div>
                              </div>
                              <div className="row">
                                   <div className='col-3'></div>
                                   <div className="d-flex justify-content-center form-group col-3">
                                        <button type="button" className="btn btn-outline-success btn-lg" onClick={handleLogin}>Log In</button>
                                   </div>
                                   <div className="d-flex justify-content-center form-group col-3">
                                        <button type="button" className="btn btn-dark btn-lg" onClick={handleRegister}>Register</button>
                                   </div>
                                   <div className='col-3'></div>
                              </div>
                         </form>
                    </div>
                    <div className='col-3'></div>
               </div>
               <div className='row'>
                    <nav className="navbar navbar-light bg-light bottom">
                         <div className='col-12 center'>
                              <img src="./resources/question.png" className='img-fluid image-border-login' alt=""/>
                              <img src="./resources/awesome.png" className='img-fluid image-border-login' alt=""/>
                              <img src="./resources/question.png" className='img-fluid image-border-login' alt=""/>
                              <img src="./resources/awesome.png" className='img-fluid image-border-login' alt=""/>
                              <img src="./resources/question.png" className='img-fluid image-border-login' alt=""/>
                              <img src="./resources/awesome.png" className='img-fluid image-border-login' alt=""/>
                              <img src="./resources/question.png" className='img-fluid image-border-login' alt=""/> 
                              <img src="./resources/awesome.png" className='img-fluid image-border-login' alt=""/>
                         </div>
                    </nav>
               </div>             
          </div>
     );
}

export default connect(null, { setUser })(Login);
