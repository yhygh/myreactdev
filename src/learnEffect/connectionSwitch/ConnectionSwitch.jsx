import { createEncryptedConnection, createUnencryptedConnection } from "./chat";
import { useState, useEffect } from "react";

// https://react.dev/learn/lifecycle-of-reactive-effects
// https://codesandbox.io/s/h5mrm5?file=%2FApp.js&utm_medium=sandpack

// This approach is a bit fragile, use the other approach described in react.dev
export default function ConnectionSwitch() {
  const [roomId, setRoomId] = useState("general");
  const [isEncryped, setIsEncrypted] = useState(false);

  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <input
        type="checkbox"
        checked={isEncryped}
        onChange={(e) => setIsEncrypted(e.target.checked)}
      />
      Enable encryption
      <hr />
      <ChatRoom
        roomId={roomId}
        createConnection={
          isEncryped ? createEncryptedConnection : createUnencryptedConnection
        }
      />
    </>
  );
}

export function ChatRoom({ roomId, createConnection }) {
  useEffect(() => {
    const connection = createConnection(roomId);
    connection.connect();

    return () => connection.disconnect();
  }, [createConnection, roomId]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}
