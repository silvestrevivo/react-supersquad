import charactersJson from './data/characters.json'
import * as CHARACTERS from '../actions'

function heroes (state = [], action) {
  switch (action.type) {
    case String(CHARACTERS.characterAdd):
      let heroes = [...state, createCharacter(action.id)]
      return heroes
    case String(CHARACTERS.characterRemove):
      heroes = state.filter(item => item.id !== action.id)
      return heroes
    default:
      return state
  }
}

function createCharacter (id) {
  let character = charactersJson.find(item => item.id === id)
  return character
}

export default heroes
