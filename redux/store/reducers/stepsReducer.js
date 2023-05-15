import { SET_STEPS } from '../actions/types';

const initialState = {
  steps: 0,
};

const stepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STEPS:
      return {
        ...state,
        steps: action.payload,
      };
    default:
      return state;
  }
};

export default stepsReducer;
