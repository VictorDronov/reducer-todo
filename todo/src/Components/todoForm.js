import React, { useState } from "react";

const TodoForm = (props) => {
  const { dispatch } = props;
  const [newToDo, setNewToDo] = useState("");

  // this function will handle the input field being changed
  // it sets the item property to be the value of the input (what's typed in)
  const handleChange = (e) => {
    setNewToDo(e.target.value);
  };

  // function for clearing the form after completing lives in App.js

  return (
    <>
      <form className="form-input">
        <input
          value={newToDo}
          type="text"
          placeholder="Enter ToDo"
          onChange={handleChange}
          name="item"
        />
      </form>
      <div className="container container3">
        <button
          className="clearTodo-btn"
          onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
        >
          Clear Completed
        </button>
        <button
          className="addTodo"
          onClick={() => dispatch({ type: "ADDING_TODO", payload: newToDo })}
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

export default TodoForm;
