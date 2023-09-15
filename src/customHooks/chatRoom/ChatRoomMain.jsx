import { useState } from "react";
import { useChatRoom } from "./useChatRoom";
import ChatRoom from "./ChatRoom";

// https://react.dev/learn/reusing-logic-with-custom-hooks
// https://codesandbox.io/s/mqj78c?file=/ChatRoom.js&utm_medium=sandpack

// Notice the difference between what I put the ChatRoom and the example code
export default function ChatRoomMain() {
  const [roomId, setRoomId] = useState("general");
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  console.log(`inside Main component, serverUrl = ${serverUrl}`);
  useChatRoom({ serverUrl, roomId });

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
      <hr />
      <ChatRoom serverUrl={serverUrl} cb={(v) => setServerUrl(v)} />
      <h2>Welcome to the {roomId} room!</h2>
    </>
  );
}
