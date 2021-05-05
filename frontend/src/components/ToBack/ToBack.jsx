import React from 'react';
import PropTypes from 'prop-types';
import { createHashHistory } from 'history';
import './ToBack.scss';

const ToBack = (props) => {
    const history = createHashHistory();
    return (
        <button className='to-back' onClick={history.goBack}>
            {props.children}
        </button>
    );
};

ToBack.propTypes = {
    children: PropTypes.any,
};

export default ToBack;
