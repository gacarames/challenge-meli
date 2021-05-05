import React from 'react';
import './Layout.scss';

function Column(props) {
    return <div className={`wrapper__col`}>{props.children}</div>;
}

export { Column };
