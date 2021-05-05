import React from 'react';
import ReactDOM from 'react-dom';
import ToBack from './ToBack';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToBack />, div);
  ReactDOM.unmountComponentAtNode(div);
});