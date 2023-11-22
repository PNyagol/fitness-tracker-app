import React from "react";
import NavBar from "./NavBar";
import WorkoutForm from "./WorkoutForm";

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <WorkoutForm />
      </main>
      <footer>
        <p>GROUP SEVEN</p>
      </footer>
    </>
  );
}

export default App;
