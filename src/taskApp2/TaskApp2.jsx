import { React } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { TaskProvider } from "./TaskContext";

// https://react.dev/learn/managing-state
// https://codesandbox.io/s/n9tqxr?file=/TaskList.js&utm_medium=sandpack
export default function TaskApp2() {
  return (
    <TaskProvider>
      <h2>Day off in Kyoto</h2>
      <AddTask />
      <TaskList />
    </TaskProvider>
  );
}
