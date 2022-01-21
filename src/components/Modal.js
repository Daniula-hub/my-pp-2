import React from 'react';
import './styles/highestScores.css';
import './styles/Modal.css';

class Modal extends React.Component {
     constructor(props) {
         super(props);
 
         this.state = {
             modalState: true
         };
 
         this.handleShow = this.handleShow.bind(this);
     }
 
     handleShow() {
         this.setState({ modalState: !this.state.modalState });
     }
 
     render() {
          const {user, score, completePage} = this.props;
         return (
               <div className={`modal fade ${(this.state.modalState ? "show d-block" : "d-none")}`} id="scoremodal" tabIndex="-1">
                    {/* <img class="img-fluid" src= "./resources/alert.jpg" alt='Alert Pic' id="alert"/> */}
                    <div className={`${completePage ? 'modal-dialog modal-fullscreen': 'modal-dialog'}`}>
                         <div className="modal-content bg-light">
                              <div className="modal-header">
                                   <h2 className="modal-title text-muted">Hi {user.user_name}!</h2>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={this.handleShow} aria-label="Close"></button>
                              </div>
                              <div className="modal-body text-muted">
                              <img className="robot" src={user.profile_pic} alt='Profile Pic' id="profile_pic"/>
                              {/* <img class="img-fluid" src= "./resources/alert.jpg" alt='Profile Pic' id="alert"/> */}
                              <h3 className="latestScore">Your latest score was {score} .  Check if you are in the top ten!</h3>
                              </div>
                              <div className="modal-footer">
                                   <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={this.handleShow}>Close</button>
                              </div>
                         </div>
                    </div>
               </div>
         );
     }
 }
 
export default Modal;