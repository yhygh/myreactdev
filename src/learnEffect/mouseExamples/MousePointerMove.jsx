import { useEffect, useState } from "react";

// https://react.dev/reference/react/useEffect
// https://codesandbox.io/s/lzph75?file=%2FApp.js&utm_medium=sandpack
export default function MousePointerMove() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      console.log(`pos = ${JSON.stringify(pos)} e.clientX=${e.clientX}`);
      setPos({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "pink",
        borderRadius: "50%",
        opacity: 0.6,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        pointerEvents: "none",
        width: 40,
        height: 40,
        left: -20,
        top: -20,
      }}
    ></div>
  );
}
