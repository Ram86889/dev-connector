import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(postId, { text });
    setText('');
  };

  return (
    <div>
      <form onSubmit={onSubmit} style={styles.form}>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Leave a comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          style={styles.textarea}
        ></textarea>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  textarea: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    resize: 'none',
  },
  button: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default connect(null, { addComment })(CommentForm);
