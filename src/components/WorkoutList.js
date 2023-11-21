import React from 'react';

//Workout List Componenet
const WorkoutList = ({ workouts, onEdit, onDelete }) => {
    return (
      <div>
        <h2>Workout List</h2>
        <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            <strong>{workout.title}</strong>
            <p>{workout.description}</p>
            <button onClick={() => onEdit(workout.id)}>Edit</button>
            <button onClick={() => onDelete(workout.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkoutList;