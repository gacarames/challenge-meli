import React from 'react';
import ToBack from './ToBack';

export default {
    title: 'ui/ToBack',
    component: 'ToBack',
    component: ToBack,
};

const Template = (args) => <ToBack {...args} />;

export const PrimaryToBack = Template.bind({});
PrimaryToBack.args = {
    children: 'Atras',
    onClick: (e) => {
        console.log(e);
    },
};
