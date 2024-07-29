import React from 'react';
import PropTypes from 'prop-types';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => {
  return (
    <div style={styles.profileAbout}>
      {bio && (
        <>
          <h2 style={styles.heading}>
            {name.trim().split(' ')[0]}'s Bio
          </h2>
          <p style={styles.bio}>{bio}</p>
          <div style={styles.divider}></div>
        </>
      )}
      <h2 style={styles.heading}>Skill Set</h2>
      <div style={styles.skills}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.skillItem}>
            <i className="fas fa-check" style={styles.icon}></i> {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  profileAbout: {
    padding: '1rem',
    background: '#f4f4f4',
    marginBottom: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  heading: {
    fontSize: '1.5rem',
    textAlign: 'center',
    color: '#333',
    marginBottom: '1rem',
  },
  bio: {
    fontSize: '1rem',
    textAlign: 'center',
    color: '#333',
    marginBottom: '1rem',
  },
  divider: {
    width: '50%',
    margin: '0.5rem auto',
    borderBottom: '2px solid #ccc',
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skillItem: {
    margin: '0.5rem',
    padding: '0.5rem',
    background: '#17a2b8',
    color: '#fff',
    borderRadius: '5px',
  },
  icon: {
    marginRight: '0.5rem',
  },
};

ProfileAbout.propTypes = {
  profile: PropTypes.shape({
    bio: PropTypes.string,
    skills: PropTypes.array.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProfileAbout;
