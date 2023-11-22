import React from 'react';

function DeleteConfirmationModal({ isOpen, onCancel, onConfirm }) {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <p>Are you sure you want to delete this workout?</p>
          <div className="modal-buttons">
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onConfirm}>Delete</button>
          </div>
        </div>
      </div>
    )
  );
}

export default DeleteConfirmationModal;
