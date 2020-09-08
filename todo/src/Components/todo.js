import React from "react";
const Todo = (props) => {
  const {dispatch,todoItem} = props
  return (
    <div
      onClick={() => dispatch({type: "TOGGLE_COMPLETED"})}
      className={`item${todoItem.done ? " done" : " "}`}
    >
      <p>{props.todoItem.item}</p>
    </div>
  );
};
export default Todo;
