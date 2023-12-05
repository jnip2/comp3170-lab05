import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

export default function Todos() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    const newTask = [...tasks, task];
    setTasks(newTask);
  }

  function removeTask(hmwrk) {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== hmwrk.id;
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="listContainer">
      <div className="toDoContainer">
        {tasks.map((item, index) => (
          <Todo remove={removeTask} hmwrk={item} key={index} />
        ))}
      </div>
      <TodoForm addTask={addTask} />
    </div>
  );
}
