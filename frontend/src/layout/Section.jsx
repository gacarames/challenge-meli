import React from 'react';
import './Layout.scss';

function Section(props) {
    const { layout, section, styled } = props;

    return (
        <section className={section || null}>
            <div className={`wrapper wrapper--${layout || 'full'} ${styled}`}>{props.children}</div>
        </section>
    );
}

export { Section };
