import { useState, useReducer } from "react";

// https://react.dev/learn/managing-state
// https://codesandbox.io/s/vtkq6p?file=/TaskList.js&utm_medium=sandpack
export default function TaskApp() {
  const [tasks, dispatch] = useReducer(reduceFn, initialTasks);

  const handleAddTask = (text) => {
    dispatch({ type: "Add", payload: { text: text, done: false } });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "Change",
      payload: task,
    });
  };

  const handDeleteTask = (taskId) => {
    dispatch({ type: "Delete", payload: { id: taskId } });
  };

  return (
    <>
      <h2>Prague itinerary</h2>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handDeleteTask}
      />
    </>
  );
}

function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <>
      {tasks.map((t, idx) => (
        <div key={idx}>
          <Task task={t} onChange={onChangeTask} onDelete={onDeleteTask} />
        </div>
      ))}
    </>
  );
}

function Task({ task, onChange, onDelete }) {
  const [text, setText] = useState(task.text);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (newTask) => {
    onChange(newTask);
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
          onDelete(task.id);
        }}
      >
        Delete
      </button>
    </>
  );
}

function AddTask({ onAdd }) {
  const [task, setTask] = useState("");

  return (
    <>
      <input
        placeholder="Add task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={() => {
          onAdd(task);
          setTask("");
        }}
      >
        Add
      </button>
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];

const reduceFn = (state, action) => {
  switch (action.type) {
    case "Add":
      return [
        ...state,
        {
          id: nextId++,
          text: action.payload.text,
          done: action.payload.done,
        },
      ];
    case "Change":
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { ...action.payload };
        } else {
          return task;
        }
      });
    case "Delete":
      return state.filter((item) => item.id !== action.payload.id);
    default:
      throw Error("Unknown action: " + action.type);
  }
};
