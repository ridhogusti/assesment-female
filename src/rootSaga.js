import { all } from "redux-saga/effects";
import watchEditor from "./redux/Editor/saga";

export default function* rootSaga() {
  yield all([watchEditor()]);
}
