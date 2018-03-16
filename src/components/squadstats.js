import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class SquadStats extends Component {
  static propTypes = {
    heroes: PropTypes.array
  }

  strength = () => {
    let strength = 0
    this.props.heroes.forEach(hero => { strength += hero.strength })
    return strength
  }

  intelligence = () => {
    let intelligence = 0
    this.props.heroes.forEach(hero => { intelligence += hero.intelligence })
    return intelligence
  }

  speed = () => {
    let speed = 0
    this.props.heroes.forEach(hero => { speed += hero.speed })
    return speed
  }

  render () {
    return (
      <div>
        <h4>SquadStats</h4>
        <ul className="list-grop">
          <li className="list-group-item">
            <b>Overall Strength: {this.strength()}</b>
          </li>
          <li className="list-group-item">
            <b>Overall Strength: {this.intelligence()}</b>
          </li>
          <li className="list-group-item">
            <b>Overall Strength: {this.speed()}</b>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, null)(SquadStats)
