import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header id="pageHeader">
      <h3 className='text-xm font-bold'>Welcome to My Podcast Platform</h3>
      <Link to="/"><h3 className='head3'>Home</h3></Link>
    </header>
  );
}

export default Header;