import userData from './userData';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    userData: userData
});

export default reducers;