import { ADD_CALORIES, DELETE_CALORIES } from "../actions/types";

const initialState = {
  caloriesList: [],
};

const caloriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CALORIES:
      return {
        ...state,
        caloriesList: [...state.caloriesList, action.payload],
      };
    case DELETE_CALORIES:
      return {
        ...state,
        caloriesList: state.caloriesList.filter((calories) => calories.id !== action.payload),
      };
    default:
      return state;
  }
};

export default caloriesReducer;
