import React, { useState } from 'react';

function App() {
  const [position, setPosition] = useState(0);

  const handleMoveLeft = () => {
    setPosition(position => position - 10);
  };

  const handleMoveRight = () => {
    setPosition(position => position + 10);
  };

  return (<>
  <button onClick={handleMoveLeft}>Mover a la izquierda</button>
      <button onClick={handleMoveRight}>Mover a la derecha</button>
      <div style={{ position: 'relative', left: position }}>
      
      <div style={{ width: 100, height: 100, backgroundColor: 'red' }} />
    </div>
  </>
    
  );
}

export default App;