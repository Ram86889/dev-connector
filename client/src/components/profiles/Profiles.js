import React, {Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <div style={{margin:'60px'}}>
      <style jsx>{`
        .profiles-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 20px;
        }
        .profile-item {
          background: #f4f4f4;
          border: 1px solid #ccc;
          padding: 10px;
          margin: 10px;
          border-radius: 5px;
          width: 300px;
          text-align: center;
        }
        .profile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .profile-header h2 {
          margin: 0;
          color: #333;
        }
        .profile-header img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
        .profile-actions {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
        }
        .btn-primary {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 5px;
          text-decoration: none;
          display: inline-block;
        }
      `}</style>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop" /> Browse and connect with developers
          </p>
          <div className="profiles-container">
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
