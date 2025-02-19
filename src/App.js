import React, { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import Durationexercise from './components/DurationExercise';
import DistanceExercise from './components/DistanceExercise';

function App() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseClick = (exerciseType) => {
    setSelectedExercise(exerciseType);
  };

  return (
    <div className="App">
      <h1>Exercise Tracker</h1>
      <button onClick={() => handleExerciseClick('repetition')}>Push-ups</button>
      <br></br>
      <button onClick={() => handleExerciseClick('duration')}>Running</button>
      <br></br>


      {selectedExercise === 'repetition' && <RepetitionExercise name="Push-ups" />}
      {selectedExercise === 'duration' && <Durationexercise name="Running" />}
    </div>
  );
}


export default App;
