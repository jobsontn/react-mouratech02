import React from 'react';
import FormProgress from '../components/FormProgress';
import Menu from '../components/Menu';

function FormPage() {
  return (
    <div className="bg-gray-400 h-screen w-screen flex flex-col">
      <Menu />
      <div className="grow flex flex-col items-center p-8">
        <FormProgress />
      </div>
    </div>
  );
}

export default FormPage;
