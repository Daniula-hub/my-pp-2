import React from 'react';

const Home = (props) => {

     return (
          <div classNameName='container-fluid'>
               <div classNameName='row'>
                    <div classNameName='col-2'></div>
                    <div classNameName='col-8'>
                    <form>
                         <div className="form-row">
                         <div className="form-group col-md-12">
                                   <label for="inputName">Name</label>
                                   <input type="text" className="form-control" id="inputName" placeholder="Enter your Name" />                                   
                              </div>
                              <div className="form-row">
                              <div className="form-group col-md-12">
                                   <label for="inputGender">Select Category</label>
                                   <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option selected>Select one option</option>
                                        <option value="1">General Knowledge</option>
                                        <option value="2">Books</option>
                                        <option value="3">Films</option>
                                        <option value="4">Music</option>
                                        <option value="5">Musicals and Theaters</option>
                                        <option value="6">Television</option>
                                        <option value="7">Video Games</option>
                                        <option value="8">Board Games</option>
                                        <option value="9">Science and Nature</option>
                                        <option value="10">Computer</option>
                                        <option value="11">Mathematics</option>
                                        <option value="12">Mythology</option>
                                        <option value="13">Sports</option>
                                        <option value="14">Geography</option>
                                        <option value="15">History</option>
                                        <option value="16">Politics</option>
                                        <option value="17">Celebrities</option>
                                        <option value="18">Animals</option>
                                        <option value="19">Vehicles</option>
                                        <option value="20">Comics</option>
                                        <option value="21">Gadgets</option>
                                        <option value="22">Japanese Anime</option>
                                        <option value="23">Cartoon and Animations</option>
                                   </select>
                              </div>
                         </div>
                         <div className="form-row">
                              <div className="form-group col--12">
                                   <label for="inputGender">Select Difficulty</label>
                                   <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                        <option selected>Select one option</option>
                                        <option value="1">Easy</option>
                                        <option value="2">Medium</option>
                                        <option value="3">Hard</option>
                                   </select>
                              </div>
                           
                         </div>
                         <div className="form-row">
                             
                            
                         </div>
                         <div className="form-row">
                              <div className="form-group col-md-6">
                                   <button type="submit" className="btn btn-primary btn-lg">Start Game! </button>
                              </div>
                         </div>
                         </div>
                    </form>
                    </div>
                    <div classNameName='col-2'></div>
               </div>
               
          </div>
     );
}

export default Home;