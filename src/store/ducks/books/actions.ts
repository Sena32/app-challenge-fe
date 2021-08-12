import { action } from 'typesafe-actions';
import { BooksTypes, Book } from './types';

export const loadRequest = () => action(BooksTypes.LOAD_REQUEST);

export const loadSuccess = (data: Book[]) => action(BooksTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(BooksTypes.LOAD_FAILURE);


export const setValue = (payload: any) => action(BooksTypes.SET_VALUE, {payload});


export const createRequest = (data:Book) => action(BooksTypes.CREATE_REQUEST, {data});

export const createSuccess = (data: Book[]) => action(BooksTypes.CREATE_SUCCCES, { data });

export const createFailure = () => action(BooksTypes.CREATE_FAILURE);


export const updateRequest = (data:Book) => action(BooksTypes.UPDATE_REQUEST, {data});

export const updateSuccess = (data: Book[]) => action(BooksTypes.UPDATE_SUCCCES, { data });

export const updateFailure = () => action(BooksTypes.UPDATE_FAILURE);


export const deleteRequest = (id:string) => action(BooksTypes.DELETE_REQUEST, {id});

export const deleteSuccess = (data: Book[]) => action(BooksTypes.DELETE_SUCCCES, { data });

export const deleteFailure = () => action(BooksTypes.DELETE_FAILURE);

