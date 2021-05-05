import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import Search from './components/Search';
import HomePage from './sections/HomePage/HomePage';
import Results from './sections/Results';
import Product from './sections/Product';
import NoMatch from './sections/NoMatch/NoMatch';
import './sass/App.scss';

function App() {
    return (
        <Provider store={store}>
            <Router forceRefresh /* ={true} */>
                <Navbar>
                    <Logo />
                    <Search />
                </Navbar>
                <div className='main'>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/items'>
                            <Results />
                        </Route>
                        <Route path='/items/:id'>
                            <Product />
                        </Route>
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
