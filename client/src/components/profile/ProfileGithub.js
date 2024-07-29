import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getGithubRepos } from '../../actions/profile';

const ProfileGithub = ({ username }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const data = await getGithubRepos(username);
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          setRepos([]); // In case data is not an array, set repos to an empty array
        }
      } catch (error) {
        console.error('Failed to fetch GitHub repos', error);
        setRepos([]); // Set repos to an empty array on error
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <div style={styles.profileGithub}>
      <h2 style={styles.header}>GitHub Repos</h2>
      {repos.length > 0 ? (
        repos.map(repo => (
          <div key={repo.id} style={styles.repo}>
            <h3 style={styles.repoName}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h3>
            <p style={styles.repoDescription}>{repo.description}</p>
            <ul style={styles.repoDetails}>
              <li style={styles.repoDetailItem}>
                Stars: {repo.stargazers_count}
              </li>
              <li style={styles.repoDetailItem}>
                Watchers: {repo.watchers_count}
              </li>
              <li style={styles.repoDetailItem}>
                Forks: {repo.forks_count}
              </li>
            </ul>
          </div>
        ))
      ) : (
        <p>No repositories found</p>
      )}
    </div>
  );
};

const styles = {
  profileGithub: {
    marginTop: '2rem'
  },
  header: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333'
  },
  repo: {
    padding: '1rem',
    marginBottom: '1rem',
    background: '#f4f4f4',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  repoName: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '0.5rem'
  },
  repoDescription: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '0.5rem'
  },
  repoDetails: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.9rem'
  },
  repoDetailItem: {
    marginRight: '0.5rem',
    color: '#666'
  }
};

ProfileGithub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGithub;
