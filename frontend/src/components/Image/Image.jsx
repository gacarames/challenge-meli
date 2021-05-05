import React from 'react';
import './Image.scss';

function Image(props) {
    const { id, url } = props.picture;

    return (
        <div className='image'>
            <div className='image__wrapper'>
                <figure className='image__figure'>
                    <img className='image__image' src={url} alt={`img-${id}`} />
                </figure>
            </div>
        </div>
    );
}

export default Image;
