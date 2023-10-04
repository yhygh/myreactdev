import { React, useEffect, useState } from "react";

// challenges
// https://react.dev/learn/reusing-logic-with-custom-hooks
// https://codesandbox.io/s/n9nqdr?file=%2FApp.js&utm_medium=sandpack
export default function Counter() {
  const [delay, setDelay] = useState(1000);

  const count = useCounter(delay);

  return (
    <>
      <h4>custom counter hook</h4>
      <label>
        Tick duration: {delay} ms
        <br />
        <input
          type="range"
          value={delay}
          min="10"
          max="2000"
          onChange={(e) => setDelay(e.target.value)}
        />
      </label>

      <h1>Ticks: {count}</h1>
    </>
  );
}

// function useCounter(delay) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let intervalId;
//     intervalId = setInterval(() => {
//       setCount((c) => c + 1);
//     }, delay);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [delay]);

//   return count;
// }

function useCounter(delay) {
  const [count, setCount] = useState(0);

  // Approach one, using useCallback
  // const tick = useCallback(() => setCount((c) => c + 1), []);
  // useInterval(delay, tick);

  // Approach two, use setCount directly
  useInterval(delay, setCount);

  // Approach three, use react.dev example, still has the resetting the interval issue
  // const onTick = () => setCount((c) => c + 1);
  // useInterval(delay, onTick);

  return count;
}

function useInterval(delay, onTick) {
  useEffect(() => {
    console.log(`running in Effect， set up interval with delay ... ${delay}`);
    const intervalId = setInterval(() => {
      // // Approach one
      // tick();

      // Approach two
      onTick((c) => c + 1);
    }, delay);

    // const intervalId = setInterval(onTick, delay);
    return () => {
      clearInterval(intervalId);
      console.log(`cleaning up interval in Effect with delay ... ${delay}`);
    };
  }, [delay, onTick]);
}
