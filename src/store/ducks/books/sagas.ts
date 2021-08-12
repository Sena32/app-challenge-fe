import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure, deleteSuccess, deleteFailure, createSuccess, createFailure, updateSuccess, updateFailure } from './actions';
import { AnyAction } from 'redux';

export function* load() {
  try {
    const response = yield call(api.get, 'books');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}


export function* createBook(action:AnyAction) {
  try {
    
    yield call(api.post, `books`,action.payload.data);
    const response = yield call(api.get, 'books');
    yield put(createSuccess(response.data));
  } catch (err) {
    yield put(createFailure());
  }
}


export function* updateBook(action:AnyAction) {
  try {
    yield call(api.put, `books/${action.payload.data.id}`,action.payload.data);
    const response = yield call(api.get, 'books');
    yield put(updateSuccess(response.data));
  } catch (err) {
    yield put(updateFailure());
  }
}

export function* deleteBook(action:AnyAction) {
  try {
    
    yield call(api.delete, `books/${action.payload.id}`);
    const response = yield call(api.get, 'books');
    yield put(deleteSuccess(response.data));
  } catch (err) {
    yield put(deleteFailure());
  }
}