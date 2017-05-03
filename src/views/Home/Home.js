import React, { Component } from 'react';
class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Home</h1>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Home;
