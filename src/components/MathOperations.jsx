import React from "react";
import Button from "./Button/Button";

const MathOperations = ({onClickOperation, onClickEqual}) => (
    <section className="math-operations">
    <Button text="+" clickHandler={onClickOperation}></Button>
    <Button text="-" clickHandler={onClickOperation}></Button>
    <Button text="*" clickHandler={onClickOperation}></Button>
    <Button text="/" clickHandler={onClickOperation}></Button>
    <Button text="=" clickHandler={onClickEqual}></Button>
    </section>
) 

export default MathOperations