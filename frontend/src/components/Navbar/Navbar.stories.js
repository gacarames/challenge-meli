import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';

export default {
    title: 'ui/Navbar',
    component: Navbar,
};

const Template = (args) => (
    <Router>
        <Navbar {...args} />
    </Router>
);

export const Default = Template.bind({});

Default.args = {};
