import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './assets/fonts/Proxima-Nova-Black.otf';
import './assets/fonts/Proxima-Nova-Bold.otf';
import './assets/fonts/Proxima-Nova-Regular.otf';
import './assets/fonts/Proxima-Nova-Thin.otf';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
