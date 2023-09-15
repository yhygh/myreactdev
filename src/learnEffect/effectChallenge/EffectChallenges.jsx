import { useState } from "react";
import { initialTodos, createTodo } from "./todos.js";
import { AddButtonWrapper } from "./EffectChallengesStyled.jsx";

// https://react.dev/learn/you-might-not-need-an-effect
// https://codesandbox.io/s/m9d22c?file=%2FApp.js&utm_medium=sandpack
export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);

  const activeTodos = todos.filter((todo) => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;

  return (
    <>
      <h1>Remove unnecessary useEffect</h1>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={(e) => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <AddButtonWrapper>
        <NewTodo onAdd={(newTodo) => setTodos([...todos, newTodo])} />
      </AddButtonWrapper>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>{activeTodos.length} todos left</footer>
    </>
  );
}

const NewTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  function handleAddClick() {
    setText("");
    onAdd(createTodo(text));
  }

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};
