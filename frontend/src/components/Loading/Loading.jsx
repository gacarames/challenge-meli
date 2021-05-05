import React from 'react';
import './Loading.scss';

const Loading = () => (
    <div className='loading'>
        <div className='loading__wrapper'>
            <div className='loading__spinner'>
                <div className='loading__spinner-dot loading__spinner-dot--one'></div>
                <div className='loading__spinner-dot loading__spinner-dot--two'></div>
                <div className='loading__spinner-dot'></div>
            </div>
        </div>
    </div>
);

export default Loading;
