import React from 'react';

const Modal = (props) => {
    return (
        <div className='overlay'>
            <div className='modal'>
                <p>X</p>
            <p>GAMEOVER <span>Score is:{props.score} points</span></p>
            </div>
        </div>
    );
};

export default Modal;