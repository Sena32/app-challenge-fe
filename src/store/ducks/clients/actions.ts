import { action } from 'typesafe-actions';
import { ClientsTypes, Client } from './types';

export const loadRequest = () => action(ClientsTypes.LOAD_REQUEST);

export const loadSuccess = (data: Client[]) => action(ClientsTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(ClientsTypes.LOAD_FAILURE);


export const setValue = (payload: any) => action(ClientsTypes.SET_VALUE, {payload});


export const createRequest = (data:Client) => action(ClientsTypes.CREATE_REQUEST, {data});

export const createSuccess = (data: Client[]) => action(ClientsTypes.CREATE_SUCCCES, { data });

export const createFailure = () => action(ClientsTypes.CREATE_FAILURE);


export const updateRequest = (data:Client) => action(ClientsTypes.UPDATE_REQUEST, {data});

export const updateSuccess = (data: Client[]) => action(ClientsTypes.UPDATE_SUCCCES, { data });

export const updateFailure = () => action(ClientsTypes.UPDATE_FAILURE);


export const deleteRequest = (id:string) => action(ClientsTypes.DELETE_REQUEST, {id});

export const deleteSuccess = (data: Client[]) => action(ClientsTypes.DELETE_SUCCCES, { data });

export const deleteFailure = () => action(ClientsTypes.DELETE_FAILURE);

