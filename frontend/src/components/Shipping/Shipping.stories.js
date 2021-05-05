import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Shipping from '../Shipping';

export default {
    title: 'ui/Shipping',
    component: Shipping,
};

const Template = (args) => (
    <Router>
        <Shipping {...args} />
    </Router>
);

export const Default = Template.bind({});

Default.args = {};
