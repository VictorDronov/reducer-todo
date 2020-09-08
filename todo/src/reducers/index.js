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
      return {
        ...state,
        item: action.payload,
      };
    case "CLEAR_COMPLETED":
      return {};
    default:
      return state;
  }
};
