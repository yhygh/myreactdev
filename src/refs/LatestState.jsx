import { React, useRef, useState } from "react";

// https://react.dev/learn/referencing-values-with-refs

export default function LatestState() {
  const [message, setMessage] = useState("");
  const messageRef = useRef("");

  const handleSend = () => {
    setTimeout(() => {
      alert("Sending ... " + messageRef.current);
    }, 3000);
  };

  return (
    <>
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          messageRef.current = e.target.value;
        }}
      />
      <button onClick={handleSend}>Send</button>
    </>
  );
}
