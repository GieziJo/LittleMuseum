import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import artistReducer from './artistReducer';
import publisherReducer from './publisherReducer';

export default combineReducers({
    item : itemReducer,
    artist: artistReducer,
    publisher: publisherReducer
})