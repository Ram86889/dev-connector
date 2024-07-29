import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <>
      <style jsx>{`
        .dashboard-actions {
          display: flex;
         
          margin-bottom: 2rem;
        }
        .dashboard-actions .btn {
          display: inline-block;
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 5px;
          color: #fff;
          cursor: pointer;
          text-decoration: none;
          font-size: 1rem;
        }
        .btn-primary {
          background: #007bff;
        }
        .btn-light {
          background: #fff;
          color: #333;
          border: 1px solid #333;
        }
        .btn-primary:hover,
        .btn-light:hover {
          opacity: 0.8;
        }
      `}</style>
      <div className="dashboard-actions">
        <Link to="/edit-profile" className="btn btn-dark"><i class="fas fa-user-circle text-primary"/>Edit Profile</Link>
        <Link to="/add-experience" className="btn btn-dark"> <i class="fab fa-black-tie text-primary"/>Add Experience</Link>
        <Link to="/add-education" className="btn btn-dark"><i class="fas fa-graduation-cap text-primary"/>Add Education</Link>
      </div>
    </>
  );
};

export default DashboardActions;
