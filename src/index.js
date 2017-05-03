import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, HashRouter, Switch } from 'react-router-dom';

import Home from './views/Home/Home';
import Index from './views/Home/Index';
import Dashboard from './views/Admin/Dashboard';
import HomeAdmin from './views/Admin/HomeAdmin';

import './index.css';

ReactDOM.render(
    <HashRouter>
    <div>
      <Home>
        <Switch>
          <Route exact path="/" component={Index}/>
        </Switch>
      </Home>
      <Dashboard>
        <Switch>
          <Route exact path="/admin/home" component={HomeAdmin}/>
        </Switch>
      </Dashboard>
    </div>
    </HashRouter>,
    document.getElementById('root')
);
