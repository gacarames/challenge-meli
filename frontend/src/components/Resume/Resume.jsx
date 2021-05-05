import React from 'react';
import Price from '../Price';
import './Resume.scss';

function Resume(props) {
    const { condition, title, price, sold_quantity } = props.resume;

    return (
        <div className='resume'>
            <div className='resume__copy'>
                <span>{condition === 'new' ? 'Nuevo' : 'Usado'}</span> - <span>{`${sold_quantity} vendidos`}</span>
            </div>
            <h1 className='resume__label'>{title}</h1>
            <div className='resume__price'>
                <Price price={price} resume />
            </div>
        </div>
    );
}

export default Resume;
