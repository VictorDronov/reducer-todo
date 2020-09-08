import React, { useReducer } from "react";
import TodoList from "./Components/ToDoList";
import TodoForm from "./Components/todoForm";
import { reducer, initialState } from "./reducers/index";

import "./Components/Todo.css";

function App() {
  // this component is going to take care of state, and any change handlers you need to work with your state
  // const [toDoList, setToDoList] = useState(toDoListData);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>To-Do List</h1>
      <div className="todo-container">
        <TodoForm dispatch={dispatch} className="container container1" />
        <TodoList
          dispatch={dispatch}
          state={state}
          className="container container2"
        />
      </div>
    </div>
  );
}
export default App;
