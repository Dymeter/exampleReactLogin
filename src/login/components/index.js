import React from 'react';
import '../styles.css';

const Login = props =>
  <div className="login">
    <div className="loginInput">
      <h1>User</h1>
      <input
        value={props.user}
        onChange={(e) => { props.inputUser(e.target.value); }}
        type="text"
      />
    </div>
    <div className="loginInput">
      <h1>Password</h1>
      <input
        value={props.password}
        onChange={(e) => { props.inputPassword(e.target.value); }}
        type="password"
      />
    </div>
    <button
      className="loginButton"
      onClick={(e) => {
        props.handeLogin(props.router);
      }}
    >
      LOGIN
    </button>
  </div>
;

export default Login;
