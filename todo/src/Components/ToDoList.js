import React from "react";
import Todo from "./todo";
const TodoList = (props) => {
  const { state,dispatch } = props;
  return (
    <div className="todo-list">
      {state.map((item) => (
        <Todo key={item.id} todoItem={item} dispatch={dispatch} />
      ))}
    </div>
  );
};
export default TodoList;
