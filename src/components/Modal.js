import React from 'react';
import './styles/highestScores.css';

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
                    <div className={`${completePage ? 'modal-dialog modal-fullscreen': 'modal-dialog'}`}>
                         <div className="modal-content bg-dark">
                              <div className="modal-header">
                                   <h5 className="modal-title text-light">Hi {user.user_name}!</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={this.handleShow} aria-label="Close"></button>
                              </div>
                              <div className="modal-body text-light">
                              <img src={user.profile_pic} alt='Profile Pic' id="profile_pic"/>
                              <p>Your latest score was {score}. Check if you are in the top ten.</p>
                              </div>
                              <div className="modal-footer">
                                   <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={this.handleShow}>Cancel</button>
                              </div>
                         </div>
                    </div>
               </div>
         );
     }
 }
 
export default Modal;