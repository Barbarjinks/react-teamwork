import React from 'react';

const RepoList = (props) => {
  const { repos } = props;
  console.log(repos);
  return (
    repos.map(repo => (
      <div>
        <h1 key={repo.name}>{repo.name}</h1>
        <h1 description={repo.description} >{repo.description}</h1>
        <h1 language={repo.language}>Language: {repo.language}</h1>
        <h1 forks={repo.forks}>Forks: {repo.forks}</h1>
        <h1 watchers={repo.watchers}>Watching: {repo.watchers}</h1>
      </div>
    ))
  )
};

export default RepoList;
