import React from 'react';
import './Description.scss';

function Description(props) {
    return (
        <div className='description'>
            <h2 className='description__title'>Descripción del producto</h2>
            <p className='description__text'>{props.content}</p>
        </div>
    );
}

export default Description;
