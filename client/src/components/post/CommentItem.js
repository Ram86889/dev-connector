import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment'; // Correct import for moment
import { Link } from 'react-router-dom';

// CommentItem Component
const CommentItem = ({ comment: { _id, text, name, avatar, user, date }, auth }) => {
  return (
    <div style={styles.commentContainer}>
      <div style={styles.commentHeader}>
        <Link to={`/profile/${user}`}>
          <img src={avatar} alt="" style={styles.avatar} />
          <h4 style={styles.name}>{name}</h4>
        </Link>
      </div>
      <div>
        <p style={styles.text}>{text}</p>
        <p style={styles.date}>Posted on <Moment format='YYYY/MM/DD'>{date}</Moment></p>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  comment: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  auth: PropTypes.object.isRequired,
};

const styles = {
  commentContainer: {
    border: '1px solid #ddd',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    marginBottom: '10px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width: 600px)': {
      padding: '5px',
      fontSize: '12px',
    },
  },
  commentHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  avatar: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  name: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 'bold',
  },
  date: {
    fontSize: '12px',
    color: '#777',
  },
  text: {
    marginTop: '10px',
    fontSize: '14px',
  },
};

// Connect to Redux Store (if necessary)
const mapStateToProps = (state) => ({
  auth: state.auth, // Modify this if you need auth state
});

export default connect(mapStateToProps, {})(CommentItem);
