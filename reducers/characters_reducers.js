import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';

function characters(state = characters_json, action) {
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
}

export default characters;
