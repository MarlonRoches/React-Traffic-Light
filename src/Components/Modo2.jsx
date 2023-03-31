import React, { useEffect, useState } from 'react';

function Modo2(params) {
    return(<>
        <h1>Modo 2</h1>
<Temporizador/>
<ComponenteRojo iniciarAnimacion={true}/>
    
    </>)
}


function Temporizador() {
    const [segundos, setSegundos] = useState(0);
    const [segundosConfigurados, setSegundosConfigurados] = useState(0);
    const [temporizadorEnMarcha, setTemporizadorEnMarcha] = useState(false);
  
    useEffect(() => {
      let intervalo = null;
      if (temporizadorEnMarcha && segundos > 0) {
        intervalo = setInterval(() => {
          setSegundos(segundos => segundos - 1);
        }, 1000);
  
        if (segundos > 0) {
          alert(`Quedan ${segundos} segundos`);
        } else {
          alert('¡Terminó el temporizador!');
        }
      }
  
      return () => {
        clearInterval(intervalo)
      };
    }, [temporizadorEnMarcha, segundos]);
  
    const handleInputChange = (event) => {
      setSegundosConfigurados(event.target.value);
      setSegundos(event.target.value);
    }
  
    const handleIniciarTemporizador = () => {
      setTemporizadorEnMarcha(true);
    }
  
    return (
      <div>
        <h1>{segundos} segundos</h1>
        <label>
          Configurar segundos:
          <input type="number" value={segundosConfigurados} onChange={handleInputChange} />
        </label>
        <button onClick={handleIniciarTemporizador}>Iniciar temporizador</button>
      </div>
    );
  }
  
  
  function ComponenteRojo({ iniciarAnimacion }) {
    const [posicion, setPosicion] = useState(0);
    const [direccion, setDireccion] = useState(1);
  
    useEffect(() => {
      let intervalo = null;
      if (iniciarAnimacion) {
        intervalo = setInterval(() => {
          if (posicion >= 100) {
            setDireccion(-1);
          } else if (posicion <= 0) {
            setDireccion(1);
          }
          setPosicion(posicion => posicion + (5 * direccion));
        }, 100);
      }
      return () => clearInterval(intervalo);
    }, [iniciarAnimacion, posicion, direccion]);
  
    const estilo = {
      position: 'relative',
      top: `${posicion}px`,
      backgroundColor: 'red',
      width: '100px',
      height: '100px'
    };
  
    return (
      <div style={estilo}>
        <p>Este es un ejemplo de animación en un componente rojo</p>
      </div>
    );
  }
export default Modo2