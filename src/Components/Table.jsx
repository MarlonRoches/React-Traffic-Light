import React, { useState } from 'react';
import './Intersection.css';

const Intersection = () => {
const [activeSemaforos, setActiveSemaforos] = useState([]);
const [activeDirections, setActiveDirections] = useState({});

const handleClick = (semaforo) => {
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
}

const handleReset = () => {
setActiveSemaforos([]);
setActiveDirections({});
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
<Matrix/>
{/* <div className={getSemaforoClass('norte')} ></div>
<div className={getSemaforoClass('sur')} ></div>
<div className={getSemaforoClass('este')} ></div>
<div className={getSemaforoClass('oeste')} ></div> */}
<div>
{/* <button className={getButtonClass('norte')} onClick={() => handleClick('norte')}>
{activeSemaforos.includes('norte') ? 'Desactivar' : 'Activar'} semáforo norte
</button> */}
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
<h1>{JSON.stringify(activeSemaforos)}</h1>
<h1>Conflict: <TextColision activeSemaforos={activeSemaforos.length}/></h1>
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