import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCharacterById } from '../actions';

const CharacterList = ({ characters, addCharacterById }) => {
    return (
        <div>
            <h4 className="text-uppercase">Characters</h4>
            <ul className="list-group">
                {
                    characters.map(item => {
                        return (
                            <li key={item.id} className="list-group-item">
                                <div className="list-item">{item.id}.-{item.name}</div>
                                <div onClick={() => addCharacterById(item.id)} className="list-item right-button"> + </div>
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
        characters: state.characters
    };
}

export default connect(mapStateToProps, { addCharacterById })(CharacterList);
