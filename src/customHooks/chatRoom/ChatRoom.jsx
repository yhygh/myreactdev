// import { React } from "react";

export default function ChatRoom({ serverUrl, cb }) {
  console.log(`inside ChatRoom, serverUrl = ${JSON.stringify(serverUrl)}`);
  return (
    <>
      <label>
        Server URL:
        <input value={serverUrl} onChange={(e) => cb(e.target.value)} />
      </label>
    </>
  );
}
