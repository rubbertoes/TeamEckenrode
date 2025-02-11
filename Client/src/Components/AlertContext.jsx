import React, { createContext, useState, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ message: '', visible: false, showModal: true });
  const location = useLocation();

  const showAlert = (message) => {
    setAlert({ message, visible: true, showModal: true });
  };

  const hideAlert = () => {
    setAlert({ message: '', visible: false, showModal: false });
  };

  const hideAlertModal = () => {
    setAlert((prevAlert) => ({ ...prevAlert, showModal: false }));
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setAlert((prevAlert) => ({ ...prevAlert, showModal: true }));
    }
  }, [location]);

  const shouldShowModal = alert.showModal && location.pathname === '/';

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert, hideAlertModal, shouldShowModal }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);