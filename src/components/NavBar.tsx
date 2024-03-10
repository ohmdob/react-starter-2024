import React from 'react';

interface NavbarProps {
    headerTitle: string
}

const Navbar = ({headerTitle}: NavbarProps) => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-lg">{headerTitle}</a>
        <div>
          <a href="/" className="mr-4">Home</a>
          <a href="/form01">Form01</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;