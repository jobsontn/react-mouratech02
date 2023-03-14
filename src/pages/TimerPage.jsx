import React from 'react';
import Menu from '../components/Menu';
import Timer from '../components/Timer';

function TimerPage() {
  return (
    <div className="bg-gray-400 h-screen w-screen">
      <Menu />
      <Timer start={0} />
    </div>
  );
}

export default TimerPage;
