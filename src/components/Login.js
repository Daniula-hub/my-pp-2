import React from 'react';

const Login = (props) => {

     return (
          <div classNameName='container-fluid'>
               <div classNameName='row'>
                    <div classNameName='col-2'></div>
                    <div classNameName='col-8'>
                    <form>
                         <div className="form-row">
                              <div className="form-group col-md-6">
                                   <label for="inputEmail4">User Name</label>
                                   <input type="email" className="form-control" id="inputEmail4" placeholder="User Name" />
                              </div>
                              <div className="form-group col-md-6">
                                   <label for="inputPassword4">Password</label>
                                   <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                              </div>
                         </div>
                         <div className="form-row">
                              <div className="form-group col-md-6">
                                   <label for="inputGender">Gender</label>
                                   <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option selected>Select one gender</option>
                                        <option value="1">Female</option>
                                        <option value="2">Male</option>
                                        <option value="3">Other</option>
                                   </select>
                              </div>
                              <div className="form-group col-md-6">
                                   <label for="inputEducation">Education</label>
                                   <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option selected>Select one education level</option>
                                        <option value="1">School</option>
                                        <option value="2">High School</option>
                                        <option value="3">College</option>
                                   </select>
                              </div>
                         </div>
                         <div className="form-row">
                              <div className="form-group col-md-6">
                                   <label for="inputAge">Age</label>
                                   <input type="text" className="form-control" id="inputAge" placeholder="Age" />                                   
                              </div>
                              <div className="form-group col-md-6">
                                   <label for="inputCountry">Country of Residency</label>
                                   <select id="inputCountry" className="form-control">
                                   <option selected>Choose...</option>
                                   <option>...</option>
                                   </select>
                              </div>
                         </div>
                         <div className="form-row">
                              <div className="form-group col-md-6">
                                   <button type="submit" className="btn btn-primary btn-lg">Sign in</button>
                              </div>
                         </div>
                    </form>
                    </div>
                    <div classNameName='col-2'></div>
               </div>
               
          </div>
     );
}

export default Login;