import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure, deleteSuccess, deleteFailure, createSuccess, createFailure, updateSuccess, updateFailure } from './actions';
import { AnyAction } from 'redux';

export function* load() {
  try {
    const response = yield call(api.get, 'users/');

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}


export function* createUser(action:AnyAction) {
  try {
    
    const response = yield call(api.post, `register/`,action.payload.data);
    console.log(response)
    yield put(createSuccess(response.data));
    if(!response || response == undefined){
      yield put(createFailure());

    }
  } catch (err) {
    yield put(createFailure());
  }
}


export function* updateUser(action:AnyAction) {
  try {
    yield call(api.put, `/users/${action.payload.data.id}`,action.payload.data);
    const response = yield call(api.get, '/users');
    yield put(updateSuccess(response.data));
  } catch (err) {
    yield put(updateFailure());
  }
}

export function* deleteUser(action:AnyAction) {
  try {
    
    yield call(api.delete, `/users/${action.payload.id}`);
    const response = yield call(api.get, '/users');
    yield put(deleteSuccess(response.data));
  } catch (err) {
    yield put(deleteFailure());
  }
}