import React from "react";
import Button from "./Button/Button";


const Funtions = ({onContentClear, onDelete}) => (
    <section className="functions">
        <Button type="button-long-text" text="Clear" clickHandler={onContentClear}></Button>
        <Button text="&larr;" clickHandler={onDelete}></Button>
    </section>
)

export default Funtions