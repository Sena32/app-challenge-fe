/**
 * Action types
 */
export enum UserTypes {
  LOAD_REQUEST = '@users/LOAD_REQUEST',
  LOAD_SUCCCES = '@users/LOAD_SUCCCES',
  LOAD_FAILURE = '@users/LOAD_FAILURE', 

  SET_VALUE = '@users/SET_VALUE',

  CREATE_REQUEST = '@users/CREATE_REQUEST',
  CREATE_SUCCCES = '@users/CREATE_SUCCCES',
  CREATE_FAILURE = '@users/CREATE_FAILURE',


  UPDATE_REQUEST = '@users/UPDATE_REQUEST',
  UPDATE_SUCCCES = '@users/UPDATE_SUCCCES',
  UPDATE_FAILURE = '@users/UPDATE_FAILURE',

  DELETE_REQUEST = '@users/DELETE_REQUEST',
  DELETE_SUCCCES = '@users/DELETE_SUCCCES',
  DELETE_FAILURE = '@users/DELETE_FAILURE',

}


/**
 * Data types
 */

export interface User {
  id: string,
  username: string,
  email: string,
  password:string,
  password2:string
}

/**
 * State type
 */
export interface UsersState {
  readonly data: User[]
  readonly userSelected: User
  readonly loading: boolean
  readonly error: boolean
  readonly showModalDelete: boolean
  readonly filter: string
}
