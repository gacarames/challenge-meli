import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Logo from '../Logo';

export default {
    title: 'ui/Logo',
    component: Logo,
};

const Template = (args) => (
    <Router>
        <Logo {...args} />
    </Router>
);

export const Default = Template.bind({});

Default.args = {};
