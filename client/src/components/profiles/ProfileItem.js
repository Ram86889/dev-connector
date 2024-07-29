import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = ({ profile }) => {
  // Check if profile and user data are available
  if (!profile || !profile.user) {
    return null; // or return a loading spinner, placeholder, etc.
  }

  const { user: { _id, name, avatar }, status, company, location, skills } = profile;

  return (
    <div style={styles.profile}>
      <img src={avatar} alt="Avatar" style={styles.avatar} />
      <div>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.status}>{status} {company && <span> at {company}</span>}</p>
        <p style={styles.location}>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} style={styles.viewProfileBtn}>View Profile</Link>
      </div>
      <ul style={styles.skills}>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} style={styles.skill}>
            <i className="fas fa-check" style={styles.icon}></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

const styles = {
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '20px',
    margin: '10px',
    borderRadius: '5px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    width: '100%',
    maxWidth: '600px',
    marginBottom: '20px'
  },
  avatar: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px'
  },
  name: {
    fontSize: '24px',
    margin: '10px 0',
    color: '#333'
  },
  status: {
    fontSize: '18px',
    margin: '5px 0',
    color: '#777'
  },
  location: {
    fontSize: '16px',
    margin: '5px 0',
    color: '#666'
  },
  viewProfileBtn: {
    display: 'inline-block',
    margin: '10px 0',
    padding: '10px 20px',
    backgroundColor: '#17a2b8',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  skills: {
    listStyle: 'none',
    padding: 0,
    margin: '10px 0 0',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  skill: {
    display: 'inline-block',
    margin: '5px',
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: '#e1e1e1',
    fontSize: '14px'
  },
  icon: {
    marginRight: '5px'
  }
};

export default ProfileItem;
