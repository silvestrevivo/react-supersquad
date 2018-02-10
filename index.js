import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

const App = (props) => {
    return (
        <div>
            <h1>From {props.program}</h1>
        </div>
    );
};

ReactDOM.render(
    <App program="react" />,
    document.getElementById('root')
);

