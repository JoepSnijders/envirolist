import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import * as reducers from '../reducers';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import NotFound from './pages/404';
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
              <IndexRoute component={HomePage}/>
              <Route path="add" component={AddPage} />
              <Route path="users" component={HomePage}>
                <Route path="/user/:userId" component={HomePage} />
              </Route>
              <Route path="*" component={NotFound} />
            </Route>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
