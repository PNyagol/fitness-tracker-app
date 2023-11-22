import React from 'react';
import WorkoutItem from './WorkoutItem';

// Workout List Component
const WorkoutList = ({ workouts, onEdit, onDelete }) => {

  console.log('WORKOULIST:', workouts)
  return (
    <div>
      <h2>Workout List</h2>
      <ul>
        {/* Added the .reverse method the get the latest object from the DB */}
        {workouts?.reverse().map((workout) => (
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
