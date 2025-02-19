import React, { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import Durationexercise from './components/DurationExercise';


function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseClick = (exerciseType) => {
    setSelectedExercise(exerciseType);
  };

  return (
    <div className="App">
      <h1>Exercise Tracker</h1>
      <button onClick={() => handleExerciseClick('repetition')}>Jumping Jacks</button>
      <br></br>
      <button onClick={() => handleExerciseClick('duration')}>Cycling</button>
      <br></br>


      {selectedExercise === 'repetition' && <RepetitionExercise name="Jumping Jacks" />}
      {selectedExercise === 'duration' && <Durationexercise name="Cycling" />}
    </div>
  );
}


export default App;

