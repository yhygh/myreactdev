import { useState } from "react";

// https://react.dev/learn/managing-state
// https://codesandbox.io/s/wnphcd?file=/App.js&utm_medium=sandpack
function InputStateQuiz() {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [enableErrorMessage, setEnableErrorMessage] = useState(false);
  const [success, setSuccess] = useState(false); // can be improved using status: 'typing', 'submitting' and 'success'

  console.log(`submitting: ${submitting}`);

  const errorSection = <div>Good guess but a wrong answer. Try again!</div>;

  const handleSubmit = async (e) => {
    e.preventDefault(); // must have to prevent page reload
    setSubmitting(true);
    try {
      await submitForm(message);
      setSuccess(true);
      setEnableErrorMessage(false);
    } catch (err) {
      setSubmitting(false);
      setSuccess(false);
      setEnableErrorMessage(true);
    }
  };

  if (success) {
    return (
      <>
        <button
          onClick={() => {
            setSuccess(false);
            setMessage("");
            setSubmitting(false);
          }}
        >
          Back to Quiz component
        </button>
        <h2>That's right</h2>
      </>
    );
  }

  return (
    <>
      <h2>
        Async event handler, pay attention to state changes inside the event
        handler! And the promise implementation!
      </h2>
      <h3>City quiz</h3>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          disabled={submitting}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" disabled={submitting || message.length === 0}>
          Submit
        </button>
      </form>
      {enableErrorMessage && errorSection}
    </>
  );
}

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`answer = ${answer}`);
      if (answer.toLowerCase() === "lima") {
        resolve();
      } else {
        reject(new Error("Wrong city!"));
      }
    }, 1500);
  });
}

export default InputStateQuiz;
