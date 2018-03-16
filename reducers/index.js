import { combineReducers } from 'redux';

import characters from './characters_reducers';
import heroes from './heroes_reducer';

const rootReducer = combineReducers({
    characters,
    heroes
}); //this is the value we use in the containers to build props

export default rootReducer;
