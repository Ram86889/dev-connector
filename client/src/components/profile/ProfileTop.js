import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({ profile: { status, company, location, website, social, user: { name, avatar } } }) => {
  return (
    <div style={styles.profileTop}>
      <img src={avatar} alt="" style={styles.avatar} />
      <h1 style={styles.name}>{name}</h1>
      <p style={styles.status}>
        {status} {company && <span> at {company}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div style={styles.socialIcons}>
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <i className="fas fa-globe" style={styles.icon}></i>
          </a>
        )}
        {social && social.linkedin && (
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <i className="fab fa-linkedin" style={styles.icon}></i>
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <i className="fab fa-facebook" style={styles.icon}></i>
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <i className="fab fa-instagram" style={styles.icon}></i>
          </a>
        )}
         {social && social.youtube && (
          <a href={social.youtube} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <i className="fab fa-youtube" style={styles.icon}></i>
          </a>
        )}
         {social && social.twitter && (
          <a href={social.twitter} target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <i className="fab fa-twitter" style={styles.icon}></i>
          </a>
        )}
      </div>
    </div>
  );
};

const styles = {
  profileTop: {
    textAlign: 'center',
    background: '#17a2b8',
    color: '#fff',
    padding: '1rem 0',
    borderBottom: '2px solid #ccc',
  },
  avatar: {
    width: '100px',
    borderRadius: '50%',
    margin: '0 auto',
  },
  name: {
    marginTop: '0.5rem',
  },
  status: {
    margin: '0.5rem 0',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '1rem',
  },
  iconLink: {
    color: '#fff',
    margin: '0 0.5rem',
  },
  icon: {
    fontSize: '1.5rem',
  },
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;

