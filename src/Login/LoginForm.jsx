import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import './LoginForm.css';
import { Link } from 'react-router-dom';

function Loginf(props) {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Welcome to our React Tutorial</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-group mt-2">
            <p>or <a href="#">Sign up?</a></p>
          </div>

          <div className="d-grid gap-2 mt-3">
          <Link to={"/"}>  <button type="submit" className="btn btn-primary">
              Log In
            </button></Link> 
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Loginf;