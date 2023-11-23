import React from "react";
import WorkoutCard from "./WorkoutCard";

const WorkoutList = ({
  workouts,
  handleEdit,
  handleDelete,
  isModalOpenned,
  setIsModalOpenned,
  setWorkoutId
}) => {

  return (
    <div className="card-container">
      <h2>Workout List</h2>
      <ul>
        {workouts &&
          workouts
            ?.reverse()
            .map((workout, i) => (
              <WorkoutCard
                workout={workout}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                setIsModalOpenned={setIsModalOpenned}
                isModalOpenned={isModalOpenned}
                setWorkoutId={setWorkoutId}
                key={i}
              />
            ))}
      </ul>
    </div>
  );
};


export default WorkoutList;
