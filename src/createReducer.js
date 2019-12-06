import { combineReducers } from "redux";

import editorReducer from "./redux/Editor/reducer";

const rootReducer = combineReducers({
  editor: editorReducer
});

export default rootReducer;
