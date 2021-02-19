import placeholderReducer from './placeholder';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    placeholder: placeholderReducer
});

export default reducers;