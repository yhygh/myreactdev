import { React, createContext, useContext, useReducer } from "react";

export const TaskContext = createContext(null);

export const TaskDispatchContext = createContext(null);

export function useTasks() {
  return useContext(TaskContext);
}

export function useTaskDispatch() {
  return useContext(TaskDispatchContext);
}

export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(reduceFn, initialTasks2);

  return (
    <>
      <TaskContext.Provider value={tasks}>
        <TaskDispatchContext.Provider value={dispatch}>
          {children}
        </TaskDispatchContext.Provider>
      </TaskContext.Provider>
    </>
  );
}

let nextId = 3;

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

const initialTasks2 = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
