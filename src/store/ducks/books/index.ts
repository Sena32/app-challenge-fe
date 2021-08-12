import { Reducer } from 'redux';
import { BooksState, BooksTypes } from './types';

const INITIAL_STATE: BooksState = {
  data: [],
  bookSelected: null,
  error: false,
  loading: false,
  filter: "",
  showModalDelete: false
};

const reducer: Reducer<BooksState> = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case BooksTypes.LOAD_REQUEST:
      return { ...state, loading: true, filter:"all"  };
    case BooksTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case BooksTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };

    case BooksTypes.SET_VALUE:
      return { ...state, ...action.payload.payload };

      case BooksTypes.DELETE_REQUEST:
        return { ...state, loading: true  };
      case BooksTypes.DELETE_SUCCCES:
        return {
        ...state, loading: false, error: false, data: action.payload.data,
        };
      case BooksTypes.DELETE_FAILURE:
        return {
        ...state, loading: false, error: true, data: [],
        };

      case BooksTypes.CREATE_REQUEST:
        return { ...state, loading: true  };
      case BooksTypes.CREATE_SUCCCES:
        return {
        ...state, loading: false, error: false, data: action.payload.data,
        };
      case BooksTypes.CREATE_FAILURE:
        return {
        ...state, loading: false, error: true, data: [],
        };

      case BooksTypes.UPDATE_REQUEST:
        return { ...state, loading: true  };
      case BooksTypes.UPDATE_SUCCCES:
        return {
        ...state, loading: false, error: false, data: action.payload.data,
        };
      case BooksTypes.UPDATE_FAILURE:
        return {
        ...state, loading: false, error: true, data: [],
        };
    default:
      return state;
  }
};

export default reducer;
