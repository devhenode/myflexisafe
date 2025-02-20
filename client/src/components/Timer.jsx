import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds >= 10 ? 0 : prevSeconds + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>Seconds: {seconds} 👈 made use of useEffect on that</p>; 
}

export default Timer;
