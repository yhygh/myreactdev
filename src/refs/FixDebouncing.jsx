import { React, useRef } from "react";

// // my implementation without composition
// export default function () {
//   const timeoutRef = useRef({ space: null, soup: null, lullaby: null });

//   const handDebounce = (message, type) => {
//     if (timeoutRef.current[type]) {
//       clearTimeout(timeoutRef.current[type]);
//     }
//     timeoutRef.current[type] = setTimeout(() => {
//       alert(message);
//       timeoutRef.current[type] = null;
//     }, 1000);
//   };

//   return (
//     <>
//       <button onClick={() => handDebounce("Spaceship launched!", "space")}>
//         Launch the spaceship
//       </button>
//       <button onClick={() => handDebounce("Soup boiled!", "soup")}>
//         Boil the soup
//       </button>
//       <button onClick={() => handDebounce("Lullaby sang!", "lullaby")}>
//         Sing a lullaby
//       </button>
//     </>
//   );
// }

export default function () {
  return (
    <>
      <DebounceButton onClick={() => alert("Spaceship launched!")}>
        Launch the spaceship
      </DebounceButton>
      <DebounceButton onClick={() => alert("Soup boiled!")}>
        Boil the soup
      </DebounceButton>
      <DebounceButton onClick={() => alert("Lullaby sang!")}>
        Sing a lullaby
      </DebounceButton>
    </>
  );
}

function DebounceButton({ onClick, children }) {
  const timeoutRef = useRef(null);

  const handleClick = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      onClick();
    }, 1000);
  };

  return (
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  );
}
