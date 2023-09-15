import { useState, useRef } from "react";

// https://react.dev/learn/referencing-values-with-refs
// https://codesandbox.io/s/3dr3cn?file=/App.js&utm_medium=sandpack
export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);

  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const timepassed = startTime && now ? (now - startTime) / 1000 : 0;

  function handleStart() {
    setStartTime(Date.now());
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  return (
    <>
      <h3>Time passed: {timepassed.toFixed(3)}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

// export default function StopWatch() {
//   const [startTime, setStartTime] = useState(null);

//   const [now, setNow] = useState(null);
//   const [intervalId, setIntervalId] = useState(undefined);

//   const timepassed = (now - startTime) / 1000;

//   function handleStart() {
//     setStartTime(Date.now());
//     const intervalId = setInterval(() => {
//       setNow(Date.now());
//     }, 10);
//     setIntervalId(intervalId);
//     // console.log(`in handleStart: intervalId = ${intervalId}`);
//   }

//   function handleStop() {
//     console.log(`in handleStop: intervalId = ${intervalId}`);
//     if (intervalId) {
//       clearInterval(intervalId);
//     }
//   }

//   return (
//     <>
//       <h3>Time passed: {timepassed}</h3>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </>
//   );
// }
