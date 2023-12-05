import React, { useState } from "react";

export default function Todo({
  hmwrk,
  remove,
  startEditing,
  editingTask,
  editTask,
  cancelEditing,
}) {
  const [status, setStatus] = useState(false);
  const [editText, setEditText] = useState(hmwrk.hmwrk);

  const handleCheckbox = () => {
    setStatus(!status);
  };

  const handleEdit = () => {
    startEditing(hmwrk.id);
  };  

  const handleSaveEdit = () => {
    editTask(hmwrk.id, editText);
  };

  const handleCancelEdit = () => {
    cancelEditing();
  };

  const handleInputChange = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div className="taskContainer">
      <div className="taskInfo">
        <input type="checkbox" checked={status} onChange={handleCheckbox} />
        {editingTask === hmwrk.id ? (
          <div>
            <input
              type="text"
              value={editText}
              onChange={handleInputChange}
            />
            <button onClick={handleSaveEdit}>Save</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        ) : (
          <p className={status ? "done" : "notDone"}>{hmwrk.hmwrk}</p>
        )}
      </div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={() => remove(hmwrk)}>Delete</button>
    </div>
  );
}
