export const initialState = [
  {
    item: "Clean kitchen",
    id: Math.random(),
    done: false,
  },
  {
    item: "Do laundry",
    id: Math.random(),
    done: false,
  },
  {
    item: "Buy groceries",
    id: Math.random(),
    done: false,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADDING_TODO":
      return [
        ...state,
        {
          item: action.payload,
          id: Math.random(),
          done: false,
        },
      ];

    case "TOGGLE_COMPLETED":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    case "CLEAR_COMPLETED":
      return state.filter((item) => item.done === false);
    default:
      return state;
  }
};
