import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import Login from './views/Home/Login';
import Dashboard from './views/Admin/Dashboard';
import HomeAdmin from './views/Admin/HomeAdmin';
import EditPlan from './views/Admin/plan/EditPlan';
import reducers from './reducers';

import './index.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <HashRouter>
        <div>
          <Dashboard>
            <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/admin/home" component={HomeAdmin}/>
            <Route path="/admin/plan/:id" component={EditPlan}/>
            </Switch>
          </Dashboard>
        </div>
      </HashRouter>
    </Provider>,
    document.getElementById('root')
);
