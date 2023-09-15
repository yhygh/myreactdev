import { React, useEffect, useState } from "react";
import usePointerPosition from "./usePointerPosition.js";

// https://react.dev/learn/reusing-logic-with-custom-hooks
// https://codesandbox.io/s/63h3vz?file=/App.js&utm_medium=sandpack

function useDelayedValue(value, delay) {
  const [val, setVal] = useState(value);
  // TODO: Implement this Hook
  useEffect(() => {
    const id = setTimeout(() => {
      setVal({ x: value.x, y: value.y });
    }, delay);

    // return () => clearTimeout(id); // note: it makes a big difference without this line
  }, [value, delay]);

  return val;
}

export default function PointerCanvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos3, 50);
  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

function Dot({ position, opacity }) {
  console.log(`opacity=${opacity} position = ${JSON.stringify(position)}`);
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "pink",
        borderRadius: "50%",
        opacity,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }}
    />
  );
}
