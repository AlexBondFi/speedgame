import React from 'react';
import './Circle.css';

const Circle = (props) => {
    const { isActive, click } = props;
    return (
        <div className={`circle ${isActive ? 'active' : ''}`} onClick={props.click}>
        </div>
    );
};

export default Circle;