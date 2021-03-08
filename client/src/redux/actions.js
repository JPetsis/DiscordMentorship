import {
    ADD_USERDATA,
    REMOVE_USERDATA
} from './actionTypes';

export const addUserData = () => ({
    type: ADD_USERDATA
});

export const removeUserData = () => ({
    type: REMOVE_USERDATA
});