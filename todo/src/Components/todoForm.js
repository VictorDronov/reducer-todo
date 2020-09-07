import React from "react";

const ToDoForm = (props) => {
  const { task, formSubmit, inputChanges } = props;
  console.log(task);
  return (
    <div className="todoForm ">
      <form onSubmit={formSubmit}>
        <label>
          I need to: &nbsp;
          <input type="text" name="task" value={task} onChange={inputChanges} />
        </label>
        &nbsp;
        <button>Add</button>
      </form>
      <button>Clear Completed</button>
    </div>
  );
};

export default ToDoForm;
