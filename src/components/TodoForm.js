import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export default function TodoForm({ addTask, editTask, editingTask }) {
  const [hmwrk, setHmwrk] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (editingTask) {
      setHmwrk(editingTask.hmwrk);
      setIsEditing(true);
    } else {
      setHmwrk("");
      setIsEditing(false);
    }
  }, [editingTask]);

  function getCurrentTime() {
    const currentDateTime = new Date();
    const hours = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes();
    const formattedTime = `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
    return formattedTime;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      hmwrk,
      id: isEditing ? editingTask.id : nanoid(),
      time: getCurrentTime(),
    };

    if (isEditing) {
      editTask(editingTask.id, newTask);
    } else {
      addTask(newTask);
    }

    setHmwrk("");
    setIsEditing(false);
  }

  function handleChange(e) {
    setHmwrk(e.target.value);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="input">
          {isEditing ? "Edit Task:" : "Add Task:"}
          <input value={hmwrk} type="text" onChange={handleChange} />
        </label>
        <button type="submit">{isEditing ? "Save" : "Add"}</button>
      </form>
    </div>
  );
}
