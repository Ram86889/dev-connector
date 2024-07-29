import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { getProfileById } from '../../actions/profile';
import Spinner from '../layout/Spinner';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub'


const styles = {
  container: {
    padding: '20px',
    background: '#f4f4f4',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '10px 10px',
  },
  backButton: {
    backgroundColor: '#6c757d',
  },
  profileDetails: {
    textAlign: 'left',
    marginTop: '20px',
  },
};

const Profile = ({ getProfileById, profile: { profile, loading }, auth }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  return (
    <div style={{margin:'80px'}}>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <div style={styles.container}>
          <ProfileTop profile={profile} />
          <ProfileAbout profile={profile}/>
          <div style={styles.profileDetails}>
            <h2 className="text-primary">Experience</h2>
            {profile.experience.length > 0 ? (
              <Fragment>
                {profile.experience.map((experience) => (
                  <ProfileExperience
                    key={experience._id}
                    experience={experience}
                  />
                ))}
              </Fragment>
            ) : (
              <h4>No experience credentials</h4>
            )}
          </div>
          <div style={styles.profileDetails}>
            <h2 className="text-primary">Education</h2>
            {profile.education.length > 0 ? (
              <>
                {profile.education.map((education) => (
                  <ProfileEducation
                    key={education._id}
                    education={education}
                  />
                ))}
              </>
            ) : (
              <h4>No education credentials</h4>
            )}
          </div>
          {profile.githubusername && (
            <ProfileGithub username={profile.githubusername} />
          )}
          <div>
            <button
              style={{ ...styles.button, ...styles.backButton }}
              onClick={() => navigate('/profiles')}
            >
              Back to Profiles
            </button>
            {auth.isAuthenticated &&
              auth.loading === false &&
              auth.user._id === profile.user._id && (
                <Link to="/edit-profile">
                  <button style={styles.button}>Edit Profile</button>
                </Link>
              )}
          </div>


        </div>
      )}
    </div>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
