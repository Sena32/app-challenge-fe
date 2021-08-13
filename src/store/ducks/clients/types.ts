/**
 * Action types
 */
export enum ClientsTypes {
  LOAD_REQUEST = '@clients/LOAD_REQUEST',
  LOAD_SUCCCES = '@clients/LOAD_SUCCCES',
  LOAD_FAILURE = '@clients/LOAD_FAILURE', 

  SET_VALUE = '@clients/SET_VALUE',

  CREATE_REQUEST = '@clients/CREATE_REQUEST',
  CREATE_SUCCCES = '@clients/CREATE_SUCCCES',
  CREATE_FAILURE = '@clients/CREATE_FAILURE',


  UPDATE_REQUEST = '@clients/UPDATE_REQUEST',
  UPDATE_SUCCCES = '@clients/UPDATE_SUCCCES',
  UPDATE_FAILURE = '@clients/UPDATE_FAILURE',

  DELETE_REQUEST = '@clients/DELETE_REQUEST',
  DELETE_SUCCCES = '@clients/DELETE_SUCCCES',
  DELETE_FAILURE = '@clients/DELETE_FAILURE',

}


/**
 * Data types
 */
export interface Address {
  id: any,
  address: any,
  number: any,
  city: any,
  state: any,
  country: any,
  zipCode: any,
}

export interface Client {
  id: any,
  name: any,
  phone: any,
  address: Address,
}

/**
 * State type
 */
export interface ClientsState {
  readonly data: Client[]
  readonly clientSelected: Client
  readonly loading: boolean
  readonly error: boolean
  readonly showModalDelete: boolean
  readonly filter: string
}
