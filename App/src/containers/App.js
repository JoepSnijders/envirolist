import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import * as reducers from '../reducers';
import './App.css';
import Map from './Map';
import NotFound from '../components/404';
import Container from '../components/Container';

const reducer = combineReducers(reducers);
const store = createStore(reducer, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={Container}>
              <IndexRoute component={Map}/>
              <Route path="add" component={Map}></Route>
              <Route path="users" component={Map}>
                <Route path="/user/:userId" component={Map}></Route>
              </Route>
              <Route path="*" component={NotFound}></Route>
            </Route>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
