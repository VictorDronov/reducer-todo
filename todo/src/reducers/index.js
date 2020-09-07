export const initialState = [
  {
    task: "Learn about reducers",
    id: Math.random(),
    completed: false,
  },
  {
    task: "Fix Brain",
    id: Math.random(),
    completed: false,
  },
];

export const TheReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        task: action.payload,
        id: Math.random(),
        completed: false,
      };
    case "TOGGLE_COMPLETED":
      return { ...state, completed: !state.completed };
    default:
      return state; // do nothing
  }
  //output is updated state
};
