// src/sagas/index.ts
import { all, fork } from 'redux-saga/effects';
import employeeSaga from './employeeSaga';

export default function* rootSaga() {
  yield all([fork(employeeSaga)]);
}
