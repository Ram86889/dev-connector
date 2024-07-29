import React, { useState, Fragment } from 'react';
import { Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
<div style={{margin:50}}>
    <section style={styles.container}>
      <h1 style={styles.title}>Create Your Profile</h1>
      <p style={styles.subTitle}><i className="fas fa-user"></i> Let's get some information to make your profile stand out</p>
      <form onSubmit={e=>onSubmit(e)} style={styles.form}>
      <div style={{margin:'15px'}}>
          <select name="status" value={status} onChange={e =>onChange(e)}>
            <option value="0">* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </select>
          <small class="form-text"
            >Give us an idea of where you are at in your career</small
          >
        </div>

        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Company"
            name="company"
            value={company}
            onChange={e => onChange(e)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Website"
            name="website"
            value={website}
            onChange={e => onChange(e)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={e => onChange(e)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="* Status"
            name="status"
            value={status}
            onChange={e => onChange(e)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="* Skills"
            name="skills"
            value={skills}
            onChange={e => onChange(e)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Github Username"
            name="githubusername"
            value={githubusername}
            onChange={e => onChange(e)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={e => onChange(e)}
            style={styles.textarea}
          />
        </div>
        <div style={styles.formGroup}>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type="button"
            style={styles.buttonToggle}
          >
            Add Social Network Links
          </button>
        </div>
        {displaySocialInputs && (
          <Fragment>
            <div style={styles.formGroup}>
            <i class="fab fa-twitter fa-2x"/>
              <input
                type="text"
                placeholder="Twitter URL"
                name="twitter"
                value={twitter}
                onChange={e => onChange(e)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
            <i class="fab fa-facebook fa-2x"/>

              <input
                type="text"
                placeholder="Facebook URL"
                name="facebook"
                value={facebook}
                onChange={e => onChange(e)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
            <i class="fab fa-linkedin fa-2x"/>
              <input
                type="text"
                placeholder="Linkedin URL"
                name="linkedin"
                value={linkedin}
                onChange={e => onChange(e)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
            <i class="fab fa-youtube fa-2x"/>
              <input
                type="text"
                placeholder="YouTube URL"
                name="youtube"
                value={youtube}
                onChange={e => onChange(e)}
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
            <i class="fab fa-instagram fa-2x"/>
              <input
                type="text"
                placeholder="Instagram URL"
                name="instagram"
                value={instagram}
                onChange={e => onChange(e)}
                style={styles.input}
              />
            </div>
          </Fragment>
        )}
        <input type="submit" className="btn btn-primary" style={styles.button} value="Submit" />
        <Link className='btn btn-primary' style={styles.button}  to='dashboard'>
        Go Back
        </Link>
      </form>
    </section>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
 
};

export default connect(null, { createProfile})((CreateProfile));


const styles = {
  container: {
    width: '100%',
    maxWidth: '800px',
    margin: ' ',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  },
  title: {
    marginBottom: '10px',
    fontSize: '2rem',
    color: '#333'
  },
  subTitle: {
    marginBottom: '20px',
    fontSize: '1.2rem',
    color: '#777'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formGroup: {
    marginBottom: '15px',
    width: '100%'
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd',
    minHeight: '100px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#17a2b8',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  buttonToggle: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#6c757d',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginBottom: '20px'
  }
};




