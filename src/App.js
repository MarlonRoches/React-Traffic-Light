
import { useState } from 'react';
import './App.css';
import BoxDerIzq from './Components/BoxDerIzq';
import BoxIzqDer from './Components/boxIzqDer';
import BoxUpDown from './Components/BoxUpDown';
import Semaphor from './Components/Semaforo';
import Street from './Components/Street';

function App() {
  const [startSimulation, setstartSimulation] = useState(false)

  function handleSimulation() {
    setstartSimulation(!startSimulation)
  }
  const alertMessage = (message) => {
    console.log(message);
  };
  return (
    <>
    <button  onClick={()=> handleSimulation()}> Start</button>
    <h1>{startSimulation.toString()}</h1>
    <div> 

    <BoxDerIzq isMoving_ ={startSimulation} getPosition = {alertMessage}/>
      
    </div>
    <BoxIzqDer isMoving_ ={startSimulation} getPosition = {alertMessage}/>
    <BoxUpDown isMoving_ ={startSimulation}/>
    <Semaphor/>
    <Street/>
    </>
  );
}
function semaforoContainer(params) {
  return(<>
  
  </>)
}

export default App;
