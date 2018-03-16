export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';
// define de variables to export as identifier for actions

export function addCharacterById(id) {
    const action = {
        type: ADD_CHARACTER,
        id
    }
    return action;
    //this could be like this
    // return {
    //     type: ADD_CHARACTER,
    //     id
    // }
}

export function removeCharacterById(id) {
    const action = {
        type: REMOVE_CHARACTER,
        id
    }
    return action;
}

//export both actions as independent functions
