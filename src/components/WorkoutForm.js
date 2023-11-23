import React, { useState } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function WorkoutForm({ formSubmitted, setFormSubmitted }) {
  const [workoutDetails, setWorkoutDetails] = useState({
    exercise: "",
    duration: "",
    date: "",
    notes: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setWorkoutDetails({
      ...workoutDetails,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let data = await fetch("http://localhost:3001/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workoutDetails),
    }).then((response) => {
      return response.json();
    });

    formSubmitted === false && setFormSubmitted(!formSubmitted);

    setWorkoutDetails({
      exercise: "",
      duration: "",
      date: "",
      notes: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="workout-form">
      <div className="form-group">
        <label>
          Exercise:
          <input
            type="text"
            name="exercise"
            value={workoutDetails.exercise}
            onChange={handleInputChange}
            required
            style={{ marginBottom: "10px" }}
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Duration (minutes):
          <input
            type="number"
            name="duration"
            value={workoutDetails.duration}
            onChange={handleInputChange}
            required
            style={{ marginBottom: "10px" }}
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={workoutDetails.date}
            onChange={handleInputChange}
            required
            style={{ marginBottom: "10px" }}
          />
        </label>
      </div>

      <div className="form-group">
        <label>
          Notes:
          <textarea
            name="notes"
            value={workoutDetails.notes}
            onChange={handleInputChange}
            style={{ marginBottom: "10px" }}
          />
        </label>
      </div>

      <button type="submit" className="small-button">
        Submit
      </button>
    </form>
  );
}

export default WorkoutForm;
