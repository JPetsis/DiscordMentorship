import { ADD_USERDATA, REMOVE_USERDATA } from '../actionTypes';

const initialState = null;

function reduceUserData(state = initialState, action) {
    switch(action.type) {
        case ADD_USERDATA: 
            state = action.payload;
            return state;
        case REMOVE_USERDATA:
            state = null;
            return state;
        default:
            return state;
    };
};

export default reduceUserData;