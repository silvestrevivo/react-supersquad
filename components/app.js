import React, { Component } from 'react';
import CharacterList from './characterList';
import HeroesList from './heroesList';

class App extends Component {
    state = {}
    render() {
        return (
            <div className="App">
                <h1 className="text-uppercase">Super Squad</h1>
                <div className="col-md-6">
                    <CharacterList />
                </div>
                <div className="col-md-6">
                    <HeroesList />
                </div>
            </div>
        );
    }
}

export default App;
