import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import reducers from './reducers';
import Dashboard from './views/Admin/Dashboard';
import HomeAdmin from './views/Admin/HomeAdmin';

import './index.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <HashRouter>
      <div>
        <Dashboard>
          <Switch>
            <Route exact path="/admin/home" component={HomeAdmin}/>
          </Switch>
        </Dashboard>
      </div>
      </HashRouter>
    </Provider>,
    document.getElementById('root')
);
