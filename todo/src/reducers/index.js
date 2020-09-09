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
      console.log("done", action.payload)
      return state.map((item)=>{
        if(item.id === action.payload){
          return {
            ...item, done: !item.done
          }
        } else {
          return item
        }
      })
      //toDoList.map((listItem) => {
        // if (listItem.id === clickedItemId) {
        //   return {
        //     ...listItem,
        //     done: !listItem.done,
        //   };
        // } else {
        //   return listItem;
        // }
    case "CLEAR_COMPLETED":
      return state.filter((item) => item.done === !true);
    default:
      return state;
  } 
};
