/* eslint no-eval:0 */
import React from 'react';
import { useState } from 'react';
import words from 'lodash.words';
import Functions from './components/Functions';
import Numbers from './components/Numbers';
import MathOperations from './components/MathOperations';
import Result from './components/Result';
import './App.css'

function App() {
  const [stack, setStack] = useState("")

  const items = words(stack, /[^-^+^*^/]+/g)
  //Ternario= esVeradadero ? resultadoPorVerdadero : resultadoPorFalso
  const value =  items.length > 0 ? items[items.length-1] : "0"

  console.log("Renderizacion de App",items)
  return (
      <main className='react-calculator'>
        <h1 >Calculadora</h1>
        <Result value={value} />
        <Numbers onClickNumber={number => {
          console.log("Click en number", number)
          setStack(`${stack}${number}`)  
        }}></Numbers>
        <Functions 
          onContentClear={()=>{
            console.log("content Clear")
            setStack("")
          }}
          onDelete={()=>{
            if (stack.lenght>0){
              console.log("onDelete")
              const newStack = stack.substring(0, stack.length - 1)
              setStack(newStack)
            }
          }}
        ></Functions>
        <MathOperations 
          onClickOperation={operation => {
            console.log("operation:",operation)
            setStack(`${stack}${operation}`)
          }} 
          onClickEqual={equal => {
            console.log("equal:",equal)
            setStack(eval(stack).toString())
          }}
        ></MathOperations>
      </main>
  );
}

export default App;
