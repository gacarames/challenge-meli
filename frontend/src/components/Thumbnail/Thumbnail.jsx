import React from 'react';
import './Thumbnail.scss';

function Thumbnail(props) {
    const { src } = props;

    return (
        <div className='thumbnail'>
            <figure className='thumbnail__figure'>
                <img className='thumbnail__thumbnail' src={src} alt={`img-`} />
            </figure>
        </div>
    );
}

export default Thumbnail;
