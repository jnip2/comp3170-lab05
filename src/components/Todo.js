import React, { useState } from "react";
import "../styles.css"

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

  const getTimeString = () => {
    const options = { hour: "numeric", minute: "numeric" };
    return new Date().toLocaleTimeString(undefined, options);
  };

  return (
    <div className="taskContainer">
      <div className="taskInfo">
        <input type="checkbox" checked={status} onChange={handleCheckbox} />
        {editingTask === hmwrk.id ? (
          <div className="editBox">
            <input
              type="text"
              value={editText}
              onChange={handleInputChange}
            />
            <div className="editButtonsContainer">
              <button onClick={handleSaveEdit} className="button">Save</button>
              <button onClick={handleCancelEdit} className="button">Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <p className={status ? "done" : "notDone"}>{hmwrk.hmwrk}</p>
            {/* <p className="time">Time Added: {hmwrk.time}</p> */}
            {/* {status && <p className="checkboxTime">Completed: {getTimeString()}</p>} */}
          </>
        )}
      </div>
      <div className="editDeleteContainer">
        <button onClick={handleEdit} className="button">Edit</button>
        <button onClick={() => remove(hmwrk)} className="button">Delete</button>
      </div>
    </div>
  );
}
