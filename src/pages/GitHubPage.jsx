import React from 'react';
import Github from '../components/Github';
import Menu from '../components/Menu';

function GitHubPage() {
  return (
    <div className="bg-gray-400 h-screen w-screen">
      <Menu />
      <Github />
    </div>
  );
}

export default GitHubPage;
