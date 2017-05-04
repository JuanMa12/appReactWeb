import React, { Component, PropTypes} from 'react';


class Login extends Component {


  render() {
    return (
      <div className="login-box-1 col-md-offset-4 col-md-4">
      <div className="login-box">
          <div className="login-logo">
            <a href="/"><b>Admin</b>LTE</a>
          </div>
          <div className="login-box-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form>
              <div className="form-group has-feedback">
                <input type="email" className="form-control" placeholder="Email" value={this.props.name}
                onChange={this.props.onChange}/>
                <span className="fa fa-envelope form-control-feedback"></span>
              </div>
              <div className="form-group has-feedback">
                <input type="password" className="form-control" placeholder="Password" value={this.props.password}
                onChange={this.props.onChange} />
                <span className="fa fa-lock form-control-feedback"></span>
              </div>
              <div className="row">
                <div className="col-xs-8">
                  <div className="checkbox icheck">
                    <label className="">
                      <div className="icheckbox_square-blue" aria-checked="false" aria-disabled="false">
                      <input type="checkbox" className="check"/>
                      <ins className="iCheck-helper helpCheck" ></ins></div> Remember Me
                    </label>
                  </div>
                </div>
                <div className="col-xs-4">
                  <button type="submit" className="btn btn-primary btn-block btn-flat"
                  disabled={this.props.saving} value={this.props.saving ? 'Saving...' : 'Save'}
                  onClick={this.props.onSave}>Sign In</button>
                </div>
              </div>
            </form>
            <div className="social-auth-links text-center">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-social btn-facebook btn-flat">
              <i className="fa fa-facebook"></i> Sign in using
                Facebook</a>
              <a href="#" className="btn btn-block btn-social btn-google btn-flat">
              <i className="fa fa-google-plus"></i> Sign in using
                Google+</a>
            </div>
            <a href="#">I forgot my password</a>
            <a href="register.html" className="text-center">Register a new membership</a>
          </div>
          </div>
      </div>
    );
  }
}

Login.PropTypes = {
  name: React.PropTypes.object.isRequired,
  password: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool
};

export default Login;
