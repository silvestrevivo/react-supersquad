import React from 'react'
import CharacterList from './characterList'
import HeroesList from './heroesList'
import SquadStats from './squadstats'

const App = () => {
  return (
    <div className="App">
      <h1 className="text-uppercase">Super Squad</h1>
      <div className="col-md-4">
        <CharacterList />
      </div>
      <div className="col-md-4">
        <HeroesList />
      </div>
      <div className="col-md-4">
        <SquadStats />
      </div>
    </div>
  )
}

export default App
