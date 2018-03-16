import { createActions } from 'redux-helpers'

const [
  characterAdd,
  characterRemove
] = createActions('character', {
  add: (id) => ({ id }),
  remove: (id) => ({ id })
})
// this is the result because a domain is not needed
// character / add
// character / remove

export { characterAdd, characterRemove }
