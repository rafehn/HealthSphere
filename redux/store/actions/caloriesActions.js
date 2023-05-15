export const ADD_CALORIES = 'ADD_CALORIES';

export const addCalories = (calories) => ({
  type: ADD_CALORIES,
  payload: calories,
});
