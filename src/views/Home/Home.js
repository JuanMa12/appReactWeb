import React, { Component } from 'react';
class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Home;
