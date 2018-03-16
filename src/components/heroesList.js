import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as CHARACTER from '../actions'

const HeroesList = ({ heroes, characterRemove }) => {
  return (
    <div>
      <h4 className="text-uppercase">Heores</h4>
      <ul className="list-group">
        {
          heroes.map(item => {
            return (
              <li key={item.id} className="list-group-item">
                <div className="list-item">{item.id}.-{item.name}</div>
                <div
                  className="list-item right-button"
                  onClick={() => characterRemove(item.id)}> - </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

HeroesList.propTypes = {
  heroes: PropTypes.array,
  characterRemove: PropTypes.func
}

function mapStateToProps (state) {
  return {
    heroes: state.heroes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    characterRemove: (id) => dispatch(CHARACTER.characterRemove(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList)
