import React, { useState } from 'react';
import "./App.css"
import BoxDerIzq from "./Components/BoxDerIzq"
import Semaphor from "./Components/Semaforo"
import Intersection from './Components/Table';
const moveDimX = 5 * 100;
const moveDimY = 5 * 100;

function App() {
  

  return (
    <>
    <Intersection/>
    
    </>
  );
}

function CalleTop(params) {
  return(<>
  <div className='CalleTop'> 
  <Auto/>
    
  </div>
  </>)
}
function CalleR(params) {
  
}
function CalleL(params) {
  
}
function Auto() {

  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const handleMoveLeft = () => {
    moveAutomatically(-moveDimX, 0);
  };

  const handleMoveRight = () => {
    moveAutomatically(moveDimX, 0);
  };

  const handleMoveUp = () => {
    moveAutomatically(0, -moveDimY);
  };

  const handleMoveDown = () => {
    moveAutomatically(0, moveDimY);
  };

  const getCurrentPosition = () => {
    return { x: positionX, y: positionY };
  };

  const moveAutomatically = (amountX, amountY) => {
    const movePerFrameX = amountX / moveDimX;
    const movePerFrameY = amountY / moveDimY;
    let currentPositionX = positionX;
    let currentPositionY = positionY;
    let frame = 1;
    const interval = setInterval(() => {
      currentPositionX += movePerFrameX;
      currentPositionY += movePerFrameY;
      setPositionX(currentPositionX);
      setPositionY(currentPositionY);
      frame += 1;
      if (frame >= moveDimX || frame >= moveDimY) {
        clearInterval(interval);
      }
    }, 1);
  };
  return (<>
  <button onClick={handleMoveLeft}>Mover a la izquierda</button>
      <button onClick={handleMoveRight}>Mover a la derecha</button>
      <button onClick={handleMoveUp}>Mover hacia arriba</button>
      <button onClick={handleMoveDown}>Mover hacia abajo</button>
      <div style={{  left: positionX, top: positionY }}>
        <div style={{ width: 100, height: 100, backgroundColor: 'red' }} />
        <p>
          La posición actual del div es: {getCurrentPosition().x},{' '}
          {getCurrentPosition().y}
        </p>
      </div>
  
  </>)
}
export default App;