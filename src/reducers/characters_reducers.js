import charactersJson from './data/characters.json'
import * as CHARACTERS from '../actions'

function characters (state = charactersJson, action) {
  switch (action.type) {
    case String(CHARACTERS.characterAdd):
      let characters = state.filter(item => item.id !== action.id)
      return characters
    case String(CHARACTERS.characterRemove):
      characters = [...state, createCharacter(action.id)]
      return characters
    default:
      return state
  }
}

function createCharacter (id) {
  let character = charactersJson.find(item => item.id === id)
  return character
}

export default characters
