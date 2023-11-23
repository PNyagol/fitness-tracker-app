// import React, { useEffect, useState } from "react";
// import NavBar from "./NavBar";
// import WorkoutForm from "./WorkoutForm";
// import WorkoutList from "./WorkoutList";

// function App() {
//   const [workouts, setWorkouts] = useState([]);

//   // What does this do?
//   const handleWorkoutSubmission = (workoutDetails) => {
//     setWorkouts((prevWorkouts) => [...prevWorkouts, workoutDetails]);
//     console.log("Workout details submitted:", workoutDetails);
//   };

//   const handleEdit = (id) => {
//     console.log("Edit workout with id:", id);
//   };

//   const handleDelete = (id) => {
//     console.log("Delete workout with id:", id);
//   };

//   useEffect(async () => {
//     let data = await fetch("http://localhost:3001/workouts").then((response) =>
//       response.json()
//     );

//     setWorkouts(data);

//     console.log(workouts);
//   }, []);
//   return (
//     <>
//       <header>
//         <NavBar />
//       </header>
//       <main>
//         <WorkoutForm />
//         {/* Upon the fitness object being added to the db.json, the UI should reflect it immediately. */}
//         <WorkoutList
//           workouts={workouts}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//         />
//       </main>
//       <footer>
//         <p>GROUP SEVEN</p>
//       </footer>
//     </>
//   );
// }

// export default App;






import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";


function App() {
  const [workouts, setWorkouts] = useState([]);

  const handleWorkoutSubmission = async (workoutDetails) => {
    try {
      const response = await fetch("http://localhost:3001/workouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(workoutDetails),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedWorkouts = await response.json();
      setWorkouts(updatedWorkouts);

      console.log("Workout details submitted:", workoutDetails);
    } catch (error) {
      console.error("Error submitting workout details:", error);
    }
  };

  const handleEdit = (id) => {
    console.log("Edit workout with id:", id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/workouts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedWorkouts = await response.json();
      setWorkouts(updatedWorkouts);

      console.log("Deleted workout with id:", id);
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/workouts");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setWorkouts(data);

        console.log("Fetched workouts:", data);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <WorkoutForm onFormSubmit={handleWorkoutSubmission} />
        <WorkoutList workouts={workouts} onEdit={handleEdit} onDelete={handleDelete} />
      </main>
      <footer>
        <p>GROUP SEVEN</p>
      </footer>
    </>
  );
}

export default App;

