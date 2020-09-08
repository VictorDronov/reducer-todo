import React, { useReducer, useState } from "react";
import { reducer, initialState } from "../reducers/index";

const TodoForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setNewToDo] = useState("");

  // this function will handle the input field being changed
  // it sets the item property to be the value of the input (what's typed in)
  const handleChange = (e) => {
    setNewToDo(e.target.value);
  };
  // this function will add each item being inputted
  // it's using the addTodo funct from App.js and passing this.state.item as an argument

  // handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   this.props.addTodo(this.state.item);
  // };
  // function for clearing the form after completing lives in App.js

  return (
    <>
      <form className="form-input" >
        <input
          value={newToDo}
          type="text"
          placeholder="Enter ToDo"
          onChange={handleChange}
          name="item"
        />
        <button className="addTodo" onClick={()=>dispatch({type: "ADDING_TODO", payload: newToDo})} >Add Todo</button>
      </form>
      <div className="container container3">
        <button className="clearTodo-btn" >
          Clear Completed
        </button>
      </div>
    </>
  );
};

export default TodoForm;
