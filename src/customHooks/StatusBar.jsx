import { useEffect, useState } from "react";

// export function StatuBar() {
//   const [isOnline, setIsOnline] = useState(true);

//   useEffect(() => {
//     const handleOnline = () => {
//       setIsOnline(true);
//     };
//     const handleOffline = () => {
//       setIsOnline(false);
//     };

//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);

//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, [isOnline]);

//   return <h1>{isOnline ? <div> Online </div> : <div> Disconnected </div>}</h1>;
// }

export function StatuBar() {
  const isOnline = useOnlineStatus(true);

  return (
    <h1>{isOnline ? <div> ✅ Online </div> : <div> ❌ Disconnected </div>}</h1>
  );
}

function useOnlineStatus(initialStatus) {
  const [isOnline, setIsOnline] = useState(initialStatus);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [isOnline]);

  return isOnline;
}
