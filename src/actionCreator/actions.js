import * as ActionTypes from '../actionType/actionTypes';

export const addUser = (user) => {
    return {
        type: ActionTypes.ADD_USER,
        user
    };
};

export const deleteUser = (delUsers) => {
    return {
        type: ActionTypes.DELETE_USER,
        delUsers
    };
};