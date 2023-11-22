import React from 'react';
import WorkOutItem from './WorkOutItem';

// Workout List Component
const WorkoutList = ({ workouts, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Workout List</h2>
      <ul>
        {workouts.map((workout) => (
          // Render WorkOutItem for each workout
          <WorkOutItem
            key={workout.id}
            workout={workout}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;
