export const createConnection = ({ serverUrl, roomId }) => {
  if (typeof serverUrl !== "string") {
    console.log(`serverUrl = ${serverUrl}`);
    throw Error("invalid room url!");
  }

  if (typeof roomId !== "string") {
    throw Error("inalid room id!");
  }

  let intervalId = null;
  let messageCallback = null;

  return {
    connect() {
      console.log(`✅ connecting in createConnection ...`);
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        console.log(`I'm in the interval callback!`);
        if (messageCallback) {
          if (Math.random() < 0.5) {
            messageCallback("less than 0.5!");
          } else {
            messageCallback("equal or more than 0.5!");
          }
        }
      }, 3000);
    },

    on(event, callback) {
      if (event !== "message") throw Error("Not a message event!");
      messageCallback = callback;
    },

    disconnect() {
      messageCallback = null;
      clearInterval(intervalId);
    },
  };
};
