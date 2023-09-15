export default function createConnection(roomId, serverUrl) {
  return {
    connect() {
      console.log("Connecting to " + roomId + " at server: " + serverUrl);
    },
    disconnect() {
      console.log("Disconnecting to " + roomId + " at server: " + serverUrl);
    },
  };
}
