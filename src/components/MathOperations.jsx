import React from "react";
import Button from "./Button/Button";
import propTypes from 'prop-types'

const MathOperations = ({onClickOperation, onClickEqual}) => (
    <section className="math-operations">
    <Button text="+" clickHandler={onClickOperation}></Button>
    <Button text="-" clickHandler={onClickOperation}></Button>
    <Button text="*" clickHandler={onClickOperation}></Button>
    <Button text="/" clickHandler={onClickOperation}></Button>
    <Button text="=" clickHandler={onClickEqual}></Button>
    </section>
) 

MathOperations.propTypes = {
    onClickOperation: propTypes.func.isRequired,
    onClickEqual: propTypes.func.isRequired
}

export default MathOperations