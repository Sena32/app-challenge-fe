import { action } from 'typesafe-actions';
import { UserTypes, User } from './types';

export const loadRequest = () => action(UserTypes.LOAD_REQUEST);

export const loadSuccess = (data: User[]) => action(UserTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(UserTypes.LOAD_FAILURE);


export const setValue = (payload: any) => action(UserTypes.SET_VALUE, {payload});


export const createRequest = (data:User) => action(UserTypes.CREATE_REQUEST, {data});

export const createSuccess = (data: User[]) => action(UserTypes.CREATE_SUCCCES, { data });

export const createFailure = () => action(UserTypes.CREATE_FAILURE);


export const updateRequest = (data:User) => action(UserTypes.UPDATE_REQUEST, {data});

export const updateSuccess = (data: User[]) => action(UserTypes.UPDATE_SUCCCES, { data });

export const updateFailure = () => action(UserTypes.UPDATE_FAILURE);


export const deleteRequest = (id:string) => action(UserTypes.DELETE_REQUEST, {id});

export const deleteSuccess = (data: User[]) => action(UserTypes.DELETE_SUCCCES, { data });

export const deleteFailure = () => action(UserTypes.DELETE_FAILURE);

