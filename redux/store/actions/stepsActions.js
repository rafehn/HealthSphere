export const SET_STEPS_GOAL = 'SET_STEPS_GOAL';
export const SET_STEPS_TAKEN = 'SET_STEPS_TAKEN';

export const setStepsGoal = (goal) => {
  return {
    type: SET_STEPS_GOAL,
    payload: goal,
  };
};

export const setStepsTaken = (steps) => {
  return {
    type: SET_STEPS_TAKEN,
    payload: steps,
  };
};
