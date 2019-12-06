import * as ActionType from "./constants";
const initExample = {
  editors: {
    isLoading: false,
    data: [],
    error: false,
    errorMessage: null
  }
};

export const getEditorRequest = (state, payload) => {
  return {
    ...state,
    editors: {
      ...state.editors,
      isLoading: true,
      error: false,
      errorMessage: null
    }
  };
};
export const getEditorSuccess = (state, payload) => {
  return {
    ...state,
    editors: {
      ...state.editors,
      isLoading: false,
      data: payload.data
    }
  };
};
export const getEditorError = (state, payload) => {
  return {
    ...state,
    editors: {
      ...state.editors,
      isLoading: false,
      error: true,
      errorMessage: payload.error
    }
  };
};

const editorReducer = (state = initExample, action) => {
  switch (action.type) {
    case ActionType.GET_EDITOR_REQUEST:
      return getEditorRequest(state, action.payload);
    case ActionType.GET_EDITOR_SUCCESS:
      return getEditorSuccess(state, action.payload);
    case ActionType.GET_EDITOR_ERROR:
      return getEditorError(state, action.payload);

    default:
      return state;
  }
};
export default editorReducer;
