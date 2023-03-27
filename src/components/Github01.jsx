import React, { useState, useEffect } from 'react';

function Github() {
  const [repoList, SetRepoList] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/jobsontn/repos')
      .then((response) => response.json())
      .then((data) => {
        SetRepoList(data);
      });
  }, []);

  return (
    <>
      <h1>Repositórios GitHub</h1>
      <ul>
        {repoList.map((repo) => {
          return (
            <li key={repo.full_name}>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Github;
