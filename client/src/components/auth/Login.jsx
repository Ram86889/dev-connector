import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { login } from '../../actions/auth';

const Login =({login, isAuthenticated})=> {
  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
   
  });

  const { email, password } = formData;

  const onChange = e => 
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit =async e  => {
    e.preventDefault();
    login(email, password)
  };

  // Define inline styles
  const containerStyle = {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '20px',
   
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  };

  const linkStyle = {
    display: 'block',
    textAlign: 'center',
    marginTop: '10px',
  };

  const responsiveStyle = {
    '@media (max-width: 600px)': {
      containerStyle: {
        padding: '10px',
      },
      inputStyle: {
        padding: '8px',
      },
      buttonStyle: {
        padding: '8px 16px',
      },
    }
  };

  if(isAuthenticated){
    return <Navigate to='/dashboard'/>;
  }

  return (
    <div style={{ ...containerStyle, ...responsiveStyle.containerStyle, marginTop:80 }}>
      
      <h1 style={{color:'blueviolet'}}>Sign In</h1>
      <p className='fas fa-user' style={{marginTop:20, marginBottom:20}}><i >Sign Into Your Account</i></p>
      <form onSubmit={e =>onSubmit(e)}>
       
        <div style={formGroupStyle}>
          <label style={labelStyle}>Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
           
            style={inputStyle}
          />
         
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
          
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
      <p style={linkStyle}>
       Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};

Login.propTypes = {
login: PropTypes.func.isRequired,
isAuthenticated: PropTypes.bool
}; 

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect( mapStateToProps,
   { login })(Login);

   // sample changes