import React from "react";
import Button from "./Button/Button";
import propTypes from 'prop-types'


const Functions = ({onContentClear, onDelete}) => (
    <section className="functions">
        <Button type="button-long-text" text="AC" clickHandler={onContentClear}></Button>
        <Button text="&larr;" clickHandler={onDelete}></Button>
    </section>
)

Functions.propTypes = {
    onContentClear: propTypes.func.isRequired,
    onDelete: propTypes.func.isRequired
}

export default Functions