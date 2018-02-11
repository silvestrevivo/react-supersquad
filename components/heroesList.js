import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions';

class HeroesList extends Component {
    //state = {  }
    render() {
        console.log(this.props.heroes);

        return (
            <div>
                <h4 className="text-uppercase">Heores</h4>
                <ul className="list-group">
                    {
                        this.props.heroes.map(item => {
                            return (
                                <li key={item.id} className="list-group-item">
                                    <div className="list-item">{item.id}.-{item.name}</div>
                                    <div
                                        className="list-item right-button"
                                        onClick={() => this.props.removeCharacterById(item.id)}> - </div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        heroes: state.heroes
    };
}

export default connect(mapStateToProps, { removeCharacterById })(HeroesList);
