import React, {Component} from 'react';
import Header from '../../components/Header';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Login.css';

class Login extends Component {
  static propTypes = {
    valueLogin: PropTypes.string.isRequired,
    valuePassword: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
  };

  state = {
    isValid: false,
  } 

  handleSubmit = (event) => {
    event.preventDefault();
    const login = document.getElementById('inputLogin').value;
    const password = document.getElementById('inputPassword').value;
    if (login.length >= 8 && password.length >=8) {
      localStorage.setItem("login", login);
      localStorage.setItem("password", password);
      this.setState({ isValid: true });
    }
    else {
      alert('Login and password must contain at least 8 characters');
    }  
  };

  render () {

    const {isValid} = this.state;
    const {valueLogin, valuePassword} = this.props;

    return (
      <div>
        <Header title="Login page" count=""></Header> 
        <form className="loginForms">
          <div className="form-group">
            <label>Login</label>
            <input type="text" className="form-control" id="inputLogin" value={valueLogin} placeholder="Enter login"/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="inputPassword" value={valuePassword} placeholder="Password"/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </form>
        { isValid && <Redirect to="/market" />};
      </div>
    );
  };
};

export default Login;
