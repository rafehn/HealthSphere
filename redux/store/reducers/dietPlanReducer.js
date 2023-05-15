import { SET_MEAL_PLAN } from "../actions/types";

const initialState = {
  mealPlan: [],
};

const dietPlanReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MEAL_PLAN:
      return {
        ...state,
        mealPlan: action.payload,
      };
    default:
      return state;
  }
};

export default dietPlanReducer;