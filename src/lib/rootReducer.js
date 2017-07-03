import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import login from '../login/reducers';

const rootReducer = combineReducers({
  login
});

export default rootReducer;
