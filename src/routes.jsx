import React from 'react';
import CounterPage from './pages/CounterPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TimerPage from './pages/TimerPage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/counter', element: <CounterPage /> },
  { path: '/timer', element: <TimerPage /> },
];
export default routes;
