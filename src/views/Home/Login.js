import React, { Component } from 'react';
import axios from '../../services/axios'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  updateStateEmail(event) {
    this.setState({email: event.target.value})
  }
  updateStatePassword(event) {
    this.setState({password: event.target.value})
  }
  handleSubmit(event) {
    axios.post('/login',{email: this.state.email, password: this.state.password })
    .then((response) => {
      console.log(response.data)
      localStorage.token = response.data.auth.token
      axios.defaults.headers.bearer = response.data.auth.token
    })
    .catch(error => {
      console.log('error')
      this.setState({error: 'Email invalido/Contrasena incorrecta'})
    })
  }

  render() {

    return (
      <div className="login-box-1 col-md-offset-2 col-md-8">
        <div className="login-box">
          <div className="login-logo">
            <a href="/"><b>Admin</b>LTE</a>
          </div>
          <div className="row">
            <div className="login-box-body col-md-12">
              <p className="login-box-msg">Sign in to start your session</p>
              <h4>{this.state.error}</h4>
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group has-feedback">
                  <input value={this.state.email} onChange={this.updateStateEmail.bind(this)} type="email" className="form-control" placeholder="Email"/>
                  <span className="fa fa-envelope form-control-feedback"></span>
                </div>
                <div className="form-group has-feedback">
                  <input value={this.state.password} onChange={this.updateStatePassword.bind(this)} type="password" className="form-control" placeholder="Password" />
                  <span className="fa fa-lock form-control-feedback"></span>
                </div>
                <div className="row">
                  <div className="col-xs-4">
                    <button type="submit" className="btn btn-primary btn-block btn-flat"
                     >Sign In</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login
