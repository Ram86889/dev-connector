import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getPost } from '../../actions/post';
import { Link, useParams } from 'react-router-dom';
import PostItem from '../posts/PostItem';
import CommentForm from '../post/CommentForm';
import CommentItem from '../post/CommentItem';


const Post = ({ getPost, post: { post, loading } }) => {
  const { id } = useParams();

  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <div style={{ margin: '60px' }}>
      <Fragment>
        <div style={styles.postContainer}>
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
        </div>
        
        <Link to="/posts" style={styles.backButton}>
          Back to Posts
        </Link>
        
        <div>
          {post.comments.map(comment => (
            <CommentItem key={comment._id} comment={comment} postId={post._id} />
          ))}
        </div>
      </Fragment>
    </div>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const styles = {
  postContainer: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    marginBottom: '20px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  backButton: {
    display: 'inline-block',
    padding: '10px 20px',
    marginTop: '10px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  backButtonHover: {
    backgroundColor: '#0056b3',
  },
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
