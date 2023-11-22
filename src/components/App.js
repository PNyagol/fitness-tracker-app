import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutList from './WorkoutList';

function App() {
  
  const [workouts, setWorkouts] = useState([]);

  const handleWorkoutSubmission = (workoutDetails) => {
    
    setWorkouts((prevWorkouts) => [...prevWorkouts, workoutDetails]);
    console.log('Workout details submitted:', workoutDetails);
  };

  const handleEdit = (id) => {
    console.log('Edit workout with id:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete workout with id:', id);
  };

  return (
    <div>
      <h1>Fitness Tracker App</h1>
      <WorkoutForm onSubmit={handleWorkoutSubmission} />
      <WorkoutList workouts={workouts} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
