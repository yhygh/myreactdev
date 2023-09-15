import { React, useRef, forwardRef } from "react";

export default function FocusSeparate() {
  const inputComponentRef = useRef(null);

  return (
    <>
      <SearchButton onClick={() => inputComponentRef.current.focus()} />
      <SearchInput ref={inputComponentRef} />
    </>
  );
}

function SearchButton({ onClick }) {
  return (
    <>
      <button onClick={onClick}>Search</button>
    </>
  );
}

const SearchInput = forwardRef((_props, ref) => {
  return (
    <>
      <input ref={ref} placeholder="Looking for something?" />
    </>
  );
});
