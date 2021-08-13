import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure, deleteSuccess, deleteFailure, createSuccess, createFailure, updateSuccess, updateFailure } from './actions';
import { AnyAction } from 'redux';
import axios from 'axios';

export function* load() {
  try {
    const response = yield call(api.get, 'clients/'
    );
    // if(!response.code){
    yield put(loadSuccess(response.data));
    // }
    // else{
    //   yield put(loadFailure());
    // }
  } catch (err) {
    yield put(loadFailure());
  }
}


export function* createClient(action:AnyAction) {
  try {
    
    yield call(api.post, `clients/`,action.payload.data);
    const response = yield call(api.get, 'clients/');
    yield put(createSuccess(response.data));
  } catch (err) {
    yield put(createFailure());
  }
}


export function* updateClient(action:AnyAction) {

  try {
    yield call(api.put, `clients/${action.payload.data.id}/`,action.payload.data);
    const response = yield call(api.get, 'clients/');
    yield put(updateSuccess(response.data));
  } catch (err) {
    yield put(updateFailure());
  }
}

export function* deleteClient(action:AnyAction) {
  console.log(action)
  try {
    
    yield call(api.delete, `clients/${action.payload.id}/`);
    const response = yield call(api.get, 'clients/');
    yield put(deleteSuccess(response.data));
  } catch (err) {
    yield put(deleteFailure());
  }
}