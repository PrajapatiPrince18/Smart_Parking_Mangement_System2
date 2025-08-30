import React from 'react';
import { Link } from "react-router-dom";
import './Form.css';

function Login() {
  return (
    <div className='form-container'>
      <form className='form-design'>
        <h1>Login Form</h1>

        <label className="un"> Username : </label>
        <input type="text" id="un" placeholder='Enter your name' required />

        <label className="pwd"> Password : </label>
        <input type="password" id="pwd" placeholder='Enter password' />

        <button type="submit"> Login </button>

        <div className='form-footer'>
          New User? <Link to="/signup" className="link-text">Register Now</Link> <br />
          <Link to="/admin-login" className="admin-text">Login as Admin</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
