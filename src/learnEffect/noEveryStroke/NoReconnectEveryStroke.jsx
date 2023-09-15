// import { React, useState, useEffect } from "react";
import { useState, useEffect } from "react";
import createConnection from "./chat";

const serverUrl = "https://localhost:1234";

export default function NoReconnectEveryStroke() {
  const [roomId, setRoomId] = useState("general");

  return (
    <>
      <label>
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom roomId={roomId} />
    </>
  );
}

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const connection = createConnection(roomId, serverUrl);
    connection.connect();

    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
    </>
  );
}
