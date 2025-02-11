import React, { useState } from 'react';
import { useAlert } from '../Components/AlertContext.jsx';

const Admin = () => {

  const [message, setMessage] = useState('');
  const { showAlert, hideAlert } = useAlert();

  const handleShowAlert = () => {
    showAlert(message);
  };

  const handleHideAlert = () => {
    hideAlert();
  };

  return (
    <div className='adminContent'>
      <h1>Welcome To Admin Page</h1>
      <div>
      <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter alert message"
          rows="5" // Adjust the number of rows as needed
          cols="50" // Adjust the number of columns as needed
          style={{ width: '100%', resize: 'vertical' }} // Optional: Adjust the width and allow vertical resizing
        /> 
        <button onClick={handleShowAlert}>Show Alert</button>
        <button onClick={handleHideAlert}>Hide Alert</button>
      </div>
    </div>
  );
};

export default Admin;