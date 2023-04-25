// import React from 'react';

// const Modal = (props) => {
    
//     return (
//         <div className='overlay'>
//             <div className='modal'>
//                 <p className='close' onClick={props.modalHandler}>X</p>
//                 <p className='text'>GAMEOVER <span>Score is: {props.score} points</span></p>
//             </div>
//         </div>
//     );
// };

// export default Modal;
import React from 'react';

const Modal = (props) => {
    const closeModal = () => {
        const overlay = document.getElementById('overlay');
        overlay.classList.add('hidden');
        props.modalHandler();
    };

    return (
        <div className='overlay' id='overlay'>
            <div className='modal'>
                <p className='close' onClick={closeModal}>X</p>
                <p className='text'>GAMEOVER <span>Score is:{props.score} points</span></p>
            </div>
        </div>
    );
};

export default Modal;
