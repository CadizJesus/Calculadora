import React from "react";
import './Button.css'
import propTypes from 'prop-types'

const Button = ({type, text, clickHandler}) => {
    return (
        <button className={type} onClick={() => {
            clickHandler(text)
        }}>
            <span>{text}</span>
        </button>
    )
}

Button.propTypes = {
    type: propTypes.string,
    text: propTypes.string.isRequired,
    clickHandler: propTypes.func.isRequired
}

export default Button