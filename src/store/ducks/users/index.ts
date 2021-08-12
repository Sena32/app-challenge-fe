import { Reducer } from 'redux';
import { UsersState, UserTypes } from './types';

const INITIAL_STATE: UsersState = {
  data: [],
  userSelected: null,
  error: false,
  loading: false,
  filter: "",
  showModalDelete: false
};

const reducer: Reducer<UsersState> = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case UserTypes.LOAD_REQUEST:
      return { ...state, loading: true, filter:"all"  };
    case UserTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case UserTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };

    case UserTypes.SET_VALUE:
      return { ...state, ...action.payload.payload };

      case UserTypes.DELETE_REQUEST:
        return { ...state, loading: true  };
      case UserTypes.DELETE_SUCCCES:
        return {
        ...state, loading: false, error: false, data: action.payload.data,
        };
      case UserTypes.DELETE_FAILURE:
        return {
        ...state, loading: false, error: true, data: [],
        };

      case UserTypes.CREATE_REQUEST:
        return { ...state, loading: true  };
      case UserTypes.CREATE_SUCCCES:
        return {
        ...state, loading: false, error: false, data: action.payload.data,
        };
      case UserTypes.CREATE_FAILURE:
        return {
        ...state, loading: false, error: true, data: [],
        };

      case UserTypes.UPDATE_REQUEST:
        return { ...state, loading: true  };
      case UserTypes.UPDATE_SUCCCES:
        return {
        ...state, loading: false, error: false, data: action.payload.data,
        };
      case UserTypes.UPDATE_FAILURE:
        return {
        ...state, loading: false, error: true, data: [],
        };
    default:
      return state;
  }
};

export default reducer;
