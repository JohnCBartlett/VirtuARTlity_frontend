import React, { useState } from 'react';

const ColorButton= () => {
    const [state, setState] =  useState( 
        {
            label: 'red',
            className: 'btn-danger'
        }
    ) // [state, function to allow state to be changed]
 // creates variable called state, returns an array, 1st argument is the element, 2nd is the state o'

const changeColor = () => {
    if(state.label === 'red') {
        setState(
            {
            label: 'blue',
            className: 'btn-primary'
            }
        )
    }
    else {
        setState(
            {
            label: 'red',
            className: 'btn-danger'
            }
        )
    }
}

    return (
        <button
        onClick={changeColor}
        className={`btn ${state.className}`}>
            {state.label}
        </button>
    )
}

export default ColorButton;
