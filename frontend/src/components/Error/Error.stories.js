import React from "react";
import Error from "./Error";
import { storiesOf } from "@storybook/react";
import useState from "storybook-addon-state";

export default {
  title: "ui/Error",
  component: Error,
};

const Template = (args) => <Error {...args}>Sin errores</Error>;

export const Default = Template.bind({});

Default.args = {
  estate: {
    hasError: false,
    errorMessge: "Test Error",
  },
};
