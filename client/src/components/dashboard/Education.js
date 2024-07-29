import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
import Moment from 'react-moment';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map(edu => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className="hide-sm">{edu.degree}</td>
      <td>
        <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{' '}
        {edu.to === null ? ' Now' : <Moment format="YYYY/MM/DD">{edu.to}</Moment>}
      </td>
      <td>
        <button onClick={() => deleteEducation(edu._id)} className="btn-danger">
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <style jsx>{`
        .education-table {
          width: 100%;
          margin-top: 1rem;
          border-collapse: collapse;
        }
        .education-table th,
        .education-table td {
          border: 1px solid #ccc;
          padding: 0.5rem;
          text-align: left;
        }
        .education-table th {
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
        <h2 className="my-2">Education Credentials</h2>
        <table className="education-table">
          <thead>
            <tr>
              <th>School</th>
              <th className="hide-sm">Degree</th>
              <th className="hide-sm">Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{educations}</tbody>
        </table>
      </Fragment>
    </>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
