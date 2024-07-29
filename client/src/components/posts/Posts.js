import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        <i className="fas fa-user" style={styles.icon}></i> Welcome to the Community
      </h1>
      <PostForm />
      <ul style={styles.postList}>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2em',
    textAlign: 'center',
    margin: '20px 0',
    color: '#333',
  },
  icon: {
    marginRight: '10px',
  },
  postList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
