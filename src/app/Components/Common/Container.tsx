import React, { ReactNode } from 'react';

const Container = ({children}:{children:ReactNode}) => {
  return (
    <div  className='container mx-auto px-5 md:px-0'>
      {children}
    </div>
  );
};

export default Container;