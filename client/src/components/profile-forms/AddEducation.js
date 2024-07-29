import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const navigate = useNavigate();

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addEducation(formData, navigate);
  };

  return (
    <div style={{margin:'50px'}}>
      <style jsx>{`
        .form-container {
          max-width: 600px;
          margin: auto;
          padding: 1rem;
          background-color: #f4f4f4;
          border-radius: 5px;
        }
        .form-title {
          font-size: 2rem;
          color: #333;
          text-align: center;
        }
        .form-subtitle {
          font-size: 1.2rem;
          color: #777;
          text-align: center;
          margin-bottom: 1rem;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.5rem;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
        .form-group small {
          display: block;
          margin-top: 0.5rem;
          color: #777;
        }
        .btn-primary {
          padding: 0.5rem 1rem;
          background-color: #007bff;
          border: none;
          color: #fff;
          border-radius: 4px;
          cursor: pointer;
          display: inline-block;
        }
        .btn-light {
          padding: 0.5rem 1rem;
          background-color: #fff;
          color: #333;
          border: 1px solid #333;
          border-radius: 4px;
          cursor: pointer;
          display: inline-block;
          margin-left: 1rem;
        }
      `}</style>
      <div className="form-container">
        <h1 className="form-title">Add Your Education</h1>
        <p className="form-subtitle">
          <i className="fas fa-graduation-cap"></i> Add any school or bootcamp that you have attended
        </p>
        <small>* = required field</small>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="* School or Bootcamp"
              name="school"
              value={school}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Degree or Certificate"
              name="degree"
              value={degree}
              onChange={e => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Field of Study"
              name="fieldofstudy"
              value={fieldofstudy}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <h4>From Date</h4>
            <input
              type="date"
              name="from"
              value={from}
              onChange={e => onChange(e)}
            />
          </div>
          <div className="form-group">
            <p>
              <input
                type="checkbox"
                name="current"
                checked={current}
                value={current}
                onChange={e => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled(!toDateDisabled);
                }}
              />{' '}
              Current School
            </p>
          </div>
          <div className="form-group">
            <h4>To Date</h4>
            <input
              type="date"
              name="to"
              value={to}
              onChange={e => onChange(e)}
              disabled={toDateDisabled ? 'disabled' : ''}
            />
          </div>
          <div className="form-group">
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Program Description"
              value={description}
              onChange={e => onChange(e)}
            ></textarea>
          </div>
          <input type="submit" className="btn-primary" />
          <a className="btn-light" href="/dashboard">Go Back</a>
        </form>
      </div>
    </div>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(AddEducation);
