import { useRef, useState } from "react";

// https://react.dev/learn/referencing-values-with-refs
// https://codesandbox.io/s/348vnj?file=%2FApp.js&utm_medium=sandpack
export default function BrokenChatInput1() {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const timeoutIdRef = useRef(null);

  function handleSend() {
    setSending(true);
    const timeoutId = setTimeout(() => {
      alert(message);
      setSending(false);
    }, 3000);
    timeoutIdRef.current = timeoutId;
  }

  function handleCancel() {
    clearTimeout(timeoutIdRef.current);
    setSending(false);
  }

  return (
    <>
      <h4>Send and Undo Send</h4>
      <p>Note: to disable input and button when status changes</p>
      <p>
        Do not use <code>ref.current</code> during rendering
      </p>
      <input
        value={message}
        disabled={sending}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button disabled={sending} onClick={handleSend}>
        Send
      </button>
      {sending && <button onClick={handleCancel}>Cancel</button>}
    </>
  );
}

// export default function BrokenChatInput1() {
//   const [message, setMessage] = useState("");
//   const [sending, setSending] = useState(false);
//   const [timeoutId, setTimeoutId] = useState(undefined); // this works, but not ideal
//   // notice if using let timeoutId = null won't work, from challenge 1

//   function handleSend() {
//     setSending(true);
//     const timeoutId1 = setTimeout(() => {
//       alert(message);
//       setSending(false);
//     }, 3000);
//     setTimeoutId(timeoutId1);
//   }

//   function handleCancel() {
//     clearTimeout(timeoutId);
//     setSending(false);
//   }

//   return (
//     <>
//       <input
//         value={message}
//         disabled={sending}
//         onChange={(e) => setMessage(e.target.value)}
//       />
//       <button disabled={sending} onClick={handleSend}>
//         Send
//       </button>
//       {sending && <button onClick={handleCancel}>Cancel</button>}
//     </>
//   );
// }
