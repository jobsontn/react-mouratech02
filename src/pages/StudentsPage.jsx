import React from 'react';
import Menu from '../components/Menu';
import TableData from '../components/TableData';

function StudentsPage() {
  return (
    <div className="bg-gray-400 h-screen w-screen">
      <Menu />
      <TableData />
    </div>
  );
}

export default StudentsPage;
