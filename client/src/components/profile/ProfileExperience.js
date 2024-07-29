import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <div style={styles.experience}>
    <h3 style={styles.company}>{company}</h3>
    <p style={styles.period}>
      <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
      {!to ? ' Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
    </p>
    <p>
      <strong>Position: </strong> {title}
    </p>
    {location && (
      <p>
        <strong>Location: </strong> {location}
      </p>
    )}
    {description && (
      <p>
        <strong>Description: </strong> {description}
      </p>
    )}
  </div>
);

const styles = {
  experience: {
    padding: '1rem',
    marginBottom: '1rem',
    background: '#f4f4f4',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  company: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '0.5rem'
  },
  period: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    color: '#666'
  }
};

ProfileExperience.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string,
    current: PropTypes.bool,
    to: PropTypes.instanceOf(Date),
    from: PropTypes.instanceOf(Date).isRequired,
    description: PropTypes.string
  }).isRequired
};

export default ProfileExperience;
