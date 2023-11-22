import React, { useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

function WorkoutItem({ workout, onEdit, onDelete }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleDeleteClick = () => {
    // Open the delete confirmation modal
    setModalOpen(true);
  };

  const handleCancelDelete = () => {
    // Close the delete confirmation modal
    setModalOpen(false);
  };

  const handleConfirmDelete = () => {
    // Perform the actual delete action
    onDelete(workout.id);

    // Close the delete confirmation modal
    setModalOpen(false);
  };

  return (
    <li>
      {/* Added the other props from  the workout object */}
      <div>
        <span>DATE: {workout.date}</span> <br />
        <span>DURATION:{workout.duration}</span>
        <br />
        <span>EXERCISE:{workout.exercise}</span>
        <br />
        <span>NOTES: {workout.notes}</span>
      </div>
      <button onClick={() => onEdit(workout.id)}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>

      {/* Render the DeleteConfirmationModal */}
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </li>
  );
}

export default WorkoutItem;
