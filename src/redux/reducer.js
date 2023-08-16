const initialState = [];

const BirdReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BIRD":
      return [...state, action.payload];
    case "INCREASE_LIKE":
      let newList = [...state];
      newList[action.payload].likes += 1;
      return newList;
    default:
      return state;
  }
};

export default BirdReducer;
