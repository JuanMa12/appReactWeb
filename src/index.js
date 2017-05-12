import React from 'react';
import ReactDOM from 'react-dom';
 import { Route,  HashRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import Home from './views/Home/Home';
import Login from './views/Home/Login';
import Dashboard from './views/Admin/Dashboard';
import HomeAdmin from './views/Admin/HomeAdmin';
import AdminClock from './views/Admin/AdminClock';
import EditPlan from './views/Admin/plan/EditPlan';
import reducers from './reducers';

import './index.css';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <HashRouter>
        <Switch>
            <Dashboard>
                <Route path="/admin/home" component={HomeAdmin}/>
                <Route path="/admin/plan/:id" component={EditPlan}/>
                <Route path="/admin/clock" component={AdminClock}/>
                <Route path="/login" component={Login}/>
            </Dashboard>
          <Home>

          </Home>
        </Switch>
      </HashRouter>
    </Provider>,
    document.getElementById('root')
);
