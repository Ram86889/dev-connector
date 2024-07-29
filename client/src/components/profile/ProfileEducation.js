import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, degree, fieldOfStudy, current, to, from, description }
}) => (
  <div style={styles.education}>
    <h3 style={styles.school}>{school}</h3>
    <p style={styles.degree}>
      <strong>Degree: </strong> {degree}
    </p>
    <p style={styles.fieldOfStudy}>
      <strong>Field of Study: </strong> {fieldOfStudy}
    </p>
    <p style={styles.period}>
      <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
      {!to ? ' Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
    </p>
    {description && (
      <p>
        <strong>Description: </strong> {description}
      </p>
    )}
  </div>
);

const styles = {
  education: {
    padding: '1rem',
    marginBottom: '1rem',
    background: '#f4f4f4',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  school: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '0.5rem'
  },
  degree: {
    fontSize: '1rem',
    color: '#666'
  },
  fieldOfStudy: {
    fontSize: '1rem',
    color: '#666'
  },
  period: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
    color: '#666'
  }
};

ProfileEducation.propTypes = {
  education: PropTypes.shape({
    school: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    fieldOfStudy: PropTypes.string,
    current: PropTypes.bool,
    to: PropTypes.instanceOf(Date),
    from: PropTypes.instanceOf(Date).isRequired,
    description: PropTypes.string
  }).isRequired
};

export default ProfileEducation;
