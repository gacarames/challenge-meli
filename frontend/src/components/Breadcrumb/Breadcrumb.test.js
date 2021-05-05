import React from 'react';
import ReactDOM from 'react-dom';
import Breadcrumb from './Breadcrumb';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Breadcrumb />, div);
  ReactDOM.unmountComponentAtNode(div);
});