import { ActionTypes } from "../constants";

export const SET_HEALTH_DATA = ActionTypes.SET_HEALTH_DATA;

export function setHealthData(healthData) {
  return {
    type: SET_HEALTH_DATA,
    payload: healthData,
  };
}
