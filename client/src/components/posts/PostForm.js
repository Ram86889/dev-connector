import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addPost({ text });
    setText('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Create a Post</h1>
      <form onSubmit={e => {
        e.preventDefault();
        addPost({text});
        setText( '' ) ;
      }}>
        <textarea
          name="text"
          cols="30"
          rows="5"
          placeholder="Create a post"
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={styles.textarea}
          required
        />
        <input type="submit" value="Submit" style={styles.submitButton} />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

const styles = {
  container: {
    padding: '20px',
    borderRadius: '5px',
    backgroundColor: '#f4f4f4',
    marginTop: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '10px',
    resize: 'vertical',
  },
  submitButton: {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

const mapStateToProps = (state) => ({
 
});

export default connect(mapStateToProps, { addPost })(PostForm);
