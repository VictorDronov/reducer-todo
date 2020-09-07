import React, { useReducer } from "react";
import "./App.css";
import ToDoForm from "./Components/todoForm";
import ToDosList from "./Components/ToDoList";
import { TheReducer, initialState } from "./reducers/index";

function App() {
  const [state, dispatch] = useReducer(TheReducer, initialState);

  const toggleCompleted = () => {
    dispatch({ type: "TOGGLE_COMPLETED" });
  };

  const addTask = (taskName) => {
    const newTask = [
      {
        task: taskName,
        id: Math.random(),
        completed: false,
      },
    ];
    // state.setToDo(state.todo, ...state.todo, newTask);
    dispatch({
      type: "ADD_TODO",
      newTask,
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    addTask(state.task);
  };

  const inputChanges = (e) => {
    dispatch({
      type: "ADD_TODO",
    });
  };
  console.log(state);

  return (
    <div className="App">
      <h1>ToDo 2.0 </h1>
      <ToDosList todo={state} toggleCompleted={toggleCompleted} />
      <ToDoForm
        inputChanges={inputChanges}
        formSubmit={formSubmit}
        task={state.task}
      />
    </div>
  );
}

export default App;
