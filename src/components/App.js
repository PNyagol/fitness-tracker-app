import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";

function App() {
  const [workouts, setWorkouts] = useState([]);

  // What does this do?
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

  useEffect(async () => {
    let data = await fetch("http://localhost:3001/workouts").then((response) =>
      response.json()
    );

    setWorkouts(data);

    console.log(workouts);
  }, []);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <WorkoutForm />
        {/* Upon the fitness object being added to the db.json, the UI should reflect it immediately. */}
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
