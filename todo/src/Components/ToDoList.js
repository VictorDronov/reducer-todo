import React from "react";
import Todo from "./todo";
const TodoList = (props) => {
  const { toDoList } = props;
  return (
    <div className="todo-list">
      {toDoList.map((item) => (
        <Todo key={item.id} todoItem={item} toggleDone={props.toggleDone} />
      ))}
    </div>
  );
};
export default TodoList;
