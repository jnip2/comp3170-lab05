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

  function handleSubmit(e) {
    e.preventDefault();
    if (isEditing) {
      editTask(editingTask.id, hmwrk);
    } else {
      const newToDo = { hmwrk, id: nanoid() };
      addTask(newToDo);
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
