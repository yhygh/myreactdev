import { useState, useRef } from "react";

// https://react.dev/learn/referencing-values-with-refs
export default function BrokenChatInput() {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const timeoutRef = useRef(null);

  const handleSend = () => {
    setIsSending(true);
    timeoutRef.current = setTimeout(() => {
      alert("Sent!");
      setIsSending(false);
    }, 3000);
  };

  const handleUndo = () => {
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsSending(false);
  };

  return (
    <>
      <label>
        <input
          disabled={isSending}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      {isSending && (
        <>
          <button disabled>Sending ...</button>
          <button onClick={handleUndo}>Undo</button>
        </>
      )}
      {!isSending && <button onClick={handleSend}>Send</button>}
    </>
  );
}
