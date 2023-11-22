import React from 'react';
import WorkoutItem from './WorkoutItem';

// Workout List Component
const WorkoutList = ({ workouts, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Workout List</h2>
      <ul>
        {workouts.map((workout) => (
          <WorkoutItem
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
