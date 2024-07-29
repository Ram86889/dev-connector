import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { addLike, removeLike, deletePost } from '../../actions/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
 
  

  return (
    <div style={styles.postItem}>
      <div style={styles.postHeader}>
        <div style={styles.userInfo}>
          <Link to={`/profile/${user}`} style={styles.profileLink}>
            <img src={avatar} alt={name} style={styles.postAvatar} />
          </Link>
          <div style={styles.userDetails}>
            <h4 style={styles.postName}>{name}</h4>
          </div>
        </div>
        {!auth.loading && auth.user && user === auth.user._id && (
          <button
            onClick={() => deletePost(_id)}
            type="button"
            style={styles.deletePostButton}
          >
            <i className="fas fa-times"></i> Remove Post
          </button>
        )}
      </div>
      <div style={styles.postBody}>
        <p style={styles.postText}>{text}</p>
        <p style={styles.postDate}>
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>

        {showActions && (
          <div style={styles.actions}>
            <button
              onClick={() => addLike(_id)}
              type="button"
              style={styles.likeButton}
            >
              <i className="fas fa-thumbs-up"></i>
              <span> {likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button
              onClick={() => removeLike(_id)}
              type="button"
              style={styles.unlikeButton}
            >
              <i className="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/posts/${_id}`} style={styles.discussionButton}>
              Discussion {comments.length > 0 && (
                <span className="comment-count">{comments.length}</span>
              )}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const styles = {
  postItem: {
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '1rem',
    padding: '1rem',
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  postHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  profileLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  postAvatar: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  userDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  postName: {
    fontSize: '1rem',
    fontWeight: 'bold',
    margin: '0',
  },
  postDate: {
    fontSize: '0.8rem',
    color: '#777',
    margin: '0',
  },
  deletePostButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '0.5rem',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  postBody: {
    marginTop: '1rem',
  },
  postText: {
    fontSize: '1.1rem',
  },
  likeButton: {
    backgroundColor: '#2ecc71',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  unlikeButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  discussionButton: {
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  },
};

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(PostItem);
