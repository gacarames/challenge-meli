import React from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Image />, div);
  ReactDOM.unmountComponentAtNode(div);
});