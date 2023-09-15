import { useState } from "react";
import { useTaskDispatch } from "./TaskContext";

export default function AddTask() {
  const [task, setTask] = useState("");
  const dispatch = useTaskDispatch();

  return (
    <>
      <input
        placeholder="Add task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: "Add",
            payload: {
              text: task,
              done: false,
            },
          });
          setTask("");
        }}
      >
        Add
      </button>
    </>
  );
}
