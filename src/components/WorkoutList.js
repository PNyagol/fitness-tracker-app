// import React from 'react';
// import WorkoutItem from './WorkoutItem';

// // Workout List Component
// const WorkoutList = ({ workouts, onEdit, onDelete }) => {

//   console.log('WORKOULIST:', workouts)
//   return (
//     <div>
//       <h2>Workout List</h2>
//       <ul>
//         {/* Added the .reverse method the get the latest object from the DB */}
//         {workouts?.reverse().map((workout) => (
//           <WorkoutItem
//             key={workout.id}
//             workout={workout}
//             onEdit={onEdit}
//             onDelete={onDelete}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default WorkoutList;



import React from 'react';
import WorkoutCard from './WorkoutCard';


const WorkoutList = ({ workouts, onEdit, onDelete }) => {
  /*
  can someone make the buttons work now
  for on edit, they will just reuse the table
  is the the card implementation is good, we can agree to have the above commented code deleted
  */ 
  return (
    <div className="card-container">
      <h2>Workout List</h2>
      <div className="card-list">
        {workouts?.reverse().map((workout) => (
          <WorkoutCard
            key={workout.id}
            exercise={workout.exercise}
            duration={workout.duration}
            date={workout.date}
            notes={workout.notes}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkoutList;

