import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
// we need to import the constants from actions for reducers

function characters(state = characters_json, action) {
    // there in not middleware, thus importing data.json from file
    switch (action.type) {
        case ADD_CHARACTER:
            let characters = state.filter(item => item.id !== action.id);
            return characters;
        case REMOVE_CHARACTER:
            characters = [...state, createCharacter(action.id)];
            return characters;
        default:
            return state;
    }
}

function createCharacter(id) {
    let character = characters_json.find(item => item.id === id);
    return character;
} // helper function for reducer

export default characters;
