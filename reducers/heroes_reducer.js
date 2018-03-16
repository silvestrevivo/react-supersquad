import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';

function heroes(state = [], action) {
    switch (action.type) {
        case ADD_CHARACTER:
            // let heroes = characters_json.filter(item => item.id === action.id);
            // return [...state, heroes];
            let heroes = [...state, createCharacter(action.id)];
            return heroes;
        case REMOVE_CHARACTER:
            heroes = state.filter(item => item.id !== action.id);
            return heroes;
        default:
            return state;
    }
}

function createCharacter(id) {
    let character = characters_json.find(item => item.id === id);
    return character;
} // helper function for reducer

export default heroes;
