import { useEffect, useState } from "react";

// https://react.dev/reference/react/useEffect
// https://codesandbox.io/s/lzph75?file=%2FApp.js&utm_medium=sandpack
// export default function MousePointerMoveWithHook() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   const handleMove = (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   };

//   useWindowListener({ type: "pointermove", listener: handleMove });

//   return (
//     <div
//       style={{
//         position: "absolute",
//         backgroundColor: "pink",
//         borderRadius: "50%",
//         opacity: 0.6,
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         pointerEvents: "none",
//         width: 40,
//         height: 40,
//         left: -20,
//         top: -20,
//       }}
//     ></div>
//   );
// }

// function useWindowListener({ type, listener }) {
//   useEffect(() => {
//     console.log(`add event listener ...`);
//     window.addEventListener(type, listener);

//     return () => {
//       console.log(`remove event listener ...`);

//       window.removeEventListener(type, listener);
//     };
//   }, [type, listener]);
// }

// Below is my own first implementation, works

export default function MousePointerMoveWithHook() {
  const { position } = usePointerMoveHook();

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "pink",
        borderRadius: "50%",
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: "none",
        width: 40,
        height: 40,
        left: -20,
        top: -20,
      }}
    ></div>
  );
}

// This approach is similar to useOnlineStatus
// on https://react.dev/learn/reusing-logic-with-custom-hooks
function usePointerMoveHook() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    console.log(`add event listener ...`);
    window.addEventListener("pointermove", handleMove);

    return () => {
      console.log(`remove event listener ...`);
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return { position };
}
