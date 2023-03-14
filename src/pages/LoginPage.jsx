import React from 'react';
import Login from '../components/Login';
import Menu from '../components/Menu';

function LoginPage() {
  return (
    <div>
      <Menu />
      <div className='flex items-center justify-center'>
        <Login />
      </div>

    </div>
  );
}

export default LoginPage;
