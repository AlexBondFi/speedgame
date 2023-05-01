import React from 'react';
import './Circle.css';

const Circle = (props) => {
    return (
        <div className={props.active ? 'circle active' : 'circle'} onClick={props.click} 
        style={{pointerEvents: props.gameIsOn ? 'all' : 'none' }}>
        
        </div>
    );
};

export default Circle;