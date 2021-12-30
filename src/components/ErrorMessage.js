import React from 'react';
import './styles/errorMessage.css';

const ErrorMessage = ({ children }) => {
    return (
      <div className="errorMessage" >
        {children}
      </div>
    );
  };

  export default ErrorMessage;