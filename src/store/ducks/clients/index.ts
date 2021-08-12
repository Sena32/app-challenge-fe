import { Reducer } from 'redux';
import { ClientsState, ClientsTypes } from './types';

const INITIAL_STATE: ClientsState = {
  data: [],
  clientSelected: null,
  error: false,
  loading: false,
  filter: "",
  showModalDelete: false
};

const reducer: Reducer<ClientsState> = (state = INITIAL_STATE, action) => {
  
  switch (action.type) {
    case ClientsTypes.LOAD_REQUEST:
      return { ...state, loading: true, filter:"all"  };
    case ClientsTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case ClientsTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };

    case ClientsTypes.SET_VALUE:
      return { ...state, ...action.payload.payload };

      case ClientsTypes.DELETE_REQUEST:
        return { ...state, loading: true  };
      case ClientsTypes.DELETE_SUCCCES:
        return {
        ...state, loading: false, error: false, data: action.payload.data,
        };
      case ClientsTypes.DELETE_FAILURE:
        return {
        ...state, loading: false, error: true, data: [],
        };

      case ClientsTypes.CREATE_REQUEST:
        return { ...state, loading: true  };
      case ClientsTypes.CREATE_SUCCCES:
        return {
        ...state, loading: false, error: false, data: action.payload.data,
        };
      case ClientsTypes.CREATE_FAILURE:
        return {
        ...state, loading: false, error: true, data: [],
        };

      case ClientsTypes.UPDATE_REQUEST:
        return { ...state, loading: true  };
      case ClientsTypes.UPDATE_SUCCCES:
        return {
        ...state, loading: false, error: false, data: action.payload.data,
        };
      case ClientsTypes.UPDATE_FAILURE:
        return {
        ...state, loading: false, error: true, data: [],
        };
    default:
      return state;
  }
};

export default reducer;
