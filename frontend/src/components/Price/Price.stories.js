import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Price from '../Price';

export default {
    title: 'ui/Price',
    component: Price,
};

const Template = (args) => (
    <Router>
        <Price {...args} />
    </Router>
);

export const Default = Template.bind({});

Default.args = {
    price: {
        currency: 'ARS',
        amount: 23658,
        decimals: 0.18000000000029104,
    },
};
