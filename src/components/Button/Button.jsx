import React from "react";
import './Button.css'

const Button = ({type, text, clickHandler}) => {
    return (
        <button className={type} onClick={() => {
            clickHandler(text)
        }}>
            <span>{text}</span>
        </button>
    )
}

export default Button