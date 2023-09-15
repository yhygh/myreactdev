import { useState, useEffect, useSyncExternalStore } from "react";

// https://react.dev/reference/react/useSyncExternalStore#usage
// https://codesandbox.io/s/flzfww?file=/useOnlineStatus.js&utm_medium=sandpack
export default function StatuBarExternal() {
  const isOnline = useOnlineStatus();

  return (
    <>
      <h2>Track online status: use useSyncExternalStore</h2>
      <h1>
        {isOnline ? <div> ✅ Online </div> : <div> ❌ Disconnected </div>}
      </h1>
    </>
  );
}

function useOnlineStatus() {
  const isOnline = useSyncExternalStore(subscribe, getSnapShot);

  return isOnline;
}

function getSnapShot() {
  return navigator.onLine;
}

/**
 *   Note: React will create a callback function handleStoreChange to pass
 *         it to subscribe
 * @param {} callback
 * @returns
 */
function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}
