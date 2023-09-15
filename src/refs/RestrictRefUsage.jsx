import { useRef, useState, forwardRef, useImperativeHandle } from "react";

// https://react.dev/learn/manipulating-the-dom-with-refs
// https://codesandbox.io/s/4trz8j?file=%2FApp.js&utm_medium=sandpack

export default function RestrictRefUsage() {
  const myinputRef = useRef(null);

  const handleFocus = () => {
    myinputRef.current.focus();
  };

  return (
    <>
      <MyInput ref={myinputRef} />
      <button onClick={handleFocus}>Focus the input</button>
    </>
  );
}

const MyInput = forwardRef((props, ref) => {
  const [text, setText] = useState("");
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));

  return (
    <>
      <input ref={realInputRef} onChange={(e) => setText(e.target.value)} />
    </>
  );
});
