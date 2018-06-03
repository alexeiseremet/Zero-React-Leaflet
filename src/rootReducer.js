import { combineReducers } from 'redux'
import Filter from './Filter/reducer'
import Markers from './Markers/reducer'

const rootReducer = combineReducers({
  Markers,
  Filter
});

export default rootReducer
