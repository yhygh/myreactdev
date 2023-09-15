import { useState } from "react";
import { useTaskDispatch, useTasks } from "./TaskContext";

export default function TaskList() {
  const tasks = useTasks();

  return (
    <>
      {tasks.map((t, idx) => (
        <div key={idx}>
          <Task task={t} />
        </div>
      ))}
    </>
  );
}

function Task({ task }) {
  const [text, setText] = useState(task.text);
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useTaskDispatch();

  const handleChange = (newTask) => {
    dispatch({
      type: "Change",
      payload: newTask,
    });
    setIsEditing(false);
  };

  const editingPart = (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => handleChange({ ...task, text: text })}>
        Save
      </button>
    </>
  );

  return (
    <>
      {isEditing ? (
        editingPart
      ) : (
        <>
          <span>{task.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button
        onClick={() => {
          dispatch({ type: "Delete", payload: { id: task.id } });
        }}
      >
        Delete
      </button>
    </>
  );
}
