import logo from './logo.svg';
import './App.css';
import WorkoutList from './components/WorkoutList.js';


const App = () => {
  // Sample workout data for demonstration
  const sampleWorkouts = [
    { id: 1, title: 'Workout 1', description: 'Description 1' },
    { id: 2, title: 'Workout 2', description: 'Description 2' },
    // Add more workout items as needed
  ];

  // State to manage the workouts
  const [workouts, setWorkouts] = useState(sampleWorkouts);

  // Placeholder functions for editing and deleting workouts
  const handleEdit = (id) => {
    console.log(`Editing workout with id ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleting workout with id ${id}`);
    // Update state to remove the deleted workout
    setWorkouts(workouts.filter((workout) => workout.id !== id));
  };

  return (
    <div>
      <h1>Workout App</h1>
      {/* Render the WorkoutList component */}
      <WorkoutList workouts={workouts} onEdit={handleEdit} onDelete={handleDelete} />
      {/* Additional components or content can be added here */}
    </div>
  );
};

export default App;

