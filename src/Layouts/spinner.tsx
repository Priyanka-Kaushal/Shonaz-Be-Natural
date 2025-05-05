import React, { FC } from 'react';

const Spinner: FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="h-6 w-6 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div className="absolute top-0 left-0 h-6 w-6 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
      </div>
    </div>
  );
};

export default Spinner;

  