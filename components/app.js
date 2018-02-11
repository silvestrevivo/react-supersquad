import React, { Component } from 'react';

class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>From {this.props.program}</h1>
            </div>
        );
    }
}

export default App;
