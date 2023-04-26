import React from 'react';

const Modal = (props) => {
    
    return (
        <div className='overlay'>
            <div className='modal'>
                <p className='close' onClick={props.modalHandler}>X</p>
                {props.score <= 50 ? (
                <p className='text'>You'r good, BUT... <span>Your score is: {props.score}</span></p>) : props.score <= 100 ? (
                <p className='text'>Much better, go on. <span>Your score is: {props.score}</span></p>) : (
                <p className='text'>You won! <span>Your score is: {props.score}</span></p>)}
            </div>
        </div>
    );
};

export default Modal;
