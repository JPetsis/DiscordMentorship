import { ADD_PLACEHOLDER, REMOVE_PLACEHOLDER } from '../actionTypes';

const initialState = {
    placeholderValue: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACEHOLDER:
            state.placeholderValue = "New Placeholder";
            return state;
        case REMOVE_PLACEHOLDER:
            state.placeholderValue = null;
            return state;
        default:
            return state;
    }
};