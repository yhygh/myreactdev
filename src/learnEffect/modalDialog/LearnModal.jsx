import { useState, useEffect, useRef } from "react";

// https://react.dev/reference/react/useEffect
// https://codesandbox.io/s/tqm5m2?file=%2FModalDialog.js&utm_medium=sandpack

export default function LearnModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open dialog</button>
      <LearnDialog isOpen={isOpen}>
        <div>Hello there!</div>
        <button onClick={() => setIsOpen(false)}>Close</button>
      </LearnDialog>
    </>
  );
}

function LearnDialog({ isOpen, children }) {
  const ref = useRef();

  useEffect(() => {
    if (!isOpen) return;

    const dialog = ref.current;
    dialog.showModal();

    return () => {
      dialog.close();
    };
  }, [isOpen]);

  return <dialog ref={ref}>{children}</dialog>;
}
