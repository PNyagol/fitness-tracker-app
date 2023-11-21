import React from 'react';
import WorkoutForm from './WorkoutForm';

function App() {
  // Handle submission of workout details
  const handleWorkoutSubmission = (workoutDetails) => {
    
    console.log('Workout details submitted:', workoutDetails);
  };

  return (
    <div>
      <h1>Fitness Tracker App</h1>
      <WorkoutForm onSubmit={handleWorkoutSubmission} />
    </div>
  );
}

export default App;
