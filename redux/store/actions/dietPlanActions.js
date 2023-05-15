export const SET_DAILY_CALORIES = 'SET_DAILY_CALORIES';
export const SET_CURRENT_FOOD = 'SET_CURRENT_FOOD';

export const setDailyCalories = (calories) => ({
  type: SET_DAILY_CALORIES,
  payload: calories,
});

export const setCurrentFood = (food) => ({
  type: SET_CURRENT_FOOD,
  payload: food,
});
