import {combineReducers} from 'redux'
import Filter from './Filter/reducer'
import Markers from './Markers/reducer'
import Dropzone from './Dropzone/reducer'

const rootReducer = combineReducers({
  Markers,
  Filter,
  Dropzone,
});

export default rootReducer
