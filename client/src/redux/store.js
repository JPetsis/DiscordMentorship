import { createStore } from 'redux';
import rootReducer from './reducers';

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_ESXTENSION__ && window.__REDUX_DEVTOOLS_ESXTENSION__());