import React, { Component } from 'react';
import CharacterList from './characterList';

class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>From {this.props.program}</h1>
                <CharacterList />
            </div>
        );
    }
}

export default App;
