import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions';

const HeroesList = ({ heroes, removeCharacterById }) => {
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
                                    onClick={() => removeCharacterById(item.id)}> - </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );

}

function mapStateToProps(state) {
    return {
        heroes: state.heroes
    };
}

export default connect(mapStateToProps, { removeCharacterById })(HeroesList);
