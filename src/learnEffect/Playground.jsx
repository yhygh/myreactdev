import { useEffect, useState } from "react";

// https://react.dev/learn/synchronizing-with-effects
export default function Playground() {
  const [shouldMount, SetShouldMount] = useState(true);

  return (
    <>
      <button onClick={() => SetShouldMount(!shouldMount)}>
        {shouldMount ? "Unmount" : "Mount"} the component
      </button>
      <hr />
      {shouldMount && <Log />}
    </>
  );
}

function Log() {
  const [text, setText] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("⏰  log: " + text);
    }, 3000);

    console.log('🔵 Schedule log "' + text);

    return () => {
      clearTimeout(timeoutId);
      console.log("🟡 Cancel log: " + text);
    };
  }, [text]);

  return (
    <>
      What to log:{" "}
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <h2>{text}</h2>
    </>
  );
}
