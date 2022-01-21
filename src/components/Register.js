import React from 'react';
import axios from "axios";
import { setUser } from "../redux/authReducer";
import { useState } from "react";
import { connect } from "react-redux";
import './styles/forms.css';

const Login = (props) => {
     const [userName, setUserName] = useState("");
     const [password, setPassword] = useState("");
     const [email, setEmail] = useState("");
     const [gender, setGender] = useState("");
     const [education, setEducation] = useState("");
     const [user_age, setAge] = useState(-1);

     const handleRegister = () => {
          axios
            .post("/auth/register", { userName, password, email, gender, education, user_age })
            .then((res) => {
               props.setUser({ user_id: res.data.user_id,
                    user_name: res.data.user_name,
                    profile_pic: res.data.profile_pic,
                    highest_score: res.data.highest_score
               });
               axios.post('/sendEmail')
               .then(res => {
                    console.log('Email was sent');
               })
               .catch(err => console.log("There was an error sending the email to the user.", err));
               props.history.push("/game");
            })
            .catch((err) => console.log("There was an error registering the user: ", err));
     };
     
     return (
          <div className='container-fluid'>
               <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                         <form>
                              <div className="row">
                                   <div className="form-group col-md-6">
                                        <label htmlFor="inputUserName">User Name</label>
                                        <input type="text" className="form-control" id="inputUserName" placeholder="User Name" onChange={(e) => setUserName(e.target.value)} />
                                   </div>
                                   <div className="form-group col-md-6">
                                        <label htmlFor="inputPassword4">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="form-group col-md-6">
                                        <label htmlFor="inputEmail">Email</label>
                                        <input type="email" className="form-control" id="inputEmail" placeholder="test@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                                   </div>
                                   <div className="form-group col-md-6">
                                        <label htmlFor="inputAge">Age</label>
                                        <input type="number" className="form-control" id="inputAge" placeholder="Age" onChange={(e) => setAge(e.target.value)}/>                                   
                                   </div>
                              </div>
                              <div className="row">
                                   <div className="form-group col-md-6">
                                        <label htmlFor="inputGender">Gender</label>
                                        <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example" onChange={(e) => setGender(e.target.value)}>
                                             <option selected>Select one gender</option>
                                             <option value="1">Male</option>
                                             <option value="2">Female</option>
                                             <option value="3">Other</option>
                                        </select>
                                   </div>
                                   <div className="form-group col-md-6">
                                        <label htmlFor="inputEducation">Education</label>
                                        <select className="form-select form-select-md mb-3" aria-label=".form-select-lg example" onChange={(e) => setEducation(e.target.value)}>
                                             <option selected>Select one education level</option>
                                             <option value="1">School</option>
                                             <option value="2">High School</option>
                                             <option value="3">College</option>
                                             <option value="4">Other</option>
                                        </select>
                                   </div>
                              </div>
                              <div className="row">
                                   <div className='col-3'></div>
                                   <div className="d-flex justify-content-center form-group col-6">
                                        <button type="button" className="btn btn-outline-success btn-lg" onClick={handleRegister}>Register</button>
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
                         <img src="./resources/question.png" className='img-fluid image-style' alt=""/>
                              <img src="./resources/Boom.png" className='img-fluid image-style' alt=""/>
                              <img src="./resources/question.png" className='img-fluid image-style' alt=""/>
                              <img src="./resources/Boom.png" className='img-fluid image-style' alt=""/>
                              <img src="./resources/question.png" className='img-fluid image-style' alt=""/>
                              <img src="./resources/Boom.png" className='img-fluid image-style' alt=""/>
                              <img src="./resources/question.png" className='img-fluid image-style' alt=""/>
                         </div>
                    </nav>
               </div>  
               
          </div>
     );
}

export default connect(null, { setUser })(Login);