import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ResultItem from "../ResultItem";

export default {
  title: "ui/ResultItem",
  component: ResultItem,
};

const Template = (args) => (
  <Router>
    <ResultItem {...args} />
  </Router>
);

export const Default = Template.bind({});

Default.args = {
  itemData: {
    id: "MLA822407672",
    title: "Lavarropas Semiautomático Drean Family 096 A Blanco 5.5kg 220 v",
    price: {
      currency: "ARS",
      amount: 23658,
      decimals: 0.18000000000029104,
    },
    picture: "http://http2.mlstatic.com/D_683780-MLA43406417959_092020-I.jpg",
    condition: "new",
    free_shipping: false,
    sold_quantity: 1,
    location: "Capital Federal"
  },
};
