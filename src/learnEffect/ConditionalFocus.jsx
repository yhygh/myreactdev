import { useEffect, useState, useRef } from "react";

// https://react.dev/learn/synchronizing-with-effects
export default function ConditionalFocus() {
  const [shouldMount, SetShouldMount] = useState(true);
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLasttName] = useState("Swift");

  return (
    <>
      <button onClick={() => SetShouldMount(!shouldMount)}>
        {shouldMount ? "Hide form" : "Show form"}
      </button>
      <hr />
      {shouldMount && (
        <>
          <MyInput shouldFocus={true} name={firstName} onChange={setFirstName}>
            Enter your first name:{" "}
          </MyInput>
          <MyInput shouldFocus={false} name={lastName} onChange={setLasttName}>
            Enter your last name:
          </MyInput>
          <p>
            Hello, {firstName} {lastName}
          </p>
        </>
      )}
    </>
  );
}

function MyInput({ children, shouldFocus, name, onChange }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (shouldFocus) {
      inputRef.current.focus();
    }
  }, [shouldFocus]);

  return (
    <div>
      {children}
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
