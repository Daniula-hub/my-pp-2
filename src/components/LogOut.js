import React,{ useEffect } from 'react';
import axios from "axios";
import { setUser, logout } from "../redux/authReducer";
import { connect } from "react-redux";
import Login from './LogIn';

const LogOut = (props) => {

     useEffect(() => {
          axios
          .get('/auth/logout')
          .then(res => {
               logout();
               {
                    window.location = 'http://localhost:3000/login'
               }
          })
          .catch(err => {
               console.log("There was an error logging out the user. ", err);
          })
     }, []);

     return (
          <Login />
     );
}

export default connect(null, { setUser })(LogOut);