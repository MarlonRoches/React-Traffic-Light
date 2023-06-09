import React, { useEffect, useState } from 'react';
import './Intersection.css';
import Modo2 from './Modo2';

const Intersection = () => {
const [activeSemaforos, setActiveSemaforos] = useState([]);
const [activeDirections, setActiveDirections] = useState({});
const [toggleMovement, setToggleMovement] = useState(false)
const handleClick = (semaforo) => {
// Obtener el intervalo de tiempo del elemento de entrada de texto con id "timeSeconds"
const timeInput = document.getElementById("timeSeconds");
let timeInterval = parseInt(timeInput.value) * 1000; // Convertir a milisegundos
if (timeInterval.toString()=== "NaN") {
  timeInterval =0
}
// alert(timeInterval)

  // Agregar un retraso de 5 segundos
  setTimeout(() => {
    if (activeSemaforos.includes(semaforo)) {
      setActiveSemaforos(activeSemaforos.filter(s => s !== semaforo));
      setActiveDirections(prevState => {
        const newState = {...prevState};
        delete newState[semaforo];
        return newState;
      });
    } else {
      setActiveSemaforos([...activeSemaforos, semaforo]);
      setActiveDirections(prevState => ({...prevState, [semaforo]: true}));
    }
  }, timeInterval); // La función se ejecutará después de 5 segundos
}




const getButtonClass = (semaforo) => {
if (activeSemaforos.includes(semaforo)) {
return 'button-green';
} else {
return 'button-red';
}
}

const getSemaforoClass = (semaforo) => {
    if (activeDirections[semaforo]) {
      return `semaforo active move-${semaforo.toLowerCase()}`;
    } else {
      return 'semaforo';
    }
  }
  
  const Matrix = () => {
    const rows = Array.from({ length: 9 }, (_, i) => i);
    const cols = Array.from({ length: 9 }, (_, i) => i);
  
    const getSemaforo = (row, col) => {
      if (row === 0 && col === 4) return <div className={getSemaforoClass('sur')}><h2>⬇️</h2></div>;
    //   if (row === 8 && col === 4) return <div className={getSemaforoClass('norte')}></div>;
    if (row === 4 && col === 4) return <div style={{ fontSize: 40 }}>🚦</div>;
  
    if (row === 4 && col === 0) return <div className={getSemaforoClass('este')}><h2>➡️</h2></div>;
      if (row === 4 && col === 8) return <div className={getSemaforoClass('oeste')}><h2>⬅️</h2></div>;
      return null;
    };
  
    return (
      <div>
        {rows.map(row => (
          <div key={row} style={{ display: 'flex' }}>
            {cols.map(col => (
              <div key={col} style={{ width: 60, height: 60, border: '1px solid black', backgroundColor: (row === 4 || col === 4) ? 'gray' : 'white' }}>
                {getSemaforo(row, col)}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

return (
<>
<input type={"text"} placeholder="tiempo en segundos" id="timeSeconds"></input> 

<Matrix/>

<div>
<h3> Esto botones manejan los semaforos:</h3>
<button className={getButtonClass('sur')} onClick={() => handleClick('sur')}>
{activeSemaforos.includes('sur') ? 'Desactivar' : 'Activar'} semáforo Norte ↓
</button>
<button className={getButtonClass('este')} onClick={() => handleClick('este')}>
{activeSemaforos.includes('este') ? 'Desactivar' : 'Activar'} semáforo Oeste →
</button>

<button className={getButtonClass('oeste')} onClick={() => handleClick('oeste')}>
{activeSemaforos.includes('oeste') ? 'Desactivar' : 'Activar'} semáforo Este ←
</button>
{/* <button className="button-reset" onClick={handleReset}>Reiniciar</button> */}
</div>
<h1></h1>
<h1><b>Conflict:</b> <><TextColision activeSemaforos={activeSemaforos.length}/></> <b>| Semaforos activos:</b> <>{JSON.stringify(activeSemaforos)}</></h1>
<hr/>
<hr/>
<hr/>

<Modo2/>

</>
);
}
function TextColision({activeSemaforos}) {
 if (activeSemaforos >=2 ) {
     return "True"
} else {
    return "False"
    
 }   
}


  
export default Intersection;