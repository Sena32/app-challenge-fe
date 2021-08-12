import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BooksState } from './ducks/books/types';
import { ClientsState } from './ducks/clients/types';

import rootReducer from './ducks/rootReducer';
import rootSaga from './ducks/rootSaga';
import { UsersState } from './ducks/users/types';

export interface ApplicationState {
  users: UsersState,
  clients: ClientsState,
  books: BooksState,
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
