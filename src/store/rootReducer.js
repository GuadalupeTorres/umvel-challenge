import { combineReducers } from 'redux';
import characters from '@store/reducers/characters.reducer';

const rootReducer = combineReducers({ characters });

export default rootReducer;

