import { combineReducers } from 'redux';

import searchReducer from './reducer_search'

const rootReducer = combineReducers({
  searchData: searchReducer,
});

export default rootReducer
