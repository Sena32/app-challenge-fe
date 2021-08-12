import { all, takeLatest } from 'redux-saga/effects';

import { ClientsTypes } from './clients/types';
import { createClient, deleteClient, load, updateClient } from './clients/sagas';

import { BooksTypes } from './books/types';
import { createBook, deleteBook, load as loadBook, updateBook } from './books/sagas';

import { UserTypes } from './users/types';
import { createUser, deleteUser, load as loadUser, updateUser } from './users/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(UserTypes.LOAD_REQUEST, loadUser),
    takeLatest(UserTypes.CREATE_REQUEST, createUser),
    takeLatest(UserTypes.UPDATE_REQUEST, updateUser),
    takeLatest(UserTypes.DELETE_REQUEST, deleteUser),

    takeLatest(ClientsTypes.LOAD_REQUEST, load),
    takeLatest(ClientsTypes.CREATE_REQUEST, createClient),
    takeLatest(ClientsTypes.UPDATE_REQUEST, updateClient),
    takeLatest(ClientsTypes.DELETE_REQUEST, deleteClient),


    takeLatest(BooksTypes.LOAD_REQUEST, loadBook),
    takeLatest(BooksTypes.CREATE_REQUEST, createBook),
    takeLatest(BooksTypes.UPDATE_REQUEST, updateBook),
    takeLatest(BooksTypes.DELETE_REQUEST, deleteBook),
  ]);
}
