import { useState, useRef } from 'react';

export const useTimer = () => {
  const [time, setTime] = useState(0);

  const timerId = useRef(null);

  const startTimer = () => {
    if (timerId.current) {
      clearInterval(timerId.current);
    }
    timerId.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (timerId.current) {
      clearInterval(timerId.current);
    }
  };

  const resetTimer = () => {
    clearInterval(timerId.current);
    setTime(0);
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer
  };
};