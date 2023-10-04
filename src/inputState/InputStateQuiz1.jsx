import { useState } from "react";

export default function InputStateQuiz1() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);

  if (status === "success") {
    return <h3>That's right</h3>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await fakeFormSubmit(text);
      setError(null);
      setStatus("success");
    } catch (err) {
      setError(err);
      setStatus("typing");
    }
  };

  return (
    <>
      <h3>City quiz</h3>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <input
          type="text"
          disabled={status === "submitting"}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={text === "" || status === "submitting"}
        >
          Submit
        </button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
}

async function fakeFormSubmit(city) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (city.toLowerCase() === "lima") {
        resolve();
      } else {
        reject("wrong answer");
      }
    }, 3000);
  });
}
