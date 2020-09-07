import React from "react";

const ToDoForm = (props) => {
  const { todo, formSubmit, inputChanges } = props;
  return (
    <div className="todoForm ">
      <form onSubmit={formSubmit}>
        <label>
          I need to: &nbsp;
          <input
            type="text"
            name="task"
            value={todo}
            onChange={inputChanges}
          />
        </label>
        &nbsp;
        <button>Add</button>
      </form>
      <button>Clear Completed</button>
    </div>
  );
};

export default ToDoForm;
