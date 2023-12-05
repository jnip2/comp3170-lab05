import { useState } from "react";

export default function Todo(props) {
  const task = props.hmwrk;
  const [status, setStatus] = useState(false);

  function deleteTask() {
    props.remove(task);
  }

  function handleCheckbox() {
    if (status === false) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }

  return (
    <div className="taskContainer">
      <div className="taskInfo">
        <input type="checkbox" onChange={handleCheckbox} />
        {status === false ? (
          <p className="notDone">{task.hmwrk}</p>
        ) : (
          <p className="done">{task.hmwrk}</p>
        )}
      </div>
      <button onClick={deleteTask}>delete</button>
    </div>
  );
}
