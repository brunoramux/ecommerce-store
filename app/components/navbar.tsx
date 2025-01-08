import React from 'react';
import Container from './ui/container';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className='border-b'>
      <Container>
        <Link href="/" className='ml-4 flex lg:ml-0 gap-x-2'>
          <p>STORE</p>
        </Link>
      </Container>
    </div>
  );
};

export default Navbar;