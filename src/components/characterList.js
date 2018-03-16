import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as CHARACTER from '../actions'

const CharacterList = ({ characters, characterAdd }) => {
  return (
    <div>
      <h4 className="text-uppercase">Characters</h4>
      <ul className="list-group">
        {
          characters.map(item => {
            return (
              <li key={item.id} className="list-group-item">
                <div className="list-item">{item.id}.-{item.name}</div>
                <div onClick={() => characterAdd(item.id)} className="list-item right-button"> + </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

CharacterList.propTypes = {
  characters: PropTypes.array,
  characterAdd: PropTypes.func
}

function mapStateToProps (state) {
  return {
    characters: state.characters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    characterAdd: (id) => dispatch(CHARACTER.characterAdd(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)
