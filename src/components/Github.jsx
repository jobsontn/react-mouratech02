import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Github() {
  const [repoList, SetRepoList] = useState([]);
  const url = 'https://api.github.com/users/jobsontn/repos';
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        // manipula o sucesso da requisição
        console.log(response);
        SetRepoList(response.data);
      })
      .catch((error) => {
        // manipula erros da requisição
        console.error(error);
      })
      .finally(() => {
        // sempre será executado
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
