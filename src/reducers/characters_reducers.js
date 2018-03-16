import charactersJson from './data/characters.json'
import { createReducer } from 'redux-helpers'
import * as CHARACTERS from '../actions'

const initialState = charactersJson

const onAddCharacters = (state, action) => {
  return state.filter(item => item.id !== action.id)
}

const onRemoveCharacter = (state, action) => {
  return [...state, charactersJson.find(item => item.id === action.id)]
}

export default createReducer('characters', {
  [CHARACTERS.characterAdd]: onAddCharacters,
  [CHARACTERS.characterRemove]: onRemoveCharacter
}, initialState)
