import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Box = ({isMoving_}) => {
const [isMoving, setIsMoving] = useState(isMoving_);

useEffect(() => {
    setIsMoving(isMoving_)
}, [isMoving_])
const { x } = useSpring({
    from: { x: 0 },
    to: { x: isMoving ? -400 : 0 },
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
        transform: x.interpolate(x => `translateX(${x}px)`),
        }}
    />
    </div>
);
};

export default Box;