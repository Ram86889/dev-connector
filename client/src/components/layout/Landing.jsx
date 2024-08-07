import React from 'react'
import { Link,  Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const Landing =({ isAuthenticated})=> {
if( isAuthenticated ){
   return <Navigate to='/dashboard'/>
}

  return (
    <div>
         <section class="landing">
      <div class="dark-overlay">
        <div class="landing-inner">
          <h1 class="x-large">Developer Connector</h1>
          <p class="lead">
            Create developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div class="buttons">
          <Link to="/register" class="btn btn-primary">Sign Up</Link>
          <Link to="/login" class="btn btn">Login</Link>
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default Landing
