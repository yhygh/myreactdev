import { useState } from "react";

// https://codesandbox.io/s/m3l63x?file=/App.js&utm_medium=sandpack
// https://react.dev/learn/managing-state
export default function Messenger() {
  const [activeUserIndex, setActiveUserIndex] = useState(0);

  return (
    <>
      <div>
        {contacts.map((contact, idx) => (
          <div key={idx}>
            <div onClick={() => setActiveUserIndex(idx)}>{contact.name}</div>
            {activeUserIndex === idx && <Chat person={contact} />}
          </div>
        ))}
      </div>
    </>
  );
}

function Chat({ person }) {
  const [text, setText] = useState("");

  return (
    <>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => {}}>Send to {person.email}</button>
    </>
  );
}

const contacts = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
];
