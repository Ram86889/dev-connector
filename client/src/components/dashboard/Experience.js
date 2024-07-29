import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import Moment from 'react-moment';

const Experience = ({ experience = [], deleteExperience }) => {
  const experiences = experience.map(exp => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td>
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        )}
      </td>
      <td>
        <button onClick={() => deleteExperience(exp._id)} className=" btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <style jsx>{`
        .experience-table {
          width: 100%;
          margin-top: 1rem;
          border-collapse: collapse;
        }
        .experience-table th,
        .experience-table td {
          border: 1px solid #ccc;
          padding: 0.5rem;
          text-align: left;
        }
        .experience-table th {
          background-color: #f4f4f4;
        }
        .hide-sm {
          display: none;
        }
        @media (min-width: 600px) {
          .hide-sm {
            display: table-cell;
          }
        }
        .btn-danger {
          background-color: #dc3545;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          cursor: pointer;
          border-radius: 4px;
        }
      `}</style>
      <Fragment>
        <h2 className="my-2">Experience Credentials</h2>
        <table className="experience-table">
          <thead>
            <tr>
              <th>Company</th>
              <th className="hide-sm">Title</th>
              <th className="hide-sm">Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{experiences}</tbody>
        </table>
      </Fragment>
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
