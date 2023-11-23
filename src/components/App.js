import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [initial] = useState(true);
  const [isModalOpenned, setIsModalOpenned] = useState(false);
  const [workoutId, setWorkoutId] = useState(null);

  const handleEdit = async (id) => {
    const patchData = {};

    let data = await fetch(`http://localhost:3001/workouts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patchData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => data)
      .catch((error) => {
        console.error("Error during PATCH request:", error);
      });

    return data;
  };

  const handleDelete = async (id) => {
    let data = await fetch(`http://localhost:3001/workouts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // body:
    }).then((res) => res.json());
    console.log("DEMO FROM APP DELETE:", await data);
  };

  useEffect(() => {
    const fetcData = async () => {
      const response = await fetch("http://localhost:3001/workouts")
        .then((res) => res.json())
        .then((data) => setWorkouts(data));

      return await response;
    };

    fetcData();
  }, []);

  useEffect(() => {
    console.log("workoutId: ", workoutId);
  }, [workoutId]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <WorkoutForm
          formSubmitted={formSubmitted}
          setFormSubmitted={setFormSubmitted}
        />
        <WorkoutList
          workouts={workouts}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setIsModalOpenned={setIsModalOpenned}
          isModalOpenned={isModalOpenned}
          setWorkoutId={setWorkoutId}
        />
        {isModalOpenned && (
          <Modal
            isModalOpenned={isModalOpenned}
            setIsModalOpenned={setIsModalOpenned}
            handleEdit={handleEdit}
            workoutId={workoutId}
          />
        )}
      </main>
      <footer>
        <p>GROUP SEVEN</p>
      </footer>
    </>
  );
}

const Modal = ({
  setIsModalOpenned,
  isModalOpenned,
  handleEdit,
  workoutId,
}) => {
  const [data, setData] = useState(null);
  useEffect( () => {
    async function _data() {
      return await handleEdit(parseInt(workoutId));
    }

    let data = _data();

    setData(data);

    console.log("DATA: ", data);
  }, isModalOpenned);
  return (
    <div
      className={"overlay"}
      onClick={() => setIsModalOpenned(!isModalOpenned)}
    >
      <form className="workout-form">
        <div className="form-group">
          <label>
            Exercise:
            <input
              type="text"
              name="exercise"
              value={data?.exercise}
              // onChange={handleInputChange}
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
              value={data?.duration}
              // onChange={handleInputChange}
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
              value={data?.date}
              // onChange={handleInputChange}
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
              // value={workoutDetails.notes}
              // onChange={handleInputChange}
              style={{ marginBottom: "10px" }}
            />
          </label>
        </div>

        <button type="submit" className="small-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
