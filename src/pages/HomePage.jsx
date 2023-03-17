import React from 'react';
import Menu from '../components/Menu';

function HomePage() {
  return (
    <div className="bg-gray-400 h-screen w-screen">
      <Menu />
      {/* <FormProgress
        steps={['Render', 'Props', 'State', 'State lift', 'Componet function']}
        className="mt-4"
      /> */}
    </div>
  );
}

export default HomePage;
