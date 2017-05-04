import React, { Component } from 'react';

import NavBar from './../../partials/NavBar';
import SideBar from './../../partials/SideBar';
import PanelTitle from './../../partials/PanelTitle';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <SideBar/>
        <div className="content-wrapper">
            <PanelTitle/>
             <section className="content">
                {this.props.children}
             </section>
        </div>
      </div>
    );
  }
}

export default Dashboard;
