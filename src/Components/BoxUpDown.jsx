import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const BoxUpDown = ({isMoving_}) => {
  const [isMoving, setIsMoving] = useState(isMoving_);

  useEffect(() => {
    setIsMoving(isMoving_)
  }, [isMoving_])

  const { y } = useSpring({
    from: { y: 0 },
    to: { y: isMoving ? 400 : 0 }, // cambia a 400 para mover hacia abajo
    config: { duration: 1000 },
  });

  const handleClick = () => {
    setIsMoving(!isMoving);
    console.log(isMoving)
  };

  return (
    <div onClick={handleClick}>
      <animated.div
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          borderRadius: 50,
          transform: y.interpolate(y => `translateY(${y}px)`), // cambia a translateY(${y}px) para mover hacia abajo
        }}
      />
    </div>
  );
};

export default BoxUpDown;