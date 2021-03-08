import {
    ADD_USERDATA,
    REMOVE_USERDATA
} from './actionTypes';

export const addUserData = content => ({
    type: ADD_USERDATA,
    payload: content
});

export const removeUserData = () => ({
    type: REMOVE_USERDATA
});