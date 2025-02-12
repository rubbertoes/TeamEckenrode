import React from 'react';
import { useAlert } from './AlertContext.jsx';

const AlertModal = () => {
  const { alert, hideAlertModal, shouldShowModal } = useAlert();

  if (!alert.visible || !shouldShowModal) {
    return null;
  }

  return (
    <div className="alert-modal">
      <div className="alert-modal-content">
        <p>{alert.message}</p>
        <button onClick={hideAlertModal}>Close</button>
      </div>
    </div>
  );
};

export default AlertModal;