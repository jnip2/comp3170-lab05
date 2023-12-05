import { useState } from "react";
import { nanoid } from "nanoid";

export default function TodoForm(props) {
  const [hmwrk, setHmwrk] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newToDo = { hmwrk, id: nanoid() };
    props.addTask(newToDo);

    setHmwrk("");
  }

  function handleChange(e) {
    setHmwrk(e.target.value);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="input">
          Add Task:
          <input value={hmwrk} type="text" onChange={handleChange} />
        </label>
        <button type="submit">add</button>
      </form>
    </div>
  );
}
