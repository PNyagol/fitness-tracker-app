import React, { useState } from "react";
import NavBar from "./NavBar";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";

function App() {
  const [workouts, setWorkouts] = useState([]);


  console.log(workouts)

  const handleWorkoutSubmission = (workoutDetails) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, workoutDetails]);
    console.log("Workout details submitted:", workoutDetails);
  };

  const handleEdit = (id) => {
    console.log("Edit workout with id:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete workout with id:", id);
  };
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        {/* <WorkoutForm /> */}
        <WorkoutForm onSubmit={handleWorkoutSubmission} />
        <WorkoutList
          workouts={workouts}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </main>
      <footer>
        <p>GROUP SEVEN</p>
      </footer>
    </>
  );
}

export default App;
