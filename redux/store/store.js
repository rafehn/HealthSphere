import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import caloriesReducer from './reducers/caloriesReducer';
import dietPlanReducer from './reducers/dietPlanReducer';
import stepsReducer from './reducers/stepsReducer';

const rootReducer = combineReducers({
  calories: caloriesReducer,
  dietPlan: dietPlanReducer,
  steps: stepsReducer,
});

const initialState = {
  dietPlan: {
    mealPlan: [], // add mealPlan property to the initial state of dietPlanReducer
  },
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;