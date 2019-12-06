import * as ActionType from "./constants";

export const getEditorRequest = data => {
  return {
    type: ActionType.GET_EDITOR_REQUEST,
    payload: data
  };
};
export const getEditorSuccess = data => {
  return {
    type: ActionType.GET_EDITOR_SUCCESS,
    payload: data
  };
};
export const getEditorError = error => {
  return {
    type: ActionType.GET_EDITOR_ERROR,
    payload: error
  };
};
