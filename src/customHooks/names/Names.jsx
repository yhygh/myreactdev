import { useState } from "react";

// https://codesandbox.io/s/wfwqrn?file=/useFormInput.js&utm_medium=sandpack
// https://react.dev/learn/reusing-logic-with-custom-hooks
export default function Names() {
  const firsts = useName("Mary");
  const lasts = useName("Poppins");

  return (
    <>
      <form type="submit">
        First name: <input value={firsts.name} onChange={firsts.handleChange} />
        Last name: <input value={lasts.name} onChange={lasts.handleChange} />
      </form>
      <h3>Good morning, {firsts.name + " " + lasts.name} </h3>
    </>
  );
}

function useName(defaultName) {
  const [name, setName] = useState(defaultName);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return { name, handleChange };
}
