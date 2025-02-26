
import React, { useState, useEffect } from 'react';

const DistanceExercise = ({ name }) => {
  const [distance, setDistance] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    let interval;

    if (timerActive) {
      interval = setInterval(() => {
        if (startTime !== null) {
          const currentTime = new Date().getTime();
          const elapsedTimeInSeconds = (currentTime - startTime) / 1000;

          setDistance((prevDistance) => prevDistance + 5 * elapsedTimeInSeconds);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerActive, startTime]);

  const handleStart = () => {
    setTimerActive(true);
    setStartTime(new Date().getTime());
  };

  const handleStop = () => {
    setTimerActive(false);
  };

  const handleReset = () => {
    setTimerActive(false);
    setStartTime(null);
    setDistance(0);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Distance: {distance.toFixed(2)} meters</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default DistanceExercise;