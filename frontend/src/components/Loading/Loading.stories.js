import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Loading from '../Loading';

export default {
    title: 'ui/Loading',
    component: Loading,
};

const Template = (args) => (
    <Router>
        <Loading {...args} />
    </Router>
);

export const Default = Template.bind({});

Default.args = {};
