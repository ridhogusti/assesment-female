import { put, takeLatest, all, call, take } from "redux-saga/effects";
import axios from "axios";

import * as action from "./action";
import * as ActionType from "./constants";

function getEditorApi() {
  return axios.request({
    method: "get",
    url: "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp"
  });
}
function* getEditor(data) {
  try {
    const res = yield call(getEditorApi);
    yield put(action.getEditorSuccess(res));
  } catch (error) {
    yield put(action.getEditorError(error));
  }
}

export default function* watchEditor() {
  yield all([takeLatest(ActionType.GET_EDITOR_REQUEST, getEditor)]);
}
