import { put, takeLatest, all, call, take } from "redux-saga/effects";
import axios from "axios";

import * as action from "./action";
import * as ActionType from "./constants";

function getEditorApi() {
  return axios.request({
    method: "get",
    url: "http://localhost:3000/data"
  });
}
function* getEditor(data) {
  try {
    const option = {
      query: data.payload
    };
    const res = yield call(getEditorApi(), option);
    yield put(action.getEditorSuccess(res));
  } catch (error) {
    yield put(action.getEditorError(error));
  }
}

export default function* watchEditor() {
  yield all([takeLatest(ActionType.GET_EDITOR_REQUEST, getEditor)]);
}
