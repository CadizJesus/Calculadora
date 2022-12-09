import React from "react";
import Button from "./Button/Button";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = onClickNumber =>{
  //var number = 0
  const renderButton = number => (
    <Button 
      key={number} 
      text={number.toString()} 
      clickHandler={onClickNumber}/>
  )
  return numbers.map(renderButton)
}

const Numbers = ({onClickNumber}) => (
    <section className="numbers">
      {
        renderButtons(onClickNumber)
      }
    </section>
)

export default Numbers