import React, { useState } from 'react';

function Semaphor() {
  const [color, setColor] = useState('red');

  const handleClick = () => {
    setColor(color === 'red' ? 'green' : 'red');
  };

  return (
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: color,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <span style={{ color: 'white', fontSize: '40px' }}>
        {color === 'red' ? 'STOP' : 'GO'}
      </span>
    </div>
  );
}

export default Semaphor;
