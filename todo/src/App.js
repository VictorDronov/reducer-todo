import React, { useState } from "react";
import TodoList from "./Components/ToDoList";
import TodoForm from "./Components/todoForm";
import "./Components/Todo.css";

const toDoListData = [
  {
    item: "Clean kitchen",
    id: 1234,
    done: false,
  },
  {
    item: "Do laundry",
    id: 5678,
    done: false,
  },
  {
    item: "Buy groceries",
    id: 9012,
    done: false,
  },
];

function App() {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  const [toDoList, setToDoList] = useState(toDoListData);
  // this add/submit function will add a todo item to the array
  // the function needs to create a new item, so it must 'set-up' a skeleton for where item will live
  // const addTodo = (todoItem) => {
  //   const newTodo = {
  //     // new item home and what 'rooms' it has
  //     item: todoItem,
  //     id: new Date(),
  //     done: false,
  //   };
  //   // using the setState func to update the state with the newTodo item
  //   setToDoList([...toDoList, newTodo]);
  // };
  // this clear function will clear all todo items that have been switched to done
  const clearTodo = () => {
    setToDoList(
      toDoList.filter((listItem) => {
        if (listItem.done === true) {
          return "";
        } else {
          return listItem;
        }
      })
    );
  };

  
  // this toggle function will switch todo item to true (e.g. task is done)
  const toggleDone = (clickedItemId) => {
    setToDoList(
      toDoList.map((listItem) => {
        if (listItem.id === clickedItemId) {
          return {
            ...listItem,
            done: !listItem.done,
          };
        } else {
          return listItem;
        }
      })
    );
  };


  return (
    <div>
      <h1>To-Do List</h1>
      <div className="todo-container">
        <TodoForm
          clearTodo={clearTodo}
          className="container container1"
        />
        <TodoList
          toDoList={toDoList}
          key={toDoList.id}
          toggleDone={toggleDone}
          className="container container2"
        />
      </div>
    </div>
  );
}
export default App;
