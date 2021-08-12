/**
 * Action types
 */
export enum BooksTypes {
  LOAD_REQUEST = '@books/LOAD_REQUEST',
  LOAD_SUCCCES = '@books/LOAD_SUCCCES',
  LOAD_FAILURE = '@books/LOAD_FAILURE', 

  SET_VALUE = '@books/SET_VALUE',

  CREATE_REQUEST = '@books/CREATE_REQUEST',
  CREATE_SUCCCES = '@books/CREATE_SUCCCES',
  CREATE_FAILURE = '@books/CREATE_FAILURE',


  UPDATE_REQUEST = '@books/UPDATE_REQUEST',
  UPDATE_SUCCCES = '@books/UPDATE_SUCCCES',
  UPDATE_FAILURE = '@books/UPDATE_FAILURE',

  DELETE_REQUEST = '@books/DELETE_REQUEST',
  DELETE_SUCCCES = '@books/DELETE_SUCCCES',
  DELETE_FAILURE = '@books/DELETE_FAILURE',

}


/**
 * Data types
 */
export interface Book {
  id: string,
  author: string,
  name: string,
  description: string,
  image_url: string,
  top: boolean,
}

/**
 * State type
 */
export interface BooksState {
  readonly data: Book[]
  readonly bookSelected: Book
  readonly loading: boolean
  readonly error: boolean
  readonly showModalDelete: boolean
  readonly filter: string
}
