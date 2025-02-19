import React, { useState, useEffect } from 'react';

const DurationExercise = ({ name }) => {
  const [duration, setDuration] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    let interval;

    if (timerActive) {
      interval = setInterval(() => {
        setDuration((prevDuration) => prevDuration + 0.01);
      }, 10);
  }

        return () => clearInterval(interval);
      }, [timerActive]);



  const handleStart = () => {
    setTimerActive(true);
  };

  const handleReset = () => {
    setTimerActive(false);
    setDuration(0);
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>Duration: {formatDuration(duration)}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    );
};

const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  const milliseconds = Math.floor((seconds - Math.floor(seconds)) * 100);

  return `${padZero(minutes)}:${padZero(remainingSeconds)}.${padZero(milliseconds)}`;
};

const padZero = (value) => (value < 10 ? `0${value}` : value);

export default DurationExercise;