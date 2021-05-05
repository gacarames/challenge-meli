import React from 'react';
import Button from './Button';

export default {
    title: 'ui/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
    children: 'Confirmar',
    onClick: (e) => {
        console.log(e);
    },
};
