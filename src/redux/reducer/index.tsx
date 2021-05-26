import {combineReducers} from 'redux';
import { getDataReducer } from './getDataReducer';

const reducer = combineReducers({
    getDataAll:getDataReducer
})

export default reducer;