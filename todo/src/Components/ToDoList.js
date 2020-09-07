import React from "react";
import ToDo from "./todo";

const ToDosList = (props) => {
  const { toggleCompleted, todo } = props;

  return (
    <div className="todo-list">
      {todo.map((item) => (
        <ToDo key={item.id} task={item} toggleCompleted={toggleCompleted} />
      ))}
      
    </div>
  );
};

export default ToDosList;
